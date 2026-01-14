import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Rólunk', href: '#about' },
      { name: 'Szolgáltatások', href: '#services' },
      { name: 'Referenciák', href: '#references' },
      { name: 'Karrier', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Dokumentáció', href: '#' },
      { name: 'Támogatás', href: '#' },
      { name: 'GYIK', href: '/gyik' }
    ],
    legal: [
      { name: 'Adatvédelem', href: '/adatvedelem' },
      { name: 'ÁSZF', href: '/aszf' },
      { name: 'Cookie Szabályzat', href: '/cookie' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', name: 'Twitter' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaGithub />, href: 'https://github.com', name: 'GitHub' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
      <footer className="footer">
        <Container>
          <Row className="footer-main">
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-brand">
                <h3 className="brand-name">PandaSoft</h3>
                <p className="brand-description">
                  Innovatív szoftvermegoldások, amelyek növelik vállalkozásod hatékonyságát
                  és versenyképességét a digitális korban.
                </p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                      <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-4">
              <div className="footer-section">
                <h4 className="footer-title">Cég</h4>
                <ul className="footer-links">
                  {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                            href={link.href}
                            onClick={(e) => {
                              if (link.href.startsWith('#')) {
                                e.preventDefault();
                                scrollToSection(link.href);
                              }
                            }}
                        >
                          {link.name}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h4 className="footer-title">Források</h4>
                <ul className="footer-links">
                  {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.name}</a>
                      </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h4 className="footer-title">Jogi</h4>
                <ul className="footer-links">
                  {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.name}</a>
                      </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>

          <div className="footer-bottom">
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                <p className="copyright">
                  © {currentYear} PandaSoft. Minden jog fenntartva.
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end">
                <p className="made-with">
                  Code ❤️ by: Levente Varga
                </p>
              </Col>
            </Row>
          </div>
        </Container>

        {/* Sitemap (SEO purposes) */}
        <div className="sitemap-hidden">
          <h3>Oldaltérkép</h3>
          <ul>
            <li><a href="/#hero">Főoldal</a></li>
            <li><a href="/#about">Rólunk</a></li>
            <li><a href="/#services">Szolgáltatások</a></li>
            <li><a href="/#references">Referenciák</a></li>
            <li><a href="/#technologies">Technológiák</a></li>
            <li><a href="/#contact">Kapcsolat</a></li>
            <li><a href="/konzultacio">Konzultáció</a></li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;