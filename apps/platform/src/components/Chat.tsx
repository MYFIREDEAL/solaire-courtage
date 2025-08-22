import React, { useState } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input.trim()]);
    setInput('');
  };

  return (
    <div>
      <h2>Chat</h2>
      <div style={{border:'1px solid #ccc', padding:10, minHeight:100, marginBottom:10}}>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Votre message"
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
};

export default Chat;
