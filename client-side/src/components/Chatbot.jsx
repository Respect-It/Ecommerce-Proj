import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const inputRef = useRef();
  const chatEndRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";
    const newUserMessage = { sender: "user", text: userMessage };
    const updated = [...messages, newUserMessage];
    setMessages(updated);
    setTyping(true);

    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      simulateTyping(data.reply || "🤖 No response from AI.", updated);
    } catch {
      setMessages([
        ...updated,
        { sender: "bot", text: "⚠️ Failed to connect to AI server." },
      ]);
      setTyping(false);
    }
  };

  const simulateTyping = (text, history) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setMessages([
          ...history,
          { sender: "bot", text: text.slice(0, index) },
        ]);
        index++;
      } else {
        clearInterval(interval);
        setTyping(false);
      }
    }, 15);
  };

  const clearChat = () => {
    localStorage.removeItem("chatHistory");
    setMessages([]);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Toggle button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <FaRobot />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <FaRobot className="chatbot-header-icon" />
              <span>Chatbot</span>
            </div>
            <div className="chatbot-header-right">
              <button className="chatbot-clear" onClick={clearChat}>
                Clear
              </button>
              <IoClose
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && !typing && (
              <div className="chatbot-message bot initial-message">
                Ask your query!
              </div>
            )}

            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {typing && <div className="chatbot-message bot">Typing...</div>}
            <div ref={chatEndRef}></div>
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              className="chatbot-input"
              required
            />
            <button type="submit" className="chatbot-send">
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
