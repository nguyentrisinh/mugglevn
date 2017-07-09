from django.db import models
from django.contrib.auth.models import AbstractUser
from core.constants import role


class User(AbstractUser):
    role = models.PositiveSmallIntegerField(null=False, choices=role.ROLE_CHOICES, default=role.ROLE_STUDENT)

    def __unicode__(self):
        return self.username

    def save(self, *args, **kwargs):
        if self.is_superuser:
            self.role = role.ROLE_ADMIN
        super(AbstractUser, self).save(*args, **kwargs)
