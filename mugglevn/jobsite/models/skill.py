import json

from django.db import models


class SkillQuerySet(models.QuerySet):
    pass


class SkillManager(models.Manager):
    def get_queryset(self):
        return SkillQuerySet(self.model, using=self._db)

    def get_all_skills(self):
        return self.get_queryset().all()


class Skill(models.Model):
    objects = SkillManager()

    name = models.CharField(max_length=255)
    info = models.TextField(default=None, blank=True)

    def __unicode__(self):
        return self.name


from django.db.models import signals


def skill_update(sender, instance, created, raw, **kwargs):
    if not created:
        for j in instance.skills.all():
            j.save()


signals.post_save.connect(skill_update, sender=Skill)
