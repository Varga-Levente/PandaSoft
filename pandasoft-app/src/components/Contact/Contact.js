import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Turnstile from 'react-turnstile';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false || !captchaToken) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // API hívás a form adatokkal
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCaptchaToken(null);
        setValidated(false);

        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@pandasoft.hu',
      link: 'mailto:info@pandasoft.hu'
    }
  ];

  return (
      <section id="contact" className="contact-section">
        <Container>
          <Row className="section-header text-center mb-5">
            <Col>
              <h2 className="section-title">Kapcsolat</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle mt-3">
                Vedd fel velünk a kapcsolatot és valósítsuk meg együtt a projektjeidet
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            {contactInfo.map((info, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">
                  <a href={info.link} className="contact-info-card">
                    <div className="contact-icon-wrapper">
                      {info.icon}
                    </div>
                    <h4 className="contact-info-title">{info.title}</h4>
                    <p className="contact-info-content">{info.content}</p>
                  </a>
                </Col>
            ))}
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="contact-form-wrapper">
                {showSuccess && (
                    <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
                      Üzeneted sikeresen elküldtük! Hamarosan felvesszük veled a kapcsolatot.
                    </Alert>
                )}

                {showError && (
                    <Alert variant="danger" dismissible onClose={() => setShowError(false)}>
                      Hiba történt az üzenet küldése során. Kérjük, próbáld újra később.
                    </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formName">
                        <label className="form-label">Név *</label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            placeholder="Add meg a neved"
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
                        <label className="form-label">Email *</label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            placeholder="pelda@email.hu"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Kérjük, adj meg egy érvényes email címet.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <label className="form-label">Tárgy *</label>
                    <Form.Control
                        required
                        type="text"
                        name="subject"
                        placeholder="Miben segíthetünk?"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Kérjük, add meg a tárgyat.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <label className="form-label">Üzenet *</label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Írd le részletesen, miben tudunk segíteni..."
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Kérjük, írj egy üzenetet.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="captcha-wrapper mb-3">
                    <Turnstile
                        sitekey={process.env.REACT_APP_CLOUDFLARE_SITE_KEY}
                        onVerify={handleCaptcha}
                        theme="auto"
                    />
                  </div>

                  <Button
                      variant="primary"
                      type="submit"
                      className="submit-btn w-100"
                      disabled={isSubmitting || !captchaToken}
                  >
                    {isSubmitting ? 'Küldés...' : (
                        <>
                          <FaPaperPlane className="btn-icon" />&nbsp;
                          Üzenet küldése
                        </>
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Contact;