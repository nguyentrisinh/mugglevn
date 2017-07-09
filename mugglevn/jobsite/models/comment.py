from django.db import models


class CommentQuerySet(models.QuerySet):
    def get_comment_via_review(self, review):
        return self.filter(reply_review=review)

    def get_comment_via_review_id(self, review_id):
        return self.filter(reply_review_id=review_id)

    def get_user_comments(self, user):
        return self.filter(author=user)


class CommentManager(models.Manager):
    def get_queryset(self):
        return CommentQuerySet(self.model, using=self._db)

    def get_comment_via_review(self, review):
        comments = self.get_queryset().get_comment_via_review(review=review)
        if comments.exists():
            return comments
        return None

    def get_comment_via_review_id(self, review_id):
        comments = self.get_queryset().get_comment_via_review_id(review_id=review_id)
        if comments.exists():
            return comments
        return None

    def get_user_comments(self, user):
        comments = self.get_queryset().get_user_comments(user=user)
        if comments.exists():
            return comments
        return None


class Comment(models.Model):
    objects = CommentManager()
    author = models.ForeignKey('core.User', null=False, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, editable=False)
    content = models.TextField()
    reply_review = models.ForeignKey('jobsite.Review', null=False, on_delete=models.CASCADE)

    def __unicode__(self):
        return unicode(self.content[:10]) + u' at ' + unicode(self.created_at)
