from django.urls import path
from .views import NoteListCreateAPIView, NoteRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('api/notes/', NoteListCreateAPIView.as_view(), name='note-list-create'),
    path('api/notes/<int:pk>/', NoteRetrieveUpdateDestroyAPIView.as_view(), name='note-detail'),
]
