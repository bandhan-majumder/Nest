# Generated by Django 5.2 on 2025-05-12 21:51

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("slack", "0008_channel_is_channel_channel_is_group_channel_is_im_and_more"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Channel",
            new_name="Conversation",
        ),
        migrations.AlterModelOptions(
            name="conversation",
            options={"verbose_name_plural": "Conversations"},
        ),
        migrations.AlterModelTable(
            name="conversation",
            table="slack_conversations",
        ),
    ]
