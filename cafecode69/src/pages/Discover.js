import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Discover.css';

function Discover() {
  return (
    <div className="discover">
      <Header />
      <div className="content">
        <h2>Découvrez le Café Code 69</h2>
        <p className="intro">Le Café Code 69 est un espace d'innovation et de créativité situé au cœur de Lyon. Nous offrons un lieu où les passionnés de technologie peuvent se rencontrer, apprendre et collaborer sur divers projets technologiques.</p>
        
        <div className="section">
          <h3>Nos Ateliers</h3>
          <p>Nous proposons une variété d'ateliers adaptés à tous les âges et niveaux de compétence. Nos ateliers couvrent des sujets tels que la programmation, la robotique, l'intelligence artificielle et bien plus encore.</p>
        </div>

        <div className="section">
          <h3>Nos Événements</h3>
          <p>Participez à nos événements réguliers, y compris des hackathons, des conférences et des compétitions de jeux vidéo. Ces événements sont conçus pour encourager l'innovation et offrir des opportunités de réseautage.</p>
        </div>

        <div className="section">
          <h3>Nos Services</h3>
          <p>En plus des ateliers et des événements, nous offrons des services de coworking, un espace de détente avec des jeux et des boissons, et des ressources éducatives pour aider nos membres à développer leurs compétences techniques.</p>
        </div>

        <div className="section">
          <h3>Rejoignez-nous</h3>
          <p>Que vous soyez un débutant ou un expert, le Café Code 69 a quelque chose à offrir. Rejoignez-nous pour explorer le monde de la technologie et de l'innovation dans un environnement convivial et stimulant.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Discover;
