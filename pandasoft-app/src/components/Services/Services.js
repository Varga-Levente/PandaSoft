import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaMobile, FaCloud, FaDatabase, FaCog, FaChartLine } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Webalkalmazás Fejlesztés',
      description: 'Modern, reszponzív webalkalmazások fejlesztése React technológiával.',
      features: ['SPA fejlesztés', 'E-commerce megoldások', 'CMS rendszerek']
    },
    {
      icon: <FaMobile />,
      title: 'Mobilalkalmazás Fejlesztés',
      description: 'Natív és cross-platform mobilalkalmazások iOS és Android platformokra.',
      features: ['React Native', 'Java']
    },
    {
      icon: <FaCloud />,
      title: 'Felhő Megoldások',
      description: 'Skálázható felhőalapú architektúrák tervezése és implementálása.',
      features: ['AWS', 'Azure', 'Google Cloud']
    },
    {
      icon: <FaDatabase />,
      title: 'Adatbázis Tervezés',
      description: 'Hatékony adatbázis struktúrák tervezése és optimalizálása.',
      features: ['SQL', 'NoSQL', 'Migrációk']
    },
    {
      icon: <FaCog />,
      title: 'API Fejlesztés',
      description: 'RESTful API-k fejlesztése modern backend technológiákkal.',
      features: ['Node.js', 'Flask', 'Mikroszolgáltatások']
    },
    {
      icon: <FaChartLine />,
      title: 'Analitika & Reporting',
      description: 'Üzleti intelligencia megoldások és egyedi riport rendszerek.',
      features: ['Dashboard-ok', 'KPI követés', 'Adatvizualizáció']
    }
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <Row className="section-header text-center mb-5">
          <Col>
            <h2 className="section-title">Szolgáltatásaink</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle mt-3">
              Komplex szoftverfejlesztési megoldások, amelyek támogatják vállalkozásod növekedését
            </p>
          </Col>
        </Row>

        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
