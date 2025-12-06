import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./chat.css"; // Green COSMIC theme

export default function ChatWidget() {
const [open, setOpen] = useState(false);
const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);

const chatEndRef = useRef(null);

useEffect(() => {
chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, loading]);

const sendMessage = async () => {
if (!input.trim() || loading) return;


const userText = input;
setInput("");

const userMessage = { sender: "user", text: userText };
setMessages(prev => [...prev, userMessage]);
setLoading(true);

try {
  const res = await axios.post(
    "https://backend-deploy-yt.onrender.com/chat",
    { message: userText },
    { headers: { "Content-Type": "application/json" } }
  );

  const botReply =
    res.data.reply || res.data.response || res.data.message || "No response from server";

  const botMessage = { sender: "bot", text: botReply };
  setMessages(prev => [...prev, botMessage]);
} catch (err) {
  const errorMsg =
    err.response?.data?.error || err.message || "Unable to reach server";

  setMessages(prev => [...prev, { sender: "bot", text: `⚠️ Error: ${errorMsg}` }]);
} finally {
  setLoading(false);
}


};

const handleKeyDown = e => {
if (e.key === "Enter" && !loading) sendMessage();
};

return ( <div className="chat-container">
<button
className="chat-button"
onClick={() => setOpen(prev => !prev)}
title="Open Chat"
>
💬 Chat </button>

```
  {open && (
    <div className="chat-box">
      <div className="chat-header">
        <strong>AI Assistant</strong>
      </div>

      <div className="chat-body">
        {messages.map((m, idx) => (
          <div key={idx} className={`bubble ${m.sender}`}>
            {m.text}
          </div>
        ))}

        {loading && (
          <div className="bubble bot">
            <em>Typing...</em>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  )}
</div>

);
}
