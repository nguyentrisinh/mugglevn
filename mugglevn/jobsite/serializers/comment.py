from rest_framework import serializers

from jobsite.models import Review, Comment


class CommentSerializer(serializers.ModelSerializer):
    reply_review = serializers.IntegerField()

    class Meta:
        model = Comment
        fields = ('content', 'reply_review')

    def validate_reply_review(self, value):
        review = Review.objects.get_review_by_id(id=value)
        if not review:
            raise serializers.ValidationError('Review not found')
        return review


class CommentListSerializer(serializers.ModelSerializer):
    reply_review_title = serializers.ReadOnlyField(source='reply_review.title')
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Comment
        fields = '__all__'
