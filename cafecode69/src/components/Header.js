import React from 'react';
import './Header.css';

function Header() {
  return (
    <header style={{padding: "10px"}}>
      <div className="logo"><a href='http://localhost:3000/'><img style={{width: "120px"}} src='../../logo_nobg.png'/></a></div>
      <nav style={{fontSize: "larger"}}>
        <a href="/">Accueil</a>
        <a href="/abonnements">Abonnements</a>
        <a href="/ateliers">Ateliers</a>
        <a href="/events">Événements</a>
        <a href="/membres">Espace Membre</a>
        <a href="/login">Se Connecter</a>
        <a href="/signup">S'inscrire</a>
      </nav>
    </header>
  );
}

export default Header;
