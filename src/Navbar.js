import './styles/Navbar.css'
import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { useLogout } from './hooks/useLogout'
import { useAuthContext} from './hooks/useAuthContext'

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
              <i className="fa-solid fa-rocket fa-3x logo"></i>
              <div className="job-tracker-title">Job Tracker</div>
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
                  <a href="" onClick={handleClick}>Log out</a>
              </div>
            )}
          </div>
        </nav>
      
    );
  }