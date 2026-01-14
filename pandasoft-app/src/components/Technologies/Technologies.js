import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaJava, FaGit } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandSocketIo } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { SiMongodb, SiPostgresql, SiKubernetes, SiTypescript, SiFlask, SiNginx, SiMariadb } from 'react-icons/si';
import './Technologies.css';

const Technologies = () => {
  const technologies = [
    { icon: <TbBrandCSharp />, name: 'C#', color: '#3776AB' },
    { icon: <FaJava />, name: 'Java', color: '#519aa6' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <SiFlask />, name: 'Flask', color: '#ffffff' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
    { icon: <SiMariadb />, name: 'MariaDB', color: '#c49a6c' },
    { icon: <DiRedis />, name: 'Redis', color: '#dd3528' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5' },
    { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
    { icon: <FaGit />, name: 'Git', color: '#de4c36' },
    { icon: <SiNginx />, name: 'Nginx', color: '#419b45' },
    { icon: <TbBrandSocketIo />, name: 'Socket.IO', color: '#48b7cc' }
  ];

  return (
    <section id="technologies" className="technologies-section">
      <Container>
        <Row className="section-header text-center mb-5">
          <Col>
            <h2 className="section-title">Technológiák</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle mt-3">
              A legmodernebb eszközökkel és technológiákkal dolgozunk
            </p>
          </Col>
        </Row>

        <Row className="technologies-grid">
          {technologies.map((tech, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-4">
              <div className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col>
            <div className="tech-info-box">
              <h3 className="tech-info-title">Miért ezeket a technológiákat használjuk?</h3>
              <p className="tech-info-text">
                A modern szoftverfejlesztés gyorsan változó világa megköveteli, hogy mindig naprakészek 
                legyünk a legújabb technológiákkal. Csapatunk folyamatosan képzi magát, és csak olyan 
                eszközöket használ, amelyek bizonyítottan hatékonyak, skálázhatóak és hosszú távon 
                támogatottak. Ez garantálja, hogy a projekted jövőálló legyen.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;
