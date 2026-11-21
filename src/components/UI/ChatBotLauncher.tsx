import { useState } from "react";
import { Code2, X } from "lucide-react";
import ChatBot from "./ChatBot";

export default function ChatBotLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 animate-slideUp">
          <ChatBot onClose={() => setOpen(false)} />
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close assistant" : "Open developer assistant"}
        className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500 to-blue-700 text-white shadow-[0_8px_35px_rgba(6,182,212,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(6,182,212,0.5)]"
      >
        {open ? (
          <X size={25} className="transition-transform group-hover:rotate-90" />
        ) : (
          <Code2 size={27} strokeWidth={2.2} />
        )}
      </button>
    </div>
  );
}
