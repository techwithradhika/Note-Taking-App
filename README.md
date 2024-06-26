# Note Taking App

This is a simple Note Taking App built with React.js and Django. It allows users to create, view, edit, and delete notes.

# Prerequisites

- Visual Studio Code.
- Python and pip installed.
- Node.js and npm installed.
- PostgreSQL database installed.

## Features

- **Create New Note:** Users can create new notes by providing a title and content for the note.
- **Notes list:** list of notes showing titles.
- **View Note:** Users can view the details of a note, including its title and content by clicking on a note title.
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
2. Navigate to the backend project directory: cd notes_project
3. Install virtual environment (recommended): pip install virtualenv
4. Create a virtual environment: python -m virtualenv venv.
5. Activate the virtual environment: .\venv\Scripts\activate
6. Install Django and other backend dependencies: pip install -r requirements.txt
7. Update the database settings in notes_project/settings.py:
   - DATABASES = {
   -    'default': {
    -    'ENGINE': 'django.db.backends.postgresql',
    -        'NAME': 'notes',        # Replace "notes" with your Databasee name or create a database with the same name.
    -        'USER': 'postgres',     # Replace "postgres" with your Database username.
    -        'PASSWORD': 'abc123',     # Replace "abc123" with your Database password.
    -        'HOST': 'localhost',    # Replace "localhost" with your Database host.
    -        'PORT': '5432',     # Replace "5432" with your Database port.
    -    }}
8. Apply migrations to create database tables:
   - python manage.py makemigrations
   - python manage.py migrate
9. Run the Django server: python manage.py runserver
10. Open another terminal and navigate to the frontend directory: cd notes-frontend
11. Install dependencies: npm install
12. Run the frontend: npm start
13. Access the application in your browser at http://localhost:3000/.
