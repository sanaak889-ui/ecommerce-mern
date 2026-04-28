import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages(prev => [
      ...prev,
      { text: userMessage, sender: 'user' }
    ]);

    setInput('');
    setLoading(true);

    try {
      const sessionId = 'user_' + Date.now();

      const response = await axios.post(
        // ⚠️ CHANGE THIS IF NEEDED
        'http://localhost:5678/webhook/website-chatbot',
        {
          message: userMessage,
          sessionId: sessionId
        }
      );

      console.log("FULL RESPONSE:", response);

      const data = response?.data;

      // ✅ STRONG RESPONSE HANDLING
      let botReply = "";

      if (typeof data === "string") {
        botReply = data;
      } else if (data?.reply) {
        botReply = data.reply;
      } else if (data?.output) {
        botReply = data.output;
      } else {
        botReply = JSON.stringify(data);
      }

      setMessages(prev => [
        ...prev,
        { text: botReply || "Empty response from server", sender: 'bot' }
      ]);

    } catch (error) {
      console.error("AXIOS ERROR:", error);

      let errorMsg = "⚠️ Cannot connect to server";

      if (error.response) {
        errorMsg = `Server error: ${error.response.status}`;
      } else if (error.request) {
        errorMsg = "No response from n8n (check webhook)";
      }

      setMessages(prev => [
        ...prev,
        { text: errorMsg, sender: 'bot' }
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!open) {
    return (
      <button className="chat-toggle-btn" onClick={() => setOpen(true)}>
        💬
      </button>
    );
  }

  return (
    <div className="chat-widget">
      <div className="chat-header">
        💬 Support
        <button className="close-btn" onClick={() => setOpen(false)}>×</button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message bot">Typing...</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;