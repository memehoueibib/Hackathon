import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AtelierDetails.css';

function AtelierTechnologies() {
  return (
    <div className="atelier-details">
      <Header />
      <div className="content">
        <h2>Atelier d'Initiation aux Technologies Numériques pour Seniors</h2>
        <p><strong>Objectif :</strong> L'atelier d'initiation aux technologies numériques pour seniors vise à familiariser les participants avec l'utilisation d'un smartphone et des outils de bureautique de base. L'objectif est de rendre les seniors autonomes dans l'utilisation quotidienne de la technologie moderne, en leur fournissant les compétences nécessaires pour communiquer, naviguer sur Internet, gérer des documents et utiliser des applications utiles.</p>
        <h3>Infrastructure et Matériel</h3>
        <ul>
          <li>Smartphones : Modèles simples et conviviaux avec des interfaces intuitives (par exemple, des smartphones Android ou iOS adaptés aux débutants).</li>
          <li>Ordinateurs ou Tablettes : Pour l'initiation à la bureautique, avec un accès à des logiciels comme Microsoft Office ou des alternatives gratuites comme LibreOffice.</li>
          <li>Connexion Internet : Wi-Fi stable pour la navigation en ligne et le téléchargement d'applications.</li>
          <li>Écrans de Projection : Pour les démonstrations et les présentations en groupe.</li>
          <li>Supports de Cours : Guides imprimés ou numériques pour référence pendant et après l'atelier.</li>
        </ul>
        <h3>Structure des Sessions</h3>
        <p><strong>Introduction aux Smartphones (45 minutes)</strong></p>
        <ul>
          <li>Présentation des smartphones : fonctionnalités de base, sécurité et paramètres.</li>
          <li>Navigation tactile : gestes essentiels (zoom, balayage, toucher).</li>
          <li>Utilisation des principales applications : téléphone, contacts, messages, appareil photo.</li>
        </ul>
        <p><strong>Applications Pratiques pour la Vie Quotidienne (45 minutes)</strong></p>
        <ul>
          <li>Utilisation d'applications de communication : messagerie instantanée, appels vidéo (ex : WhatsApp, FaceTime).</li>
          <li>Navigation sur Internet : recherche d'informations, utilisation des moteurs de recherche.</li>
          <li>Introduction aux applications utiles : météo, actualités, services locaux.</li>
        </ul>
        <p><strong>Initiation à la Bureautique (1 heure)</strong></p>
        <ul>
          <li>Introduction à la suite bureautique : traitement de texte (Word, Writer), tableur (Excel, Calc).</li>
          <li>Création et gestion de documents simples : rédaction de lettres, gestion de listes et tableaux basiques.</li>
          <li>Envoi de documents par e-mail : pièces jointes, utilisation des adresses de contact.</li>
        </ul>
        <p><strong>Séance Pratique et Questions-Réponses (30 minutes)</strong></p>
        <ul>
          <li>Exercices pratiques : les participants pratiquent les compétences acquises sous la supervision des formateurs.</li>
          <li>Réponses aux questions individuelles et résolution des problèmes rencontrés.</li>
        </ul>
        <h3>Personnel</h3>
        <ul>
          <li>Formateurs : Rôle : Animer les sessions, expliquer les concepts de manière claire et accessible, répondre aux questions. Qualifications : Expertise en technologies numériques, patience et compétences pédagogiques adaptées aux seniors.</li>
          <li>Techniciens : Rôle : Configurer et maintenir le matériel, résoudre les problèmes techniques pendant les sessions. Qualifications : Compétences techniques en informatique et en gestion de matériel.</li>
        </ul>
        <h3>Logistique</h3>
        <ul>
          <li>Sécurité et Confort : Assurer un environnement confortable avec une bonne accessibilité pour tous les participants.</li>
          <li>Gestion des Sessions : Groupes de taille réduite pour une attention personnalisée et une meilleure assimilation des connaissances.</li>
          <li>Suivi et Support Continu : Fournir des contacts pour le support technique après l'atelier et des ressources complémentaires pour renforcer les compétences acquises.</li>
        </ul>
        <h3>Jeu de Société - Tech Aventure Senior</h3>
        <p>À la fin du module, un jeu de société sera implémenté pour mettre en pratique le contenu : <strong>Tech Aventure Senior</strong> est un jeu destiné aux seniors, conçu pour les aider à maîtriser les technologies numériques telles que les chatbots et l'assistance vocale. Les joueurs avancent sur un plateau coloré en accomplissant des missions pratiques comme utiliser un chatbot pour vérifier la météo, programmer une alarme vocale ou rechercher des recettes en ligne. Chaque tâche réussie permet de progresser davantage sur un plateau, et le premier joueur à atteindre la fin après avoir complété toutes les missions remporte la partie. Le jeu est conçu pour être convivial et accessible, avec des instructions claires et des symboles faciles à comprendre.</p>
      </div>
      <Footer />
    </div>
  );
}

export default AtelierTechnologies;
