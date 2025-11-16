import { useParams } from 'react-router-dom';
import './SuperpowerDetail.css';

const superpowersData = {
  'unlimited-reminders': {
    title: 'Unlimited reminders',
    icon: '🔔',
    description: 'Never forget anything again',
    fullDescription: 'An alarm on your phone, a note on a post-it note, a message you sent yourself on WhatsApp, a notification in an app you don\'t even remember installing... And in the end, you had no idea what you were reminded of. Or when, or why. You don\'t need more reminders. You need a system that works.',
    features: [
      'Set unlimited reminders for any task or event',
      'Smart notifications that adapt to your schedule',
      'Voice-activated reminder creation',
      'Recurring reminders with flexible patterns',
      'Context-aware reminder suggestions',
      'Integration with calendar and tasks'
    ],
    image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'calendars': {
    title: 'All your calendars in one chat',
    icon: '📅',
    description: 'Unified calendar management',
    fullDescription: 'Manage all your calendars from different platforms in one seamless chat interface. No more switching between apps to check your schedule.',
    features: [
      'Sync multiple calendar accounts',
      'View and manage events through chat',
      'Smart scheduling suggestions',
      'Automatic conflict detection',
      'Quick event creation via natural language',
      'Share calendar availability with ease'
    ],
    image: 'https://images.pexels.com/photos/5408687/pexels-photo-5408687.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'lists': {
    title: 'Your lists, always at hand',
    icon: '📋',
    description: 'Organize everything effortlessly',
    fullDescription: 'Create, manage, and share lists for any purpose. From shopping lists to project tasks, keep everything organized in one place.',
    features: [
      'Create unlimited lists and sublists',
      'Share lists with family and teams',
      'Check off items with voice commands',
      'Smart list suggestions based on context',
      'Sync across all devices',
      'Template lists for recurring needs'
    ],
    image: 'https://images.pexels.com/photos/8581008/pexels-photo-8581008.jpeg'
  },
  'voice': {
    title: 'Speak, Memorae listens',
    icon: '🎙️',
    description: 'Hands-free AI interaction',
    fullDescription: 'Use your voice to interact with Memorae naturally. Create reminders, manage tasks, and get information without touching your device.',
    features: [
      'Natural language voice commands',
      'Multi-language support',
      'Voice-to-text accuracy',
      'Background listening mode',
      'Voice shortcuts for common tasks',
      'Conversation context awareness'
    ],
    image: 'https://images.pexels.com/photos/4790274/pexels-photo-4790274.jpeg'
  },
  'image-action': {
    title: 'From image to action',
    icon: '🖼️',
    description: 'Visual recognition and task creation',
    fullDescription: 'Take a photo and let Memorae understand what needs to be done. From receipts to business cards, turn images into actionable tasks.',
    features: [
      'OCR text extraction from images',
      'Smart task creation from photos',
      'Receipt and document scanning',
      'Business card contact extraction',
      'Visual reminders and notes',
      'Image-based search and organization'
    ],
    image: 'https://images.pexels.com/photos/4102557/pexels-photo-4102557.jpeg'
  },
  'friends': {
    title: 'Reminders among friends',
    icon: '👥',
    description: 'Collaborative reminder system',
    fullDescription: 'Share reminders and tasks with friends, family, and colleagues. Keep everyone on the same page with collaborative features.',
    features: [
      'Share reminders with contacts',
      'Group reminders and tasks',
      'Collaborative list management',
      'Real-time synchronization',
      'Permission controls for shared items',
      'Activity notifications for shared tasks'
    ],
    image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'control-center': {
    title: 'Your control center',
    icon: '🎛️',
    description: 'Complete oversight of your digital life',
    fullDescription: 'A centralized dashboard to manage all your tasks, reminders, calendars, and more. Get insights and analytics about your productivity.',
    features: [
      'Unified dashboard for all features',
      'Productivity analytics and insights',
      'Customizable widgets and views',
      'Quick access to frequently used functions',
      'Smart notifications management',
      'Performance tracking and reports'
    ],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'dynamic-reminder': {
    title: 'Dynamic Reminder',
    icon: '⏰',
    description: 'Intelligent, context-aware reminders',
    fullDescription: 'Reminders that adapt to your location, schedule, and context. Get reminded at the right time and place, not just at a fixed time.',
    features: [
      'Location-based reminders',
      'Context-aware triggering',
      'Weather and traffic considerations',
      'Adaptive timing based on your routine',
      'Smart snooze with learning algorithms',
      'Integration with IoT devices'
    ],
    image: 'https://images.pexels.com/photos/19238584/pexels-photo-19238584.jpeg'
  }
};

function SuperpowerDetail() {
  const { id } = useParams();
  const superpower = superpowersData[id];

  if (!superpower) {
    return (
      <div className="superpower-detail not-found">
        <h1>Superpower not found</h1>
      </div>
    );
  }

  return (
    <div className="superpower-detail">
      <div className="superpower-hero">
        <div className="superpower-hero-content">
          <div className="superpower-icon-large">{superpower.icon}</div>
          <h1 className="superpower-title">{superpower.title}</h1>
          <p className="superpower-tagline">{superpower.description}</p>
        </div>
        <div className="superpower-hero-image">
          <img src={superpower.image} alt={superpower.title} />
        </div>
      </div>

      <div className="superpower-content">
        <section className="superpower-description">
          <h2>What is {superpower.title}?</h2>
          <p>{superpower.fullDescription}</p>
        </section>

        <section className="superpower-features">
          <h2>Key Features</h2>
          <div className="features-list">
            {superpower.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-check">✓</div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="superpower-cta">
          <div className="cta-card">
            <h2>Ready to experience {superpower.title}?</h2>
            <p>Join thousands of users already using this powerful feature</p>
            <button className="cta-button">Get Started Now</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SuperpowerDetail;
