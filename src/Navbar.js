import './styles/Navbar.css'
import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { useLogout } from './hooks/useLogout'

// Navbar.js
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const navigate = useNavigate();
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
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <a href="" onClick={handleClick}>Log out</a>
              </li>
            </ul>
          </div>
        </nav>
      
    );
  }