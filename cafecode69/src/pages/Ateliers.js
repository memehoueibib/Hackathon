import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Ateliers.css';

function Ateliers() {
  return (
    <div className="ateliers">
      <Header />
      <div className="content">
        <h2>Nos Ateliers</h2>
        <div className="workshops">
          <div className="workshop">
            <h3>Initiation aux Algorithmes</h3>
            <p>Apprenez les bases des algorithmes de manière ludique. Idéal pour les enfants et les débutants en programmation.</p>
            <Link to="/atelier-algorithmes"><button>Voir Détails</button></Link>
          </div>
          <div className="workshop">
            <h3>Tournois de Jeux Vidéo</h3>
            <p>Participez à nos compétitions de jeux vidéo. Développez vos compétences et rencontrez d'autres passionnés.</p>
            <Link to="/atelier-gaming"><button>Voir Détails</button></Link>
          </div>
          <div className="workshop">
            <h3>Ateliers pour Seniors</h3>
            <p>Initiez-vous aux technologies modernes en toute simplicité. Parfait pour les seniors qui souhaitent se familiariser avec le numérique.</p>
            <Link to="/atelier-technologies">
              <button>Voir Détails</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ateliers;
