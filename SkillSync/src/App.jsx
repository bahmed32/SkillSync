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
        <div className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.type === 'user' ? 'user' : 'ai'}`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <form className="chat-footer" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter your question here..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
