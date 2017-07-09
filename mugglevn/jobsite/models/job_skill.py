import json

from django.db import models


class JobSkill(models.Model):
    job = models.ForeignKey('jobsite.Job', on_delete=models.CASCADE)
    skill = models.ForeignKey('jobsite.Skill', on_delete=models.CASCADE)
    description = models.TextField(max_length=255, blank=True, default=None)
