from django.conf.urls import url
from django.contrib.auth.views import logout

from jobsite import views

urlpatterns = [
    # User API
    url(r'^user/$', views.UserAPIView.as_view(), name='jobsite_user'),
    # Company API
    url(r'^i/(?P<company_slug>[\w]+)', views.CompanyAPIView.as_view(), name='jobsite_company_detail'),
    url(r'^i/$', views.CompanyListAPIView.as_view(), name='jobsite_company_list'),
    # Job API
    url(r'^j/(?P<job_id>[\w]+)$', views.JobAPIView.as_view(), name='jobsite_job_detail'),
    url(r'^j/$', views.JobListAPIView.as_view(), name='jobsite_job_list'),
    # Job Search API
    url(r'^s/$', views.JobSearchAPIView.as_view(), name='jobsite_job_search'),
    # Review API
    url(r'^r/(?P<company_slug>[\w]+)$', views.ReviewAPIView.as_view(), name='jobsite_review_company'),
    url(r'^r/$', views.ReviewAPIView.as_view(), name='jobsite_review_list'),
    # Reaction API
    url(r'^react/$', views.ReactionAPIView.as_view(), name='jobsite_reaction'),
    # Comment API
    url(r'^c/(?P<review_id>[\w]+)$', views.CommentAPIView.as_view(), name='jobsite_comment_review'),
    # User API
    url(r'^me/r$', views.UserReviewAPIView.as_view(), name='jobsite_profile_review'),
    url(r'^me/c$', views.UserCommentAPIView.as_view(), name='jobsite_profile_comment'),
    # List API
    url(r'^skills/$', views.SkillListAPIView.as_view(), name='jobsite_skill_list'),
    url(r'^benefits/$', views.BenefitListAPIView.as_view(), name='jobsite_skill_list'),
    url(r'^districts/$', views.DistrictListAPIView.as_view(), name='jobsite_district_list'),
    url(r'^logout/$', logout),
]
