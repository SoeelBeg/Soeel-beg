
import React, { useState } from 'react';
import {
  Mail,
  Github,
  Send,
  Check,
  ArrowUpRight,
  MessageCircle,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

const Contact: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [contactError, setContactError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setContactError('');

    // Honeypot spam protection
    if (formData.website.trim()) {
      setSent(true);
      return;
    }

    const { name, email, subject, message } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      setContactError('Please fill in all required fields.');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setContactError(
        'Contact form is not configured. Please try again later.'
      );
      return;
    }

    setSending(true);

    try {
      const formPayload = new FormData();

      formPayload.append('access_key', accessKey);
      formPayload.append('name', name.trim());
      formPayload.append('email', email.trim());
      formPayload.append('subject', subject.trim());
      formPayload.append('message', message.trim());
      formPayload.append('botcheck', '');

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formPayload,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || 'Unable to send your message.'
        );
      }

      setSent(true);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);

      setContactError(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again or contact me through WhatsApp.'
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full border-b border-white/15 bg-transparent py-3.5 text-sm text-white ' +
    'outline-none transition-all duration-300 placeholder:text-slate-600 ' +
    'focus:border-cyan-300 focus:shadow-[0_1px_0_0_#67e8f9]';

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080b14] px-5 py-24 sm:py-28 lg:px-8"
    >
      {/* Background Grid */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />

      {/* Cyan Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.85fr] lg:gap-20">

        {/* LEFT SIDE */}
        <div className="animate-in">

          {/* Section Label - Replaced SectionLabel Component */}
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.2em] text-cyan-300">
            <span className="text-slate-600">05</span>
            <span className="h-px w-8 bg-cyan-300/50" />
            <span>Open channel</span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-8 max-w-2xl text-5xl font-black leading-[.95] tracking-[-.06em] text-white sm:text-6xl md:text-7xl lg:text-[62px]">
            Let's build
            <br />

            <span className="text-gradient">
              something
            </span>

            <br />

            amazing.
          </h2>

          <p className="mt-8 max-w-md text-base leading-8 text-slate-400">
            Have a product idea, a challenging problem, or just
            want to say hello? My inbox is always open.
            Let's turn your ideas into something meaningful.
          </p>

          {/* Availability */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-300" />
            </span>

            <span className="text-xs font-medium tracking-wide text-slate-300">
              Open to opportunities & collaborations
            </span>

          </div>

          {/* Contact Links */}
          <div className="mt-12 space-y-5">

            {/* Email */}
            <a
              href="mailto:soeelbeg@gmail.com"
              className="group flex w-fit items-center gap-4 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10">
                <Mail size={19} />
              </div>

              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[.2em] text-slate-600">
                  Drop me an email
                </p>

                <span className="text-sm font-medium text-slate-200">
                  soeelbeg@gmail.com
                </span>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* Phone */}
            <a
              href="tel:+918690588536"
              className="group flex w-fit items-center gap-4 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10">
                <Phone size={19} />
              </div>

              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[.2em] text-slate-600">
                  Give me a call
                </p>

                <span className="text-sm font-medium text-slate-200">
                  +91 8690588536
                </span>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* Location */}
            <div className="flex w-fit items-center gap-4 text-slate-400">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                <MapPin size={19} />
              </div>

              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[.2em] text-slate-600">
                  Based in
                </p>

                <span className="text-sm font-medium text-slate-200">
                  Bhilwara, Rajasthan, India
                </span>
              </div>
            </div>

          </div>

          {/* WhatsApp Contact */}
          <div className="mt-12 border-t border-white/10 pt-7">

            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.2em] text-slate-600">
              Let's connect
            </p>

            <a
              href="https://wa.me/918690588536"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group inline-flex items-center gap-4 rounded-xl border border-[#25D366]/20 bg-[#25D366]/[0.05] px-5 py-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-110">
                <MessageCircle size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white transition-colors group-hover:text-[#25D366]">
                  Chat on WhatsApp
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  +91 8690588536
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="ml-3 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#25D366]"
              />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="relative">

          {/* Form Glow */}
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-300/10 via-transparent to-blue-500/10 blur-xl" />

          <form
            onSubmit={handleSubmit}
            className="glass relative rounded-2xl border border-white/10 p-6 shadow-2xl shadow-black/20 sm:p-8 md:p-9"
          >

            {/* Form Header */}
            <div className="mb-9 flex items-center justify-between">

              <div>
                <p className="font-mono text-xs text-cyan-300">
                  send_message()
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                  Get in touch
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Tell me about your next big idea.
                </p>
              </div>

              <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Send size={21} />
              </div>

            </div>

            {/* Success State */}
            {sent ? (

              <div className="grid min-h-[430px] place-items-center text-center">

                <div>

                  <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-lime-300/20 bg-lime-300/10 text-lime-300 shadow-[0_0_35px_rgba(0,255,163,0.12)]">
                    <Check size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Message delivered.
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-400">
                    Thanks for reaching out! Your message has
                    been sent successfully. I'll get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setContactError('');
                    }}
                    className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-cyan-300 transition hover:text-cyan-100"
                  >
                    Send another message ↗
                  </button>

                </div>

              </div>

            ) : (

              <div className="space-y-6">

                {/* Name */}
                <label className="block">

                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                    Your name <span className="text-cyan-300">*</span>
                  </span>

                  <input
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Jane Doe"
                  />

                </label>

                {/* Email */}
                <label className="block">

                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                    Email address <span className="text-cyan-300">*</span>
                  </span>

                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={inputClass}
                    placeholder="jane@company.com"
                  />

                </label>

                {/* Subject */}
                <label className="block">

                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                    Subject <span className="text-cyan-300">*</span>
                  </span>

                  <input
                    name="subject"
                    type="text"
                    required
                    maxLength={150}
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="A new digital experience"
                  />

                </label>

                {/* Message */}
                <label className="block">

                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                    Message <span className="text-cyan-300">*</span>
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me a little about your project..."
                  />

                  <p className="mt-2 text-right font-mono text-[10px] text-slate-600">
                    {formData.message.length}/5000
                  </p>

                </label>

                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                  readOnly
                  checked={false}
                />

                {/* Error */}
                {contactError && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-400/20 bg-red-400/5 p-3 text-xs leading-5 text-red-300"
                  >
                    {contactError}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-cyan-300 py-4 text-xs font-black uppercase tracking-[.18em] text-[#080b14] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_8px_30px_rgba(103,232,249,0.2)] disabled:cursor-wait disabled:opacity-60"
                >

                  {sending ? 'Transmitting...' : 'Transmit message'}

                  <Send
                    size={16}
                    className={`transition-transform duration-300 ${sending
                        ? 'animate-pulse'
                        : 'group-hover:translate-x-1'
                      }`}
                  />

                </button>
              </div>

            )}

          </form>

        </div>

      </div>

      {/* WhatsApp Floating Contact - Existing Method Retained */}
      {/* <a
        href="https://wa.me/918690588536"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-7 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_25px_rgba(37,211,102,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_35px_rgba(37,211,102,0.4)]"
      >
        <MessageCircle size={26} />
      </a> */}

    </section>
  );
};

export default Contact;
