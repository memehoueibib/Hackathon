import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Events.css';

const events = [
  {
    date: 'Vendredi 09 Février',
    events: [
      { time: '8h00', title: "Titre de l'événement", type: 'En personne', speaker: 'Conférencier', location: 'Lieu' },
      { time: '9h00', title: "Titre de l'événement", type: 'En ligne', speaker: 'Conférencier', location: 'Lieu' },
      { time: '10h00', title: "Titre de l'événement", type: 'En ligne', speaker: 'Conférencier', location: 'Lieu' },
    ],
  },
  {
    date: 'Samedi 10 Février',
    events: [
      { time: '8h00', title: "Titre de l'événement", type: 'En personne', speaker: 'Conférencier', location: 'Lieu' },
      { time: '9h00', title: "Titre de l'événement", type: 'En ligne', speaker: 'Conférencier', location: 'Lieu' },
      { time: '10h00', title: "Titre de l'événement", type: 'En ligne', speaker: 'Conférencier', location: 'Lieu' },
    ],
  },
  {
    date: 'Dimanche 11 Février',
    events: [
      { time: '8h00', title: "Titre de l'événement", type: 'En personne', speaker: 'Conférencier', location: 'Lieu' },
      { time: '9h00', title: "Titre de l'événement", type: 'En ligne', speaker: 'Conférencier', location: 'Lieu' },
      { time: '10h00', title: "Titre de l'événement", type: 'En ligne', speaker: 'Conférencier', location: 'Lieu' },
    ],
  },
];

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setUserName('');
    setUserEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text(`Titre de l'événement: ${selectedEvent.title}`, 10, 10);
    doc.text(`Type: ${selectedEvent.type}`, 10, 20);
    doc.text(`Conférencier: ${selectedEvent.speaker}`, 10, 30);
    doc.text(`Lieu: ${selectedEvent.location}`, 10, 40);
    doc.text(`Nom: ${userName}`, 10, 50);
    doc.text(`Email: ${userEmail}`, 10, 60);
    doc.save('event-details.pdf');
    handleCloseModal();
  };

  return (
    <div className="events">
      <Header />
      <main className="content">
        <h1>Calendrier</h1>
        <p>Découvrez nos prochains ateliers et événements à venir.</p>
        {events.map((day) => (
          <div key={day.date} className="day">
            <h2>{day.date}</h2>
            {day.events.map((event, index) => (
              <div key={index} className="event">
                <span>{event.time}</span>
                <span>{event.title}</span>
                <span className={`event-type ${event.type === 'En personne' ? 'in-person' : 'online'}`}>{event.type}</span>
                <span>{event.speaker}</span>
                <span>{event.location}</span>
                <button onClick={() => handleViewDetails(event)}>Voir les détails</button>
              </div>
            ))}
          </div>
        ))}
        {selectedEvent && (
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedEvent.title}</h2>
              <p><strong>Type:</strong> {selectedEvent.type}</p>
              <p><strong>Conférencier:</strong> {selectedEvent.speaker}</p>
              <p><strong>Lieu:</strong> {selectedEvent.location}</p>
              <form className="signup-form" onSubmit={handleSubmit}>
                <h3>Inscription</h3>
                <label>
                  Nom:
                  <input type="text" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                </label>
                <button type="submit">S'inscrire et Télécharger PDF</button>
              </form>
              <button className="close-modal" onClick={handleCloseModal}>Fermer</button>
            </div>
          </div>
        )}
        <div className="weekly-program">
          <h2>Programme de la semaine</h2>
          <ul>
            <li><strong>Lundi - Vendredi:</strong> 18h - 22h, 2 Activités de 2h</li>
            <li><strong>Samedi:</strong> 9h - 12h, 16h - 22h, 6-8 activités de 2h</li>
            <li><strong>Mercredi:</strong> Enfants</li>
            <li><strong>Samedi matin:</strong> Seniors</li>
            <li><strong>Samedi après-midi:</strong> Adultes</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Events;
