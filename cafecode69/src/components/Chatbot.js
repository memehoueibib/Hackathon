import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10000;
`;

const ChatButton = styled.button`
  background-color: #d18c3c;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const ChatWindow = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: ${props => (props.open ? 'block' : 'none')};
  margin-bottom: 10px;
  padding-bottom: 6px;
`;

const ChatHeader = styled.div`
  background-color: #d18c3c;
  color: white;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ChatMessages = styled.div`
  padding: 10px;
  overflow-y: auto;
  height: 300px;
`;

const ChatInputContainer = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #d18c3c;
  }
`;

const SendButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #d18c3c;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Message = styled.div`
  text-align: ${props => (props.sender === 'user' ? 'right' : 'left')};
  margin: 5px 0;

  span {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    background: ${props => (props.sender === 'user' ? '#d1e7dd' : '#f8d7da')};
  }
`;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Bienvenue chez Café Code! Comment puis-je vous aider aujourd\'hui? Veuillez choisir un numéro : \n1. Informations sur les ateliers \n2. Détails sur les abonnements \n3. Programme des événements \n4. Contactez-nous' }
  ]);
  const [input, setInput] = useState('');

  const questionsAnswers = {
    '1': (
      <span>
        Nous proposons plusieurs ateliers : <br/>
        1. Initiation aux Algorithmes pour Enfants<br/>
        2. Initiation aux Technologies pour Seniors<br/>
        3. Gaming et Hackathons pour Développeurs<br/>
        Pour plus de détails, cliquez sur les liens suivants : <br/><br/>
        <Link to="/atelier-algorithmes">Initiation aux Algorithmes pour Enfants</Link><br/><br/>
        <Link to="/atelier-technologies">Initiation aux Technologies pour Seniors</Link><br/><br/>
        <Link to="/atelier-gaming">Gaming et Hackathons pour Développeurs</Link>
      </span>
    ),
    '2': (
      <span>
        Nous avons plusieurs abonnements : <br/><br/>
        1. Freemium - Gratuit<br/>
        2. Premium - 70€/semaine, 350€/mois<br/>
        3. Jour Spécial - 15€/jour<br/>
        4. Libre Service - 5€/heure<br/>
        Pour plus de détails, cliquez sur le lien suivant : <br/><br/><Link to="/abonnements">Voir détails</Link>
      </span>
    ),
    '3': (
      <span>
        Le programme de la semaine : <br/>
        Lundi - Vendredi 18h-22h (2 activités de 2h)<br/>
        Samedi 9h-12h, 16h-22h (6-8 activités de 2h)<br/>
        Mercredi - Enfant<br/>
        Samedi - matin seniors, après-midi adultes<br/><br/>
        Pour plus de détails, cliquez sur le lien suivant : <br/><br/><Link to="/events">Voir détails</Link>
      </span>
    ),
    '4': <Link to="/contact">Cliquez ici pour nous contacter</Link>,
  };

  const handleSend = () => {
    const userMessage = { sender: 'user', text: input };
    const response = questionsAnswers[input] || 'Désolé, je ne comprends pas cette question. Veuillez choisir un numéro : \n1. Informations sur les ateliers \n2. Détails sur les abonnements \n3. Programme des événements \n4. Contactez-nous';
    const botMessage = {
      sender: 'bot',
      text: response
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatbotContainer>
      <ChatWindow open={open}>
        <ChatHeader>
          Chatbot
          <CloseButton onClick={() => setOpen(false)}>×</CloseButton>
        </ChatHeader>
        <ChatMessages>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender}>
              <span>{msg.text}</span>
            </Message>
          ))}
        </ChatMessages>
        <ChatInputContainer>
          <ChatInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SendButton onClick={handleSend}>Envoyer</SendButton>
        </ChatInputContainer>
      </ChatWindow>
      <ChatButton onClick={() => setOpen(!open)}>
        <img src="/logo_nobg.png" alt="Chat icon" />
      </ChatButton>
    </ChatbotContainer>
  );
};

export default Chatbot;
