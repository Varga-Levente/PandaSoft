import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCookieBite } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../../contexts/CookieContext';
import './CookieBanner.css';

const CookieBanner = () => {
  const { showBanner, acceptCookies, rejectCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner">
        <div className="cookie-banner-icon">
          <FaCookieBite />
        </div>
        
        <div className="cookie-banner-content">
          <h3>🍪 Sütik (Cookie-k) Használata</h3>
          <p>
            Weboldalunk sütiket (cookie-kat) használ a legjobb felhasználói élmény biztosítása érdekében. 
            Ezek segítenek megőrizni a beállításokat (pl. sötét/világos téma) és biztosítják 
            a szolgáltatásaink megfelelő működését (időpontfoglalás, űrlap védelem).
          </p>
          <p className="cookie-banner-details">
            <Link to="/cookie" onClick={() => {}}>
              Tudjon meg többet a cookie-król →
            </Link>
          </p>
        </div>

        <div className="cookie-banner-actions">
          <Button 
            variant="outline-secondary" 
            onClick={rejectCookies}
            className="cookie-btn-reject"
          >
            Elutasítom
          </Button>
          <Button 
            variant="primary" 
            onClick={acceptCookies}
            className="cookie-btn-accept"
          >
            Elfogadom
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
