import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import LetterForm from './components/LetterForm/LetterForm.jsx'

export default function App() {
  const [mailboxes, setMailboxes] = useState([
    // { _id: 1, boxOwner: 'Alex', boxSize: 'Small' },
    // { _id: 2, boxOwner: 'Riley', boxSize: 'Medium' },
  ])

  // Existing from previous level:
  function addBox(formData) {
    const nextId = mailboxes.length + 1
    const newBox = { _id: nextId, ...formData }
    setMailboxes(prev => [...prev, newBox])
  }

  // NEW: letters state
  const [letters, setLetters] = useState([]) // [{ mailboxId, recipient, message }]

  // NEW: addLetter(formData) → push into letters
  function addLetter(formData) {
    // formData shape: { mailboxId: number, recipient: string, message: string }
    setLetters(prev => [...prev, formData])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        {/* NEW route for New Letter */}
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
      </Routes>
    </>
  )
}
