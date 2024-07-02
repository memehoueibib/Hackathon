import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Auth.css';

function Signup() {
  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h2>S'Inscrire</h2>
        <form>
          <label htmlFor="username">Nom d'utilisateur:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Inscription</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
