# Generated by Django 5.2 on 2025-05-21 18:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("slack", "0009_rename_channel_conversation_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="workspace",
            name="total_members_count",
            field=models.PositiveIntegerField(default=0),
        ),
    ]
