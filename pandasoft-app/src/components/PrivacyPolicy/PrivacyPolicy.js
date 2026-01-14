import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaShieldAlt, FaUserLock, FaDatabase, FaExclamationTriangle } from 'react-icons/fa';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const dataProcessing = [
        {
            purpose: 'Kapcsolatfelvétel, ajánlatkérés',
            data: 'Név, email cím, cégnév, üzenet',
            legal: 'Hozzájárulás (GDPR 6. cikk (1) a)',
            duration: '2 év vagy kérésre azonnali törlés'
        },
        {
            purpose: 'Időpontfoglalás',
            data: 'Név, email, telefonszám, konzultáció témája',
            legal: 'Hozzájárulás (GDPR 6. cikk (1) a)',
            duration: '2 év vagy kérésre azonnali törlés'
        },
        {
            purpose: 'Szerződéses szolgáltatás nyújtása',
            data: 'Név, email, cég adatok, számlázási adatok',
            legal: 'Szerződés teljesítése (GDPR 6. cikk (1) b)',
            duration: 'Számviteli megőrzési kötelezettség: 8 év'
        },
        {
            purpose: 'Weboldal működése (cookie-k)',
            data: 'Téma választás (dark/light mode)',
            legal: 'Hozzájárulás (GDPR 6. cikk (1) a)',
            duration: 'Határozatlan idejű (localStorage)'
        },
        {
            purpose: 'Bot védelem (Cloudflare)',
            data: 'IP cím, böngésző adatok',
            legal: 'Jogos érdek (GDPR 6. cikk (1) f)',
            duration: '30 perc (session)'
        }
    ];

    return (
        <section className="privacy-section">
            <Container>
                {/* Header */}
                <div className="privacy-header text-center mb-5">
                    <FaShieldAlt className="privacy-icon" />
                    <h1>Adatkezelési Tájékoztató</h1>
                    <p className="lead">
                        A Varga Levente István ev. adatvédelmi és adatkezelési szabályzata
                    </p>
                    <p className="last-updated">
                        Utolsó módosítás: 2026. január 14.<br />
                        Hatálybalépés: 2027. január 14.
                    </p>
                </div>

                {/* 1. Bevezető */}
                <div className="privacy-block">
                    <h2><FaUserLock /> 1. Bevezető és Adatkezelő Adatai</h2>

                    <h3>1.1. Adatkezelő Azonosítása</h3>
                    <p>
                        <strong>Adatkezelő neve:</strong> Varga Levente István ev.<br />
                        <strong>Székhely:</strong> 4034 Debrecen, Zöld utca 4.<br />
                        <strong>Adószám:</strong> 91174343-1-29<br />
                        <strong>Email:</strong> <a href="mailto:info@pandasoft.hu">info@pandasoft.hu</a><br />
                        <strong>Weboldal:</strong> <a href="https://pandasoft.hu">https://pandasoft.hu</a>
                    </p>

                    <h3>1.2. Általános Információk</h3>
                    <p>
                        A Varga Levente István ev. (a továbbiakban: Adatkezelő) elkötelezett a személyes adatok védelme
                        és a magánélet tiszteletben tartása mellett. Jelen adatkezelési tájékoztató (a továbbiakban:
                        Tájékoztató) célja, hogy átlátható és közérthető információkat nyújtson arról, hogy az
                        Adatkezelő hogyan gyűjti, használja, tárolja és védi a személyes adatokat.
                    </p>

                    <h3>1.3. Jogi Alapok</h3>
                    <p>
                        Az adatkezelés megfelel az alábbi jogszabályoknak:
                    </p>
                    <ul>
                        <li>
                            Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (általános adatvédelmi rendelet,
                            GDPR)
                        </li>
                        <li>
                            2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról
                            (Infotv.)
                        </li>
                        <li>
                            2013. évi V. törvény a Polgári Törvénykönyvről (Ptk.)
                        </li>
                        <li>
                            2000. évi C. törvény a számvitelről (Számv. tv.)
                        </li>
                    </ul>
                </div>

                {/* 2. Fogalmak */}
                <div className="privacy-block">
                    <h2>2. Fogalommeghatározások</h2>

                    <ul>
                        <li>
                            <strong>Személyes adat:</strong> Azonosított vagy azonosítható természetes személyre
                            vonatkozó bármely információ (név, email, telefonszám, IP cím, stb.)
                        </li>
                        <li>
                            <strong>Érintett:</strong> Az a természetes személy, akinek személyes adatait kezeljük
                        </li>
                        <li>
                            <strong>Adatkezelő:</strong> Varga Levente István ev., aki az adatkezelés céljait és eszközeit meghatározza
                        </li>
                        <li>
                            <strong>Adatfeldolgozó:</strong> Az a természetes vagy jogi személy, aki az Adatkezelő
                            nevében személyes adatokat kezel (pl. Calendly, Cloudflare)
                        </li>
                        <li>
                            <strong>Hozzájárulás:</strong> Az érintett akaratának önkéntes, konkrét, megfelelő
                            tájékoztatáson alapuló kifejezése
                        </li>
                        <li>
                            <strong>Adattörlés:</strong> A személyes adatok olyan jelölése, amely után további
                            használatuk korlátozott
                        </li>
                    </ul>
                </div>

                {/* 3. Adatkezelések táblázata */}
                <div className="privacy-block">
                    <h2><FaDatabase /> 3. Adatkezelések Összefoglalása</h2>

                    <div className="privacy-table-wrapper">
                        <Table striped bordered hover responsive className="privacy-table">
                            <thead>
                            <tr>
                                <th>Adatkezelés Célja</th>
                                <th>Kezelt Adatok</th>
                                <th>Jogalap</th>
                                <th>Tárolási Idő</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataProcessing.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.purpose}</td>
                                    <td>{item.data}</td>
                                    <td>{item.legal}</td>
                                    <td>{item.duration}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* 4. Kapcsolatfelvétel */}
                <div className="privacy-block">
                    <h2>4. Kapcsolatfelvételi Űrlap és Ajánlatkérés</h2>

                    <h3>4.1. Kezelt Adatok</h3>
                    <p>A kapcsolatfelvételi űrlap kitöltésekor az alábbi adatokat kezeljük:</p>
                    <ul>
                        <li>Név (kötelező)</li>
                        <li>Email cím (kötelező)</li>
                        <li>Telefonszám (opcionális)</li>
                        <li>Cégnév (opcionális)</li>
                        <li>Üzenet tartalma (kötelező)</li>
                        <li>IP cím (automatikusan rögzítve, bot védelem céljából)</li>
                        <li>Időbélyeg (küldés időpontja)</li>
                    </ul>

                    <h3>4.2. Adatkezelés Célja</h3>
                    <p>
                        Az adatkezelés célja a megkeresésre való válaszadás, ajánlatkészítés, kapcsolattartás
                        és a szolgáltatás nyújtásának megkezdése.
                    </p>

                    <h3>4.3. Jogalap</h3>
                    <p>
                        Az adatkezelés jogalapja az érintett hozzájárulása (GDPR 6. cikk (1) a). A hozzájárulást
                        az űrlap elküldésével adja meg.
                    </p>

                    <h3>4.4. Adattárolás Időtartama</h3>
                    <p>
                        Az adatokat 2 évig tároljuk, vagy az érintett kérésére hamarabb töröljük. Ha szerződés
                        jön létre, az adatok a szerződéssel kapcsolatos adatkezelések keretében kerülnek tárolásra.
                    </p>

                    <h3>4.5. Adatfeldolgozók</h3>
                    <ul>
                        <li>
                            <strong>Cloudflare Turnstile:</strong> Bot védelem és CAPTCHA szolgáltatás
                            <br />Adatvédelmi szabályzat:
                            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
                                https://www.cloudflare.com/privacypolicy/
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 5. Időpontfoglalás */}
                <div className="privacy-block">
                    <h2>5. Időpontfoglalás</h2>

                    <h3>5.1. Kezelt Adatok</h3>
                    <p>Az időpontfoglalás során az alábbi adatokat kezeljük:</p>
                    <ul>
                        <li>Név</li>
                        <li>Email cím</li>
                        <li>Telefonszám</li>
                        <li>Cégnév (opcionális)</li>
                        <li>Konzultáció témája/üzenet</li>
                        <li>Foglalt időpont</li>
                    </ul>

                    <h3>5.2. Adatkezelés Célja</h3>
                    <p>
                        Az adatkezelés célja a konzultációs időpont egyeztetése, emlékeztetők küldése és
                        a találkozó lebonyolítása.
                    </p>

                    <h3>5.3. Jogalap</h3>
                    <p>
                        Az adatkezelés jogalapja az érintett hozzájárulása (GDPR 6. cikk (1) a).
                    </p>

                    <h3>5.4. Adattárolás</h3>
                    <p>
                        Az időpontfoglalási adatokat a találkozó lezajlását követően 2 évig tároljuk.
                        Az érintett bármikor kérheti adatai törlését.
                    </p>
                </div>

                {/* 6. Cookie-k */}
                <div className="privacy-block">
                    <h2>6. Cookie-k (Sütik) Használata</h2>

                    <h3>6.1. Általános Információk</h3>
                    <p>
                        Weboldalunk sütiket (cookie-kat) használ a felhasználói élmény javítása és bizonyos
                        funkciók biztosítása érdekében. A sütikről részletes tájékoztatást a
                        <a href="/cookie"> Cookie Szabályzatunkban</a> talál.
                    </p>

                    <h3>6.2. Használt Sütik</h3>
                    <ul>
                        <li>
                            <strong>theme (localStorage):</strong> Felhasználó által választott téma (világos/sötét)
                            tárolása. Jogalap: hozzájárulás. Tárolás: határozatlan idejű.
                        </li>
                        <li>
                            <strong>cookieConsent (localStorage):</strong> Cookie hozzájárulás állapotának tárolása.
                            Jogalap: jogi kötelezettség (GDPR megfelelés). Tárolás: határozatlan idejű.
                        </li>
                        <li>
                            <strong>cf_clearance, __cf_bm:</strong> Cloudflare bot védelem. Jogalap: jogos érdek
                            (biztonság). Tárolás: 30 perc.
                        </li>
                    </ul>

                    <h3>6.3. Sütik Kezelése</h3>
                    <p>
                        A sütik kezelését a cookie banner-en keresztül tudja beállítani. A sütiket bármikor
                        törölheti böngészője beállításaiban.
                    </p>
                </div>

                {/* 7. Jogok */}
                <div className="privacy-block">
                    <h2>7. Az Érintettek Jogai</h2>

                    <h3>7.1. Tájékoztatáshoz Való Jog</h3>
                    <p>
                        Jogosult tájékoztatást kérni az Adatkezelőtől, hogy személyes adatainak kezelése folyamatban
                        van-e, és ha igen, jogosult a személyes adatokhoz és az adatkezeléssel kapcsolatos
                        információkhoz való hozzáférésre.
                    </p>

                    <h3>7.2. Helyesbítéshez Való Jog</h3>
                    <p>
                        Jogosult kérni pontatlan személyes adatainak helyesbítését és hiányos adatainak kiegészítését.
                    </p>

                    <h3>7.3. Törléshez Való Jog ("Elfeledtetéshez való jog")</h3>
                    <p>
                        Jogosult kérni személyes adatainak törlését az alábbi esetekben:
                    </p>
                    <ul>
                        <li>Az adatokra már nincs szükség az eredeti adatkezelési cél szempontjából</li>
                        <li>Visszavonja az adatkezelés alapját képező hozzájárulását</li>
                        <li>Tiltakozik az adatkezelés ellen</li>
                        <li>A személyes adatokat jogellenesen kezelték</li>
                    </ul>
                    <p>
                        <strong>Kivételek:</strong> Az adatokat nem törölhetjük, ha azok megőrzése jogi kötelezettség
                        teljesítéséhez szükséges (pl. számviteli kötelezettség miatt 8 évig meg kell őriznünk a
                        számlázási adatokat).
                    </p>

                    <h3>7.4. Adatkezelés Korlátozásához Való Jog</h3>
                    <p>
                        Jogosult kérni az adatkezelés korlátozását az alábbi esetekben:
                    </p>
                    <ul>
                        <li>Vitatja a személyes adatok pontosságát</li>
                        <li>Az adatkezelés jogellenes, de ellenzi az adatok törlését</li>
                        <li>Az Adatkezelőnek már nincs szüksége az adatokra, de Ön igényli azokat jogi igények
                            előterjesztéséhez</li>
                    </ul>

                    <h3>7.5. Adathordozhatósághoz Való Jog</h3>
                    <p>
                        Jogosult arra, hogy a rá vonatkozó, általa az Adatkezelő rendelkezésére bocsátott személyes
                        adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapja, és ezeket
                        másik adatkezelőnek továbbítsa.
                    </p>

                    <h3>7.6. Tiltakozáshoz Való Jog</h3>
                    <p>
                        Jogos érdeken alapuló adatkezelés esetén jogosult tiltakozni a személyes adatok kezelése ellen.
                    </p>

                    <h3>7.7. Hozzájárulás Visszavonása</h3>
                    <p>
                        Hozzájáruláson alapuló adatkezelés esetén jogosult hozzájárulását bármikor visszavonni.
                        A visszavonás nem érinti a visszavonás előtt a hozzájárulás alapján végrehajtott adatkezelés
                        jogszerűségét.
                    </p>

                    <h3>7.8. Jogok Gyakorlása</h3>
                    <p>
                        Jogait az alábbi elérhetőségeken gyakorolhatja:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:info@pandasoft.hu">info@pandasoft.hu</a></li>
                        <li>Postai cím: 1011 Budapest, Fő utca 1.</li>
                    </ul>
                    <p>
                        Kérését 30 napon belül teljesítjük, szükség esetén további 60 nappal meghosszabbíthatjuk
                        az intézkedés megtételének idejét.
                    </p>
                </div>

                {/* Folytatás a következő blokkban... */}

                {/* 8. Adatbiztonság */}
                <div className="privacy-block">
                    <h2><FaExclamationTriangle /> 8. Adatbiztonság és Védelem</h2>

                    <h3>8.1. Technikai Intézkedések</h3>
                    <p>
                        Az Adatkezelő megfelelő technikai és szervezési intézkedésekkel biztosítja az adatok
                        biztonságát:
                    </p>
                    <ul>
                        <li>SSL/TLS titkosított adatátvitel (HTTPS)</li>
                        <li>Biztonságos szerverek és adatbázisok használata</li>
                        <li>Tűzfal és vírusvédelem</li>
                        <li>Rendszeres biztonsági frissítések</li>
                        <li>Hozzáférés-korlátozás (csak jogosult személyek)</li>
                        <li>Rendszeres biztonsági mentések</li>
                        <li>Incidens kezelési eljárás</li>
                    </ul>

                    <h3>8.2. Szervezési Intézkedések</h3>
                    <ul>
                        <li>Munkatársak adatvédelmi képzése</li>
                        <li>Titoktartási nyilatkozatok aláírása</li>
                        <li>Adatfeldolgozói szerződések megkötése</li>
                        <li>Adatvédelmi incidensek kezelési protokollja</li>
                    </ul>

                    <h3>8.3. Adatvédelmi Incidens</h3>
                    <p>
                        Adatvédelmi incidens (adatsértés) esetén az Adatkezelő 72 órán belül értesíti a Nemzeti
                        Adatvédelmi és Információszabadság Hatóságot (NAIH). Ha az incidens valószínűsíthetően
                        magas kockázattal jár az érintettek jogaira és szabadságaira nézve, az érintetteket is
                        indokolatlan késedelem nélkül értesítjük.
                    </p>
                </div>

                {/* 9. Adattovábbítás */}
                <div className="privacy-block">
                    <h2>9. Adattovábbítás és Adatfeldolgozók</h2>

                    <h3>9.1. Adattovábbítás Harmadik Személyek Részére</h3>
                    <p>
                        Az Adatkezelő személyes adatokat harmadik személyek részére csak az alábbi esetekben
                        továbbít:
                    </p>
                    <ul>
                        <li>Az érintett előzetes, kifejezett hozzájárulása esetén</li>
                        <li>Jogi kötelezettség teljesítése érdekében (pl. hatóságok megkeresése esetén)</li>
                        <li>Adatfeldolgozók igénybevétele esetén (lásd alább)</li>
                    </ul>

                    <h3>9.2. Adatfeldolgozók Listája</h3>
                    <p>Az Adatkezelő az alábbi adatfeldolgozókat veszi igénybe:</p>

                    <div className="data-processor-card">
                        <h4>Cloudflare, Inc.</h4>
                        <p><strong>Szolgáltatás:</strong> CDN, bot védelem, biztonság</p>
                        <p><strong>Kezelt adatok:</strong> IP cím, böngésző adatok, session cookie-k</p>
                        <p><strong>Székhely:</strong> USA (GDPR-megfelelő)</p>
                        <p><strong>Adatvédelem:</strong>
                            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
                                https://www.cloudflare.com/privacypolicy/
                            </a>
                        </p>
                    </div>

                    <h3>9.3. Harmadik Országba Történő Adattovábbítás</h3>
                    <p>
                        Az adatfeldolgozók egy része az Európai Gazdasági Térségen (EGT) kívül található (USA).
                        Ezek az adatfeldolgozók megfelelnek a GDPR követelményeinek:
                    </p>
                    <ul>
                        <li>Standard Contractual Clauses (SCC) alkalmazása</li>
                        <li>Megfelelő adatvédelmi garanciák biztosítása</li>
                        <li>Privacy Shield utódmechanizmusok (ha alkalmazható)</li>
                    </ul>
                </div>

                {/* 10. Panasz és jogorvoslat */}
                <div className="privacy-block">
                    <h2>10. Panasztétel és Jogorvoslat</h2>

                    <h3>10.1. Panasz Adatkezelőnél</h3>
                    <p>
                        Ha úgy érzi, hogy személyes adatai kezelése nem felel meg a jogszabályoknak, panasszal
                        fordulhat az Adatkezelőhöz az alábbi elérhetőségeken:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:info@pandasoft.hu">info@pandasoft.hu</a></li>
                        <li>Postai cím: 1011 Budapest, Fő utca 1.</li>
                    </ul>
                    <p>Panaszát 30 napon belül kivizsgáljuk és válaszolunk.</p>

                    <h3>10.2. NAIH-hoz Fordulás</h3>
                    <p>
                        Jogosult panaszt tenni a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):
                    </p>
                    <p>
                        <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság</strong><br />
                        Székhely: 1055 Budapest, Falk Miksa utca 9-11.<br />
                        Levelezési cím: 1363 Budapest, Pf. 9.<br />
                        Telefon: +36 (1) 391-1400<br />
                        Email: <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a><br />
                        Weboldal: <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">
                        https://www.naih.hu
                    </a>
                    </p>

                    <h3>10.3. Bírósági Jogérvényesítés</h3>
                    <p>
                        A GDPR megsértése esetén bírósághoz is fordulhat. Az érintett székhelye vagy lakóhelye
                        szerint illetékes törvényszékhez nyújthat be keresetet.
                    </p>
                </div>

                {/* 11. Módosítások */}
                <div className="privacy-block">
                    <h2>11. Tájékoztató Módosítása</h2>

                    <p>
                        Az Adatkezelő fenntartja a jogot jelen Tájékoztató módosítására. A módosított Tájékoztató
                        a weboldalon történő közzététellel lép hatályba. Lényeges változás esetén az érintetteket
                        email-en értesítjük.
                    </p>
                    <p>
                        Javasoljuk, hogy időnként látogassa meg ezt az oldalt, hogy naprakész legyen az
                        adatkezelési gyakorlatunkkal kapcsolatban.
                    </p>
                </div>

                {/* 12. Vegyes rendelkezések */}
                <div className="privacy-block">
                    <h2>12. Vegyes Rendelkezések</h2>

                    <h3>12.1. Kiskorúak Adatai</h3>
                    <p>
                        Szolgáltatásainkat 16 év alatti személyek csak szülői/gyámi hozzájárulással vehetik
                        igénybe. Tudatosan nem gyűjtünk 16 év alatti személyek adatait szülői hozzájárulás nélkül.
                    </p>

                    <h3>12.2. Automatizált Döntéshozatal és Profilalkotás</h3>
                    <p>
                        Szolgáltatásaink során nem alkalmazunk automatizált döntéshozatalt vagy profilalkotást,
                        amely az érintettre nézve joghatással járna vagy őt hasonlóképpen jelentős mértékben
                        érintené.
                    </p>

                    <h3>12.3. Kapcsolódó Dokumentumok</h3>
                    <p>Adatvédelemmel kapcsolatos további dokumentumaink:</p>
                    <ul>
                        <li><a href="/cookie">Cookie Szabályzat</a></li>
                        <li><a href="/aszf">Általános Szerződési Feltételek</a></li>
                    </ul>
                </div>

                {/* Kapcsolat */}
                <div className="privacy-block privacy-contact">
                    <h2>📧 Kapcsolat és Elérhetőség</h2>
                    <p>
                        Kérdés vagy kérés esetén kérjük, vegye fel velünk a kapcsolatot:
                    </p>
                    <p>
                        <strong>Varga Levente István ev.</strong><br />
                        Székhely: 4034 Debrecen, Zöld utca 4.<br />
                        Email: <a href="mailto:info@pandasoft.hu">info@pandasoft.hu</a><br />
                        Weboldal: <a href="https://pandasoft.hu">https://pandasoft.hu</a>
                    </p>
                    <p className="mt-4">
                        <em>
                            Az adatkezelési tájékoztató elfogadásával Ön tudomásul veszi és elfogadja a fenti
                            adatkezelési gyakorlatunkat.
                        </em>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default PrivacyPolicy;