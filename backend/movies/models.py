from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    rating = models.FloatField(default=0.0)
    description = models.TextField()
    poster = models.URLField()
    trailer_url = models.URLField(null=False, blank=True)

    def __str__(self) -> str:
        return self.title