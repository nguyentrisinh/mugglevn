import json

from django.db import models


class BenefitQuerySet(models.QuerySet):
    pass


class BenefitManager(models.Manager):
    def get_queryset(self):
        return BenefitQuerySet(self.model, using=self._db)

    def get_all_benefit_list(self):
        return self.get_queryset().all()


class Benefit(models.Model):
    objects = BenefitManager()

    name = models.CharField(max_length=255)

    def __unicode__(self):
        return self.name
