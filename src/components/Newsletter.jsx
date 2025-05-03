import React, { useState, useEffect } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formspreeUrl = 'https://formspree.io/f/xvgaowre';

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 2500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage('✅ நீங்கள் வெற்றிகரமாக பதிவு செய்யப்பட்டுள்ளீர்கள்!');
        setEmail('');
      } else {
        setMessage('❌ பதிவு தோல்வியடைந்தது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.');
      }
    } catch (err) {
      setMessage('❌ பிழை ஏற்பட்டது. பின்னர் முயற்சிக்கவும்.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="newsletter-box">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .newsletter-box {
          margin: 20px 10px;
          padding: 24px;
          border-radius: 28px;
          background: rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 500px;
          position: relative;
        }

        @media (max-width: 768px) {
          .newsletter-box {
            margin: 16px 2px;
            padding: 8px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 0, 0, 0.1);
            width: calc(100vw - 32px);
            max-width: 95vw;
            box-sizing: border-box;
          }

          .newsletter-container h3 {
            font-size: 18px;
          }

          .newsletter-container input,
          .newsletter-container button {
            font-size: 13px;
            padding: 10px 14px;
          }
        }
      `}</style>

      <div className="newsletter-container">
        <h3 style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          marginBottom: "20px"
        }}>
          நம்முடைய செய்திமடலுக்கு பதிவு செய்யுங்கள்
        </h3>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="மின்னஞ்சலை உள்ளிடவும்"
            required
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "27px",
              padding: "12px 16px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              fontSize: "14px",
              outline: "none",
              transition: "all 0.3s ease",
              width: "100%",
              color: "black"
            }}
          />
          <button 
            type="submit"
            disabled={isLoading || !email}
            style={{
              background: "rgba(1, 24, 216, 0.7)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "12px 24px",
              borderRadius: "27px",
              color: "white",
              fontWeight: "500",
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              width: "100%",
              opacity: isLoading || !email ? 0.7 : 1
            }}
          >
            {isLoading ? 'அனுப்பப்படுகிறது...' : 'பதிவுசெய்யவும்'}
          </button>
        </form>
      </div>

      {message && (
        <div style={{
          position: "absolute",
          bottom: "-50px",
          left: "0",
          right: "0",
          color: message.includes('✅') ? "#4CAF50" : "#F44336",
          textAlign: "center",
          padding: "8px",
          fontSize: "0.9rem",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "6px",
          backdropFilter: "blur(5px)",
          animation: "fadeIn 0.3s ease"
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Newsletter;
