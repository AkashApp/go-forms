import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, FileText } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@goforms.ai",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (234) 567-890",
      subtext: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Form Street, Template City",
      subtext: "TC 12345, United States"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subtext: "9:00 AM - 6:00 PM EST"
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: true
    },
    {
      icon: Headphones,
      title: "Phone Support",
      description: "Talk to our experts directly",
      action: "Call Now",
      available: true
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View Docs",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about GoForms? We're here to help! Reach out to our team 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-800 font-medium">{info.details}</p>
                <p className="text-sm text-gray-500">{info.subtext}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales</option>
                  <option value="billing">Billing</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Support Channels */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-4 mb-8">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{channel.title}</h3>
                        <p className="text-gray-600 mb-3">{channel.description}</p>
                        <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                          {channel.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">What are your support hours?</p>
                  <p className="text-sm text-gray-600">Our support team is available Monday-Friday, 9AM-6PM EST.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">How quickly will I get a response?</p>
                  <p className="text-sm text-gray-600">We typically respond within 24 hours on business days.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Do you offer phone support?</p>
                  <p className="text-sm text-gray-600">Yes, phone support is available for Pro and Enterprise plans.</p>
                </div>
              </div>
              <a href="#" className="inline-block mt-4 text-primary font-medium hover:text-primary/80 transition-colors">
                View all FAQs →
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-red-900 mb-2">
            Need Urgent Support?
          </h3>
          <p className="text-red-700 mb-4">
            For critical issues affecting your service, please call our emergency hotline:
          </p>
          <a href="tel:+1234567890" className="text-2xl font-bold text-red-900 hover:text-red-800">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
}
