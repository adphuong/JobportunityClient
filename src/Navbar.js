import './styles/Navbar.css'
import { useState } from "react"

// Navbar.js
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

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
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Signup</a>
            </li>
          </ul>
        </div>
      </nav>
      
    );
  }