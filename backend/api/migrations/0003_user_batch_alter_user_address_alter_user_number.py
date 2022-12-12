# Generated by Django 4.1.4 on 2022-12-12 11:12

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_user_month_batches_user_lastpaid_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='batch',
            field=models.IntegerField(null=True, validators=[django.core.validators.MaxValueValidator(4), django.core.validators.MinValueValidator(1)]),
        ),
        migrations.AlterField(
            model_name='user',
            name='address',
            field=models.CharField(max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='number',
            field=models.CharField(max_length=10, primary_key=True, serialize=False),
        ),
    ]
