import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert('Please fill all fields');
      return;
    }

    setIsSubmitting(true);

    const mailtoLink = `mailto:soeelbeg@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">

        {/* 🔹 Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-6 max-w-2xl">
            Have a project or need help? Let's discuss your idea and build something great together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* 🔹 Contact Info */}
          <div className="space-y-6">

            {/* Location */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-lg transition">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bhilwara, Rajasthan, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-lg transition">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:soeelbeg@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  soeelbeg@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-lg transition">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+918690588536"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  +91 8690588536
                </a>
              </div>
            </div>

            {/* 🔥 WhatsApp Button (VERY IMPORTANT) */}
            <a
              href="https://wa.me/918690588536"
              target="_blank"
              className="block text-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* 🔹 Form */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md"
            >

              <div className="grid sm:grid-cols-2 gap-6 mb-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Project Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 mb-6 rounded-lg border dark:bg-gray-800"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Describe your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 mb-6 rounded-lg border dark:bg-gray-800"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center gap-2 hover:scale-105 transition"
              >
                {isSubmitting ? 'Opening...' : 'Send Message'}
                <Send size={18} />
              </button>

              {/* 🔹 Info */}
              <p className="text-sm text-gray-500 mt-4">
                This will open your email app to send the message directly.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;