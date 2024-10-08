# Generated by Django 5.0.7 on 2024-09-01 19:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0012_alter_product_seller'),
        ('profiles', '0004_alter_customer_email_alter_customer_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='seller',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='profiles.customer'),
        ),
    ]
