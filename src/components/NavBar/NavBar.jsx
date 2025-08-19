import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/mailboxes">Mailboxes</Link>
      <Link to="/new-mailbox">New Mailbox</Link>
      <Link to="/new-letter">New Letter</Link>
    </nav>
  )
}
