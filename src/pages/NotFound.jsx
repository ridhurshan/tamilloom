import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🚫 404 - Page Not Found</h1>
      <p>தவறான முகவரி. மைய பக்கம் திரும்புங்கள்.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'red' }}>
            🏠 முகப்புpage
         </Link>

    </div>
  );
}
