import { useState } from 'react';
import './TryFree.css';

function TryFree() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up:', formData);
  };

  return (
    <div className="try-free-page">
      <div className="try-free-container">
        <div className="try-free-content">
          <div className="signup-header">
            <h1>Start Your Free Trial</h1>
            <p>Experience all Pro features free for 14 days</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <button type="submit" className="signup-button">
              Start Free Trial
            </button>

            <p className="terms-text">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>

          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Full access to all features</span>
            </div>
          </div>
        </div>

        <div className="try-free-visual">
          <div className="visual-content">
            <div className="robot-icon-large">🤖</div>
            <h2>Join 10,000+ Users</h2>
            <p>Experience the future of AI-powered productivity</p>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Reminders Set</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TryFree;
