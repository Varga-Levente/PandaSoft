import React from 'react';
import { FaCookieBite } from 'react-icons/fa';
import { useCookieConsent } from '../../contexts/CookieContext';
import './CookieButton.css';

const CookieButton = () => {
  const { resetConsent, cookieConsent } = useCookieConsent();

  // Ha már van döntés, ne jelenjen meg a banner, csak a gomb
  if (!cookieConsent) return null;

  return (
    <button 
      className="cookie-float-button"
      onClick={resetConsent}
      aria-label="Cookie beállítások"
      title="Cookie beállítások megnyitása"
    >
      <FaCookieBite />
    </button>
  );
};

export default CookieButton;
