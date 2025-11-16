import { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <div className="logo-icon">🤖</div>
            <h1>Memorae AI</h1>
            <p className="login-subtitle">Sign in to access your dashboard</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="login-footer">
              <a href="#" className="forgot-password">Forgot password?</a>
              <p className="signup-link">
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </form>
        </div>

        <div className="login-visual">
          <div className="robot-animation">
            <div className="robot-glow-effect"></div>
            <div className="floating-elements">
              <div className="float-item">🔒</div>
              <div className="float-item">⚡</div>
              <div className="float-item">🤖</div>
              <div className="float-item">🔐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
