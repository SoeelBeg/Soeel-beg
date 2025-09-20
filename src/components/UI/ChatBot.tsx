import { useState } from "react";

interface ChatBotProps {
  onClose?: () => void; // callback to close the ChatBot
}

export default function ChatBot({ onClose }: ChatBotProps) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm Soeel Beg’s AI Assistant.\nType 'services', 'projects', 'about', or 'contact' to continue.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const newMessages = [...messages, userMessage];

    let reply =
      "❓ Sorry, I didn’t understand. Please type: services, projects, about, or contact.";

    const lower = input.toLowerCase();
    if (lower.includes("services")) {
      reply =
        "✅ Services I offer:\n• Frontend Web Development (React, Next.js)\n• Responsive UI/UX Design\n• Portfolio & Small Business Websites (WordPress / React)";
    } else if (lower.includes("projects")) {
      reply =
        "🚀 My projects:\n• Lawyer Profile Management System (React)\n• Fiction-Digital Business Website\n• Baby-Kids School Website\n• Hospital Website (Next.js)\nVisit: https://soeel-beg.vercel.app/#projects";
    } else if (lower.includes("about")) {
      reply =
        "ℹ️ About Me:\nI’m Soeel Beg, a frontend developer passionate about React.js, WebRTC, and building real-world applications.";
    } else if (lower.includes("contact")) {
      reply =
        "📩 Contact Me:\nEmail: soeebeg@gmail.com\nLinkedIn: https://linkedin.com/in/soeel-beg\n+91 8690588536\nOr fill out the contact form on my website!";
    }

    const botMessage = { sender: "bot", text: reply };
    setMessages([...newMessages, botMessage]);
    setInput("");
  };

  return (
    <div className="w-80 bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-300 dark:border-gray-600 flex flex-col overflow-hidden">
      {/* Header with AI Assistant text + Close button */}
      <div className="flex justify-between items-center bg-blue-600 dark:bg-blue-700 text-white p-3 font-semibold rounded-t-2xl">
        <span>💬 AI Assistant</span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 font-bold text-lg"
            title="Close"
          >
            ✕
          </button>
        )}
      </div>

      {/* Messages */}
      <div
        className="flex-1 p-3 overflow-y-auto space-y-2"
        style={{ maxHeight: "300px" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm whitespace-pre-line ${
              msg.sender === "bot"
                ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 self-start"
                : "bg-blue-500 text-white self-end ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex p-2 border-t dark:border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
          placeholder="Type here..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
