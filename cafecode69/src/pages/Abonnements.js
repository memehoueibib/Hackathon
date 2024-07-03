import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Abonnements.css';

function Abonnements() {
  return (
    <div className="abonnements">
      <Header />
      <div className="content">
        <h2>Réflexion sur les abonnements</h2>
        <p>Nous avons ensuite discuté des modalités de tarification et avons décidé de proposer des abonnements pour rendre nos services accessibles et attractifs. Les abonnements offriraient des avantages comme des tarifs réduits, un accès prioritaire aux ateliers et des sessions supplémentaires gratuites.</p>

        <h2>Nos Abonnements</h2>
        <div className="plans">
          <div className="plan">
            <h3>Freemium</h3>
            <p>Accès limité gratuit.</p>
            <p className="price">Gratuit</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Carte Bronze</h3>
            <p>Accès basique aux activités.</p>
            <p className="price">300 €/mois</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Carte Argent</h3>
            <p>Accès aux activités + boissons à moitié de prix + 1 invité.</p>
            <p className="price">350 €/mois</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Carte Gold</h3>
            <p>Accès aux activités + boissons et goûter à moitié de prix + 2 invités + accès à des événements secrets.</p>
            <p className="price">400 €/mois</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Jour spécial</h3>
            <p>Accès pour des événements ou ateliers spécifiques.</p>
            <p className="price">30 €/jour</p>
            <button>S'abonner</button>
          </div>
          <div className="plan">
            <h3>Libre Service</h3>
            <p>Accès sans abonnement, tarif à l'heure.</p>
            <p className="price">5 €/heure</p>
            <button>S'abonner</button>
          </div>
        </div>

        <h2>Tarifs Abonnements</h2>
        <div className="subscription-plans">
          <h3>Abonnements mensuels</h3>
          <ul>
            <li>Initial : 300€/mois</li>
            <li>Trimestriel : 270€/mois</li>
            <li>Semestriel : 255€/mois</li>
            <li>Annuel : 240€/mois</li>
          </ul>

          <h3>Abonnements hebdomadaires</h3>
          <ul>
            <li>Standard : 90€/semaine</li>
            <li>Premium : 120€/semaine</li>
          </ul>

          <h3>Forfaits journaliers</h3>
          <ul>
            <li>Journée découverte : 30€</li>
            <li>Journée standard : 40€</li>
            <li>Journée premium : 50€</li>
          </ul>

          <h3>Options supplémentaires</h3>
          <ul>
            <li>Pack famille : 450€/mois pour 2 adultes et jusqu'à 2 enfants</li>
            <li>Tarif étudiant/senior : 240€/mois</li>
          </ul>
        </div>

        <h2>Tarifs Coworking</h2>
        <div className="coworking-plans">
          <h3>Forfaits flexibles</h3>
          <ul>
            <li>Accès journalier : 15€/jour</li>
            <li>Pack 5 jours : 65€</li>
            <li>Pack 10 jours : 120€</li>
          </ul>
          <h3>Accès mensuel</h3>
          <ul>
            <li>Temps partiel (10 jours/mois) : 140€</li>
            <li>Mi-temps (12 jours/mois) : 160€</li>
            <li>Temps plein (accès illimité) : 220€</li>
          </ul>
          <h3>Engagement longue durée</h3>
          <ul>
            <li>3 mois : 200€/mois</li>
            <li>6 mois : 190€/mois</li>
            <li>12 mois : 180€/mois</li>
          </ul>
        </div>

        <h2>Comparaison des Plans Tarifaires</h2>
        <table>
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Freemium</th>
              <th>Carte Bronze</th>
              <th>Carte Argent</th>
              <th>Carte Gold</th>
              <th>Jour Spécial</th>
              <th>Libre Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accès limité gratuit</td>
              <td>✔</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Accès basique aux activités</td>
              <td></td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
              <td></td>
            </tr>
            <tr>
              <td>Boissons à moitié prix</td>
              <td></td>
              <td></td>
              <td>✔</td>
              <td>✔</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 invité</td>
              <td></td>
              <td></td>
              <td>✔</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2 invités</td>
              <td></td>
              <td></td>
              <td></td>
              <td>✔</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Accès à des événements secrets</td>
              <td></td>
              <td></td>
              <td></td>
              <td>✔</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Accès en libre-service</td>
              <td></td>
              <td></td>
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
