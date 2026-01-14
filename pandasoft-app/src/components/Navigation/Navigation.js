import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import './Navigation.css';

const Navigation = ({ theme, toggleTheme }) => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // Ha nem vagyunk a főoldalon, először oda navigálunk
    if (location.pathname !== '/') {
      navigate('/');
      // Kis késleltetés hogy az oldal betöltődjön
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    handleClose();
  };

  const menuItems = [
    { name: 'Főoldal', target: 'hero' },
    { name: 'Rólunk', target: 'about' },
    { name: 'Szolgáltatások', target: 'services' },
    { name: 'Referenciák', target: 'references' },
    { name: 'Technológiák', target: 'technologies' },
    { name: 'Kapcsolat', target: 'contact' },
  ];

  if (isMobile) {
    return (
        <>
          <div className={`mobile-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="mobile-navbar-content">
              <div
                  className="mobile-logo"
                  onClick={() => scrollToSection('hero')}
                  style={{ cursor: 'pointer' }}
              >
                <img
                    src="/logo.png"
                    alt="PandaSoft"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.marginLeft = '0';
                    }}
                />
                <span>PandaSoft</span>
              </div>
              <div className="mobile-nav-actions">
                <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    aria-label="Téma váltás"
                >
                  {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
                <button className="hamburger-btn" onClick={handleShow}>
                  <FaBars />
                </button>
              </div>
            </div>
          </div>

          <Offcanvas show={show} onHide={handleClose} placement="end" className="mobile-menu">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div
                    className="mobile-logo"
                    onClick={() => scrollToSection('hero')}
                    style={{ cursor: 'pointer' }}
                >
                  <img
                      src="/logo.png"
                      alt="PandaSoft"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.marginLeft = '0';
                      }}
                  />
                  <span>PandaSoft</span>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="mobile-menu-content">
                <div className="mobile-menu-items">
                  {menuItems.map((item, index) => (
                      <div
                          key={index}
                          className="mobile-menu-item"
                          onClick={() => scrollToSection(item.target)}
                      >
                        {item.name}
                      </div>
                  ))}
                </div>
                <div className="mobile-menu-bottom">
                  <div className="mobile-theme-toggle">
                    <span>Téma:</span>
                    <button
                        className="theme-toggle-btn-large"
                        onClick={toggleTheme}
                    >
                      {theme === 'light' ? (
                          <>
                            <FaMoon /> Dark Mode
                          </>
                      ) : (
                          <>
                            <FaSun /> Light Mode
                          </>
                      )}
                    </button>
                  </div>
                  {/*<Link to="/konzultacio" onClick={handleClose}>*/}
                  {/*  <Button variant="primary" className="w-100">*/}
                  {/*    Konzultációt kérek*/}
                  {/*  </Button>*/}
                  {/*</Link>*/}
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
    );
  }

  return (
      <Navbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <div
              className="navbar-logo"
              onClick={() => scrollToSection('hero')}
              style={{ cursor: 'pointer' }}
          >
            <img
                src="/logo.png"
                alt="PandaSoft"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.marginLeft = '0';
                }}
            />
            <span>PandaSoft</span>
          </div>

          <Nav className="mx-auto">
            {menuItems.map((item, index) => (
                <Nav.Link
                    key={index}
                    onClick={() => scrollToSection(item.target)}
                    className="nav-link-item"
                >
                  {item.name}
                </Nav.Link>
            ))}
          </Nav>

          <div className="nav-actions">
            <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Téma váltás"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            {/*<Link to="/konzultacio">*/}
            {/*  <Button variant="primary" className="consultation-btn">*/}
            {/*    Konzultációt kérek*/}
            {/*  </Button>*/}
            {/*</Link>*/}
          </div>
        </Container>
      </Navbar>
  );
};

export default Navigation;