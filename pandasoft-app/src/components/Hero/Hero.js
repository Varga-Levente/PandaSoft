import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCode, FaRocket } from 'react-icons/fa';
import './Hero.css';
import {FaShield} from "react-icons/fa6";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="hero-badge">
              <FaCode className="badge-icon" />
              <span>Professzionális Szoftverfejlesztés</span>
            </div>
            <h1 className="hero-title">
              Innovatív Megoldások a <span className="highlight">Digitális</span> Jövődért
            </h1>
            <p className="hero-description">
              A PandaSoft csapata segít vállalkozásodnak a digitális átalakulásban. 
              Egyedi szoftvermegoldásokat fejlesztünk, amelyek növelik hatékonyságodat és versenyképességedet, mind ezt teljesen igényre szabva.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                size="lg" 
                className="hero-btn primary-btn"
                onClick={scrollToContact}
              >
                <FaRocket className="btn-icon" />&nbsp;
                Kezdjük el!
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="hero-btn outline-btn"
                href="#about"
              >
                Többet szeretnék tudni
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-image-col">
            <div className="hero-image-wrapper">
              <div className="floating-card card-1">
                <FaCode className="card-icon" />
                <span>Clean Code</span>
              </div>
              <div className="floating-card card-2">
                <FaShield className="card-icon" />
                <span>Secured software</span>
              </div>
              <div className="hero-illustration">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-color)" />
                      <stop offset="100%" stopColor="var(--secondary-color)" />
                    </linearGradient>
                  </defs>
                  <circle cx="250" cy="250" r="200" fill="url(#gradient1)" opacity="0.1" />
                  <circle cx="250" cy="250" r="150" fill="url(#gradient1)" opacity="0.2" />
                  <circle cx="250" cy="250" r="100" fill="url(#gradient1)" opacity="0.3" />
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
