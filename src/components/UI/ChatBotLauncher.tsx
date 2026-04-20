import { useState } from "react";
import ChatBot from "./ChatBot";

export default function ChatBotLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {open && (
        <div className="mb-3 animate-slideUp">
          <ChatBot onClose={() => setOpen(false)} />
        </div>
      )}

      {/* 🔥 Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-110 transition-all duration-300"
      >
        {open ? "✕" : "🤖"}
      </button>
    </div>
  );
}