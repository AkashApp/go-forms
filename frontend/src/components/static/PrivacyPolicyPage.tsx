import React from 'react';
import { Shield, Eye, Database, Lock, UserCheck, Globe, FileText, AlertCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      subsections: [
        {
          title: 'Information You Provide',
          content: [
            'Account Information: Name, email address, password, and profile details when you create an account.',
            'Form Data: Content you create including forms, questions, and settings.',
            'Response Data: Information collected through your forms from respondents.',
            'Payment Information: Billing details and payment card information (processed securely by our payment providers).',
            'Communications: Messages you send to us through support channels or feedback forms.'
          ]
        },
        {
          title: 'Information Collected Automatically',
          content: [
            'Usage Data: How you interact with our Service, including pages visited, features used, and actions taken.',
            'Device Information: Browser type, operating system, IP address, and device identifiers.',
            'Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze usage.',
            'Log Data: Server logs that record access times, errors, and system performance.'
          ]
        }
      ]
    },
    {
      id: 'use-of-information',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'To provide, maintain, and improve the GoForms Service',
        'To process transactions and send related information',
        'To send technical notices, updates, security alerts, and support messages',
        'To respond to your comments, questions, and customer service requests',
        'To monitor and analyze trends, usage, and activities',
        'To detect, investigate, and prevent fraudulent transactions and abuse',
        'To personalize and improve your experience',
        'To send you marketing communications (with your consent)',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      id: 'data-sharing',
      title: 'How We Share Your Information',
      icon: Globe,
      subsections: [
        {
          title: 'We may share your information with:',
          content: [
            'Service Providers: Third-party vendors who help us provide and improve our Service (hosting, analytics, payment processing, etc.)',
            'Legal Requirements: When required by law, subpoena, or other legal process',
            'Business Transfers: In connection with a merger, acquisition, or sale of assets',
            'Your Consent: With your explicit consent or at your direction',
            'Aggregated Data: We may share anonymized, aggregated data that cannot identify you'
          ]
        },
        {
          title: 'We do NOT:',
          content: [
            'Sell your personal information to third parties',
            'Share your form responses with anyone except as you direct',
            'Use your data for purposes unrelated to providing our Service without consent'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures including encryption, secure servers, and access controls.',
        'All data transmission is encrypted using SSL/TLS protocols.',
        'We regularly audit our security practices and update them as needed.',
        'Access to personal information is restricted to authorized personnel only.',
        'We use secure third-party services for payment processing and data storage.',
        'Despite our efforts, no security system is impenetrable. We cannot guarantee absolute security.'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: UserCheck,
      subsections: [
        {
          title: 'You have the right to:',
          content: [
            'Access: Request a copy of your personal information',
            'Correction: Update or correct inaccurate information',
            'Deletion: Request deletion of your account and associated data',
            'Portability: Export your data in a machine-readable format',
            'Restriction: Limit how we process your information',
            'Objection: Opt-out of certain uses of your information',
            'Withdraw Consent: Change your preferences for communications'
          ]
        },
        {
          title: 'How to exercise your rights:',
          content: [
            'Account Settings: Update your information directly in your account',
            'Email Us: Send requests to privacy@goforms.ai',
            'Unsubscribe: Use the link in our emails to opt-out of marketing'
          ]
        }
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: FileText,
      content: [
        'We use essential cookies required for the Service to function properly.',
        'Analytics cookies help us understand how users interact with GoForms.',
        'Preference cookies remember your settings and choices.',
        'Marketing cookies (if enabled) help us provide relevant advertisements.',
        'You can control cookies through your browser settings, but disabling them may affect functionality.',
        'We respect Do Not Track signals and will not track you when enabled.'
      ]
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: Database,
      content: [
        'We retain your information for as long as your account is active or as needed to provide services.',
        'Form responses are retained according to your account settings and plan limits.',
        'After account deletion, we may retain certain information as required by law or for legitimate business purposes.',
        'Backup copies may persist for a limited time before deletion.',
        'You can request deletion of specific data at any time through your account settings.'
      ]
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: Globe,
      content: [
        'GoForms operates globally and may transfer your information to countries other than your own.',
        'We ensure appropriate safeguards are in place for international transfers.',
        'By using GoForms, you consent to the transfer of your information to the United States and other countries.',
        'We comply with applicable data protection frameworks including GDPR and CCPA.'
      ]
    },
    {
      id: 'children',
      title: "Children's Privacy",
      icon: AlertCircle,
      content: [
        'GoForms is not intended for children under 13 years of age.',
        'We do not knowingly collect personal information from children under 13.',
        'If we learn we have collected information from a child under 13, we will delete it promptly.',
        'Parents who believe we have information about their child should contact us immediately.'
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <p className="text-blue-900 mb-4">
            At GoForms, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, share, and protect your information when you use our Service.
          </p>
          <p className="text-blue-900">
            By using GoForms, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* GDPR/CCPA Notice */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12">
          <h3 className="font-bold text-green-900 mb-2">Your Privacy Rights</h3>
          <p className="text-green-800">
            If you are a resident of the European Economic Area (EEA) or California, you have additional 
            privacy rights under GDPR and CCPA respectively. See the "Your Rights and Choices" section below.
          </p>
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
                
                {section.content && (
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="font-semibold text-gray-900 mb-3">{subsection.title}</h3>
                        <ul className="space-y-2">
                          {subsection.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Updates to Privacy Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                For material changes, we will provide a more prominent notice (such as email notification) 
                prior to the change becoming effective.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
          <p className="text-gray-700 mb-6">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="font-medium text-gray-900">Email:</span>
              <a href="mailto:privacy@goforms.ai" className="text-primary hover:text-primary/80 transition-colors">
                privacy@goforms.ai
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-gray-900">Data Protection Officer:</span>
              <a href="mailto:dpo@goforms.ai" className="text-primary hover:text-primary/80 transition-colors">
                dpo@goforms.ai
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-gray-900">Address:</span>
              <span className="text-gray-700">123 Form Street, Template City, TC 12345, United States</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
