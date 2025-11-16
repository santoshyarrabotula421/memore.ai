import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Get ready for the<br />new era of AI
            </h1>
            <p className="hero-description">
              Your intelligent assistant that remembers everything. Never miss important moments,
              tasks, or conversations with Memorae AI-powered chatbot.
            </p>
            <div className="hero-actions">
              <input
                type="email"
                placeholder="Enter email"
                className="hero-input"
              />
              <Link to="/try-free" className="hero-button">
                Get Started
              </Link>
            </div>
            <p className="hero-subtext">
              Join thousands of users already using Memorae AI
            </p>
          </div>

          <div className="hero-robot">
            <div className="robot-container">
              <div className="robot-glow"></div>
              <img
                src="https://media.istockphoto.com/id/1703992257/photo/ai-chatbot-robot-concept.jpg?s=1024x1024&w=is&k=20&c=anJMKCLgaFrj58q9DbgTEFZG3O5c-D2tx2VM4_Nc8A4="
                alt="AI Robot"
                className="robot-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-title">Experience the Power of AI</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Intelligent Chat</h3>
            <p>Chat naturally with our AI that understands context and remembers your conversations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Smart Memory</h3>
            <p>Never forget important information. Memorae remembers everything for you</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Responses</h3>
            <p>Get lightning-fast responses powered by advanced AI technology</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your data is encrypted and protected with enterprise-grade security</p>
          </div>
        </div>
      </div>

      <div className="chatbot-preview">
        <h2 className="preview-title">See Memorae in Action</h2>
        <div className="chat-interface">
          <div className="chat-icons">
            <div className="chat-icon-item">
              <div className="icon-circle">🔧</div>
            </div>
            <div className="chat-icon-item">
              <div className="icon-circle">💬</div>
            </div>
            <div className="chat-icon-item">
              <div className="icon-circle">🤖</div>
            </div>
            <div className="chat-icon-item">
              <div className="icon-circle">⚡</div>
            </div>
            <div className="chat-icon-item">
              <div className="icon-circle">👥</div>
            </div>
          </div>
          <div className="chat-messages">
            <div className="chat-bubble user-bubble">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" className="chat-avatar" />
              <span>Hello, Chatbot</span>
            </div>
            <div className="chat-bubble bot-bubble">
              <span>Hello,<br />How can I help you?</span>
              <div className="bot-avatar">🤖</div>
            </div>
          </div>
          <div className="robot-visual">
            <img
              src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg"
              alt="Robot Assistant"
              className="robot-helper"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
