import json

from django.db import models

from core.constants import district, company_type


class JobQuerySet(models.QuerySet):
    def get_job_via_id(self, id):
        return self.filter(id=id)

    def get_job_list(self, from_limit, to_limit):
        return self.all().order_by('-created_at')[from_limit:to_limit]

    def get_job_list_via_company(self, company, num):
        return self.filter(company=company).order_by('-created_at')[:num]

    def get_all_jobs(self):
        return self.all().order_by('-created_at')


class JobManager(models.Manager):
    def get_queryset(self):
        return JobQuerySet(self.model, using=self._db)

    def get_job_via_id(self, id):
        try:
            id = int(id)
            job = self.get_queryset().get_job_via_id(id)
            if job.exists():
                return job.get()
            return None
        except:
            return None

    def get_job_list(self, from_limit=0, to_limit=6):
        if from_limit > to_limit:
            return None
        jobs = self.get_queryset().get_job_list(from_limit=from_limit, to_limit=to_limit)
        if jobs.exists():
            return jobs
        return None

    def get_job_list_via_company(self, company, num):
        jobs = self.get_queryset().get_job_list_via_company(company=company, num=num)
        if jobs.exists():
            return jobs
        return None

    def get_all_jobs(self):
        return self.get_queryset().get_all_jobs()

    def search(self, match_string):
        raw_query = "SELECT * FROM mugglevn.jobsite_job where match(name, company_name, _skills, _benefits) against(%s in boolean mode);"
        jobs = []
        for job in self.raw(raw_query, [match_string]):
            jobs.append(job)
        return jobs


class Job(models.Model):
    objects = JobManager()

    name = models.CharField(max_length=255)
    created_by = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    expired_at = models.DateTimeField()
    is_full_time = models.BooleanField(default=False, blank=True)
    company = models.ForeignKey('jobsite.Company', on_delete=models.CASCADE)
    company_address = models.TextField(default='', blank=True, editable=False)
    company_district = models.PositiveSmallIntegerField(
        choices=district.DISTRICT_IN_HCM_CHOICES,
        default=district.DISTRICT_1,
        editable=False)
    company_name = models.CharField(max_length=255, blank=True, editable=False)
    company_slug = models.SlugField(default=None, editable=False)
    company_type = models.PositiveSmallIntegerField(
        choices=company_type.TYPE_CHOICES,
        default=company_type.OUTSOURCE,
        editable=False)
    company_logo = models.ImageField(default=None, null=True, editable=False)
    company_size = models.IntegerField(null=True, editable=False)
    company_apply_link = models.URLField(max_length=511, null=True, blank=True)
    how_to_apply = models.TextField(default='', blank=True)
    description = models.TextField(default='', blank=True)
    skills = models.ManyToManyField(
        'jobsite.Skill',
        related_name='skills',
        through='jobsite.JobSkill',
        through_fields=('job', 'skill'),
        blank=True, default=None)
    benefits = models.ManyToManyField(
        'jobsite.Benefit',
        through='jobsite.JobBenefit',
        through_fields=('job', 'benefit'),
        blank=True, default=None)

    _skills = models.TextField(default='[]', blank=True, editable=False)
    _benefits = models.TextField(default='[]', blank=True, editable=False)

    def __unicode__(self):
        return self.name

    def __init__(self, *args, **kwargs):
        super(Job, self).__init__(*args, **kwargs)
        if self.id:
            self.__original_company = self.company
        else:
            self.__original_company = None

    def save(self, *args, **kwargs):
        if self._Job__original_company:
            if self._Job__original_company != self.company:
                self._Job__original_company.job_count -= 1
                self._Job__original_company.save()
                self.company.job_count += 1
                self.company.save()
        self.company_address = self.company.address
        self.company_district = self.company.district
        self.company_name = self.company.name
        self.company_slug = self.company.slug
        self.company_type = self.company.type
        self.company_size = self.company.size
        self.company_logo = self.company.logo
        if not self._Job__original_company:
            super(Job, self).save()
        _skills = []
        for job_skill in self.jobskill_set.all():
            _skills.append({
                'id': job_skill.skill.id,
                'name': job_skill.skill.name,
                'description': job_skill.description,
            })
        self._skills = json.dumps(_skills, ensure_ascii=False).encode('utf8')
        _benefits = []
        for job_benefit in self.jobbenefit_set.all():
            _benefits.append({
                'id': job_benefit.benefit.id,
                'name': job_benefit.benefit.name,
                'description': job_benefit.description,
            })
        self._benefits = json.dumps(_benefits, ensure_ascii=False).encode('utf8')
        super(Job, self).save()


from django.db.models import signals


def increment_job_count(sender, instance, created, raw, **kwargs):
    if created:
        instance.company.job_count += 1
        instance.company.save()


def decrement_job_count(sender, instance, **kwargs):
    instance.company.job_count -= 1
    instance.company.save()


signals.post_save.connect(increment_job_count, sender=Job)
signals.post_delete.connect(decrement_job_count, sender=Job)


class SuggestedJob(models.Model):
    name = models.CharField(max_length=255)
    company_id = models.IntegerField(default=None, null=True, blank=True)
    company_name = models.CharField(max_length=255)
    expired_at = models.DateTimeField()
    is_full_time = models.BooleanField()
    company_apply_link = models.URLField(max_length=511)
    description = models.TextField()
