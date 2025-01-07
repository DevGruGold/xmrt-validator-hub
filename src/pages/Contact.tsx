import { useState } from "react";
import { Mail, Phone, Send, MessageSquare, Book } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about becoming a validator? We're here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                Send Message
                <Send size={20} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gradient-primary text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:xmrtsolutions@gmail.com" className="hover:text-accent transition-colors">
                      xmrtsolutions@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4" size={24} />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="tel:+50661500559" className="hover:text-accent transition-colors">
                      +506 6150 0559
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Quick Support</h2>
              <p className="text-gray-600 mb-6">
                Need immediate assistance? Check out our support resources:
              </p>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-secondary hover:text-secondary-hover transition-colors flex items-center">
                    <MessageSquare size={20} className="mr-2" />
                    Visit our Support Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary hover:text-secondary-hover transition-colors flex items-center">
                    <Book size={20} className="mr-2" />
                    Read Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;