import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotesList from './NotesList';
import NoteDetail from './NoteDetail';
import CreateNote from './CreateNote';

const App = () => {
  const [createSuccess, setCreateSuccess] = useState(false);

  const handleCreateSuccess = () => {
    setCreateSuccess(true);
    setTimeout(() => {
      setCreateSuccess(false);
    }, 3000);
  };

  return (
    <Router>
      <div>
        <header style={{ marginBottom: '20px' }}>
          <h1>Operations</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button>
              <Link to="/create">Create New Note</Link>
            </button>
            <button>
              <Link to="/">List of Notes</Link>
            </button>
          </div>
        </header>
        {createSuccess && <p>Note created successfully!</p>}
        <main>
          <Routes>
            <Route exact path="/" element={<NotesList />} />
            <Route exact path="/notes/:id" element={<NoteDetail />} />
            <Route exact path="/create" element={<CreateNote onCreateSuccess={handleCreateSuccess} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
