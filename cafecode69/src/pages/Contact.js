import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact-container">
        <h2>Formulaire de Contact</h2>
        <p>Besoin d'aide ou de renseignements supplémentaires ? N'hésitez pas à nous contacter.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" required />
          </div>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Numéro de téléphone</label>
            <input type="tel" id="telephone" name="telephone" required />
          </div>
          <div className="form-group">
            <label htmlFor="sujet">Choisissez un sujet</label>
            <select id="sujet" name="sujet" required>
              <option value="">Sélectionnez...</option>
              <option value="abonnement">Abonnement</option>
              <option value="ateliers">Ateliers</option>
              <option value="evenements">Événements</option>
              <option value="support">Support Technique</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label>Comment avez-vous entendu parler de nous ?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="reference" value="ami" required /> Par un ami
              </label>
              <label>
                <input type="radio" name="reference" value="internet" required /> Internet
              </label>
              <label>
                <input type="radio" name="reference" value="publicite" required /> Publicité
              </label>
              <label>
                <input type="radio" name="reference" value="autre" required /> Autre
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" name="conditions" required /> J'accepte les conditions
            </label>
          </div>
          <button type="submit" className="btn submit-btn">Envoyer</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
