import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);  
  
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: `You asked: ${inputText}` },
      ]);
  
      setLoading(true);
  
      try {
        const response = await fetch(`http://localhost:80/get_answer?query=${encodeURIComponent(inputText)}`);
        const data = await response.json();
  
        if (response.ok) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'ai', text: `Answer: ${data.answer}` },
            ...data.unique_urls.map((urlObj) => ({
              type: 'ai',
              text: `Source: ${urlObj.URL}`,
            })),
          ]);
        } else {
          console.error('API Error:', data);
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'ai', text: 'Sorry, there was an error with the API response.' },
          ]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'ai', text: 'Sorry, there was an error processing your request.' },
        ]);
      }
  
      setInputText('');
      setLoading(false);
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
          {loading && <div className="loading-message">Loading...</div>}
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



