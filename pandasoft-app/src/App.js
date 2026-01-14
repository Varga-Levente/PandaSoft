import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CookieProvider } from './contexts/CookieContext';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import References from './components/References/References';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ConsultationBooking from './components/ConsultationBooking/ConsultationBooking';
import FAQ from './components/FAQ/FAQ';
import CookiePolicy from './components/CookiePolicy/CookiePolicy';
import CookieBanner from './components/CookieBanner/CookieBanner';
import CookieButton from './components/CookieButton/CookieButton';
import ASZF from './components/ASZF/ASZF';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App() {
  const [theme, setTheme] = useState(() => {
    // Először ellenőrizzük van-e mentett téma
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Ha nincs, akkor rendszer témát használunk
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Rendszer téma változás figyelése (csak ha nincs mentett téma)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      // Csak akkor frissítjük automatikusan, ha a felhasználó nem választott témát manuálisan
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
      <CookieProvider>
        <Router>
          <div className="App" data-theme={theme}>
            <Routes>
              <Route path="/" element={
                <>
                  <Navigation theme={theme} toggleTheme={toggleTheme} />
                  <Hero />
                  <About />
                  <Services />
                  <References />
                  <Technologies />
                  <Contact />
                  <Footer />
                </>
              } />
              <Route path="/konzultacio" element={
                <>
                  <Navigation theme={theme} toggleTheme={toggleTheme} />
                  <ConsultationBooking />
                  <Footer />
                </>
              } />
              <Route path="/gyik" element={
                <>
                  <Navigation theme={theme} toggleTheme={toggleTheme} />
                  <FAQ />
                  <Footer />
                </>
              } />
              <Route path="/cookie" element={
                <>
                  <Navigation theme={theme} toggleTheme={toggleTheme} />
                  <CookiePolicy />
                  <Footer />
                </>
              } />
              <Route path="/aszf" element={
                <>
                  <Navigation theme={theme} toggleTheme={toggleTheme} />
                  <ASZF />
                  <Footer />
                </>
              } />
              <Route path="/adatvedelem" element={
                <>
                  <Navigation theme={theme} toggleTheme={toggleTheme} />
                  <PrivacyPolicy />
                  <Footer />
                </>
              } />
            </Routes>

            {/* Cookie Banner és Button */}
            <CookieBanner />
            <CookieButton />
          </div>
        </Router>
      </CookieProvider>
  );
}

export default App;