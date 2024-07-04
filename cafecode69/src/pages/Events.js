import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Events.css';

const events = [
  {
    date: 'Vendredi 09 Février',
    events: [
      { time: '8h00', title: "Atelier de Programmation pour Débutants", type: 'En personne', speaker: 'Jean Dupont', location: 'Café Code Lyon, 123 Rue de la Programmation' },
      { time: '9h00', title: "Conférence sur l'Intelligence Artificielle", type: 'En ligne', speaker: 'Marie Curie', location: 'Zoom' },
      { time: '10h00', title: "Introduction à la Data Science", type: 'En ligne', speaker: 'Alan Turing', location: 'Zoom' },
    ],
  },
  {
    date: 'Samedi 10 Février',
    events: [
      { time: '8h00', title: "Atelier de Développement Web Avancé", type: 'En personne', speaker: 'Grace Hopper', location: 'Café Code Lyon, 123 Rue de la Programmation' },
      { time: '9h00', title: "Machine Learning pour Débutants", type: 'En ligne', speaker: 'Ada Lovelace', location: 'Zoom' },
      { time: '10h00', title: "Développement de Jeux Vidéo", type: 'En ligne', speaker: 'John Carmack', location: 'Zoom' },
    ],
  },
  {
    date: 'Dimanche 11 Février',
    events: [
      { time: '8h00', title: "Atelier de Sécurité Informatique", type: 'En personne', speaker: 'Kevin Mitnick', location: 'Café Code Lyon, 123 Rue de la Programmation' },
      { time: '9h00', title: "Blockchain et Cryptomonnaies", type: 'En ligne', speaker: 'Satoshi Nakamoto', location: 'Zoom' },
      { time: '10h00', title: "Hackathon sur les Technologies Emergentes", type: 'En ligne', speaker: 'Elon Musk', location: 'Zoom' },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    const logoUrl = '/logo_nobg.png'; // Remplacez par le chemin de votre logo

    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);
    doc.text(`Titre de l'événement: ${selectedEvent.title}`, 10, 10);
    doc.setFontSize(14);
    doc.text(`Type: ${selectedEvent.type}`, 10, 20);
    doc.text(`Conférencier: ${selectedEvent.speaker}`, 10, 30);
    doc.text(`Lieu: ${selectedEvent.location}`, 10, 40);
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Nom: ${userName}`, 10, 50);
    doc.text(`Email: ${userEmail}`, 10, 60);

    // Charger le logo et l'ajouter au PDF
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => {
      doc.addImage(img, 'PNG', 10, 70, 50, 50);
      const qrCodeUrl = 'http://localhost:3000/events'; // Remplacez par votre URL QR code

      // Générer le QR code
      QRCode.toDataURL(qrCodeUrl, { width: 128, margin: 1 }, (err, url) => {
        if (err) {
          console.error(err);
          return;
        }
        doc.addImage(url, 'PNG', 70, 70, 50, 50);

        // Ajouter un texte professionnel
        doc.setFontSize(12);
        doc.setTextColor(40, 40, 40);
        doc.text(`Merci de votre inscription à notre événement. Veuillez présenter ce ticket à l'entrée de l'atelier.`, 10, 130);
        doc.text(`Vous pouvez également scanner le QR code pour plus d'informations et pour accéder à votre profil en ligne.`, 10, 140);
        
        doc.save('event-details.pdf');
        handleCloseModal();
      });
    };
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
