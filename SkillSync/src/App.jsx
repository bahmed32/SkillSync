import { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    if (inputText.trim()) {

      setMessages([...messages, { type: 'user', text: inputText }]);


      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: inputText },
        { type: 'ai', text: `You said: "${inputText}"` },
      ]);

      setInputText(''); 
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`message ${message.type}`}
          >
            {message.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Message here"
          value={inputText}
          onChange={handleInputChange}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
