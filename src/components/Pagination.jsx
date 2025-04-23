import React, { useState } from 'react';

function Pagination({ currentPage, totalPages, paginate }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "27px"
  };

  const paginationStyle = {
    height: '60px',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(3px)',
    borderRadius: '28px',
    padding: '0 10px',
    gap: '10px'
  };

  const baseLinkStyle = {
    padding: '10px 18px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
    transition: 'background 0.3s ease',
    borderRadius: '20px',
    cursor: 'pointer'
  };

  const handleMouseEnter = (index) => setHoveredItem(index);
  const handleMouseLeave = () => setHoveredItem(null);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={containerStyle}>
      <ul style={paginationStyle}>
        <li>
          <span
            onClick={() => paginate(currentPage - 1)}
            style={{
              ...baseLinkStyle,
              opacity: currentPage === 1 ? 0.5 : 1
            }}
          >
            Prev
          </span>
        </li>
        {pages.map((page, index) => (
          <li key={index}>
            <span
              onClick={() => paginate(page)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                ...baseLinkStyle,
                background: page === currentPage
                  ? 'rgba(255, 255, 255, 0.2)'
                  : hoveredItem === index
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'transparent'
              }}
            >
              {page}
            </span>
          </li>
        ))}
        <li>
          <span
            onClick={() => paginate(currentPage + 1)}
            style={{
              ...baseLinkStyle,
              opacity: currentPage === totalPages ? 0.5 : 1
            }}
          >
            Next
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
