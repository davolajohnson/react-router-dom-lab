import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MailboxForm({ addBox }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: 'Small',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // _id will be assigned in App.addBox
    addBox(formData)
    navigate('/mailboxes') // redirect after submit
  }

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Box Owner:
          <input
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
            placeholder="Owner name"
            required
          />
        </label>

        <label>
          Box Size:
          <select
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>

        <button type="submit">Create Mailbox</button>
      </form>
    </main>
  )
}
