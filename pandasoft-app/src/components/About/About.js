import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: 'Skálázható fejlesztői kapacitás',
      description: 'Egyéni fejlesztőként dolgozom, azonban nagyobb volumenű projektek esetén tapasztalt fejlesztői gárda bevonásával skálázható a megvalósítás.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovatív Megoldások',
      description: 'A legújabb technológiákat használjuk a legjobb eredmény érdekében. Ezért folyamatosan követjük a technológiai trendeket.'
    },
    {
      icon: <FaAward />,
      title: 'Minőség és biztonság',
      description: 'A projektek megvalósítása során a magas kódminőség, a tesztelhetőség és az adatbiztonsági szempontok egyaránt elsődlegesek.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="section-header text-center mb-5">
          <Col>
            <h2 className="section-title">Rólunk</h2>
            <div className="title-underline"></div>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="about-content">
            <h3 className="about-subtitle">Ki a PandaSoft?</h3>
            <p className="about-text">
              Varga Levente, vagyok a PandaSoft alapítója, Debreceni Egyetem Mérnökinformatikus hallgatója.
              Szenvedélyből programozok, maximalista szemlélettel közelítem meg a fejlesztést, és célom, hogy
              a saját programjaimmal segítsem az embereket előrébb lépni, legyen szó hatékonyságról,
              kreativitásról vagy a mindennapi feladatok egyszerűsítéséről.
            </p>
            <p className="about-text">
              Elsősorban egyedül dolgozom, így minden részletre személyesen tudok odafigyelni.
              A projekt méretétől és komplexitásától függően képes vagyok jól összehangolt,
              több fős fejlesztőcsapatot bevonni, akik évek óta együtt dolgoznak, és megfelelnek
              a maximalista elvárásaimnak. Ez lehetővé teszi, hogy bármilyen kihívást gyorsan és
              megbízhatóan kezeljek, miközben a legmagasabb minőségi szintet tartom szem előtt.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>Egyedi szoftverfejlesztés</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>Webes és mobil alkalmazások</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>Folyamatos támogatás és karbantartás</span>
              </div>
            </div>
          </Col>
          <Col lg={6} className="about-image-col">
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <img 
                src="/about-image.jpg" 
                alt="PandaSoft Team" 
                className="about-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.about-image-placeholder').style.display = 'flex';
                }}
              />
              <div className="about-image-placeholder">
                <FaUsers className="placeholder-icon" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="features-row">
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
