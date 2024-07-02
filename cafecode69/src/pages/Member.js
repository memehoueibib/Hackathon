import React from 'react';
import './Member.css';

function Member() {
  return (
    <div className="member">
      <header>
        <h1>Espace Membre</h1>
      </header>
      <section>
        <h2>Profil Utilisateur</h2>
        <p>Informations personnelles et gestion des abonnements.</p>
      </section>
      <footer>
        <p>&copy; 2024 Café Code 69. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Member;
