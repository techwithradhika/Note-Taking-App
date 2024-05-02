# Note Taking App

This is a simple Note Taking App built with React.js and Django. It allows users to create, view, edit, and delete notes.

# Prerequisites

Visual Studio Code.
Python and pip installed.
Node.js and npm installed.
PostgreSQL database installed.

## Features

- **Create New Note:** Users can create new notes by providing a title and content for the note.
- **View Note:** Users can view the details of a note, including its title and content.
- **Edit Note:** Users can edit the title and content of a note.
- **Delete Note:** Users can delete a note.
- **Success Messages:** Success messages are displayed when a note is created, edited, or deleted.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Django
- **Routing:** React Router
- **HTTP Requests:** Axios

## Installation

To run this application locally, follow these steps:

1. Clone the repository: git clone https://github.com/techwithradhika/Note-Taking-App.git
2. Navigate to the project directory: cd notes-backend
3. Create a virtual environment (recommended): python3 -m venv venv
4. Activate the virtual environment: source venv/bin/activate
5. Install Django and other backend dependencies: pip install -r requirements.txt
6. Update the database settings in notes_project/settings.py:
   - DATABASES = {
   -    'default': {
    -    'ENGINE': 'django.db.backends.postgresql',
    -        'NAME': 'notes',  
    -        'USER': 'postgres',     # With your Database username
    -        'PASSWORD': '1234',     # With your Database password
    -        'HOST': 'localhost',    # With your Database host
    -        'PORT': '5432',     # With your Database part
    -    }}
7. Apply migrations to create database tables:
   - python manage.py makemigrations
   - python manage.py migrate
8. Run the Django server: python manage.py runserver
9. Open another terminal and navigate to the backend directory: cd notes-frontend
10. Install dependencies: npm install
11. Run the frontend: npm start and Access the application in your browser at http://localhost:3000/.
