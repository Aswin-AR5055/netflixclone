from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    poster = models.URLField()

    def __str__(self) -> str:
        return self.title