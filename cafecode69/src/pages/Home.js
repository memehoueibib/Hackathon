import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="content">
        <Hero />
        <Services />
        <div className="section discover-services">
          <h2>Découvrez nos services et avantages uniques</h2>
          <p>Nous proposons une gamme complète d'ateliers, d'événements et un espace de coworking pour vous aider à développer vos compétences en programmation et à vous connecter avec d'autres passionnés.</p>
          <div className="cards">
            <Link to="/ateliers" className="card">
              <h3>Ateliers et Événements</h3>
              <p>Découvrez notre calendrier d'ateliers et d'événements passionnants.</p>
            </Link>
            <Link to="/coworking" className="card">
              <h3>Espace de Coworking</h3>
              <p>Profitez d'un espace de travail collaboratif et stimulant.</p>
            </Link>
            <Link to="/community" className="card">
              <h3>Rejoignez notre communauté</h3>
              <p>Inscrivez-vous dès maintenant pour profiter de tous nos services.</p>
            </Link>
          </div>
          <div className="buttons">
            <Link to="/signup" className="btn black">Inscription</Link>
            <Link to="/discover" className="btn white">En savoir plus</Link>
          </div>
        </div>
        <div className="section advantages">
          <h2>Les avantages du Café Code</h2>
          <div className="cards">
            <Link to="/abonnements" className="card">
              <h3>Abonnements Flexibles</h3>
              <p>Choisissez parmi nos différentes formules d'abonnement pour trouver celle qui correspond le mieux à vos besoins.</p>
            </Link>
            <Link to="/membre" className="card">
              <h3>Espace Membre</h3>
              <p>Accédez à votre profil utilisateur, gérez vos abonnements et consultez votre historique de participations.</p>
            </Link>
            <Link to="/resources" className="card">
              <h3>Ressources Exclusives</h3>
              <p>Profitez d'une bibliothèque de tutoriels et de guides pour développer vos compétences en programmation.</p>
            </Link>
          </div>
          <div className="buttons">
            <Link to="/abonnements" className="btn black">Découvrir</Link>
            <Link to="/signup" className="btn white">Inscription</Link>
          </div>
        </div>
        <div className="section explore">
          <h2>Le Café Code : Votre Espace de Créativité</h2>
          <div className="cards">
            <Link to="/events" className="card">
              <h3>Événements Spéciaux</h3>
              <p>Participez à des ateliers, des conférences et des rencontres avec des experts du domaine.</p>
            </Link>
            <Link to="/workspace" className="card">
              <h3>Espaces de Travail Inspirants</h3>
              <p>Travaillez dans un environnement créatif et stimulant, propice à la concentration et à la collaboration.</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
