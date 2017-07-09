from django.contrib import admin


class BaseAdmin(admin.ModelAdmin):
    list_display = ('id', '__unicode__')
    list_display_links = ('__unicode__',)
    ordering = ['-id']
