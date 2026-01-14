import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFileContract, FaHandshake, FaShieldAlt, FaGavel } from 'react-icons/fa';
import './ASZF.css';

const ASZF = () => {
    return (
        <section className="aszf-section">
            <Container>
                {/* Header */}
                <div className="aszf-header text-center mb-5">
                    <FaFileContract className="aszf-icon" />
                    <h1>Általános Szerződési Feltételek (ÁSZF)</h1>
                    <p className="lead">
                        A PandaSoft által nyújtott szolgáltatások igénybevételére vonatkozó szabályok
                    </p>
                    <p className="last-updated">
                        Utolsó módosítás: 2026. január 14.<br />
                        Hatálybalépés: 2027. január 14.
                    </p>
                </div>

                {/* 1. Bevezető rendelkezések */}
                <div className="aszf-block">
                    <h2><FaHandshake /> 1. Bevezető Rendelkezések</h2>

                    <h3>1.1. A Szolgáltató Adatai</h3>
                    <p>
                        <strong>Cégnév:</strong> Varga Levente István ev.<br />
                        <strong>Székhely:</strong> 4034 Debrecen, Zöld utca 4.<br />
                        <strong>Adószám:</strong> 91174343-1-29<br />
                        <strong>Email:</strong> info@pandasoft.hu<br />
                        <strong>Weboldal:</strong> https://pandasoft.hu
                    </p>

                    <h3>1.2. Az ÁSZF Hatálya</h3>
                    <p>
                        Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) tartalmazzák a Varga Levente István ev.
                        (a továbbiakban: Szolgáltató) által nyújtott informatikai szolgáltatások igénybevételének
                        feltételeit. Az ÁSZF hatálya kiterjed a Szolgáltató és a szolgáltatást igénybe vevő
                        természetes vagy jogi személy (a továbbiakban: Megrendelő) között létrejött minden
                        szerződéses jogviszonyra.
                    </p>

                    <h3>1.3. Fogalmak</h3>
                    <ul>
                        <li><strong>Szolgáltató:</strong> Varga Levente István ev.</li>
                        <li><strong>Megrendelő:</strong> A szolgáltatást igénybe vevő természetes vagy jogi személy</li>
                        <li><strong>Felek:</strong> Szolgáltató és Megrendelő együttesen</li>
                        <li><strong>Szolgáltatás:</strong> Szoftverfejlesztés, webalkalmazás készítés, mobil alkalmazás fejlesztés,
                            tanácsadás, karbantartás és egyéb IT szolgáltatások</li>
                        <li><strong>Ajánlat:</strong> Szolgáltató által a Megrendelő részére megküldött árajánlat</li>
                        <li><strong>Projekt:</strong> A Megrendelő igényei alapján fejlesztett szoftvertermék vagy szolgáltatás</li>
                    </ul>
                </div>

                {/* 2. Szerződés létrejötte */}
                <div className="aszf-block">
                    <h2>2. Szerződés Létrejötte és Módosítása</h2>

                    <h3>2.1. Szerződéskötés Folyamata</h3>
                    <p>
                        A szerződés a következő lépések szerint jön létre:
                    </p>
                    <ol>
                        <li>Megrendelő megkeresése (email, űrlap, konzultáció)</li>
                        <li>Szolgáltató írásbeli árajánlatot készít</li>
                        <li>Megrendelő elfogadja az árajánlatot írásban (email vagy aláírt dokumentum)</li>
                        <li>Szolgáltató visszaigazolja az elfogadást</li>
                        <li>Szerződés létrejön</li>
                    </ol>

                    <h3>2.2. Ajánlat Érvényessége</h3>
                    <p>
                        A Szolgáltató által kibocsátott ajánlat 30 napig érvényes, kivéve ha az ajánlatban
                        eltérő érvényességi idő került meghatározásra. Az ajánlat elfogadását követően a
                        szerződés a Polgári Törvénykönyv rendelkezései szerint jön létre.
                    </p>

                    <h3>2.3. ÁSZF Elfogadása</h3>
                    <p>
                        A Megrendelő az ajánlat elfogadásával elismeri, hogy jelen ÁSZF-et megismerte és
                        annak rendelkezéseit magára nézve kötelezőnek fogadja el.
                    </p>
                </div>

                {/* 3. Szolgáltatások */}
                <div className="aszf-block">
                    <h2>3. Szolgáltatások Köre és Tartalma</h2>

                    <h3>3.1. Nyújtott Szolgáltatások</h3>
                    <p>A Szolgáltató az alábbi szolgáltatásokat nyújtja:</p>
                    <ul>
                        <li>Egyedi szoftverfejlesztés (webalkalmazások, mobilalkalmazások, desktop alkalmazások)</li>
                        <li>Frontend és backend fejlesztés</li>
                        <li>API fejlesztés és integráció</li>
                        <li>Adatbázis tervezés és fejlesztés</li>
                        <li>MVP (Minimum Viable Product) fejlesztés</li>
                        <li>UI/UX tervezés</li>
                        <li>Karbantartás és technikai támogatás</li>
                        <li>Kódrefaktorálás és optimalizálás</li>
                        <li>IT tanácsadás és konzultáció</li>
                    </ul>

                    <h3>3.2. Teljesítés Módja</h3>
                    <p>
                        A szolgáltatás teljesítése az egyedi ajánlatban meghatározott ütemterv szerint történik.
                        A Szolgáltató agilis módszertant alkalmaz, amely során kéthetente vagy havonta bemutatja
                        az elkészült funkciókat a Megrendelő részére.
                    </p>

                    <h3>3.3. Átadás-Átvételi Eljárás</h3>
                    <p>
                        A projekt befejezését követően a Felek átadás-átvételi eljárást folytatnak le. Az átadás
                        során a Szolgáltató a következőket biztosítja:
                    </p>
                    <ul>
                        <li>Teljes forráskód átadása (Git repository)</li>
                        <li>Technikai dokumentáció</li>
                        <li>Telepítési és üzemeltetési útmutató (Amennyiben nem a Szolgáltató biztosítja a program futtatását)</li>
                        <li>Felhasználói dokumentáció</li>
                        <li>Tesztelési jegyzőkönyv</li>
                    </ul>
                </div>

                {/* 4. Felek jogai és kötelezettségei */}
                <div className="aszf-block">
                    <h2>4. A Felek Jogai és Kötelezettségei</h2>

                    <h3>4.1. Szolgáltató Kötelezettségei</h3>
                    <p>A Szolgáltató köteles:</p>
                    <ul>
                        <li>A szolgáltatást szakszerűen, a hatályos jogszabályoknak és szakmai szabályoknak megfelelően nyújtani</li>
                        <li>Az egyeztetett határidőket betartani, vagy előre jelezni a várható késedelmeket</li>
                        <li>A Megrendelő adatait bizalmasan kezelni</li>
                        <li>Rendszeres kommunikációt biztosítani a projekt státuszáról</li>
                        <li>Minőségi, tesztelt kódot átadni</li>
                        <li>Garanciális kötelezettségeinek eleget tenni</li>
                    </ul>

                    <h3>4.2. Megrendelő Kötelezettségei</h3>
                    <p>A Megrendelő köteles:</p>
                    <ul>
                        <li>A projekt specifikációját pontosan és időben megadni</li>
                        <li>Az egyeztetéseken részt venni vagy képviselőt biztosítani</li>
                        <li>A szükséges anyagokat, hozzáféréseket időben biztosítani</li>
                        <li>A visszajelzéseket időben megadni</li>
                        <li>A szerződésben meghatározott díjat határidőre megfizetni</li>
                        <li>Az átadott szoftvert az átadás-átvételt követő 15 napon belül tesztelni</li>
                    </ul>

                    <h3>4.3. Együttműködési Kötelezettség</h3>
                    <p>
                        A Felek kötelesek a projektet érintő minden lényeges információt egymással megosztani,
                        és a projekt sikeréért aktívan együttműködni.
                    </p>
                </div>

                {/* 5. Díjazás és fizetési feltételek */}
                <div className="aszf-block">
                    <h2>5. Díjazás és Fizetési Feltételek</h2>

                    <h3>5.1. Árazási Modellek</h3>
                    <p>A Szolgáltató az alábbi árazási modelleket alkalmazza:</p>
                    <ul>
                        <li><strong>Fix áras projekt:</strong> Előre meghatározott fix összeg a teljes projektre</li>
                        <li><strong>Óradíjas projekt:</strong> Ténylegesen ledolgozott órák alapján</li>
                        <li><strong>Retainer modell:</strong> Havi előfizetés alapú karbantartás és fejlesztés</li>
                    </ul>

                    <h3>5.2. Előleg</h3>
                    <p>
                        A projekt megkezdéséhez a Megrendelő a teljes projektdíj 30-50%-át előlegként köteles
                        megfizetni. Fix áras projektek esetén az előleg mértéke 50%, óradíjas projektek esetén
                        30%. Az előleg beérkezését követően kezdődik meg a fejlesztés.
                    </p>

                    <h3>5.3. Részszámlák</h3>
                    <p>
                        Fix áras projektek esetén a Szolgáltató jogosult a projekt ütemtervében rögzített
                        mérföldkövek elérésekor részszámlákat kiállítani. A részszámlák fizetési határideje
                        15 nap.
                    </p>

                    <h3>5.4. Végszámla</h3>
                    <p>
                        A projekt sikeres átadását és a Megrendelő általi elfogadást követően a Szolgáltató
                        végszámlát állít ki a hátralévő összegről. A végszámla fizetési határideje 15 nap.
                    </p>

                    <h3>5.5. Késedelmi Kamat</h3>
                    <p>
                        Fizetési késedelem esetén a Szolgáltató jogosult a mindenkori jegybanki alapkamat
                        kétszeresének megfelelő késedelmi kamatot felszámítani. 30 napon túli fizetési
                        késedelem esetén a Szolgáltató jogosult a munkát felfüggeszteni.
                    </p>

                    <h3>5.6. Áremelés</h3>
                    <p>
                        A Szolgáltató évente egyszer jogosult árait az infláció mértékében, de legfeljebb
                        10%-kal megemelni. Az áremelésről a Megrendelőt 30 nappal előre értesíti.
                    </p>
                </div>

                {/* 6. Szellemi tulajdon */}
                <div className="aszf-block">
                    <h2><FaShieldAlt /> 6. Szellemi Tulajdon és Felhasználási Jogok</h2>

                    <h3>6.1. Szerzői Jogok</h3>
                    <p>
                        A projekt során létrehozott minden szoftver, kód, dokumentáció és egyéb szellemi termék
                        szerzői joga a Szolgáltatót illeti meg a teljes díj kiegyenlítéséig.
                    </p>

                    <h3>6.2. Felhasználási Jog Átruházása</h3>
                    <p>
                        A teljes projektdíj kiegyenlítését követően a Szolgáltató korlátlan, kizárólagos
                        felhasználási jogot ruház át a Megrendelőre a megrendelt szoftverre vonatkozóan.
                        Ez magában foglalja a szoftver használatának, másolásának, módosításának és továbbadásának jogát.
                    </p>

                    <h3>6.3. Harmadik Féltől Származó Komponensek</h3>
                    <p>
                        A fejlesztés során felhasznált nyílt forráskódú komponensek és könyvtárak a saját
                        licenszük alá tartoznak. Ezek felhasználását a Szolgáltató köteles a Megrendelővel
                        egyeztetni és a licensz feltételeknek megfelelően biztosítani.
                    </p>

                    <h3>6.4. Portfólió Felhasználás</h3>
                    <p>
                        A Szolgáltató jogosult a befejezett projektet portfóliójában és marketing anyagaiban
                        felhasználni, kivéve ha a Megrendelő ezt írásban kizárja vagy titoktartási
                        megállapodás ezt megtiltja.
                    </p>
                </div>

                {/* 7. Garancia és felelősség */}
                <div className="aszf-block">
                    <h2>7. Garancia, Felelősség és Kártérítés</h2>

                    <h3>7.1. Garanciális Időszak</h3>
                    <p>
                        A Szolgáltató az átadás-átvételt követően 2 hónap garanciát vállal a szoftverre.
                        A garanciális időszak alatt felmerülő, a Szolgáltató hibájából eredő hibákat
                        díjmentesen javítja.
                    </p>

                    <h3>7.2. Garancia Tartalma</h3>
                    <p>A garancia az alábbi hibákra terjed ki:</p>
                    <ul>
                        <li>A specifikációban meghatározott funkciók működésének hibája</li>
                        <li>Biztonsági rések a kódban</li>
                        <li>Kritikus teljesítményproblémák</li>
                        <li>Dokumentációs hibák</li>
                    </ul>

                    <h3>7.3. Garancia Kizárása</h3>
                    <p>A garancia nem terjed ki az alábbi esetekre:</p>
                    <ul>
                        <li>Megrendelő vagy harmadik fél által végzett módosítások</li>
                        <li>Nem rendeltetésszerű használat</li>
                        <li>Vis maior (elemi csapás, háború, stb.)</li>
                        <li>Harmadik féltől származó szolgáltatások hibája (hosting, API-k, stb.)</li>
                        <li>A specifikációban nem szereplő funkciók hiánya</li>
                    </ul>

                    <h3>7.4. Felelősségkorlátozás</h3>
                    <p>
                        A Szolgáltató felelőssége a projekt díjának összegére korlátozódik. A Szolgáltató
                        nem felel közvetett károkért, elmaradt haszonért vagy következményi károkért.
                    </p>

                    <h3>7.5. Vis Maior</h3>
                    <p>
                        A Felek mentesülnek a szerződéses kötelezettségeik teljesítése alól, amennyiben azt
                        vis maior esemény akadályozza (természeti katasztrófa, háború, járvány, stb.).
                    </p>
                </div>

                {/* 8. Titoktartás */}
                <div className="aszf-block">
                    <h2>8. Titoktartás és Adatvédelem</h2>

                    <h3>8.1. Titoktartási Kötelezettség</h3>
                    <p>
                        A Felek kötelesek a másik féltől kapott minden üzleti, műszaki vagy egyéb bizalmas
                        információt titokban tartani. A titoktartási kötelezettség a szerződés megszűnését
                        követően is 5 évig fennáll.
                    </p>

                    <h3>8.2. Bizalmas Információk</h3>
                    <p>Bizalmas információnak minősül különösen:</p>
                    <ul>
                        <li>Üzleti adatok, stratégiák</li>
                        <li>Műszaki dokumentációk, specifikációk</li>
                        <li>Forráskód (átadás előtt)</li>
                        <li>Árazási információk</li>
                        <li>Ügyfél- és partnerlisták</li>
                        <li>Minden olyan információ, amit a másik fél bizalmasnak minősít</li>
                    </ul>

                    <h3>8.3. Adatvédelmi Megfelelés</h3>
                    <p>
                        A Szolgáltató kötelezi magát a GDPR (általános adatvédelmi rendelet) és a magyar
                        adatvédelmi jogszabályok betartására. Részletes adatkezelési tájékoztatónk elérhető:
                        <a href="/adatvedelem"> /adatvedelem</a>
                    </p>
                </div>

                {/* 9. Módosítás és felmondás */}
                <div className="aszf-block">
                    <h2>9. Szerződésmódosítás és Felmondás</h2>

                    <h3>9.1. Specifikáció Módosítása</h3>
                    <p>
                        A Megrendelő jogosult a projekt specifikációját módosítani. A módosítási kérelmeket
                        írásban kell benyújtani. A Szolgáltató 5 munkanapon belül árajánlatot készít a
                        változtatásokról (időbeli és pénzügyi hatások). A módosítás a Megrendelő írásbeli
                        jóváhagyását követően lép hatályba.
                    </p>

                    <h3>9.2. Rendes Felmondás</h3>
                    <p>
                        Mindkét fél jogosult a szerződést 30 napos felmondási idővel írásban felmondani.
                        Felmondás esetén a Megrendelő köteles az eddig elvégzett munkák ellenértékét
                        kiegyenlíteni.
                    </p>

                    <h3>9.3. Rendkívüli Felmondás</h3>
                    <p>A Felek azonnali hatályú felmondásra jogosultak az alábbi esetekben:</p>
                    <ul>
                        <li>A másik fél súlyosan megszegi szerződéses kötelezettségeit</li>
                        <li>A másik fél fizetésképtelenné válik vagy felszámolási eljárás indul ellene</li>
                        <li>30 napot meghaladó fizetési késedelem</li>
                        <li>Titoktartási kötelezettség súlyos megsértése</li>
                    </ul>

                    <h3>9.4. Felmondás Következményei</h3>
                    <p>
                        Felmondás esetén a Szolgáltató átadja az addig elkészült munkát és dokumentációt.
                        A Megrendelő köteles az elvégzett munkák arányos díját megfizetni. A Szolgáltató
                        nem felel azért, ha az átadott részeredmény önállóan nem használható.
                    </p>
                </div>

                {/* 10. Vegyes rendelkezések */}
                <div className="aszf-block">
                    <h2><FaGavel /> 10. Vegyes és Záró Rendelkezések</h2>

                    <h3>10.1. Irányadó Jog</h3>
                    <p>
                        Jelen ÁSZF-re és az abból eredő jogviszonyokra a magyar jog az irányadó,
                        különösen a Polgári Törvénykönyvről szóló 2013. évi V. törvény rendelkezései.
                    </p>

                    <h3>10.2. Jogviták Rendezése</h3>
                    <p>
                        A Felek kötelezettséget vállalnak arra, hogy esetleges vitáikat elsősorban
                        tárgyalásos úton rendezik. Amennyiben ez nem vezet eredményre, a jogvita
                        elbírálására a Szolgáltató székhelye szerint illetékes bíróság kizárólagosan
                        illetékes.
                    </p>

                    <h3>10.3. Alternatív Vitarendezés</h3>
                    <p>
                        Fogyasztónak minősülő Megrendelő jogosult panaszával a lakóhelye vagy tartózkodási
                        helye szerint illetékes békéltető testülethez fordulni. A békéltető testületek
                        listája elérhető: <a href="https://www.bekeltetes.hu" target="_blank" rel="noopener noreferrer">
                        https://www.bekeltetes.hu</a>
                    </p>

                    <h3>10.4. Értesítések</h3>
                    <p>
                        A Felek közötti minden értesítést írásban, elsődlegesen e-mailben kell megtenni.
                        Az e-mail címek:
                    </p>
                    <ul>
                        <li>Szolgáltató: info@pandasoft.hu</li>
                        <li>Megrendelő: a szerződésben megadott e-mail cím</li>
                    </ul>

                    <h3>10.5. ÁSZF Módosítása</h3>
                    <p>
                        A Szolgáltató fenntartja a jogot az ÁSZF egyoldalú módosítására. A módosításról
                        a Megrendelőket e-mailben értesíti legalább 15 nappal a hatálybalépés előtt.
                        A módosított ÁSZF a weboldalon kerül közzétételre.
                    </p>

                    <h3>10.6. Elválaszthatóság</h3>
                    <p>
                        Amennyiben az ÁSZF bármely rendelkezése érvénytelenné, végrehajthatatlanná vagy
                        jogellenessé válik, az nem érinti a többi rendelkezés érvényességét és
                        hatályosságát.
                    </p>

                    <h3>10.7. Force Majeure</h3>
                    <p>
                        Vis maior események (természeti katasztrófa, háború, járvány, kormányzati
                        intézkedések, stb.) esetén a teljesítési határidők automatikusan meghosszabbodnak
                        a vis maior időtartamával.
                    </p>

                    <h3>10.8. Hatálybalépés</h3>
                    <p>
                        Jelen ÁSZF 2026. január 14. napján lép hatályba és határozatlan időre szól.
                    </p>
                </div>

                {/* Kapcsolat */}
                <div className="aszf-block aszf-contact">
                    <h2>📧 Kapcsolat és Elérhetőség</h2>
                    <p>
                        Kérdés esetén kérjük, vegye fel velünk a kapcsolatot:
                    </p>
                    <p>
                        <strong>Varga Levente István ev.</strong><br />
                        Email: <a href="mailto:info@pandasoft.hu">info@pandasoft.hu</a><br />
                        Weboldal: <a href="https://pandasoft.hu">https://pandasoft.hu</a>
                    </p>
                    <p className="mt-4">
                        <em>
                            Jelen ÁSZF elfogadásával a Megrendelő kijelenti, hogy az ÁSZF tartalmát
                            megismerte, megértette, és annak rendelkezéseit magára nézve kötelezőnek
                            fogadja el.
                        </em>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ASZF;