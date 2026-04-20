import { useState, useEffect } from "react";

interface ChatBotProps {
  onClose?: () => void;
}

export default function ChatBot({ onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<any[]>([
    {
      sender: "bot",
      text: "👋 Hi! I'm Soeel Beg’s AI Assistant.\nHow can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const getReply = (input: string) => {
    const lower = input.toLowerCase();

    if (lower.includes("services")) {
      return `💼 Services I Offer:
• Full Stack Web Development (React + .NET)
• Dashboard & Admin Panel
• Bug Fixing & Optimization
• API Integration

🚀 I help businesses build fast and scalable solutions.`;
    }

    if (lower.includes("projects")) {
      return `🚀 My Projects:
• Ticket System (Real-time chat + dashboard)
• Business Websites
• Admin Panels

👉 View more: soeel-beg.vercel.app/#projects`;
    }

    if (lower.includes("about")) {
      return `👨‍💻 About Me:
I’m Soeel Beg, a Full Stack Developer.
I build modern web apps using React, .NET & MySQL.

🎯 Focus: Real-world solutions & clean UI.`;
    }

    if (lower.includes("contact")) {
      return `📞 Contact Me:
📧 soeelbeg@gmail.com
📱 +91 8690588536
📍 Bhilwara, Rajasthan

💬 Or message on WhatsApp directly!`;
    }

    return "❓ I didn’t understand. Try: services, projects, about, contact.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setTyping(false);
    }, 800);
  };

  const quickActions = ["Services", "Projects", "About", "Contact"];

  return (
    <div className="w-80 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-fadeIn">

      {/* 🔹 Header */}
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 font-semibold">
        <span>🤖 AI Assistant</span>
        {onClose && (
          <button onClick={onClose} className="hover:scale-110 transition">
            ✕
          </button>
        )}
      </div>

      {/* 🔹 Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-[320px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm whitespace-pre-line max-w-[85%] ${
              msg.sender === "bot"
                ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                : "bg-blue-600 text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {typing && (
          <div className="text-sm text-gray-500 animate-pulse">
            AI is typing...
          </div>
        )}
      </div>

      {/* 🔹 Quick Actions */}
      <div className="flex flex-wrap gap-2 p-2">
        {quickActions.map((action) => (
          <button
            key={action}
            onClick={() => {
              setInput(action);
              handleSend();
            }}
            className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            {action}
          </button>
        ))}
      </div>

      {/* 🔹 Input */}
      <div className="flex p-2 border-t dark:border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border dark:bg-gray-800 text-sm"
          placeholder="Ask something..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}