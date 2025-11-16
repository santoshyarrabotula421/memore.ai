import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showSuperpowers, setShowSuperpowers] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          memorae
        </Link>

        <div className="navbar-menu">
          <div
            className="navbar-item"
            onMouseEnter={() => setShowSuperpowers(true)}
            onMouseLeave={() => setShowSuperpowers(false)}
          >
            <span className="navbar-link">Superpowers</span>
            {showSuperpowers && (
              <div className="superpowers-dropdown">
                <Link to="/superpower/unlimited-reminders" className="dropdown-item">
                  <span className="icon">🔔</span>
                  Unlimited reminders
                </Link>
                <Link to="/superpower/calendars" className="dropdown-item">
                  <span className="icon">📅</span>
                  All your calendars in one chat
                </Link>
                <Link to="/superpower/lists" className="dropdown-item">
                  <span className="icon">📋</span>
                  Your lists, always at hand
                </Link>
                <Link to="/superpower/voice" className="dropdown-item">
                  <span className="icon">🎙️</span>
                  Speak, Memorae listens
                </Link>
                <Link to="/superpower/image-action" className="dropdown-item">
                  <span className="icon">🖼️</span>
                  From image to action
                </Link>
                <Link to="/superpower/friends" className="dropdown-item">
                  <span className="icon">👥</span>
                  Reminders among friends
                </Link>
                <Link to="/superpower/control-center" className="dropdown-item">
                  <span className="icon">🎛️</span>
                  Your control center
                </Link>
                <Link to="/superpower/dynamic-reminder" className="dropdown-item">
                  <span className="icon">⏰</span>
                  Dynamic Reminder
                </Link>
              </div>
            )}
          </div>

          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>

          <Link to="/pricing" className="navbar-link">
            Pricing
          </Link>

          <Link to="/try-free" className="navbar-button">
            Try for Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
