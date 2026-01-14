import React, { useState } from 'react';
import { Button, Card, ListGroup, Spinner } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaCalendar, FaClock, FaCheckCircle } from 'react-icons/fa';
import './Steps.css';

const ConfirmationStep = ({ formData, prevStep, handleSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      await handleSubmit();
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="step-content text-center">
        <div className="success-animation">
          <FaCheckCircle className="success-icon" />
        </div>
        <h3 className="success-title">Sikeres Foglalás!</h3>
        <p className="success-message">
          Köszönjük a foglalást! Megerősítő emailt küldtünk a megadott címre.
          <br />
          Hamarosan felvesszük veled a kapcsolatot.
        </p>
        <Button 
          href="/" 
          className="nav-btn btn-next mt-4"
        >
          Vissza a Főoldalra
        </Button>
      </div>
    );
  }

  return (
    <div className="step-content">
      <div className="step-header mb-4">
        <h3 className="step-heading">Foglalás Megerősítése</h3>
        <p className="step-description">
          Kérjük, ellenőrizd az adataidat és erősítsd meg a foglalást
        </p>
      </div>

      <Card className="confirmation-card mb-4">
        <Card.Header className="confirmation-header">
          <h4>Személyes Adatok</h4>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="confirmation-item">
            <div className="item-label">
              <FaUser className="item-icon" /> Név
            </div>
            <div className="item-value">{formData.name}</div>
          </ListGroup.Item>
          
          <ListGroup.Item className="confirmation-item">
            <div className="item-label">
              <FaEnvelope className="item-icon" /> Email
            </div>
            <div className="item-value">{formData.email}</div>
          </ListGroup.Item>
          
          <ListGroup.Item className="confirmation-item">
            <div className="item-label">
              <FaPhone className="item-icon" /> Telefon
            </div>
            <div className="item-value">{formData.phone}</div>
          </ListGroup.Item>
          
          {formData.company && (
            <ListGroup.Item className="confirmation-item">
              <div className="item-label">
                <FaBuilding className="item-icon" /> Cégnév
              </div>
              <div className="item-value">{formData.company}</div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>

      <Card className="confirmation-card mb-4">
        <Card.Header className="confirmation-header">
          <h4>Konzultáció Időpontja</h4>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="confirmation-item">
            <div className="item-label">
              <FaCalendar className="item-icon" /> Dátum
            </div>
            <div className="item-value">
              {formData.selectedDate && new Date(formData.selectedDate).toLocaleDateString('hu-HU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </ListGroup.Item>
          
          <ListGroup.Item className="confirmation-item">
            <div className="item-label">
              <FaClock className="item-icon" /> Időpont
            </div>
            <div className="item-value">{formData.selectedTime}</div>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {formData.message && (
        <Card className="confirmation-card mb-4">
          <Card.Header className="confirmation-header">
            <h4>Üzenet</h4>
          </Card.Header>
          <Card.Body>
            <p className="message-content">{formData.message}</p>
          </Card.Body>
        </Card>
      )}

      <div className="confirmation-info">
        <p>
          <strong>Fontos:</strong> A konzultáció időtartama 30 perc. 
          A megadott email címre megerősítő levelet küldünk, mely tartalmazza 
          a találkozó részleteit és a csatlakozási linket.
        </p>
      </div>

      <div className="form-navigation">
        <Button 
          onClick={prevStep} 
          className="nav-btn btn-back"
          disabled={isSubmitting}
        >
          ← Vissza
        </Button>
        <Button 
          onClick={onSubmit} 
          className="nav-btn btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Foglalás...
            </>
          ) : (
            'Foglalás Megerősítése'
          )}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
