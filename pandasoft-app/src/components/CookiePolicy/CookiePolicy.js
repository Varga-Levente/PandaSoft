import React from 'react';
import { Container, Table, Alert } from 'react-bootstrap';
import { FaCookieBite, FaShieldAlt, FaClock, FaTrash } from 'react-icons/fa';
import './CookiePolicy.css';

const CookiePolicy = () => {
  const cookies = [
    {
      name: 'theme',
      purpose: 'Felhasználó által választott téma (világos/sötét) tárolása',
      type: 'Funkcionális',
      duration: 'Határozatlan idejű',
      provider: 'PandaSoft (első fél)'
    },
    {
      name: 'cookieConsent',
      purpose: 'Cookie hozzájárulás állapotának tárolása',
      type: 'Szükséges',
      duration: 'Határozatlan idejű',
      provider: 'PandaSoft (első fél)'
    },
    {
      name: 'cf_clearance',
      purpose: 'Cloudflare bot védelem és biztonság',
      type: 'Biztonság',
      duration: '30 perc',
      provider: 'Cloudflare (harmadik fél)'
    },
    {
      name: '__cf_bm',
      purpose: 'Cloudflare bot menedzsment',
      type: 'Biztonság',
      duration: '30 perc',
      provider: 'Cloudflare (harmadik fél)'
    }
  ];

  return (
    <section className="cookie-policy-section">
      <Container>
        {/* Header */}
        <div className="cookie-policy-header text-center mb-5">
          <FaCookieBite className="cookie-policy-icon" />
          <h1>Cookie Szabályzat (Sütik)</h1>
          <p className="lead">
            Részletes tájékoztató a weboldalunkon használt sütikről (cookie-król)
          </p>
          <p className="last-updated">
            Utolsó frissítés: 2026. január 14.
          </p>
        </div>

        {/* Mi az a Cookie? */}
        <div className="cookie-policy-block">
          <h2>🍪 Mi az a Cookie (Süti)?</h2>
          <p>
            A cookie (süti) egy kis szövegfájl, amelyet a weboldal tárol a böngésződben. 
            Ezek segítenek megjegyezni a beállításaidat, preferenciáidat, és biztosítják 
            a weboldal megfelelő működését.
          </p>
          <p>
            A cookie-k nem tartalmaznak személyesen azonosítható adatokat (mint név, email cím), 
            és nem jelentenek biztonsági kockázatot a számítógépedre.
          </p>
        </div>

        {/* Miért használunk Cookie-kat? */}
        <div className="cookie-policy-block">
          <h2>❓ Miért Használunk Cookie-kat?</h2>
          <div className="cookie-reasons">
            <div className="cookie-reason-item">
              <FaShieldAlt className="reason-icon" />
              <div>
                <h3>Biztonság</h3>
                <p>Védelem bot-ok és automatizált támadások ellen (CAPTCHA)</p>
              </div>
            </div>
            <div className="cookie-reason-item">
              <FaClock className="reason-icon" />
              <div>
                <h3>Funkcionalitás</h3>
                <p>Beállítások megjegyzése (téma választás, időpontfoglalás)</p>
              </div>
            </div>
            <div className="cookie-reason-item">
              <FaCookieBite className="reason-icon" />
              <div>
                <h3>Felhasználói Élmény</h3>
                <p>Jobb, személyre szabott élmény biztosítása</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Táblázat */}
        <div className="cookie-policy-block">
          <h2>📋 Használt Cookie-k Részletesen</h2>
          <div className="cookie-table-wrapper">
            <Table striped bordered hover responsive className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Neve</th>
                  <th>Célja</th>
                  <th>Típus</th>
                  <th>Élettartam</th>
                  <th>Szolgáltató</th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((cookie, index) => (
                  <tr key={index}>
                    <td><code>{cookie.name}</code></td>
                    <td>{cookie.purpose}</td>
                    <td>
                      <span className={`cookie-type-badge ${cookie.type.toLowerCase()}`}>
                        {cookie.type}
                      </span>
                    </td>
                    <td>{cookie.duration}</td>
                    <td>{cookie.provider}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Cookie Típusok */}
        <div className="cookie-policy-block">
          <h2>🏷️ Cookie Típusok Magyarázata</h2>
          <div className="cookie-types">
            <div className="cookie-type-card">
              <h3>Szükséges Cookie-k</h3>
              <p>
                Ezek a cookie-k elengedhetetlenek a weboldal alapvető működéséhez. 
                Nélkülük a weboldal nem működne megfelelően. Példa: cookie hozzájárulás tárolása.
              </p>
            </div>
            <div className="cookie-type-card">
              <h3>Funkcionális Cookie-k</h3>
              <p>
                Ezek a cookie-k fokozzák a felhasználói élményt azáltal, hogy megjegyzik 
                a választásaidat (pl. sötét/világos téma). Ezek nélkül is használható a weboldal, 
                de kevésbé kényelmes.
              </p>
            </div>
            <div className="cookie-type-card">
              <h3>Biztonsági Cookie-k</h3>
              <p>
                Ezek a cookie-k védik a weboldalt és a felhasználókat a rosszindulatú 
                támadásoktól, bot-októl és spam-től. Példa: Cloudflare bot védelem, CAPTCHA.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie-k Kezelése */}
        <div className="cookie-policy-block">
          <h2>
            <FaTrash /> Cookie-k Törlése és Kezelése
          </h2>
          <p>
            Bármikor törölheted vagy letilthatod a cookie-kat a böngésződ beállításaiban:
          </p>
          <ul className="browser-list">
            <li><strong>Google Chrome:</strong> Beállítások → Adatvédelem és biztonság → Cookie-k és egyéb webhelyadatok</li>
            <li><strong>Firefox:</strong> Beállítások → Adatvédelem és biztonság → Cookie-k és webhelyadatok</li>
            <li><strong>Safari:</strong> Beállítások → Adatvédelem → Cookie-k kezelése</li>
            <li><strong>Edge:</strong> Beállítások → Cookie-k és webhely-engedélyek</li>
          </ul>
          <Alert variant="warning" className="mt-3">
            <strong>Figyelem:</strong> Ha letiltod a cookie-kat, egyes funkciók (pl. téma mentése, 
            időpontfoglalás) nem működnek megfelelően.
          </Alert>
        </div>

        {/* Harmadik Féltől Származó Cookie-k */}
        <div className="cookie-policy-block">
          <h2>🔗 Harmadik Féltől Származó Cookie-k</h2>
          <p>
            Weboldalunkon külső szolgáltatásokat is használunk, amelyek saját cookie-kat helyezhetnek el:
          </p>
          <div className="third-party-services">
            <div className="service-card">
              <h3>Cloudflare</h3>
              <p>Biztonság és bot védelem</p>
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
                Adatvédelmi Szabályzat →
              </a>
            </div>
          </div>
        </div>

        {/* Változások */}
        <div className="cookie-policy-block">
          <h2>📝 Változások a Cookie Szabályzatban</h2>
          <p>
            Fenntartjuk a jogot, hogy bármikor módosítsuk ezt a Cookie Szabályzatot. 
            A változásokról ezen az oldalon tájékoztatunk. Javasoljuk, hogy időnként 
            látogass vissza és ellenőrizd a frissítéseket.
          </p>
        </div>

        {/* Kapcsolat */}
        <div className="cookie-policy-block cookie-policy-contact">
          <h2>📧 Kérdések?</h2>
          <p>
            Ha bármilyen kérdésed van a cookie-król vagy az adatvédelemről, 
            lépj velünk kapcsolatba:
          </p>
          <p>
            <strong>Email:</strong> info@pandasoft.hu<br />
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CookiePolicy;
