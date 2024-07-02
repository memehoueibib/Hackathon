import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <h1>Bienvenue au Café Code 69</h1>
      <p>Découvrez nos services et rejoignez-nous pour une aventure numérique passionnante.</p>
      <div className="hero-buttons">
        <a href="/discover" className="btn">Découvrir</a>
        <a href="/signup" className="btn">S'inscrire</a>
      </div>
    </div>
  );
}

export default Hero;
