import { useParams, Link } from 'react-router-dom'

export default function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams()
  const idNum = Number(mailboxId)

  const selectedBox = mailboxes.find(m => m._id === idNum)
  if (!selectedBox) {
    return (
      <main>
        <h2>Mailbox Not Found!</h2>
        <p>
          We couldn’t find mailbox #{mailboxId}. Go back to{' '}
          <Link to="/mailboxes">Mailboxes</Link>.
        </p>
      </main>
    )
  }

  // Filter letters for this mailbox
  const selectedLetters = letters.filter(letter => letter.mailboxId === idNum)

  return (
    <main>
      <h2>Mailbox Details</h2>
      <ul>
        <li><strong>Box Number:</strong> {selectedBox._id}</li>
        <li><strong>Owner:</strong> {selectedBox.boxOwner}</li>
        <li><strong>Size:</strong> {selectedBox.boxSize}</li>
      </ul>

      <h3>Letters</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters yet. <Link to="/new-letter">Send one</Link>.</p>
      ) : (
        <ul>
          {selectedLetters.map((l, idx) => (
            <li key={idx}>
              <p><strong>To:</strong> {l.recipient}</p>
              <p>{l.message}</p>
            </li>
          ))}
        </ul>
      )}

      <p style={{ marginTop: '1rem' }}>
        <Link to="/mailboxes">← Back to Mailboxes</Link>
      </p>
    </main>
  )
}
