import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Note from './Note.jsx'
import notes from "../notes.js"

function createNote(note) {
  return (
    <Note
      key={note.id}
      title={note.title}
      content={note.content}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => {
        return (
          <Note
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  )

}

export default App
