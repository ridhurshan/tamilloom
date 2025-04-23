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

    const handleCommentClick = () => {
        setShowCommentModal(true);
    };

    const handleCommentClose = () => {
        setShowCommentModal(false);
    };

    return (
        <>
            <Navbar 
                expand="lg" 
                style={{
                    margin: "8px",
                    padding: "1px 5px",
                    borderRadius: "28px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    WebkitBackdropFilter: "blur(10px)",
                    animation: "shine 3s infinite linear",
                }}
            >
                <Container fluid>
                    <Navbar.Brand 
                        as={Link} 
                        to="/" 
                        style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "20px",
                            textShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        Tamil LOom
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ 
                                maxHeight: '100px', 
                                fontSize: "15px", 
                                fontWeight: "bold",
                                backdropFilter: "blur(5px)",
                            }}
                            navbarScroll
                        >
                            <Nav.Link 
                                as={Link} 
                                to="/page/local"
                                style={{ color: "black" }}
                            >
                                உள்ளூர்
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/page/world"
                                style={{ color: "black" }}
                            >
                                உலகம்
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/page/business"
                                style={{ color: "black" }}
                            >
                                வணிகம்
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/page/technology"
                                style={{ color: "black" }}
                            >
                                தொழில்நுட்பம்
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/page/health"
                                style={{ color: "black" }}
                            >
                                ஆரோக்கியம்
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/page/events"
                                style={{ color: "black" }}
                            >
                                நிகழ்வு
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/page/sports"
                                style={{ color: "black" }}
                            >
                                விளையாட்டு
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/page/cinema"
                                style={{ color: "black" }}
                            >
                                சினிமா
                            </Nav.Link>
                            <Nav.Link 
                                onClick={handleCommentClick}
                                style={{ color: "black" }}
                            >
                                கருத்துக்கள்
                            </Nav.Link>
                        </Nav>
                        <Form 
                            className="d-flex" 
                            onSubmit={handleSearch}
                            style={{ backdropFilter: "blur(5px)" }}
                        >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    background: "rgba(255, 255, 255, 0.2)",
                                    border: "1px solid rgba(0, 0, 0, 0.2)",
                                    backdropFilter: "blur(5px)",
                                    borderRadius:"27px",
                                    padding:"10 18px",
                                    margin:"3px 10px 1px 0"
                                }}
                            />
                            <Button 
                                variant="outline-success" 
                                type="submit"
                                style={{
                                    background: "rgba(22, 17, 121, 0.2)",  
                                    border: "1px solid rgba(0, 0, 0, 0.2)",
                                    backdropFilter: "blur(5px)",
                                    color: "black",
                                    fontWeight: "500",
                                    borderRadius:"27px",
                                    padding:"10 18px",
                                    margin:"3px 10px 1px 0"
                                }}
                            >
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>

                <style>{`
                    @keyframes shine {
                        0% { background-position: -200px; }
                        100% { background-position: 200px; }
                    }
                    .navbar {
                        background: linear-gradient(
                            110deg,
                            rgba(255, 255, 255, 0.05) 0%,
                            rgba(255, 255, 255, 0.2) 50%,
                            rgba(255, 255, 255, 0.05) 100%
                        );
                        background-size: 400% 100%;
                    }
                    .nav-link:hover {
                        color: rgba(0, 0, 0, 0.7) !important;
                        text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                    }
                    .btn-outline-success:hover {
                        background: rgba(38, 31, 179, 0.4) !important;
                    }    
                `}</style>
            </Navbar>
            
            <Comment show={showCommentModal} handleClose={handleCommentClose} />
        </>
    );
}

export default NavScrollExample;