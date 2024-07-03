import React from 'react';
import './Header.css';

function Header() {
  return (
    <header style={{padding: "10px"}}>
      <div className="logo">Café Code 69</div>
      <nav>
        <a href="/">Accueil</a>
        <a href="/abonnements">Abonnements</a>
        <a href="/ateliers">Ateliers</a>
        <a href="/events">Événements</a>
        <a href="/login">Se Connecter</a>
        <a href="/signup">S'inscrire</a>
      </nav>
    </header>
  );
}

export default Header;
