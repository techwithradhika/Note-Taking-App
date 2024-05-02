import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NoteDetail = () => {
  const [note, setNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editSuccess, setEditSuccess] = useState(false); // State for edit success message
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State for delete success message
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/notes/${id}/`)
      .then(response => {
        setNote(response.data);
        setEditedTitle(response.data.title);
        setEditedContent(response.data.content);
      })
      .catch(error => {
        console.error('Error fetching note:', error);
      });
  }, [id]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedTitle(note.title);
    setEditedContent(note.content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/notes/${id}/`, {
        title: editedTitle,
        content: editedContent
      });
      setEditSuccess(true); // Set edit success message
      axios.get(`http://localhost:8000/api/notes/${id}/`)
        .then(response => {
          setNote(response.data);
          setEditMode(false);
        })
        .catch(error => {
          console.error('Error fetching note:', error);
        });
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}/`);
      setDeleteSuccess(true); // Set delete success message
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      {note ? (
        <div>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="editedTitle">Title: </label>
                <input
                  type="text"
                  id="editedTitle"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="editedContent">Content: </label>
                <textarea
                  id="editedContent"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelEdit}>Cancel</button>
                <button type="button" onClick={handleDelete}>Delete</button> {/* Delete button */}
              </div>
            </form>
          ) : (
            <div>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
          {editSuccess && <p>Note edited successfully!</p>} {/* Edit success message */}
          {deleteSuccess && <p>Note deleted successfully!</p>} {/* Delete success message */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteDetail;
