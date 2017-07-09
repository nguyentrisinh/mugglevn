from django.contrib import admin

from base import BaseAdmin
from jobsite.models import JobSkill, JobBenefit


class JobBenefitInline(admin.TabularInline):
    model = JobBenefit
    extra = 0


class JobSkillInline(admin.TabularInline):
    model = JobSkill
    extra = 0


class JobAdmin(BaseAdmin):
    list_display = ('id', '__unicode__', 'company_name', 'created_by')
    inlines = (JobSkillInline, JobBenefitInline)
