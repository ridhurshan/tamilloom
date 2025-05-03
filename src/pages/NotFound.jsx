import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🚫 404 - Page Not Found</h1>
      <p>தவறான முகவரி. மைய பக்கம் திரும்புங்கள்.</p>
      
      {/* Option 1: Using Link
      <Link to="/" style={{ 
        textDecoration: 'none', 
        color: 'red',
        display: 'block',
        margin: '10px'
      }}>
        🏠 முகப்பு (Link component)
      </Link> */}
      
      {/* Option 2: Using navigate */}
      <button 
        onClick={handleHomeClick}
        style={{
          background: 'none',
          border: 'none',
          color: 'blue',
          textDecoration: 'underline',
          cursor: 'pointer',
          fontSize: 'inherit'
        }}
      >
        🏠 முகப்பு (Programmatic)
      </button>
    </div>
  );
}