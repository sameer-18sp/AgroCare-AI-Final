import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './home.css';

export const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "50K+", label: "Plants Analyzed", icon: "🌱" },
    { number: "98%", label: "Accuracy Rate", icon: "⭐" },
    { number: "12K+", label: "Happy Farmers", icon: "👥" },
    { number: "24/7", label: "AI Support", icon: "🌍" }
  ];

  const features = [
    {
      title: "AI Disease Detection",
      description: "Advanced machine learning to identify plant diseases instantly",
      icon: "📷",
      color: "feature-emerald"
    },
    {
      title: "Smart Analytics", 
      description: "Comprehensive insights and recommendations for your crops",
      icon: "📊",
      color: "feature-blue"
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 crop health monitoring with instant alerts",
      icon: "⚡",
      color: "feature-purple"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="home-container">
      {/* Animated background elements */}
      <div className="bg-elements">
        <div 
          className="bg-orb bg-orb-1"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
          }}
        />
        <div 
          className="bg-orb bg-orb-2"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`main-content ${isVisible ? 'visible' : ''}`}>
        
        {/* Hero section */}
        <div className="hero-section">
          <div className="badge">
            <span className="badge-icon">🌱</span>
            Next-Gen Agricultural AI
          </div>
          
          <h1 className="hero-title">
            AgroCare
            <span className="hero-subtitle">Intelligence</span>
          </h1>

          {isAuthenticated && user ? (
            <div className="user-greeting">
              <p className="greeting-text">
                Welcome back, <span className="user-name">{user.given_name || user.name}</span>!
              </p>
              <p className="greeting-subtitle">Ready to revolutionize your farming journey?</p>
            </div>
          ) : (
            <p className="hero-description">
              Transform your agriculture with cutting-edge AI technology. 
              Detect diseases, optimize yields, and grow smarter.
            </p>
          )}

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn-primary">
              Start Analyzing
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats section */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`stat-card ${currentStat === index ? 'active' : ''}`}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features section */}
        <div className="features-section">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`feature-icon ${feature.color}`}>
                  <span>{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-link">
                  Learn more <span className="link-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">Join thousands of farmers already using AgroCare AI</p>
          <button className="cta-button">
            Try It Free Today
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-wheel">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </main>
  );
};