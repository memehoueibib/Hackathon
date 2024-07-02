import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Abonnements.css';

function Abonnements() {
  return (
    <div className="abonnements">
      <Header />
      <div className="content">
        <h2>Plans Tarifaires</h2>
        <p>Découvrez nos différentes formules d'abonnement.</p>

        <div className="plans">
          <div className="plan">
            <h3>Freemium</h3>
            <p>Accès limité aux ressources et ateliers.</p>
            <p className="price">Gratuit</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Premium</h3>
            <p>Accès complet à tous les ateliers et ressources.</p>
            <p className="price">70 €/semaine</p>
            <p className="price">350 €/mois</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Jour Spécial</h3>
            <p>Accès pour une journée à tous les services.</p>
            <p className="price">15 €/jour</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Libre Service</h3>
            <p>Accès en libre-service aux ressources limitées.</p>
            <p className="price">5 €/heure</p>
            <button>S'abonner</button>
          </div>
        </div>

        <h2>Comparaison des Plans Tarifaires</h2>
        <table>
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Freemium</th>
              <th>Premium</th>
              <th>Jour Spécial</th>
              <th>Libre Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accès aux ressources limitées</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Accès à tous les ateliers</td>
              <td></td>
              <td>✔</td>
              <td>✔</td>
              <td></td>
            </tr>
            <tr>
              <td>Accès complet aux services</td>
              <td></td>
              <td>✔</td>
              <td>✔</td>
              <td></td>
            </tr>
            <tr>
              <td>Accès limité en libre-service</td>
              <td></td>
              <td></td>
              <td></td>
              <td>✔</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Abonnements;
