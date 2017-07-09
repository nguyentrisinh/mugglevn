from django.db import models
from core.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    is_female = models.BooleanField(default=False, blank=True)
    first_name = models.CharField(max_length=30, null=False, blank=True)
    last_name = models.CharField(max_length=30, null=False, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    email = models.EmailField(null=True, default=None, blank=True)
    university_name = models.CharField(max_length=120, blank=True)
    major_name = models.CharField(max_length=120, blank=True)
    faculty_name = models.CharField(max_length=120, blank=True)
    address = models.CharField(max_length=254, blank=True)

    def __unicode__(self):
        return self.user.username


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, created, **kwargs):
    if instance.role == 'student':
        if created:
            Profile.objects.create(user=instance)
            Profile.objects.create(first_name=instance.first_name)
            Profile.objects.create(last_name=instance.last_name)
            Profile.objects.create(is_female=instance.is_female)
            Profile.objects.create(email=instance.email)
            Profile.objects.create(birth_date=instance.birth_date)
            Profile.objects.create(bio=instance.bio)
        else:
            instance.profile.save()
