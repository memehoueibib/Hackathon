import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Auth.css';

function Login() {
  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h2>Se Connecter</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Connexion</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
