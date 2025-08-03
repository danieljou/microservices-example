from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid
class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    is_verified = models.BooleanField(default=False)


    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username
