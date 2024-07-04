import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AtelierDetails.css';

function AtelierAlgorithmes() {
  return (
    <div className="atelier-details">
      <Header />
      <div className="content">
        <h2>Atelier d'Initiation aux Algorithmes pour Enfants</h2>
        <div className="section-image">
          <img src="/algorithmes.webp" alt="Algorithmes pour Enfants" />
        </div>
        <p><strong>Objectif :</strong> Introduire les enfants aux concepts de base des algorithmes à travers des activités ludiques et interactives, suivies par une application pratique sous forme de jeu.</p>
        <p><strong>Âge recommandé :</strong> 8-12 ans</p>
        <h3>Structure de l'Atelier</h3>
        <p><strong>Introduction aux Algorithmes (20 minutes)</strong></p>
        <ul>
          <li>Définition simple : Un algorithme est une série d'instructions pour résoudre un problème ou réaliser une tâche.</li>
          <li>Exemples concrets : Expliquer des algorithmes quotidiens comme se brosser les dents ou faire un sandwich.</li>
          <li>Matériel : Tableaux, marqueurs, images de séquences d'activités quotidiennes.</li>
        </ul>
        <p><strong>Activité Ludique : "L'Algorithme du Robot" (30 minutes)</strong></p>
        <div className="section-image">
          <img src="/robot.webp" alt="Algorithme du Robot" />
        </div>
        <ul>
          <li>Description : Les enfants créent des algorithmes pour guider un "robot" humain.</li>
          <li>Matériel : Ruban adhésif pour marquer le sol, cartes d'instructions simples (avancer, tourner à gauche, tourner à droite, ramasser un objet).</li>
          <li>Déroulement : Marquer un parcours au sol avec le ruban adhésif. Les enfants créent une séquence d'instructions pour guider le "robot" à travers le parcours. Un enfant joue le rôle du robot et suit les instructions données par ses camarades.</li>
        </ul>
        <p><strong>Pause (10 minutes)</strong></p>
        <p><strong>Application Pratique : Créer un Jeu Simple (40 minutes)</strong></p>
        <ul>
          <li>Jeu : "Trouve le Trésor"</li>
          <li>Objectif du jeu : Les enfants appliquent leurs compétences en algorithmes pour guider un personnage vers un trésor caché sur une grille.</li>
          <li>Matériel : Grille imprimée (5x5 cases), Figurines ou pions pour représenter les personnages, Cartes d'instructions (avancer, tourner à gauche, tourner à droite, ramasser), Feuilles et crayons pour écrire les algorithmes, Trésor (petit objet ou image de trésor).</li>
          <li>Déroulement du Jeu : Mise en Place : Placer la grille imprimée sur une table. Placer le personnage sur une case de départ (par exemple, en bas à gauche). Cacher le trésor sur une autre case de la grille (les enfants ne savent pas où se trouve le trésor). Créer l'Algorithme : Les enfants travaillent par équipes pour écrire une série d'instructions qui guideront le personnage vers le trésor. Les instructions sont limitées à : avancer, tourner à gauche, tourner à droite, ramasser. Tester l'Algorithme : Une équipe lit son algorithme à haute voix pendant qu'un autre enfant déplace le pion sur la grille en suivant les instructions. Si le personnage atteint le trésor, l'équipe gagne des points. Si l'algorithme est incorrect, ils peuvent le modifier et réessayer. Échanges et Discussions : Après chaque tentative, discuter des erreurs et des moyens de les corriger. Encourager les enfants à réfléchir à la façon dont ils peuvent améliorer leurs algorithmes.</li>
        </ul>
        <p><strong>Conclusion et Réflexion (20 minutes)</strong></p>
        <div className="section-image">
          <img src="/treasure-hunt.webp" alt="Trouve le Trésor" />
        </div>
        <ul>
          <li>Discussion de Groupe : Parler de ce qu'ils ont appris sur les algorithmes. Discuter de la manière dont les algorithmes sont utilisés dans la vie quotidienne et dans la technologie.</li>
          <li>Questions et Réponses : Encourager les enfants à poser des questions sur ce qu'ils ont appris et à partager leurs expériences.</li>
          <li>Clôture : Remercier les participants et leur donner des idées de ressources pour continuer à explorer les algorithmes et la programmation (livres, sites web, applications éducatives).</li>
        </ul>
        <h3>Ressources et Matériel Annexe</h3>
        <ul>
          <li>Grilles imprimées et cartes d'instructions : Préparer des grilles et des cartes laminées pour une utilisation facile.</li>
          <li>Feuilles de travail : Créer des feuilles de travail avec des puzzles algorithmiques simples que les enfants peuvent résoudre à la maison.</li>
          <li>Références en ligne : Proposer des liens vers des jeux et des tutoriels en ligne adaptés aux enfants, comme Code.org ou Scratch.</li>
        </ul>
        <p>Ce format d'atelier est conçu pour être engageant et interactif, permettant aux enfants de comprendre et d'appliquer les concepts de base des algorithmes de manière ludique et pratique.</p>
      </div>
      <Footer />
    </div>
  );
}

export default AtelierAlgorithmes;
