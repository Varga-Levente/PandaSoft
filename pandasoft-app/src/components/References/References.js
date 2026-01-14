import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './References.css';

const References = () => {
  // Itt könnyedén lehet új referenciákat hozzáadni vagy módosítani
  const references = [
    {
      id: 1,
      title: 'Panda3D Rendszerfejlesztés',
      description: 'Komplex oldal fejlesztése egyedi funkciókkal és integrációkkal, ajánlat kérő rendszerrel.',
      image: '/reference_images/panda3d.png',
      link: 'https://panda3d.hu/',
      tags: ['React', 'Node.js', 'MariaDB', 'Redis']
    },
    {
      id: 2,
      title: 'Catch The IMPOSTOR',
      description: 'Online játék fejlesztése valós idejű többjátékos funkcióval Socket.IO használatával. Találjátok ki, hogy ki nem tudja a szót!',
      image: '/reference_images/catch-the-impostor.png',
      link: 'https://catch-the-impostor.onrender.com/',
      tags: ['React', 'Node.js', 'Socket.IO']
    },
    {
      id: 3,
      title: 'Varga Levente - Szakmai portfólió',
      description: 'Személyes portfólió weboldal fejlesztése modern dizájnnal és reszponzív kialakítással.',
      image: '/reference_images/varga-levente.png',
      link: 'https://varga-levente.com/',
      tags: ['React', 'Flask', 'Node.js', 'Nginx']
    },
    {
      id: 4,
      title: 'Valós idejű chat alkalmazás',
      description: 'Egyszerű valós idejű chat szoba alkalmazás felhasználó hitelesítéssel és üzenet tárolással.',
      image: '/reference_images/',
      link: '',
      tags: ['C#', 'WPF', 'Flask']
    },
    {
      id: 5,
      title: 'Autó műhely menedzsment rendszer',
      description: 'Egyetemi projekt egy autó műhely számára készült menedzsment rendszer fejlesztésére.',
      image: '/reference_images/car-repair.png',
      link: 'https://github.com/Varga-Levente/NI-Beadando',
      tags: ['C#', 'Blazor']
    },
    {
      id: 6,
      title: 'Android garázs kapu vezérlő alkalmazás',
      description: 'Android alkalmazás fejlesztése okosított garázs kapu távoli vezérlésére és állapotának monitorozására. ESP8266 mikrokontrollerrel való kommunikációval.',
      image: '/reference_images/remote_thumbnail.png',
      link: '/reference_images/remote_full.png',
      tags: ['Java', 'C++']
    },
    {
      id: 7,
      title: 'Távirányítható autó mobil alkalmazással',
      description: 'Android alkalmazás fejlesztése távirányítható autó vezérlésére WiFi kapcsolaton keresztül élő kamera képpel. ESP32-CAM mikrokontrollerrel való kommunikációval.',
      image: '/reference_images/robot.jpg',
      link: 'https://github.com/Varga-Levente/RoBOT',
      tags: ['Java', 'C++', 'Node.js']
    },
    {
      id: 8,
      title: 'Mozi alkalmazás fejlesztés',
      description: 'Egyetemi projekt egy mozi alkalmazás fejlesztésére, amely lehetővé teszi a felhasználók számára a filmek böngészését és jegyvásárlást, hely foglalással és étel rendeléssel.',
      image: '/reference_images/cinemapp.png',
      link: 'https://github.com/Varga-Levente/Szoftverfejlesztes-mernokoknek',
      tags: ['Java', 'Spring Boot', 'MariaDB']
    }
  ];

  return (
      <section id="references" className="references-section">
        <Container>
          <Row className="section-header text-center mb-5">
            <Col>
              <h2 className="section-title">Referenciáink</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle mt-3">
                Büszkék vagyunk arra, hogy számos sikeres projektben vehettünk részt
              </p>
            </Col>
          </Row>

          <Row>
            {references.map((reference) => (
                <Col lg={4} md={6} key={reference.id} className="mb-4">
                  <Card className="reference-card h-100 d-flex flex-column">
                    <div className="reference-image-wrapper">
                      <Card.Img
                          variant="top"
                          src={reference.image}
                          alt={reference.title}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.reference-placeholder').style.display = 'flex';
                          }}
                      />
                      <div className="reference-placeholder">
                        <div className="placeholder-content">
                          <div className="placeholder-icon">📱</div>
                          <span>{reference.title}</span>
                        </div>
                      </div>
                      {reference.link && (
                          <div className="reference-overlay">
                            <Button
                                variant="light"
                                className="view-project-btn"
                                href={reference.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              Projekt megtekintése <FaExternalLinkAlt />
                            </Button>
                          </div>
                      )}
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="reference-title">{reference.title}</Card.Title>
                      <Card.Text className="reference-description flex-grow-1">
                        {reference.description}
                      </Card.Text>
                      <div className="reference-tags">
                        {reference.tags.map((tag, index) => (
                            <span key={index} className="reference-tag">{tag}</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default References;
