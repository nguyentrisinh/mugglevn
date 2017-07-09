import json

from django.db import models


class JobBenefit(models.Model):
    job = models.ForeignKey('jobsite.Job', on_delete=models.CASCADE)
    benefit = models.ForeignKey('jobsite.Benefit', on_delete=models.CASCADE)
    description = models.TextField(max_length=255, blank=True, default=None)
