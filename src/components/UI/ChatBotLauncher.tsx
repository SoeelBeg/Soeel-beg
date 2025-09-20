import { useState } from "react";
import ChatBot from "./ChatBot";

export default function ChatBotLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {open ? (
        <ChatBot onClose={() => setOpen(false)} />
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg border border-gray-300 dark:border-gray-600 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
        >
          🤖
        </button>
      )}
    </div>
  );
}
