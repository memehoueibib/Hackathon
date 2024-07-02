import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Nos Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Initiation aux Algorithmes</h3>
          <p>Apprenez les bases des algorithmes de manière ludique.</p>
        </div>
        <div className="card">
          <h3>Tournois de Jeux Vidéo</h3>
          <p>Participez à nos compétitions de jeux vidéo.</p>
        </div>
        <div className="card">
          <h3>Ateliers pour Seniors</h3>
          <p>Initiez-vous aux technologies modernes en toute simplicité.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
