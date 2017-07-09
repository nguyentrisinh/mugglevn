from django.db import models

from core.constants import star_rating


class ReviewQuerySet(models.QuerySet):
    def get_reviews_for_company(self, company):
        return self.filter(company=company)

    def get_review_by_user_and_company(self, company, user):
        return self.filter(company=company, author=user)

    def get_user_reviews(self, user):
        return self.filter(author=user)

    def get_review_by_id(self, id):
        return self.filter(id=id)

    def get_all_reviews(self):
        return self.all().order_by('-created_at')


class ReviewManager(models.Manager):
    def get_queryset(self):
        return ReviewQuerySet(self.model, using=self._db)

    def get_reviews_for_company(self, company):
        reviews = self.get_queryset().get_reviews_for_company(company=company)
        if reviews.exists():
            return reviews
        return None

    def get_review_exists(self, company, user):
        review = self.get_queryset().get_review_by_user_and_company(company=company, user=user)
        if review.exists():
            return review.get()
        return None

    def check_review_exists(self, company, user):
        review = self.get_queryset().get_review_by_user_and_company(company=company, user=user)
        return review.exists()

    def get_user_reviews(self, user):
        reviews = self.get_queryset().get_user_reviews(user=user)
        if reviews.exists():
            return reviews
        return None

    def get_review_by_id(self, id):
        review = self.get_queryset().get_review_by_id(id=id)
        if review.exists():
            return review.get()
        return None

    def get_all_reviews(self):
        reviews = self.get_queryset().get_all_reviews()
        if reviews.exists():
            return reviews
        return None


class Review(models.Model):
    objects = ReviewManager()

    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, editable=False)
    author = models.ForeignKey('core.User', on_delete=models.CASCADE)
    company = models.ForeignKey('jobsite.Company', on_delete=models.CASCADE)
    what_user_like = models.TextField()
    what_user_dislike = models.TextField()
    rating = models.PositiveSmallIntegerField(choices=star_rating.STAR_RATING_CHOICES, default=star_rating.THREE_STAR)
    _liked_users = models.TextField(default='[]', blank=True)
    _disliked_users = models.TextField(default='[]', blank=True)

    class Meta:
        unique_together = (("author", "company"),)

    def __unicode__(self):
        return unicode(self.rating) + u' - ' + unicode(self.title)


from django.db.models import signals


def increment_review_count(sender, instance, created, raw, **kwargs):
    if created:
        instance.company.review_count += 1
        new_rating = instance.rating * 10
        company_rating = instance.company.rating
        company_review_count = instance.company.review_count
        new_rating = (company_rating * company_review_count + new_rating) * 1.0 / (company_review_count + 1)
        instance.company.rating = int(round(new_rating))
        instance.company.save()


def decrement_review_count(sender, instance, **kwargs):
    delete_rating = instance.rating * 10
    company_rating = instance.company.rating
    company_review_count = instance.company.review_count
    if company_review_count == 1:
        new_rating = 35
    else:
        new_rating = (company_rating * company_review_count - delete_rating) * 1.0 / (company_review_count - 1)
    instance.company.rating = int(round(new_rating))
    instance.company.review_count -= 1
    instance.company.save()

signals.post_save.connect(increment_review_count, sender=Review)
signals.post_delete.connect(decrement_review_count, sender=Review)
