import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4" style={{ minHeight: "160px" ,bottom: "0"}}>
      <div>
        <p style={{ margin: 0 }}>© 2025 My Website. All rights reserved.</p>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          "உண்மையை நேர்மையாகச் சொல்லும் ஒவ்வொரு வார்த்தையும், ஒரு மாற்றத்தின் விதையாகும்."
        </p>
      </div>

      <div className="mt-2">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="mt-2">
        <small>For Website design Contact us: ridhurshan.work@gmail.com</small>
      </div>
    </footer>
  );
}

export default Footer;
