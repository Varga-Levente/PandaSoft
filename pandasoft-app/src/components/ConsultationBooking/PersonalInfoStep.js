import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import './Steps.css';

const PersonalInfoStep = ({ formData, updateFormData, nextStep }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    nextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
      <div className="step-content">
        <div className="step-header mb-4">
          <h3 className="step-heading">Személyes Adatok</h3>
          <p className="step-description">
            Kérjük, add meg az adataidat, hogy fel tudjuk venni veled a kapcsolatot
          </p>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formName">
                <label className="form-label">
                  <FaUser className="form-icon" /> Teljes Név *
                </label>
                <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="Kovács János"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Kérjük, add meg a neved.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formEmail">
                <label className="form-label">
                  <FaEnvelope className="form-icon" /> Email Cím *
                </label>
                <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="kovacs.janos@email.hu"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Kérjük, adj meg egy érvényes email címet.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formPhone">
                <label className="form-label">
                  <FaPhone className="form-icon" /> Telefonszám *
                </label>
                <Form.Control
                    required
                    type="tel"
                    name="phone"
                    placeholder="+36 30 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[+]?[0-9\s-]+"
                />
                <Form.Control.Feedback type="invalid">
                  Kérjük, adj meg egy érvényes telefonszámot.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formCompany">
                <label className="form-label">
                  <FaBuilding className="form-icon" /> Cégnév (opcionális)
                </label>
                <Form.Control
                    type="text"
                    name="company"
                    placeholder="Cég Kft."
                    value={formData.company}
                    onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formMessage">
            <label className="form-label">Üzenet (opcionális)</label>
            <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Röviden írd le, miben tudunk segíteni..."
                value={formData.message}
                onChange={handleChange}
            />
          </Form.Group>

          <div className="form-navigation">
            <div></div>
            <Button type="submit" className="nav-btn btn-next">
              Tovább a Naptárhoz →
            </Button>
          </div>
        </Form>
      </div>
  );
};

export default PersonalInfoStep;