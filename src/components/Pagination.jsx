import React, { useState } from 'react';

function Pagination() {
  // State for active page and hover effects
  const [activePage, setActivePage] = useState(1); // Page 2 is active by default
  const [hoveredItem, setHoveredItem] = useState(null);

  // Styles
  const containerStyle = {
    position: 'relative',
    // height: '100vh',
    // width: '100%',
    // background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const paginationStyle = {
    position: 'relative',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(3px)',
    borderRadius: '2px'
  };

  const itemStyle = {
    listStyleType: 'none',
    display: 'inline-block'
  };

  const baseLinkStyle = {
    position: 'relative',
    padding: '20px 25px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    transition: 'background 0.3s ease'
  };

  // Page items configuration
  const pages = [
    { type: 'prev', label: 'Prev' },
    { type: 'page', number: 1 },
    { type: 'page', number: 2 },
    { type: 'page', number: 3 },
    { type: 'page', number: 4 },
    { type: 'page', number: 5 },
    { type: 'next', label: 'Next' }
  ];

  // Handle click events
  const handleClick = (pageNumber) => {
    if (typeof pageNumber === 'number') {
      setActivePage(pageNumber);
    }
    // Add navigation logic here (e.g., fetch data for the page)
  };

  // Handle hover effects
  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div style={containerStyle}>
      <ul style={paginationStyle}>
        {pages.map((page, index) => {
          const isActive = page.type === 'page' && page.number === activePage;
          const isHovered = hoveredItem === index;
          
          const linkStyle = {
            ...baseLinkStyle,
            ...(isActive && { background: 'rgba(255, 255, 255, 0.2)' }),
            ...(isHovered && !isActive && { background: 'rgba(255, 255, 255, 0.1)' })
          };

          return (
            <li 
              key={index}
              style={itemStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(page.number || page.type);
                }}
              >
                {page.label || page.number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;