# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from base import BaseAdmin
from jobsite.models import Job, Company, Review, Profile, Skill, Benefit
from .job import JobAdmin

admin.site.register(Job, JobAdmin)

admin.site.register(Skill, BaseAdmin)
admin.site.register(Benefit, BaseAdmin)
admin.site.register(Company, BaseAdmin)
admin.site.register(Review, BaseAdmin)
admin.site.register(Profile, BaseAdmin)

admin.sites.AdminSite.site_header = u"muggle.vn administration"
admin.sites.AdminSite.site_title = u"muggle.vn site admin"
admin.sites.AdminSite.index_title = u"muggle.vn - sharing IT internship opportunities"