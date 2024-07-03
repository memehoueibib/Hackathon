import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Membres.css';

// Register the required components for ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const membresData = {
  name: "Jean Dupont",
  abonnement: "Gold",
  profilePhoto: "/background.webp", // Add the path to the profile photo here
  ateliers: [
    { title: "Atelier d'Initiation aux Algorithmes", date: "2023-06-15", status: "Terminé" },
    { title: "Atelier de Technologies pour Seniors", date: "2023-07-20", status: "À venir" },
    { title: "Atelier de Gaming avec Hackathons", date: "2023-08-10", status: "À venir" },
    { title: "Atelier de VR", date: "2023-09-05", status: "À venir" },
    { title: "Atelier de Data Science", date: "2023-10-15", status: "À venir" }
  ],
  reservations: [
    { title: "Atelier de VR", date: "2023-07-25" },
    { title: "Atelier de Data Science", date: "2023-08-05" }
  ],
  historique: [
    { title: "Atelier de Programmation", date: "2023-05-10" },
    { title: "Atelier d'IA", date: "2023-04-22" },
    { title: "Atelier de Blockchain", date: "2023-03-18" },
    { title: "Atelier de Développement Web", date: "2023-02-15" }
  ],
  avantages: [
    { title: "Accès à tous les ateliers", unlocked: true },
    { title: "Boissons gratuites", unlocked: true },
    { title: "Invités gratuits", unlocked: true },
    { title: "Accès à des événements secrets", unlocked: true },
    { title: "Réductions sur les cours", unlocked: false }
  ],
  heures: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65]
};

const lineChartData = {
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  datasets: [
    {
      label: 'Heures d\'activités',
      data: membresData.heures,
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const doughnutChartData = {
  labels: ['Ateliers Terminés', 'Ateliers à Venir', 'Réservations'],
  datasets: [
    {
      data: [membresData.historique.length, membresData.ateliers.filter(atelier => atelier.status === 'À venir').length, membresData.reservations.length],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

function Membres() {
  return (
    <div className="membres">
      <Header />
      <div className="membres-content">
        <h2>Profil Membre</h2>
        <div className="profile">
          <img src={membresData.profilePhoto} alt="Profile" className="profile-photo" />
          <h3>Nom : {membresData.name}</h3>
          <p>Abonnement : {membresData.abonnement}</p>
        </div>
        <div className="section">
          <h3>Historique des Ateliers</h3>
          <ul className="atelier-list">
            {membresData.historique.map((atelier, index) => (
              <li key={index} className="atelier-item">{atelier.title} - {atelier.date}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h3>Ateliers Inscrits</h3>
          <ul className="atelier-list">
            {membresData.ateliers.map((atelier, index) => (
              <li key={index} className="atelier-item">{atelier.title} - {atelier.date} - {atelier.status}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h3>Réservations à Venir</h3>
          <ul className="atelier-list">
            {membresData.reservations.map((reservation, index) => (
              <li key={index} className="atelier-item">{reservation.title} - {reservation.date}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h3>Statut d'Abonnement</h3>
          <ul className="avantages-list">
            {membresData.avantages.map((avantage, index) => (
              <li key={index} className={`avantage-item ${avantage.unlocked ? 'unlocked' : 'locked'}`}>
                {avantage.title} {avantage.unlocked ? '✔' : '🔒'}
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <h3>Heures d'Activité Réalisées</h3>
          <div className="chart-container">
            <Line data={lineChartData} />
          </div>
          <div className="chart-container">
            <Doughnut data={doughnutChartData} />
          </div>
        </div>
        <div className="section">
          <h3>Inviter et Gagner</h3>
          <p>Invitez vos amis et gagnez des récompenses !</p>
          <button>Inviter des Amis</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Membres;
