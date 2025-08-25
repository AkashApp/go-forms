import React from 'react';
import { Shield, AlertCircle, FileText, Users, CreditCard, Globe, Lock, Scale } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing or using GoForms ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Service.',
        'We reserve the right to update these terms at any time. Continued use of the Service after changes constitutes acceptance of the modified terms.',
        'You must be at least 18 years old or have parental consent to use this Service.'
      ]
    },
    {
      id: 'service-use',
      title: '2. Use of Service',
      icon: Globe,
      content: [
        'GoForms provides form building, data collection, and analytics services. You may use the Service for lawful purposes only.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.',
        'You agree not to: (a) violate any laws or regulations, (b) infringe on others\' rights, (c) transmit malicious code, (d) attempt unauthorized access, or (e) interfere with Service operations.'
      ]
    },
    {
      id: 'accounts',
      title: '3. User Accounts',
      icon: Users,
      content: [
        'Account registration requires accurate, complete, and current information. You must promptly update any changes to maintain accuracy.',
        'You are solely responsible for all activities that occur under your account, whether authorized or not.',
        'We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent or illegal activities.',
        'Free accounts may be subject to usage limits, which are detailed in our pricing plans.'
      ]
    },
    {
      id: 'content',
      title: '4. User Content and Data',
      icon: Shield,
      content: [
        'You retain ownership of all content and data you submit through GoForms. By using our Service, you grant us a license to process and display your content as necessary to provide the Service.',
        'You are responsible for ensuring you have the right to collect, use, and share any data gathered through your forms.',
        'We do not claim ownership of your form responses or collected data. You can export or delete your data at any time.',
        'You agree not to use GoForms to collect sensitive information without proper security measures and legal compliance.'
      ]
    },
    {
      id: 'payment',
      title: '5. Payment and Billing',
      icon: CreditCard,
      content: [
        'Paid subscriptions are billed in advance on a monthly or annual basis and are non-refundable except as required by law or as specified in our Refund Policy.',
        'Subscription fees are subject to change with 30 days notice. Price changes will take effect at the next billing cycle.',
        'You authorize us to charge your payment method for all fees associated with your subscription.',
        'Failure to pay may result in suspension or termination of your access to paid features.'
      ]
    },
    {
      id: 'privacy',
      title: '6. Privacy and Data Protection',
      icon: Lock,
      content: [
        'Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms.',
        'We implement industry-standard security measures to protect your data, but cannot guarantee absolute security.',
        'You agree to comply with all applicable data protection laws when using our Service, including GDPR, CCPA, and other regulations.',
        'We will notify you of any data breaches that may affect your account or data as required by law.'
      ]
    },
    {
      id: 'intellectual-property',
      title: '7. Intellectual Property',
      icon: Scale,
      content: [
        'GoForms and its original content, features, and functionality are owned by GoForms and are protected by international copyright, trademark, and other intellectual property laws.',
        'You may not copy, modify, distribute, sell, or lease any part of our Service without express written permission.',
        'We respect intellectual property rights and expect users to do the same. Report any infringement to our support team.',
        'Any feedback or suggestions you provide may be used by us without compensation or attribution.'
      ]
    },
    {
      id: 'liability',
      title: '8. Limitation of Liability',
      icon: AlertCircle,
      content: [
        'THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.',
        'In no event shall GoForms be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability shall not exceed the amount paid by you to GoForms in the 12 months preceding the claim.',
        'Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.'
      ]
    }
  ];

  const lastUpdated = new Date('2024-01-01').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <p className="text-blue-900">
            Please read these Terms and Conditions carefully before using GoForms. 
            These terms govern your use of our website and services. By using GoForms, 
            you accept and agree to be bound by these terms.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-primary hover:text-primary/80 transition-colors"
              >
                {section.title}
              </a>
            ))}
            <a href="#contact" className="block text-primary hover:text-primary/80 transition-colors">
              9. Contact Information
            </a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Additional Sections */}
          <div id="termination" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason, including breach of these Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will cease immediately. You may delete 
                your account at any time through your account settings.
              </p>
              <p>
                All provisions of these Terms which should reasonably survive termination shall survive, 
                including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>
          </div>

          <div id="governing-law" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of GoForms shall be resolved through 
                binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </div>
          </div>

          <div id="changes" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any 
                material changes via email or through the Service.
              </p>
              <p>
                Your continued use of GoForms after changes to the Terms constitutes acceptance of 
                the modified terms. If you do not agree to the changes, you must stop using the Service.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-gray-100 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About These Terms?</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-900">Email:</span>
              <a href="mailto:legal@goforms.ai" className="text-primary hover:text-primary/80 transition-colors">
                legal@goforms.ai
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-900">Address:</span>
              <span className="text-gray-700">123 Form Street, Template City, TC 12345, United States</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-900">Phone:</span>
              <a href="tel:+1234567890" className="text-primary hover:text-primary/80 transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Agreement Notice */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8 text-center">
          <p className="text-green-900 font-medium">
            By using GoForms, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
