import '../styles/Navbar.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext} from '../hooks/useAuthContext'
import { Button } from 'react-bootstrap'


// Navbar.js
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handleClick = () => {
      logout()
    }

    return (
        <nav className="navigation">
          <a href="/" className="logo-section">
              <i className="fa-solid fa-rocket fa-3x logo me-3"></i>
              <div className="job-tracker-title">JOB·portunity</div>
          </a>
          <div
              className={
                  isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }
          ></div>
          <div className="navigation-menu">
            {!user && (
              <div>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
              </div>
            )}
            {user && (
              <div>
                  <span>{user.email}</span>
                  <Button className="logout-btn" size="sm" variant="outline-secondary"onClick={handleClick}>Log out</Button>
              </div>
            )}
          </div>
        </nav>
      
    );
  }