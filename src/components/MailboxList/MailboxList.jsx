import { Link } from 'react-router-dom'
import './MailboxList.css'

export default function MailboxList({ mailboxes }) {
  return (
    <main>
      <h2>Mailboxes</h2>

      {mailboxes.length === 0 ? (
        <p>No mailboxes yet. Create one on the “New Mailbox” page.</p>
      ) : (
        <section className="mail-grid">
          {mailboxes.map(box => (
            <Link
              key={box._id}
              to={`/mailboxes/${box._id}`}
              className="mail-box"
              title={`Mailbox ${box._id}`}
            >
              <span className="box-id">#{box._id}</span>
            </Link>
          ))}
        </section>
      )}
    </main>
  )
}
