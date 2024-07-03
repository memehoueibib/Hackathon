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
            <div className="card">
              <h3>Ateliers et Événements</h3>
              <p>Découvrez notre calendrier d'ateliers et d'événements passionnants.</p>
              <Link to="/ateliers" className="btn">Voir les détails</Link>
            </div>
            <div className="card">
              <h3>Espace de Coworking</h3>
              <p>Profitez d'un espace de travail collaboratif et stimulant.</p>
              <Link to="/coworking" className="btn">Voir les détails</Link>
            </div>
            <div className="card">
              <h3>Rejoignez notre communauté</h3>
              <p>Inscrivez-vous dès maintenant pour profiter de tous nos services.</p>
              <Link to="/signup" className="btn">Inscription</Link>
            </div>
          </div>
          <div className="buttons">
            <a href="/signup" className="btn black">Inscription</a>
            <a href="/discover" className="btn white">En savoir plus</a>
          </div>
        </div>
        <div className="section advantages">
          <h2>Les avantages du Café Code</h2>
          <div className="cards">
            <div className="card">
              <h3>Abonnements Flexibles</h3>
              <p>Choisissez parmi nos différentes formules d'abonnement pour trouver celle qui correspond le mieux à vos besoins.</p>
              <Link to="/abonnements" className="btn">Voir les détails</Link>
            </div>
            <div className="card">
              <h3>Espace Membre</h3>
              <p>Accédez à votre profil utilisateur, gérez vos abonnements et consultez votre historique de participations.</p>
              <Link to="/membres" className="btn">Voir les détails</Link>
            </div>
            <div className="card">
              <h3>Ressources Exclusives</h3>
              <p>Profitez d'une bibliothèque de tutoriels et de guides pour développer vos compétences en programmation.</p>
              <Link to="/ressources" className="btn">Voir les détails</Link>
            </div>
          </div>
          <div className="buttons">
            <a href="/abonnements" className="btn black">Découvrir</a>
            <a href="/signup" className="btn white">Inscription</a>
          </div>
        </div>
        <div className="section explore">
          <h2>Le Café Code : Votre Espace de Créativité</h2>
          <div className="cards">
            <div className="card">
              <h3>Événements Spéciaux</h3>
              <p>Participez à des ateliers, des conférences et des rencontres avec des experts du domaine.</p>
              <Link to="/events" className="btn">Voir les détails</Link>
            </div>
            <div className="card">
              <h3>Espaces de Travail Inspirants</h3>
              <p>Travaillez dans un environnement créatif et stimulant, propice à la concentration et à la collaboration.</p>
              <Link to="/coworking" className="btn">Voir les détails</Link>
            </div>
          </div>
        </div>
        <div className="section faq">
          <h2>FAQs</h2>
          <p>Trouvez les réponses aux questions les plus fréquentes sur nos services et nos ateliers.</p>
          <div className="faq-item">
            <details>
              <summary>Comment s'abonner ?</summary>
              <p>Pour vous abonner, vous pouvez remplir le formulaire d'inscription en ligne ou nous contacter directement par téléphone ou email. Une fois votre abonnement confirmé, vous aurez accès à tous les avantages liés à votre abonnement.</p>
            </details>
          </div>
          <div className="faq-item">
            <details>
              <summary>Quels sont les tarifs ?</summary>
              <p>Nous proposons différentes formules d'abonnement adaptées à vos besoins. Les tarifs varient en fonction de la durée de l'abonnement et des services inclus. Consultez nos pages Abonnements pour plus de détails.</p>
            </details>
          </div>
          <div className="faq-item">
            <details>
              <summary>Comment résilier mon abonnement ?</summary>
              <p>Pour résilier votre abonnement, veuillez nous contacter par email ou par téléphone. Veuillez noter que la résiliation doit être effectuée 30 jours avant la date de fin de votre abonnement en cours.</p>
            </details>
          </div>
          <div className="faq-item">
            <details>
              <summary>Quels sont les avantages des abonnements ?</summary>
              <p>Les abonnements vous donnent accès à une variété de services et d'ateliers ainsi qu'à un espace de coworking et à des ressources exclusives. Consultez nos pages Abonnements pour plus de détails sur chaque formule.</p>
            </details>
          </div>
          <div className="faq-item">
            <details>
              <summary>Comment puis-je obtenir plus d'informations de paiement ?</summary>
              <p>Pour plus d'informations sur nos options de paiement, consultez notre page dédiée ou contactez notre service clientèle. Nous serons ravis de vous fournir les informations et de répondre à vos questions.</p>
            </details>
          </div>
          <div className="contact-section">
            <h2>Vous avez encore des questions ?</h2>
            <p>Contactez notre équipe de support.</p>
            <a href="/contact" className="btn contact-btn">Contactez-nous</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
