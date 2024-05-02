import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/notes/')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
