from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class User(models.Model):
    firstName =         models.CharField(max_length=200, null=True)
    lastName =          models.CharField(max_length=200, null=True)
    age =               models.IntegerField(null=True, validators=[MaxValueValidator(65), MinValueValidator(18)])
    number =            models.CharField(primary_key = True, max_length=10)
    address =           models.CharField(max_length=1000, null=True)
    lastPaid =          models.IntegerField(null=True, validators=[MaxValueValidator(11), MinValueValidator(0)])
    batch =             models.IntegerField(null=True, validators=[MaxValueValidator(4), MinValueValidator(1)])