import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>Select the perfect plan for your needs</p>
      </div>

      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="plan-badge">Free</div>
          <h2>Starter</h2>
          <div className="price">
            <span className="amount">$0</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>✓ 50 reminders per month</li>
            <li>✓ Basic calendar integration</li>
            <li>✓ 3 active lists</li>
            <li>✓ Voice commands</li>
            <li>✓ Mobile app access</li>
          </ul>
          <button className="plan-button">Get Started</button>
        </div>

        <div className="pricing-card featured">
          <div className="plan-badge popular">Most Popular</div>
          <h2>Pro</h2>
          <div className="price">
            <span className="amount">$9.99</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>✓ Unlimited reminders</li>
            <li>✓ All calendar integrations</li>
            <li>✓ Unlimited lists</li>
            <li>✓ Advanced voice features</li>
            <li>✓ Image recognition</li>
            <li>✓ Share with 10 friends</li>
            <li>✓ Priority support</li>
          </ul>
          <button className="plan-button">Start Free Trial</button>
        </div>

        <div className="pricing-card">
          <div className="plan-badge">Enterprise</div>
          <h2>Team</h2>
          <div className="price">
            <span className="amount">$29.99</span>
            <span className="period">/month</span>
          </div>
          <ul className="features">
            <li>✓ Everything in Pro</li>
            <li>✓ Unlimited team members</li>
            <li>✓ Advanced analytics</li>
            <li>✓ Custom integrations</li>
            <li>✓ Dedicated support</li>
            <li>✓ API access</li>
            <li>✓ Custom branding</li>
          </ul>
          <button className="plan-button">Contact Sales</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
