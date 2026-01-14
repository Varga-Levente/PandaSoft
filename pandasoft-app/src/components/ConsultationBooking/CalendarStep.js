import React, { useState, useEffect, useCallback } from 'react';
import { Button, Alert, Spinner } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Steps.css';

const CalendarStep = ({ updateFormData, nextStep, prevStep }) => {
  const [events, setEvents] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCalendarEvents = useCallback(async () => {
    try {
      // Itt majd a Google Calendar API-t használjuk
      const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/calendar/events`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY}`
            }
          }
      );

      if (response.ok) {
        const data = await response.json();

        // Foglalt időpontok feldolgozása
        const busyEvents = data.items.map(item => ({
          title: 'Foglalt',
          start: item.start.dateTime || item.start.date,
          end: item.end.dateTime || item.end.date,
          display: 'background',
          backgroundColor: '#ff4444',
          classNames: ['busy-slot']
        }));

        setEvents(busyEvents);
        generateAvailableSlots(busyEvents);
      }
    } catch (err) {
      console.error('Error fetching calendar events:', err);
      setError('Nem sikerült betölteni a naptárt. Kérjük, próbáld újra később.');
      // Demo adatok fejlesztéshez
      const demoEvents = generateDemoEvents();
      setEvents(demoEvents);
      generateAvailableSlots(demoEvents);
    } finally {
      setIsLoading(false);
    }
  }, []); // useCallback dependency array

  useEffect(() => {
    // Google Calendar API hívás az események betöltéséhez
    fetchCalendarEvents();
  }, [fetchCalendarEvents]);

  const generateDemoEvents = () => {
    // Demo foglalt időpontok
    const today = new Date();
    const demoEvents = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);

      // Néhány random foglalt időpont
      if (Math.random() > 0.5) {
        demoEvents.push({
          title: 'Foglalt',
          start: new Date(date.setHours(10, 0, 0)),
          end: new Date(date.setHours(10, 30, 0)),
          display: 'background',
          backgroundColor: '#ff4444',
          classNames: ['busy-slot']
        });
      }

      if (Math.random() > 0.6) {
        demoEvents.push({
          title: 'Foglalt',
          start: new Date(date.setHours(14, 0, 0)),
          end: new Date(date.setHours(14, 30, 0)),
          display: 'background',
          backgroundColor: '#ff4444',
          classNames: ['busy-slot']
        });
      }
    }

    return demoEvents;
  };

  const generateAvailableSlots = (busyEvents) => {
    const slots = [];
    const today = new Date();

    // 14 napra előre generálunk időpontokat
    for (let day = 0; day < 14; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() + day);

      // Csak hétköznapok (hétfő-péntek)
      if (date.getDay() >= 1 && date.getDay() <= 5) {
        // Munkaórák: 9:00 - 17:00, fél órás sávokban
        for (let hour = 9; hour < 17; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const slotStart = new Date(date);
            slotStart.setHours(hour, minute, 0, 0);

            const slotEnd = new Date(slotStart);
            slotEnd.setMinutes(slotEnd.getMinutes() + 30);

            // Ellenőrizzük, hogy foglalt-e
            const isBusy = busyEvents.some(event => {
              const eventStart = new Date(event.start);
              const eventEnd = new Date(event.end);
              return slotStart >= eventStart && slotStart < eventEnd;
            });

            if (!isBusy && slotStart > new Date()) {
              slots.push({
                start: slotStart,
                end: slotEnd,
                title: 'Elérhető',
                display: 'block',
                backgroundColor: '#00cc99',
                borderColor: '#00cc99',
                classNames: ['available-slot'],
                extendedProps: {
                  available: true
                }
              });
            }
          }
        }
      }
    }

    setAvailableSlots(slots);
  };

  const handleDateClick = (info) => {
    const clickedSlot = availableSlots.find(slot => {
      const slotStart = new Date(slot.start);
      const clickedDate = new Date(info.date);
      return slotStart.getTime() === clickedDate.getTime();
    });

    if (clickedSlot) {
      setSelectedSlot(clickedSlot);
      updateFormData({
        selectedDate: clickedSlot.start,
        selectedTime: clickedSlot.start.toLocaleTimeString('hu-HU', {
          hour: '2-digit',
          minute: '2-digit'
        })
      });
    }
  };

  const handleNext = () => {
    if (selectedSlot) {
      nextStep();
    } else {
      alert('Kérjük, válassz egy időpontot!');
    }
  };

  if (isLoading) {
    return (
        <div className="step-content text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Naptár betöltése...</p>
        </div>
    );
  }

  return (
      <div className="step-content">
        <div className="step-header mb-4">
          <h3 className="step-heading">Válassz Időpontot</h3>
          <p className="step-description">
            Kattints egy szabad időpontra a konzultáció időpontjának kiválasztásához
          </p>
        </div>

        {error && (
            <Alert variant="warning" className="mb-4">
              {error}
            </Alert>
        )}

        {selectedSlot && (
            <Alert variant="success" className="mb-4">
              Kiválasztott időpont: {selectedSlot.start.toLocaleDateString('hu-HU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
            </Alert>
        )}

        <div className="calendar-wrapper">
          <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridWeek,timeGridDay'
              }}
              slotMinTime="08:00:00"
              slotMaxTime="18:00:00"
              slotDuration="00:30:00"
              allDaySlot={false}
              weekends={false}
              locale="hu"
              events={[...events, ...availableSlots]}
              dateClick={handleDateClick}
              eventClick={(info) => {
                if (info.event.extendedProps.available) {
                  setSelectedSlot({
                    start: info.event.start,
                    end: info.event.end
                  });
                  updateFormData({
                    selectedDate: info.event.start,
                    selectedTime: info.event.start.toLocaleTimeString('hu-HU', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  });
                }
              }}
              height="auto"
              buttonText={{
                today: 'Ma',
                week: 'Hét',
                day: 'Nap'
              }}
          />
        </div>

        <div className="calendar-legend mt-4">
          <div className="legend-item">
            <span className="legend-color busy"></span>
            <span>Foglalt</span>
          </div>
          <div className="legend-item">
            <span className="legend-color available"></span>
            <span>Elérhető</span>
          </div>
        </div>

        <div className="form-navigation">
          <Button onClick={prevStep} className="nav-btn btn-back">
            ← Vissza
          </Button>
          <Button onClick={handleNext} className="nav-btn btn-next">
            Tovább a Megerősítéshez →
          </Button>
        </div>
      </div>
  );
};

export default CalendarStep;