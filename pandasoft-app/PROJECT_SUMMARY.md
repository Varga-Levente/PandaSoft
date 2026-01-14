# PandaSoft Weboldal - Projekt Összefoglaló

## 📦 Tartalom

A projekt teljes React Bootstrap alapú weboldal forráskódját tartalmazza, amely a következő főbb elemeket foglalja magában:

### ✨ Főbb Funkciók

1. **Automatikus Téma (Light/Dark)**
   - Rendszer téma alapján automatikus váltás
   - Smooth átmenetek a témák között

2. **Mobil-barát Navigáció**
   - Desktop: Hagyományos navbar
   - Mobil: Hamburger menü jobb felső sarokban
   - Smooth scrolling a szekciók között

3. **Főoldal Szekciók**
   - Hero (főoldal vezető szekció animációkkal)
   - About (bemutatkozás - Lorem Ipsum-mal)
   - Services (szolgáltatások kártyákban)
   - References (referenciák - KÖNNYEN MÓDOSÍTHATÓ!)
   - Technologies (használt technológiák ikonokkal)
   - Contact (kapcsolat form Cloudflare CAPTCHA-val)
   - Footer (linkek, social media, sitemap)

4. **Konzultáció Foglalás (3 lépéses)**
   - Lépés 1: Személyes adatok (név, email, telefon, cég)
   - Lépés 2: Google Calendar integráció fél órás sávokkal
   - Lépés 3: Megerősítés és foglalás elküldése

### 🗂️ Fájl Struktúra (32 fájl)

```
pandasoft-website/
├── package.json                 # NPM függőségek
├── .env                        # API kulcsok (KITÖLTENDŐ!)
├── .gitignore
├── README.md                   # Részletes dokumentáció
├── INSTALLATION.md            # Telepítési útmutató
├── public/
│   └── index.html             # HTML template SEO meta tagekkel
└── src/
    ├── index.js               # React entry point
    ├── index.css              # Globális CSS
    ├── App.js                 # Fő komponens, routing, téma
    ├── App.css                # Téma változók
    └── components/
        ├── Navigation/        # Navbar (desktop + mobil)
        │   ├── Navigation.js
        │   └── Navigation.css
        ├── Hero/             # Hero szekció
        │   ├── Hero.js
        │   └── Hero.css
        ├── About/            # Bemutatkozás
        │   ├── About.js
        │   └── About.css
        ├── Services/         # Szolgáltatások
        │   ├── Services.js
        │   └── Services.css
        ├── References/       # Referenciák
        │   ├── References.js
        │   └── References.css
        ├── Technologies/     # Technológiák
        │   ├── Technologies.js
        │   └── Technologies.css
        ├── Contact/          # Kapcsolat form
        │   ├── Contact.js
        │   └── Contact.css
        ├── Footer/           # Footer
        │   ├── Footer.js
        │   └── Footer.css
        └── ConsultationBooking/  # Konzultáció foglalás
            ├── ConsultationBooking.js
            ├── ConsultationBooking.css
            ├── PersonalInfoStep.js
            ├── CalendarStep.js
            ├── ConfirmationStep.js
            └── Steps.css
```

### 🎨 Design Jellemzők

- **Színséma**: 
  - Primary: #0066cc (kék)
  - Secondary: #00cc99 (zöld)
  - Mindkettő testreszabható az App.css-ben

- **Reszponzivitás**: 
  - Bootstrap grid rendszer
  - Breakpoints: 768px, 991px, 1200px
  - Mobile-first megközelítés

- **Animációk**:
  - Fade in, slide up effektek
  - Hover állapotok
  - Smooth transitions

### 🔧 Technológiák

- React 18.2.0
- React Bootstrap 2.9.1
- React Router DOM 6.20.0
- FullCalendar 6.1.10 (naptár)
- React Turnstile 1.1.2 (Cloudflare CAPTCHA)
- React Icons 4.12.0

### 📝 Legfontosabb Testreszabási Pontok

1. **Referenciák módosítása** (References.js)
   - `references` tömb egyszerű szerkesztése
   - Kép, cím, leírás, link, tagek

2. **Bemutatkozás szöveg** (About.js)
   - Lorem Ipsum helyére saját szöveg

3. **Színek** (App.css)
   - CSS változók módosítása

4. **Környezeti változók** (.env)
   - Cloudflare Site Key
   - API URL
   - Google Calendar credentials

### 🚀 Első Lépések

1. Csomagold ki a `pandasoft-website.tar.gz` fájlt
2. `npm install`
3. Töltsd ki a `.env` fájlt
4. `npm start`
5. Látogass el: http://localhost:3000

### 📚 Dokumentáció

- **README.md** - Teljes dokumentáció magyarul
- **INSTALLATION.md** - Részletes telepítési útmutató
- Minden komponens önálló, jól kommentezett

### ⚙️ API Integráció

A frontend fel van készítve az alábbi backend endpointokra:

1. `POST /contact` - Kapcsolat form
2. `POST /consultations` - Konzultáció foglalás
3. `GET /calendar/events` - Google Calendar események

### 🎯 Következő Lépések

1. Logo és képek hozzáadása (`public/` mappa)
2. Bemutatkozás szöveg módosítása
3. Backend API fejlesztése
4. Google Calendar API beállítása
5. Cloudflare Turnstile konfiguráció
6. Production build és deployment

### 💡 Gyors Tippek

- **Referenciák**: A `References.js`-ben a `references` tömböt szerkeszd
- **Színek**: Az `App.css`-ben a `:root` változókat módosítsd
- **Szövegek**: Keress rá a "Lorem ipsum"-ra és cseréld le
- **Képek**: Helyezd el a `public/` mappába és hivatkozd

### 🆘 Segítség

Ha problémád van:
1. Nézd meg a README.md "Gyakori Problémák" szekcióját
2. Ellenőrizd a konzolt hibákért
3. Győződj meg róla, hogy minden függőség telepítve van

---

## 📦 Csomag Tartalma

- **pandasoft-website.tar.gz** - Teljes projekt forráskód
- 32 fájl (JS, CSS, JSON, HTML, MD)
- ~25KB tömörített méret
- ~200KB kicsomagolva (node_modules nélkül)

**Készítés dátuma**: 2024. január 12.
**Verzió**: 1.0.0

© 2024 PandaSoft. Minden jog fenntartva.
