# PandaSoft Weboldal

Modern, reszponzív weboldal React és Bootstrap segítségével, automatikus témával (light/dark) és Cloudflare Turnstile CAPTCHA védelemmel.

## Főbb Funkciók

- ✨ **Automatikus téma**: A rendszer téma alapján (light/dark)
- 📱 **Mobil-barát**: Teljes reszponzív design hamburger menüvel
- 🎨 **Modern UI**: React Bootstrap komponensekkel
- 📧 **Kapcsolat form**: Cloudflare Turnstile CAPTCHA védelemmel
- 📅 **Konzultáció foglalás**: Többlépcsős form Google Calendar integrációval
- 🎯 **Referenciák**: Könnyen módosítható referencia szekció
- 🚀 **Szolgáltatások**: Moduláris szolgáltatás kártyák

## Technológiák

- React 18
- React Bootstrap 5
- React Router DOM
- FullCalendar (Google Calendar integráció)
- Cloudflare Turnstile (CAPTCHA)
- React Icons

## Telepítés

1. **Függőségek telepítése:**
```bash
npm install
```

2. **.env fájl konfigurálása:**
Másold át a `.env` fájlt és töltsd ki a saját API kulcsaiddal:
```
REACT_APP_CLOUDFLARE_SITE_KEY=your_cloudflare_site_key
REACT_APP_API_BASE_URL=https://api.pandasoft.com
REACT_APP_GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

3. **Fejlesztői szerver indítása:**
```bash
npm start
```

A weboldal megnyílik a [http://localhost:3000](http://localhost:3000) címen.

## Projekt Struktúra

```
pandasoft-website/
├── public/
│   ├── logo.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   ├── Navigation.js
│   │   │   └── Navigation.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Services/
│   │   │   ├── Services.js
│   │   │   └── Services.css
│   │   ├── References/
│   │   │   ├── References.js
│   │   │   └── References.css
│   │   ├── Technologies/
│   │   │   ├── Technologies.js
│   │   │   └── Technologies.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   └── ConsultationBooking/
│   │       ├── ConsultationBooking.js
│   │       ├── ConsultationBooking.css
│   │       ├── PersonalInfoStep.js
│   │       ├── CalendarStep.js
│   │       ├── ConfirmationStep.js
│   │       └── Steps.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── package.json
└── README.md
```

## Komponensek

### Navigation
Reszponzív navigációs sáv automatikus hamburger menüvel mobilon.

### Hero
Főoldal hero szekció animációkkal és call-to-action gombokkal.

### About
Bemutatkozó szekció Lorem Ipsum tartalommal (később testreszabható).

### Services
Szolgáltatások megjelenítése kártyákban, ikonokkal.

### References
**Könnyen módosítható referencia szekció!**
A `References.js` fájlban a `references` tömbben lehet hozzáadni/módosítani referenciákat:

```javascript
const references = [
  {
    id: 1,
    title: 'Projekt neve',
    description: 'Rövid leírás',
    image: '/reference1.jpg',
    link: 'https://example.com',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  // További referenciák...
];
```

### Technologies
Használt technológiák megjelenítése ikonokkal.

### Contact
Kapcsolati űrlap Cloudflare Turnstile CAPTCHA védelemmel.

### ConsultationBooking
Többlépcsős konzultáció foglalási rendszer:
1. **Személyes adatok** - Név, email, telefon, cégnév
2. **Időpont választás** - Google Calendar integráció, fél órás időpontok
3. **Megerősítés** - Adatok áttekintése és foglalás megerősítése

## Testreszabás

### Referenciák Hozzáadása
A `src/components/References/References.js` fájlban:

```javascript
const references = [
  // Új referencia hozzáadása:
  {
    id: 7,
    title: 'Új Projekt',
    description: 'Projekt leírása',
    image: '/reference7.jpg',
    link: 'https://project-url.com',
    tags: ['React', 'TypeScript', 'PostgreSQL']
  }
];
```

### Színek Módosítása
A `src/App.css` fájlban:

```css
:root {
  --primary-color: #0066cc;  /* Főszín */
  --secondary-color: #00cc99;  /* Másodlagos szín */
}
```

### Google Calendar Integráció
1. Google Cloud Console-ban engedélyezd a Calendar API-t
2. Hozz létre OAuth 2.0 credentials-t
3. Töltsd ki a `.env` fájlt az API kulcsokkal
4. A `CalendarStep.js` komponens már fel van készítve a Google Calendar API használatára

## Backend API Endpointok

Az alábbi API endpointokat kell implementálni:

### Kapcsolat Form
- **POST** `/contact`
- Body: `{ name, email, subject, message, captchaToken }`

### Konzultáció Foglalás
- **POST** `/consultations`
- Body: `{ name, email, phone, company, selectedDate, selectedTime, message }`

### Google Calendar
- **GET** `/calendar/events`
- Headers: `Authorization: Bearer {token}`

## Build

Éles verzió készítése:
```bash
npm run build
```

## Licensz

© 2024 PandaSoft. Minden jog fenntartva.
