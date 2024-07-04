import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AtelierDetails.css';

function AtelierGaming() {
  return (
    <div className="atelier-details">
      <Header />
      <div className="content">
        <h2>Atelier de Gaming avec Hackathons pour Développeurs</h2>
        <div className="section-image">
          <img src="/gaming.webp" alt="Gaming Workshop" />
        </div>
        <p><strong>Objectif :</strong> L'atelier de gaming avancé avec hackathons pour développeurs est conçu pour les passionnés de jeux vidéo expérimentés et les développeurs désireux d'explorer et d'innover dans l'industrie du gaming. L'objectif est d'améliorer les compétences de jeu avancées tout en encourageant la création de contenu innovant à travers des hackathons.</p>
        <h3>Public Cible</h3>
        <ul>
          <li>Gamers Avancés : Joueurs expérimentés cherchant à perfectionner leurs compétences et à participer à des compétitions de haut niveau.</li>
          <li>Développeurs de Jeux : Créateurs de jeux souhaitant collaborer et développer de nouvelles idées avec une communauté de passionnés.</li>
          <li>Adultes : Exploration des dernières technologies et tendances dans l'industrie du jeu.</li>
        </ul>
        <h3>Infrastructure et Matériel</h3>
        <ul>
          <li>Consoles de Jeux et PC Gaming : Équipements de pointe pour les compétitions et les sessions de développement.</li>
          <li>Outils de Développement : Logiciels avancés pour la création de jeux, l'animation et la modélisation 3D.</li>
          <li>Accessoires : Manettes de haute précision, claviers mécaniques, souris gaming, casques audio haute fidélité.</li>
          <li>Écrans et Projecteurs : Écrans haute résolution pour la visualisation et la diffusion en direct des événements et des compétitions.</li>
          <li>Logiciels : Environnements de développement intégrés (IDE) comme Unity, Unreal Engine, Blender, et des outils de gestion de projets.</li>
        </ul>
        <div className="section-image">
          <img src="/gaming-setup.webp" alt="Gaming Setup" />
        </div>
        <h3>Structure des Sessions</h3>
        <p><strong>Introduction aux Dernières Tendances et Technologies (30 minutes)</strong></p>
        <ul>
          <li>Exploration des avancées récentes dans les jeux vidéo, les plateformes de streaming et les opportunités de carrière.</li>
          <li>Discussion sur les défis et les opportunités dans l'industrie du gaming.</li>
        </ul>
        <p><strong>Compétences de Jeu Avancées (1 heure)</strong></p>
        <ul>
          <li>Techniques et stratégies avancées pour des jeux spécifiques comme League of Legends, Valorant, Fortnite, etc.</li>
          <li>Analyse de gameplay : déconstruction des stratégies et des mouvements avancés.</li>
        </ul>
        <p><strong>Hackathons pour Développeurs (2 heures)</strong></p>
        <ul>
          <li>Formation d'équipes mixtes : développeurs et gamers travaillant ensemble pour créer des prototypes de jeux innovants.</li>
          <li>Développement de concepts, programmation et intégration de la conception de jeux.</li>
        </ul>
        <p><strong>Présentation et Évaluation des Hackathons (1 heure)</strong></p>
        <ul>
          <li>Présentation des projets développés pendant le hackathon devant un panel d'experts.</li>
          <li>Évaluation des critères de conception, de jouabilité et de créativité.</li>
        </ul>
        <p><strong>Séance Pratique et Débriefing (30 minutes)</strong></p>
        <ul>
          <li>Pratique libre : les participants peuvent jouer librement, tester leurs nouvelles compétences et techniques de jeu.</li>
          <li>Débriefing : discussions sur les expériences, échanges d'idées et réponses aux questions.</li>
        </ul>
        <h3>Personnel</h3>
        <ul>
          <li>Formateurs de Gaming et Développeurs : Rôle : Animer les sessions, fournir des conseils avancés sur le gameplay, les stratégies et le développement de jeux. Qualifications : Expertise approfondie en jeux vidéo, expérience dans la compétition de haut niveau et développement de jeux.</li>
          <li>Techniciens : Rôle : Configuration et maintenance du matériel de jeu, résolution des problèmes techniques pendant les sessions. Qualifications : Compétences techniques avancées en informatique, gaming et développement logiciel.</li>
        </ul>
        <h3>Logistique</h3>
        <ul>
          <li>Sécurité et Confort : Assurer un environnement sécurisé et confortable pour les participants, avec des équipements de qualité et des conditions optimales pour le jeu et le développement.</li>
          <li>Gestion des Sessions : Groupes adaptés à la taille des compétitions et des activités pour une expérience optimale.</li>
          <li>Support Continu : Fournir des ressources et des contacts pour le soutien technique et le développement des compétences après l'atelier.</li>
        </ul>
        <div className="section-image">
          <img src="/gaming-competition.webp" alt="Gaming Competition" />
        </div>
        <h3>Jeux Vidéo Avancés</h3>
        <p>L'atelier inclura des compétitions et des hackathons basés sur des jeux vidéo avancés et populaires tels que :</p>
        <ul>
          <li><strong>League of Legends :</strong> Stratégie en équipe nécessitant une coordination avancée et une connaissance approfondie des mécaniques de jeu.</li>
          <li><strong>Valorant :</strong> FPS tactique où la précision et la stratégie sont primordiales pour atteindre les objectifs et vaincre l'adversaire.</li>
          <li><strong>Fortnite :</strong> Battle Royale avec un focus sur la construction et la stratégie pour survivre et dominer jusqu'à la victoire.</li>
        </ul>
        <p>Ces jeux offrent des défis stimulants et sont adaptés aux joueurs expérimentés cherchant à se perfectionner et à collaborer dans des environnements compétitifs et créatifs.</p>
      </div>
      <Footer />
    </div>
  );
}

export default AtelierGaming;
