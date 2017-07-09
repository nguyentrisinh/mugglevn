import re
from datetime import timedelta

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.utils import timezone
from oauth2_provider.models import AccessToken, RefreshToken
from oauth2_provider.settings import oauth2_settings
from oauthlib.common import generate_token

SKILL_DICTIONARY = (
    ('c++', 'c plus plus'),
    ('c#', 'c sharp')
)


def convert_int_or_set_default(num, default):
    try:
        return int(num)
    except:
        return default


def get_data_and_next_page(data, num, page):
    paginator = Paginator(data, num)
    num_pages = paginator.num_pages
    try:
        data = paginator.page(page)
    except PageNotAnInteger:
        page = 1
        data = paginator.page(page)
    except EmptyPage:
        page = num_pages
        data = paginator.page(page)
    if page + 1 <= num_pages:
        next_page = page + 1
    else:
        next_page = None
    return data, next_page


def translate_raw_match_string(raw_match_string):
    raw_match_string = raw_match_string.lower()
    for skill in SKILL_DICTIONARY:
        raw_match_string = raw_match_string.replace(skill[0], skill[1])
    return re.sub('[^a-z0-9 .]', '', raw_match_string)


def get_token(user, application):
    access_tokens = AccessToken.objects.filter(user=user, application=application)
    if access_tokens.exists():
        access_token = access_tokens[0]
        return {
            'access_token': access_token.token,
            'expires': access_token.expires,
            'refresh_token': access_token.refresh_token.token,
            'is_expired': access_token.is_expired()
        }

    expires = timezone.now() + timedelta(seconds=oauth2_settings.ACCESS_TOKEN_EXPIRE_SECONDS)
    access_token = AccessToken(user=user,
                               scope=oauth2_settings.DEFAULT_SCOPES,
                               expires=expires,
                               token=generate_token(),
                               application=application)
    access_token.save()
    refresh_token = RefreshToken(user=user,
                                 token=generate_token(),
                                 application=application,
                                 access_token=access_token)
    refresh_token.save()
    return {
        'access_token': access_token.token,
        'expires': expires,
        'refresh_token': refresh_token.token,
        'is_expired': False
    }
