import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openSearch } from '../redux/store/searchResults';
import Comment from './Comment.jsx';
import "./navbar.css"
import Image2 from "../Images/img2.png"

function NavScrollExample() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      dispatch(openSearch([]));
      return;
    }

    const allNews = [
      ...newsData.world,
      ...newsData.local,
      ...newsData.business,
      ...newsData.technology,
      ...newsData.health,
      ...newsData.events,
      ...newsData.sports,
      ...newsData.cinema
    ];

    const filteredResults = allNews.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    dispatch(openSearch(filteredResults));
  };

  const handleCommentClick = () => setShowCommentModal(true);
  const handleCommentClose = () => setShowCommentModal(false);

  return (
    <>
      <Navbar expand="lg" className="glass-navbar" xs={3} sm={6} md={12}  >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-5 text-dark">
              Tamil L0om
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark fw-bold"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/page/local">உள்ளூர் </Nav.Link>
              <Nav.Link as={Link} to="/page/world">உலகம் </Nav.Link>
              <Nav.Link as={Link} to="/page/business">வணிகம் </Nav.Link>
              <Nav.Link as={Link} to="/page/technology">தொழில்நுட்பம் </Nav.Link>
              <Nav.Link as={Link} to="/page/health">ஆரோக்கியம் </Nav.Link>
              <Nav.Link as={Link} to="/page/events">நிகழ்வு </Nav.Link>
              <Nav.Link as={Link} to="/page/sports">விளையாட்டு </Nav.Link>
              <Nav.Link as={Link} to="/page/cinema">சினிமா</Nav.Link>
              <Nav.Link onClick={handleCommentClick}>கருத்துக்கள் </Nav.Link>
            </Nav>

            {/* 🔁 Apply form responsiveness only on small/medium screens */}
            <Form
              className="search-form d-flex my-2 my-lg-0 align-items-center"
              onSubmit={handleSearch}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <Button
                variant="outline-success"
                type="submit"
                className="search-btn"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>

        {/* 💡 STYLES: Only apply changes when screen is small or medium */}
        <style>{`
          @keyframes shine {
            0% { background-position: -200px; }
            100% { background-position: 200px; }
          }

          .glass-navbar {
            margin: 8px;
            padding: 5px 10px;
            border-radius: 28px;
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 0, 0, 0.3);
            WebkitBackdropFilter: blur(10px);
            animation: shine 3s infinite linear;
          }

          .nav-link:hover {
            color: rgba(0, 0, 0, 0.7) !important;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }

          .btn-outline-success:hover {
            background: rgba(38, 31, 179, 0.4) !important;
          }

          /* ✅ Responsive tweaks for screens smaller than 992px only */
          @media (max-width: 991px) {
            .search-form {
              flex-wrap: wrap;
              gap: 8px;
              justify-content: flex-start;
            }

            .search-input {
              width: 100% !important;
              border-radius: 27px;
              background: rgba(255, 255, 255, 0.2);
              border: 1px solid rgba(0, 0, 0, 0.2);
              backdrop-filter: blur(5px);
            }

            .search-btn {
              width: 100%;
              border-radius: 27px;
              background: rgba(22, 17, 121, 0.2);
              border: 1px solid rgba(0, 0, 0, 0.2);
              backdrop-filter: blur(5px);
              color: black;
              font-weight: 500;
              padding: 8px 15px;
            }

            .glass-navbar {
              margin: 4px;
              padding: 4px;
              border-radius: 16px;
            }
          }

          /* 📱 Additional styles specifically for phone screens (max-width: 576px) */
          @media (max-width: 576px) {
            .navbar-brand {
              font-size: 1rem !important; /* Smaller font for brand */
            }

            .navbar-nav {
              margin-top: 10px; /* Add some space below the brand */
              text-align: center; /* Center the navigation links */
            }

            .nav-link {
              padding: 8px !important; /* Adjust padding for better touch targets */
              font-size: 0.9rem !important; /* Slightly smaller font for links */
            }

            .search-form {
              margin-top: 15px !important; /* Add space above the search form */
            }

            .search-input {
              font-size: 0.8rem !important; /* Smaller font in search input */
              padding: 6px 12px !important; /* Adjust padding */
            }

            .search-btn {
              font-size: 0.8rem !important; /* Smaller font in search button */
              padding: 6px 12px !important; /* Adjust padding */
            }

            .glass-navbar {
              padding: 8px !important; /* Adjust overall padding */
              border-radius: 12px !important; /* Slightly smaller border-radius */
            }
          }
        `}</style>
      </Navbar>

      <Comment show={showCommentModal} handleClose={handleCommentClose} />
    </>
  );
}

export default NavScrollExample;