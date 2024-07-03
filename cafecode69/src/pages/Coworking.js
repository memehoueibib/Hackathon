import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Coworking.css';

function Coworking() {
  return (
    <div className="coworking">
      <Header />
      <div className="coworking-container">
        <h2>Espace de Coworking</h2>
        <p>Notre espace de coworking est conçu pour offrir un environnement de travail collaboratif et stimulant.</p>
        
        <section className="about-coworking">
          <h3>À propos de notre espace de coworking</h3>
          <p>
            Café Code 69 propose un espace de coworking moderne et confortable, idéal pour les freelances, entrepreneurs, et petites entreprises. Nos installations comprennent :
          </p>
          <ul>
            <li>Des postes de travail ergonomiques</li>
            <li>Un accès à une connexion Internet haut débit</li>
            <li>Des salles de réunion équipées</li>
            <li>Des zones de détente et de networking</li>
            <li>Un service de café et de thé gratuit</li>
            <li>Une ambiance propice à la concentration et à la collaboration</li>
          </ul>
        </section>

        <section className="benefits-coworking">
          <h3>Avantages du coworking chez Café Code 69</h3>
          <div className="benefits">
            <div className="benefit">
              <h4>Flexibilité</h4>
              <p>Accédez à votre espace de travail selon vos horaires et besoins.</p>
            </div>
            <div className="benefit">
              <h4>Communauté</h4>
              <p>Rejoignez une communauté dynamique de professionnels et développez votre réseau.</p>
            </div>
            <div className="benefit">
              <h4>Événements</h4>
              <p>Participez à des ateliers, conférences, et événements de networking.</p>
            </div>
            <div className="benefit">
              <h4>Ressources</h4>
              <p>Profitez de nos ressources exclusives et de nos outils de travail modernes.</p>
            </div>
          </div>
        </section>

        <section className="pricing-coworking">
          <h3>Tarifs et Abonnements</h3>
          <table>
            <thead>
              <tr>
                <th>Type d'abonnement</th>
                <th>Prix</th>
                <th>Inclus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accès Journée</td>
                <td>15€/jour</td>
                <td>Poste de travail, Internet, café/thé</td>
              </tr>
              <tr>
                <td>Accès Hebdomadaire</td>
                <td>70€/semaine</td>
                <td>Poste de travail, Internet, café/thé, 2 heures de salle de réunion</td>
              </tr>
              <tr>
                <td>Accès Mensuel</td>
                <td>250€/mois</td>
                <td>Poste de travail, Internet, café/thé, 8 heures de salle de réunion</td>
              </tr>
              <tr>
                <td>Accès Annuel</td>
                <td>2800€/an</td>
                <td>Poste de travail, Internet, café/thé, 100 heures de salle de réunion</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Coworking;
