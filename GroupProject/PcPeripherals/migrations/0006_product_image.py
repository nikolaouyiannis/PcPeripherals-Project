# Generated by Django 3.2.7 on 2021-09-23 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PcPeripherals', '0005_alter_customer_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
