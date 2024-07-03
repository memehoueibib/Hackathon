import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Abonnements from './pages/Abonnements';
import Ateliers from './pages/Ateliers';
import Events from './pages/Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Discover from './pages/Discover';
import AtelierAlgorithmes from './pages/AtelierAlgorithmes';
import AtelierTechnologies from './pages/AtelierTechnologies';
import AtelierGaming from './pages/AtelierGaming';
import Contact from './pages/Contact';
import Coworking from './pages/Coworking';
import Membres from './pages/Membres';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abonnements" element={<Abonnements />} />
          <Route path="/ateliers" element={<Ateliers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/atelier-algorithmes" element={<AtelierAlgorithmes />} />
          <Route path="/atelier-technologies" element={<AtelierTechnologies />} />
          <Route path="/atelier-gaming" element={<AtelierGaming />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/membres" element={<Membres />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
