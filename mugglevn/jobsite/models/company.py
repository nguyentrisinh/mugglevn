from django.core.exceptions import ValidationError
from django.db import models
from django.utils.text import slugify

from core.constants import district, company_type


class CompanyQuerySet(models.QuerySet):
    def get_company_via_slug(self, slug):
        return self.filter(slug=slug)

    def get_company_list(self, from_limit, to_limit):
        return self.all().order_by('-job_count')[from_limit:to_limit]

    def get_all_companies(self):
        return self.all().order_by('-job_count')


class CompanyManager(models.Manager):
    def get_queryset(self):
        return CompanyQuerySet(self.model, using=self._db)

    def get_company_via_slug(self, slug):
        company = self.get_queryset().get_company_via_slug(slug=slug)
        if company.exists():
            return company.get()
        return None

    def get_company_list(self, from_limit=0, to_limit=6):
        if from_limit > to_limit:
            return None
        companies = self.get_queryset().get_company_list(from_limit=from_limit, to_limit=to_limit)
        if companies.exists():
            return companies
        return None

    def get_all_companies(self):
        return self.get_queryset().get_all_companies()


class Company(models.Model):
    objects = CompanyManager()

    name = models.CharField(max_length=255)
    slug = models.SlugField(default=None, unique=True)
    logo = models.ImageField(upload_to='logo/', null=True, blank=True)
    website = models.URLField(max_length=511)
    type = models.PositiveSmallIntegerField(choices=company_type.TYPE_CHOICES, default=company_type.PRODUCT)
    size = models.IntegerField(null=True)
    district = models.PositiveSmallIntegerField(choices=district.DISTRICT_IN_HCM_CHOICES, default=district.DISTRICT_1)
    rating = models.PositiveSmallIntegerField(null=False, default=35, blank=True)
    bio = models.TextField(default='', blank=True)
    overview = models.TextField(default='', blank=True)
    email = models.EmailField()
    address = models.CharField(default='', max_length=512, blank=True)
    google_map = models.CharField(default='', max_length=512, blank=True)
    job_count = models.IntegerField(default=0, editable=False)
    review_count = models.IntegerField(default=0, editable=False)

    def __unicode__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        if not self.id:  # create new Post
            if Company.objects.get_company_via_slug(slug=self.slug):
                raise ValidationError('This slug is existed')

        super(Company, self).save()

    def get_latest_jobs(self):
        return self.job_set.all().order_by('-created_at')


class SuggestedCompany(models.Model):
    name = models.CharField(max_length=255)
    website = models.URLField(max_length=511)
    type = models.PositiveSmallIntegerField(choices=company_type.TYPE_CHOICES, default=company_type.PRODUCT)
    overview = models.TextField()
    email = models.EmailField()
    address = models.CharField(max_length=512)
