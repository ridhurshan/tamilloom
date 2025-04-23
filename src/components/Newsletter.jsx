import React, { useState, useEffect } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Replace with your Google Apps Script URL
  const scriptUrl = 'YOUR_GOOGLE_SCRIPT_URL';

  // Auto-dismiss message after 2.5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isLoading) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const result = await response.json();
      if (result.success) {
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear the input field
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Responsive styles
  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    padding: '24px',
    margin: '20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '90%', // Changed from fixed max-width to percentage
    maxWidth: '500px', // Still has a maximum width
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    '@media (max-width: 480px)': {
      padding: '16px',
    }
  };

  const messageStyle = {
    position: 'absolute',
    bottom: '-40px',
    left: '0',
    right: '0',
    color: message.includes('Thank') ? '#4CAF50' : '#F44336',
    textAlign: 'center',
    padding: '8px',
    fontSize: '0.9rem',
    opacity: message ? '1' : '0',
    transition: 'opacity 0.3s ease',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '4px',
    '@media (max-width: 480px)': {
      bottom: '-50px',
      fontSize: '0.8rem'
    }
  };

  const headingStyle = {
    color: '#fff', 
    fontSize: '1.5rem', 
    marginBottom: '16px', 
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '1.3rem'
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem',
      marginBottom: '12px'
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    fontSize: '1rem',
    '@media (max-width: 480px)': {
      padding: '10px',
      fontSize: '0.9rem'
    }
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: isLoading 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    opacity: (!email || isLoading) ? 0.7 : 1,
    '@media (max-width: 480px)': {
      padding: '10px',
      fontSize: '0.9rem'
    }
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>
        Subscribe to Our Newsletter
      </h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address" 
          required 
          style={inputStyle}
        />
        <button 
          type="submit" 
          disabled={isLoading || !email}
          style={buttonStyle}
          onMouseEnter={(e) => !isLoading && email && (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')}
          onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
        >
          {isLoading ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <div style={messageStyle}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Newsletter;