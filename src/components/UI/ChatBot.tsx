
import { useEffect, useRef, useState } from "react";
import {
  Code2,
  X,
  Send,
  Sparkles,
  User,
  Bot,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

interface ChatBotProps {
  onClose?: () => void;
}

interface Message {
  sender: "bot" | "user";
  text: string;
}

const quickActions = [
  "About Me",
  "My Skills",
  "Projects",
  "Services",
  "Experience",
  "Contact",
];

const getReply = (message: string): string => {
  const text = message.toLowerCase().trim();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return `Hey there! 👋

Welcome to SOEEL.DEV.

I'm Soeel's Developer Assistant. I can tell you about his skills, projects, services and professional background.

What would you like to explore?`;
  }

  if (
    text.includes("about") ||
    text.includes("who are you") ||
    text.includes("introduce")
  ) {
    return `ABOUT SOEEL BEG

Soeel Beg is a Full Stack Developer focused on building modern web applications and practical business software solutions.

His work includes:
• Full Stack Web Development
• Business & Management Applications
• Admin Dashboards
• REST API Integration
• Responsive User Interfaces
• Custom Software Solutions

His focus is on creating useful, maintainable and user-friendly applications.`;
  }

  if (
    text.includes("experience") ||
    text.includes("professional background") ||
    text.includes("work history")
  ) {
    return `PROFESSIONAL EXPERIENCE

Soeel has practical project experience working with web development and business application solutions.

His development work includes:
• Building web application interfaces
• Developing management system modules
• Working with APIs and database-driven applications
• Creating admin panels and dashboards
• Implementing application workflows

He has worked on projects involving React, Blazor, .NET and SQL Server.

For an accurate employment timeline or years of experience, please contact Soeel directly.`;
  }

  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("tech stack") ||
    text.includes("technical")
  ) {
    return `TECHNICAL SKILLS

Frontend:
• HTML, CSS, JavaScript
• React.js
• TypeScript
• Tailwind CSS
• Bootstrap

Backend:
• C#
• ASP.NET Core
• .NET / Blazor
• REST API Development

Database:
• Microsoft SQL Server
• MySQL

Other Areas:
• Full Stack Development
• Business Management Systems
• Admin Dashboard Development
• API Integration
• Responsive Web Design`;
  }

  if (
    text.includes("project") ||
    text.includes("portfolio") ||
    text.includes("work")
  ) {
    return `FEATURED PROJECTS

1. Payroll & Employee Management System

• Employee management
• Attendance and check-in/check-out
• Leave management
• Salary and payroll management
• Reports and employee information

2. Subscription Management System

• Client-wise software subscription records
• Multiple software subscriptions per client
• Paid and pending payment status
• Payment due monitoring
• Centralized subscription management

3. Ticket Management System

• Ticket creation and tracking
• Admin and client dashboards
• Support workflow
• Real-time communication features

4. Business Websites & Admin Panels

• Responsive website interfaces
• Management dashboards
• API-driven applications

Explore more:
https://soeel-beg.vercel.app/#projects`;
  }

  if (
    text.includes("payroll") ||
    text.includes("employee") ||
    text.includes("salary") ||
    text.includes("attendance")
  ) {
    return `PAYROLL & EMPLOYEE MANAGEMENT APP

A business application designed to manage employee operations and payroll activities.

Main features:
• Employee information management
• Attendance management
• Check-in and check-out
• Leave requests and tracking
• Salary and payroll management
• Reports and employee records

The goal is to simplify everyday HR and payroll operations through one centralized application.`;
  }

  if (
    text.includes("subscription") ||
    text.includes("payment due") ||
    text.includes("paid") ||
    text.includes("client software")
  ) {
    return `SUBSCRIPTION MANAGEMENT APP

A subscription tracking application developed for company use.

It helps manage which software subscriptions each client has and monitor their payment status.

Main features:
• Client-wise software subscription records
• Multiple software subscriptions per client
• Subscription payment tracking
• Paid and pending payment status
• Upcoming and overdue payment monitoring
• Centralized client subscription information

The goal is to make subscription records and payment follow-ups easier to manage.`;
  }

  if (
    text.includes("service") ||
    text.includes("what do you offer") ||
    text.includes("development")
  ) {
    return `DEVELOPMENT SERVICES

Soeel works on practical web and software solutions, including:

• Full Stack Web Development
• React Application Development
• .NET & Blazor Applications
• Business Management Software
• Payroll & Employee Management Systems
• Admin Panels & Dashboards
• REST API Development & Integration
• Database-Driven Applications
• Website UI Development

The focus is on building responsive, practical and maintainable software.`;
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("phone") ||
    text.includes("whatsapp") ||
    text.includes("hire")
  ) {
    return `LET'S CONNECT!

Email:
soeelbeg@gmail.com

Phone / WhatsApp:
+91 8690588536

Location:
Bhilwara, Rajasthan, India

Portfolio:
https://soeel-beg.vercel.app/

WhatsApp:
https://wa.me/918690588536

Feel free to discuss your project or business requirements!`;
  }

  if (
    text.includes("github") ||
    text.includes("linkedin") ||
    text.includes("social")
  ) {
    return `CONNECT WITH SOEEL

GitHub:
https://github.com/soeelbeg

LinkedIn:
https://linkedin.com/in/soeelbeg

Portfolio:
https://soeel-beg.vercel.app/`;
  }

  return `I'm not sure I understood that question.

I can help you explore:

• About Soeel
• Technical Skills
• Professional Experience
• Projects
• Payroll Management App
• Subscription Management App
• Development Services
• Contact Information

Try one of the quick questions below!`;
};

export default function ChatBot({ onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: `Hey! Welcome to SOEEL.DEV 👋

I'm Soeel's Developer Assistant.

Ask me about his projects, technical skills, experience or development services.

How can I help you today?`,
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // Email message state
  const [emailFormOpen, setEmailFormOpen] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing, emailFormOpen, emailStatus]);

  // Chatbot message
  const handleSend = (message: string = input) => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || typing) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: trimmedMessage },
    ]);

    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      const reply = getReply(trimmedMessage);

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: reply },
      ]);

      setTyping(false);
    }, 650);
  };

  // Send email through Web3Forms
  const handleEmailSubmit = async () => {
    const trimmedMessage = emailMessage.trim();

    if (!trimmedMessage || emailSending) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setEmailStatus("Email service is not configured.");
      return;
    }

    setEmailSending(true);
    setEmailStatus("");

    try {
      const formData = new FormData();

      formData.append("access_key", accessKey);
      formData.append("subject", "New Question from SOEEL.DEV Chatbot");
      formData.append("message", trimmedMessage);
      formData.append("from_name", "Portfolio Chatbot Visitor");
      formData.append("botcheck", "");

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setEmailStatus("success");
        setEmailMessage("");
      } else {
        setEmailStatus(
          result.message || "Unable to send message. Please try again."
        );
      }
    } catch {
      setEmailStatus("Something went wrong. Please try again.");
    } finally {
      setEmailSending(false);
    }
  };

  return (
    <div className="flex h-[540px] max-h-[75vh] w-[350px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120] shadow-[0_20px_80px_rgba(0,0,0,0.65)] animate-fadeIn">

      {/* Header */}
      <div className="relative border-b border-white/[0.08] bg-[#101a2c] px-4 py-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.08] to-blue-600/[0.08]" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Code2 size={24} />
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wide text-white">
                SOEEL.DEV
              </h3>

              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] font-medium tracking-wider text-emerald-400">
                  DEVELOPER ASSISTANT
                </span>
              </div>
            </div>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close chatbot"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>
          )}
        </div>
      </div>

      {/* Chat intro */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0d1626] px-4 py-2.5">
        <Sparkles size={13} className="text-cyan-400" />
        <p className="text-[10px] tracking-wide text-slate-400">
          Ask anything about my work and projects
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-[#0b1120] p-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2.5 ${
              msg.sender === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                msg.sender === "bot"
                  ? "bg-cyan-400/10 text-cyan-300"
                  : "bg-blue-500/15 text-blue-300"
              }`}
            >
              {msg.sender === "bot" ? (
                <Bot size={15} />
              ) : (
                <User size={15} />
              )}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-3 text-[12px] leading-[1.75] ${
                msg.sender === "bot"
                  ? "rounded-tl-sm border border-white/[0.07] bg-[#141f32] text-slate-300"
                  : "rounded-tr-sm border border-cyan-400/20 bg-cyan-500/15 text-cyan-50"
              }`}
            >
              <p className="whitespace-pre-line break-words">
                {msg.text}
              </p>

              {msg.sender === "bot" &&
                msg.text.includes("https://soeel-beg.vercel.app") && (
                  <a
                    href="https://soeel-beg.vercel.app/#projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    Explore Portfolio <ArrowUpRight size={13} />
                  </a>
                )}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
              <Bot size={15} />
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-white/[0.07] bg-[#141f32] px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:300ms]" />
            </div>
          </div>
        )}

        {/* Compact Email Message Box */}
        {emailFormOpen && (
          <div className="rounded-xl border border-cyan-400/20 bg-[#111d30] p-3 animate-fadeIn">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-cyan-400" />
                <h4 className="text-xs font-semibold text-white">
                  Send a Message
                </h4>
              </div>

              <button
                type="button"
                onClick={() => {
                  setEmailFormOpen(false);
                  setEmailStatus("");
                }}
                aria-label="Close email message"
                className="text-slate-400 hover:text-white"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-[#080e1a] p-2 focus-within:border-cyan-400/50">
              <textarea
                rows={2}
                value={emailMessage}
                onChange={(e) => {
                  setEmailMessage(e.target.value);
                  setEmailStatus("");
                }}
                placeholder="Write your message..."
                maxLength={2000}
                className="max-h-24 min-h-[45px] flex-1 resize-none bg-transparent px-1 py-2 text-xs text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={handleEmailSubmit}
                disabled={!emailMessage.trim() || emailSending}
                aria-label="Send email message"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={14} />
              </button>
            </div>

            {emailStatus && (
              <p
                role="status"
                className={`mt-2 text-[10px] ${
                  emailStatus === "success"
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {emailStatus === "success"
                  ? "✓ Message sent successfully!"
                  : emailStatus}
              </p>
            )}

            <p className="mt-2 text-[9px] text-slate-500">
              Your message will be delivered to Soeel's email.
            </p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions and Contact Options */}
      <div className="border-t border-white/[0.06] bg-[#0d1626] px-3 py-3">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Quick Questions
        </p>

        <div className="flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <button
              key={action}
              type="button"
              disabled={typing}
              onClick={() => handleSend(action)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            href="https://wa.me/918690588536"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2 py-2.5 text-[10px] font-semibold text-emerald-400 transition hover:bg-emerald-400/20"
          >
            <MessageCircle size={14} />
            Chat on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              setEmailFormOpen((prev) => !prev);
              setEmailStatus("");
            }}
            className="flex items-center justify-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2 py-2.5 text-[10px] font-semibold text-cyan-400 transition hover:bg-cyan-400/20"
          >
            <Mail size={14} />
            Email Me
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/[0.08] bg-[#101a2c] p-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#080e1a] p-1.5 transition focus-within:border-cyan-400/50">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Ask me anything..."
            disabled={typing}
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-xs text-white outline-none placeholder:text-slate-600 disabled:opacity-50"
          />

          <button
            type="button"
            onClick={() => handleSend()}
            disabled={!input.trim() || typing}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-900/20 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            <Send size={15} />
          </button>
        </div>

        <p className="mt-2 text-center text-[9px] text-slate-600">
          Built with <span className="text-cyan-500">Code</span> & creativity
        </p>
      </div>
    </div>
  );
}
