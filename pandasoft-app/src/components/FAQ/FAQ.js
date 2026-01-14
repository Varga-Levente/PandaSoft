import React, { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
    const [activeKey, setActiveKey] = useState(null);

    // GYIK adatok - Itt tudod szerkeszteni a kérdéseket és válaszokat
    const faqData = [
        {
            id: 'faq-1',
            question: 'Milyen típusú projekteken dolgoznak?',
            answer: 'Webalkalmazások, mobilalkalmazások (React Native), egyedi szoftvermegoldások és API integrációk fejlesztésével foglalkozunk. Legyen szó startup MVP-ről vagy nagyvállalati rendszerről, szakértelmünkkel állunk rendelkezésére.'
        },
        {
            id: 'faq-2',
            question: 'Mennyi időbe telik egy projekt elkészítése?',
            answer: 'A projekt időtartama nagymértékben függ a komplexitástól és a követelményektől. Egy egyszerű bemutatkozó weboldal 2-3 hét alatt elkészülhet, míg egy komplex webalkalmazás 3-6 hónapot is igénybe vehet. A konzultáció során meg tudjuk becsülni a projekthez szükséges időt.'
        },
        {
            id: 'faq-3',
            question: 'Milyen technológiákat használnak?',
            answer: 'Modern technológiai stackkel dolgozunk: React, Node.js, Python, TypeScript, Next.js, MongoDB, PostgreSQL, AWS és Docker. Mindig a projekthez legjobban illő technológiát választjuk, figyelembe véve a skálázhatóságot és a karbantarthatóságot.'
        },
        {
            id: 'faq-4',
            question: 'Hogyan alakul a projekt ára?',
            answer: 'Minden projekt egyedi, így az árazás is projekt-specifikus. Az árat befolyásolja a komplexitás, a funkciók száma, a design igényessége és az átfutási idő. Az ingyenes konzultáció során részletes árajánlatot adunk, amely tartalmazza az összes költséget átláthatóan.'
        },
        {
            id: 'faq-5',
            question: 'Biztosítanak karbantartást a projekt után?',
            answer: 'Igen! Minden projekthez karbantartási csomagot kínálunk, amely tartalmazza a hibajavításokat, biztonsági frissítéseket és kisebb módosításokat. A projekt átadása után 2 hónapos ingyenes garanciát biztosítunk, utána pedig rugalmas karbantartási díjcsomagok közül választhatnak.'
        },
        {
            id: 'faq-6',
            question: 'Részt vehetek a fejlesztési folyamatban?',
            answer: 'Abszolút! Agilis módszertant követünk, amely rendszeres kommunikációt és átláthatóságot biztosít. Kéthetente demókat tartunk, ahol bemutatjuk az elkészült funkciókat. Teams/email-en keresztül folyamatos kapcsolatban állunk, és a visszajelzéseidet azonnal beépítjük a fejlesztésbe.'
        },
        {
            id: 'faq-7',
            question: 'Mit jelent az MVP fejlesztés?',
            answer: 'Az MVP (Minimum Viable Product) egy minimálisan működőképes termék, amely a legfontosabb funkciókat tartalmazza. Ez lehetővé teszi, hogy gyorsan piacra lépjenek, teszteljék az ötletet és visszajelzéseket gyűjtsenek, mielőtt nagyobb beruházást tennének. Költséghatékony módja a startup indításnak.'
        },
        {
            id: 'faq-8',
            question: 'Tudnak meglévő projektet tovább fejleszteni?',
            answer: 'Természetesen! Veszünk át meglévő projekteket továbbfejlesztésre, kódrefaktorálásra vagy hibajavításra. Ebben az esetben hatalmas előny egy dokumentáció. Először átvizsgáljuk a kódot, felmérjük az állapotot, majd javaslatot teszünk a legjobb megközelítésre. Legyen szó legacy kódról vagy modern stackről, segítünk.'
        },
        {
            id: 'faq-9',
            question: 'Hogyan zajlik egy konzultáció?',
            answer: 'A konzultáció általában egy 30 perces online találkozó (Google Meet, Teams), ahol megbeszéljük a projektet: célokat, funkciókat, technikai követelményeket és költségvetést. Kérdésekre válaszolunk, javaslatokat teszünk és ha mindkét fél elégedett, projekttervvel és árajánlattal zárunk. Teljesen ingyenes és kötelezettség nélküli! Igény esetén a konzultáció 60 perces is lehet.'
        },
        {
            id: 'faq-10',
            question: 'Milyen dokumentációt kapok a projekt végén?',
            answer: 'Teljes technikai dokumentációt biztosítunk: architektúra leírás, API dokumentáció, telepítési útmutató, felhasználói kézikönyv és a teljes forráskód. Minden projekt GitHub-on kerül átadásra, részletes README fájllal. Ha szükséges, személyes átadó találkozót is tartunk.'
        },
        {
            id: 'faq-11',
            question: 'Biztosítanak domain és hostingot?',
            answer: 'Segítünk a domain regisztrációban és a megfelelő hosting kiválasztásában (AWS, Vercel, Netlify, stb.). A hostingot általában az ügyfél saját nevére regisztráljuk, így teljes kontroll marad Önöknél. Opcionálisan vállaljuk a hosting kezelését is havi díj ellenében.'
        },
        {
            id: 'faq-12',
            question: 'Mi történik, ha nem vagyok elégedett az eredménnyel?',
            answer: 'Minden projektet iteratív módon fejlesztünk folyamatos visszajelzéssel, így elkerülhetők a meglepetések. Ha mégis probléma merül fel, javítjuk amíg elégedett nem lesz. A projekt végén 2 hónapos garanciát biztosítunk minden hibára. Az Ön elégedettsége a prioritásunk!'
        }
    ];

    return (
        <section className="faq-section">
            <Container>
                {/* Header */}
                <div className="faq-header text-center mb-5">
                    <h1>Gyakran Ismételt Kérdések</h1>
                    <p className="lead">
                        Összegyűjtöttük a leggyakoribb kérdéseket és válaszokat.
                        <br />
                        Ha nem találja a választ, <a href="/#contact">vegye fel velünk a kapcsolatot</a>!
                    </p>
                </div>

                {/* Accordion */}
                <div className="faq-accordion-wrapper">
                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                        {faqData.map((faq, index) => (
                            <Accordion.Item
                                eventKey={faq.id}
                                key={faq.id}
                                className="faq-item"
                            >
                                <Accordion.Header className="faq-question">
                                    <span className="question-number">{index + 1}.</span>
                                    <span className="question-text">{faq.question}</span>
                                    <span className="question-icon">
                    {activeKey === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                                </Accordion.Header>
                                <Accordion.Body className="faq-answer">
                                    {faq.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>

                {/* CTA Section */}
                <div className="faq-cta text-center mt-5">
                    <h3>Még mindig vannak kérdései?</h3>
                    <p>Foglaljon ingyenes konzultációt, és beszéljük meg személyesen!</p>
                    <a href="/konzultacio" className="btn btn-primary btn-lg">
                        Konzultációt kérek
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default FAQ;