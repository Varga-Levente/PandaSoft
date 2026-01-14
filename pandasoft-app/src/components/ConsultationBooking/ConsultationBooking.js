import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import PersonalInfoStep from './PersonalInfoStep';
import CalendarStep from './CalendarStep';
import ConfirmationStep from './ConfirmationStep';
import './ConsultationBooking.css';

const ConsultationBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Személyes adatok
    name: '',
    email: '',
    phone: '',
    company: '',
    // Időpont adatok
    selectedDate: null,
    selectedTime: null,
    // Egyéb
    message: ''
  });

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const updateFormData = (newData) => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/consultations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Sikeres foglalás
        alert('Konzultáció sikeresen lefoglalva!');
        // Reset form vagy redirect
      } else {
        alert('Hiba történt a foglalás során.');
      }
    } catch (error) {
      console.error('Error booking consultation:', error);
      alert('Hiba történt a foglalás során.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <CalendarStep
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <ConfirmationStep
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const stepTitles = [
    'Személyes Adatok',
    'Időpont Választás',
    'Megerősítés'
  ];

  return (
    <section className="consultation-booking-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="booking-header text-center mb-5">
              <h1 className="booking-title">Konzultáció Foglalás</h1>
              <p className="booking-subtitle">
                Foglalj egy ingyenes 30 perces konzultációt
              </p>
            </div>

            <div className="progress-wrapper mb-4">
              <div className="step-indicators">
                {stepTitles.map((title, index) => (
                  <div
                    key={index}
                    className={`step-indicator ${
                      currentStep === index + 1 ? 'active' : ''
                    } ${currentStep > index + 1 ? 'completed' : ''}`}
                  >
                    <div className="step-number">{index + 1}</div>
                    <div className="step-title">{title}</div>
                  </div>
                ))}
              </div>
              <ProgressBar
                now={progressPercentage}
                className="custom-progress"
              />
            </div>

            <div className="booking-form-wrapper">
              {renderStep()}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConsultationBooking;
