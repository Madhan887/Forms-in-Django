from unittest.util import _MAX_LENGTH
from django.db import models
from django.forms import IntegerField

# Create your models here.
class Register(models.Model):
    First_Name=models.CharField(max_length=12)
    Last_Name=models.CharField(max_length=12)
    User_Name=models.CharField(max_length=12)
    Mobile_Number=models.IntegerField()
    Email=models.EmailField()
    Password=models.CharField(max_length=8)
