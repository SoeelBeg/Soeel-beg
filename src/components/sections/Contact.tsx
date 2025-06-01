import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus('success');

      const { name, email, subject, message } = formData;

      // Create mailto link with encoded form data
      const mailtoLink = `mailto:soeelbeg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      // Trigger the default email client
      try {
        window.location.href = mailtoLink;

        // Reset form after a delay to show success message
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setIsSubmitting(false);
        }, 2000);
      } catch (error) {
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6 max-w-2xl">
            Have a project in mind or want to discuss an opportunity? Feel free to reach out to me. I'm always open to new ideas and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bhilwara, Rajasthan, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:soeelbeg@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  soeelbeg@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Phone className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+918690588536"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +91 8690588536
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.name
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.email
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.subject
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.message
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg flex items-center gap-2 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                >
                  {isSubmitting ? 'Preparing...' : 'Send Message'}
                  <Send size={18} />
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600 dark:text-green-400">
                    Your message has been prepared! Please open your desktop email app (e.g., Outlook or Thunderbird) and click 'Send' to submit it.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-500">
                    Unable to prepare your message. Please ensure your desktop email app is set as the default email client and try again, or email soeelbeg@gmail.com directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;