import React from 'react';
import { Cloud, Zap, Globe, Download, Mail, Clock, CheckCircle, Shield, Smartphone, Wifi } from 'lucide-react';

export default function ShippingPolicyPage() {
  const deliveryMethods = [
    {
      icon: Cloud,
      title: 'Instant Cloud Access',
      description: 'Access your GoForms account immediately after signup',
      details: [
        'Available 24/7 from any device',
        'No downloads required',
        'Automatic updates included',
        'Real-time synchronization'
      ]
    },
    {
      icon: Mail,
      title: 'Email Delivery',
      description: 'Account credentials and important updates via email',
      details: [
        'Welcome email within minutes',
        'Account activation link',
        'Invoice and payment receipts',
        'Feature updates and newsletters'
      ]
    },
    {
      icon: Download,
      title: 'Data Export',
      description: 'Download your forms and collected data anytime',
      details: [
        'Multiple export formats (CSV, Excel, PDF)',
        'Bulk download options',
        'API access for developers',
        'Scheduled automatic exports'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Full functionality on mobile devices',
      details: [
        'Responsive web application',
        'iOS and Android compatible',
        'Offline mode available',
        'Push notifications supported'
      ]
    }
  ];

  const deliveryTimeline = [
    {
      service: 'Account Creation',
      icon: Zap,
      time: 'Instant',
      description: 'Immediate access upon signup completion'
    },
    {
      service: 'Email Confirmation',
      icon: Mail,
      time: '1-5 minutes',
      description: 'Verification email sent to your inbox'
    },
    {
      service: 'Premium Features',
      icon: CheckCircle,
      time: 'Instant',
      description: 'Activated immediately after payment'
    },
    {
      service: 'Data Migration',
      icon: Globe,
      time: '24-48 hours',
      description: 'For enterprise accounts with data import needs'
    },
    {
      service: 'Custom Setup',
      icon: Shield,
      time: '2-5 days',
      description: 'Enterprise onboarding and customization'
    },
    {
      service: 'API Keys',
      icon: Clock,
      time: 'Instant',
      description: 'Generated immediately in your dashboard'
    }
  ];

  const digitalDeliveryFeatures = [
    {
      title: 'No Physical Shipping',
      description: 'GoForms is a 100% digital service with no physical products',
      icon: '🌐'
    },
    {
      title: 'Global Availability',
      description: 'Accessible from anywhere in the world with internet connection',
      icon: '🌍'
    },
    {
      title: 'Instant Activation',
      description: 'Start using GoForms immediately after registration',
      icon: '⚡'
    },
    {
      title: 'Automatic Updates',
      description: 'New features and improvements delivered automatically',
      icon: '🔄'
    },
    {
      title: '99.9% Uptime',
      description: 'Reliable service availability guaranteed',
      icon: '✅'
    },
    {
      title: 'Secure Delivery',
      description: 'All data transmitted using SSL encryption',
      icon: '🔒'
    }
  ];

  const requirements = [
    {
      category: 'System Requirements',
      items: [
        'Modern web browser (Chrome, Firefox, Safari, Edge)',
        'JavaScript enabled',
        'Cookies enabled for authentication',
        'Minimum screen resolution: 1024x768'
      ]
    },
    {
      category: 'Internet Connection',
      items: [
        'Stable internet connection required',
        'Minimum 1 Mbps for optimal performance',
        'Mobile data or WiFi supported',
        'Offline mode for form filling (limited features)'
      ]
    },
    {
      category: 'Account Requirements',
      items: [
        'Valid email address for registration',
        'Secure password meeting our requirements',
        'Payment method for premium plans',
        'Agreement to Terms of Service'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I start using GoForms?',
      answer: 'You can start using GoForms immediately after completing the signup process. Your account is activated instantly, and you can begin creating forms right away.'
    },
    {
      question: 'Do you ship any physical products?',
      answer: 'No, GoForms is entirely a digital service. Everything is delivered electronically through our web platform. There are no physical products, manuals, or media to ship.'
    },
    {
      question: 'How do I access my GoForms account?',
      answer: 'Simply visit our website and log in with your credentials. GoForms is accessible from any device with an internet connection and a modern web browser.'
    },
    {
      question: 'What if I don\'t receive my welcome email?',
      answer: 'Check your spam folder first. If you still can\'t find it, contact our support team, and we\'ll resend the activation email or manually activate your account.'
    },
    {
      question: 'Can I use GoForms offline?',
      answer: 'Limited offline functionality is available for form respondents. However, an internet connection is required for form creation, management, and data synchronization.'
    }
  ];

  const lastUpdated = new Date('2024-01-01').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Delivery Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Digital Service Notice */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Cloud className="h-12 w-12" />
            <h2 className="text-2xl font-bold">100% Digital Service</h2>
          </div>
          <p className="text-lg">
            GoForms is a cloud-based software service. All features, updates, and support are 
            delivered digitally. No physical shipping is involved - you get instant access to 
            everything you need online.
          </p>
        </div>

        {/* Delivery Methods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How We Deliver Our Service</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliveryMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      <ul className="space-y-1">
                        {method.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Delivery Timeline</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {deliveryTimeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="bg-primary/10 rounded-lg p-2 h-fit">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-gray-900">{item.service}</h4>
                        <span className="text-sm font-medium text-primary">{item.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Digital Delivery Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Benefits of Digital Delivery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalDeliveryFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Access Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wifi className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-gray-900">{req.category}</h3>
                </div>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Service Level Agreement */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Service Level Agreement</h2>
          <div className="grid md:grid-cols-3 gap-6 text-green-800">
            <div>
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-3xl font-bold mb-1">99.9%</p>
              <p className="text-sm">Guaranteed uptime SLA</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support Response</h4>
              <p className="text-3xl font-bold mb-1">&lt;24hrs</p>
              <p className="text-sm">Maximum response time</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Data Backup</h4>
              <p className="text-3xl font-bold mb-1">Daily</p>
              <p className="text-sm">Automatic backups</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* International Access */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">International Access</h3>
              <p className="text-blue-800 mb-3">
                GoForms is available globally. Our service can be accessed from any country with an 
                internet connection. However, please note:
              </p>
              <ul className="space-y-2 text-blue-800">
                <li>• Service performance may vary based on your location and internet infrastructure</li>
                <li>• Some features may be restricted in certain regions due to local regulations</li>
                <li>• Support is provided in English, with additional languages coming soon</li>
                <li>• All times are displayed in your local timezone when possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Service Delivery?</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about how we deliver our service or need technical assistance, 
            our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@goforms.ai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
