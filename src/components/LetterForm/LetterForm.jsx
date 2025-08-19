import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LetterForm({ mailboxes, addLetter }) {
  const navigate = useNavigate()

  // Default mailboxId to first box if any, otherwise ''
  const defaultMailboxId = mailboxes.length ? mailboxes[0]._id : ''
  const [formData, setFormData] = useState({
    mailboxId: defaultMailboxId,
    recipient: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Ensure mailboxId is a number
    const payload = {
      mailboxId: Number(formData.mailboxId),
      recipient: formData.recipient.trim(),
      message: formData.message.trim(),
    }
    addLetter(payload)
    // Redirect to that mailbox's details page
    navigate(`/mailboxes/${payload.mailboxId}`)
  }

  return (
    <main>
      <h2>New Letter</h2>

      {mailboxes.length === 0 ? (
        <p>
          You don’t have any mailboxes yet. Create one on the{' '}
          <a href="/new-mailbox">New Mailbox</a> page.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Send to Mailbox (Box #):
            <select
              name="mailboxId"
              value={formData.mailboxId}
              onChange={handleChange}
              required
            >
              {mailboxes.map(m => (
                <option key={m._id} value={m._id}>
                  #{m._id} — {m.boxOwner} ({m.boxSize})
                </option>
              ))}
            </select>
          </label>

          <label>
            Recipient:
            <input
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              placeholder="Recipient name"
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
            />
          </label>

          <button type="submit">Send Letter</button>
        </form>
      )}
    </main>
  )
}
