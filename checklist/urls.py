from django.urls import path
from . import views
from Mission_Book import settings
from django.conf.urls.static import static

app_name = 'checklist'

urlpatterns = [
    path('',views.index_null, name='index_null'),
    path('index/<int:category>',views.index, name='index'),
    path('missionDetail/<int:mission_id>',views.mission_modal, name='mission_modal')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
