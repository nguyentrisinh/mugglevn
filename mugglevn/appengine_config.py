from google.appengine.ext import vendor

vendor.add('lib')

import tempfile
tempfile.SpooledTemporaryFile = tempfile.TemporaryFile

# [START imports]
import requests
import requests_toolbelt.adapters.appengine

# Use the App Engine Requests adapter. This makes sure that Requests uses
# URLFetch.
requests_toolbelt.adapters.appengine.monkeypatch(validate_certificate=True)
# [END imports]