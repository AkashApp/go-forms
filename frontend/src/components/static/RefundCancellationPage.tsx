import React from 'react';
import { DollarSign, Calendar, AlertCircle, CheckCircle, XCircle, Clock, Mail, CreditCard } from 'lucide-react';

export default function RefundCancellationPage() {
  const refundPolicies = [
    {
      plan: 'Free Plan',
      icon: CheckCircle,
      color: 'green',
      details: [
        'No charges, no refunds needed',
        'Cancel anytime without penalty',
        'Data retained for 30 days after cancellation'
      ]
    },
    {
      plan: 'Pro Plan (Monthly)',
      icon: Calendar,
      color: 'blue',
      details: [
        '14-day money-back guarantee for new customers',
        'Cancel anytime before next billing cycle',
        'No refunds for partial months',
        'Access continues until end of billing period'
      ]
    },
    {
      plan: 'Pro Plan (Annual)',
      icon: DollarSign,
      color: 'purple',
      details: [
        '30-day money-back guarantee for new customers',
        'Pro-rated refund available within first 60 days',
        'No refunds after 60 days',
        'Cancel anytime, access continues until subscription end'
      ]
    },
    {
      plan: 'Enterprise Plan',
      icon: CreditCard,
      color: 'orange',
      details: [
        'Custom refund terms as per agreement',
        'Early termination fees may apply',
        'Contact account manager for cancellation',
        'Data migration assistance available'
      ]
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: 'Submit Request',
      description: 'Contact our support team via email or through your account settings',
      timeframe: 'Immediate'
    },
    {
      step: 2,
      title: 'Review',
      description: 'We review your request and verify eligibility based on our policy',
      timeframe: '1-2 business days'
    },
    {
      step: 3,
      title: 'Approval',
      description: 'You receive confirmation of refund approval or denial with explanation',
      timeframe: '2-3 business days'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'Approved refunds are processed to your original payment method',
      timeframe: '5-10 business days'
    }
  ];

  const eligibilityCriteria = [
    {
      icon: CheckCircle,
      eligible: true,
      title: 'Eligible for Refund',
      items: [
        'New customers within money-back guarantee period',
        'Service outages exceeding our SLA commitments',
        'Billing errors or duplicate charges',
        'Account compromised due to our security breach',
        'Features not working as advertised'
      ]
    },
    {
      icon: XCircle,
      eligible: false,
      title: 'Not Eligible for Refund',
      items: [
        'Change of mind after guarantee period',
        'Violation of Terms of Service',
        'Account suspension due to abuse',
        'Usage of service before cancellation',
        'Third-party integration issues',
        'Custom development or consulting services'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your Account Settings > Billing section. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Will I receive a refund if I cancel mid-cycle?',
      answer: 'Monthly plans do not offer partial refunds. Annual plans may be eligible for pro-rated refunds within the first 60 days. Your access continues until the end of the paid period.'
    },
    {
      question: 'What happens to my data after cancellation?',
      answer: 'Your data remains accessible for 30 days after cancellation for export. After 30 days, data may be permanently deleted. Enterprise customers have custom data retention options.'
    },
    {
      question: 'Can I reactivate my account after cancellation?',
      answer: 'Yes, you can reactivate your account within 30 days of cancellation with all your data intact. After 30 days, you\'ll need to create a new account.'
    },
    {
      question: 'How long does the refund process take?',
      answer: 'Once approved, refunds typically appear in your account within 5-10 business days, depending on your payment provider and banking institution.'
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
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <p className="text-blue-900">
            At GoForms, we want you to be completely satisfied with our service. This policy outlines 
            our refund and cancellation procedures. We offer a fair and transparent approach to ensure 
            your peace of mind when choosing our platform.
          </p>
        </div>

        {/* Money-Back Guarantee Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h2>
          <p className="text-lg">
            Try GoForms risk-free! New customers can request a full refund within the first 30 days.
          </p>
        </div>

        {/* Refund Policies by Plan */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Refund Policy by Plan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {refundPolicies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-${policy.color}-100 rounded-lg p-2`}>
                      <Icon className={`h-6 w-6 text-${policy.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{policy.plan}</h3>
                  </div>
                  <ul className="space-y-2">
                    {policy.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Refund Eligibility</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {eligibilityCriteria.map((criteria, index) => {
              const Icon = criteria.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                    criteria.eligible ? 'border-green-200' : 'border-red-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`h-6 w-6 ${criteria.eligible ? 'text-green-600' : 'text-red-600'}`} />
                    <h3 className="text-xl font-bold text-gray-900">{criteria.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {criteria.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`mr-2 ${criteria.eligible ? 'text-green-600' : 'text-red-600'}`}>•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Refund Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Refund Process</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {refundProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-700 mb-1">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{step.timeframe}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cancellation Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How to Cancel</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Self-Service</h3>
              <p className="text-gray-700">
                Cancel directly from your account settings. Instant processing, no questions asked.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-700">
                Send cancellation request to billing@goforms.ai with your account details.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Payment Provider</h3>
              <p className="text-gray-700">
                Cancel through PayPal, Stripe, or your payment provider's subscription management.
              </p>
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

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Notes</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• All refunds are processed to the original payment method</li>
                <li>• Currency conversion fees are non-refundable</li>
                <li>• Add-on services and custom development are non-refundable</li>
                <li>• Refund processing times may vary by region and payment provider</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Refunds or Cancellation?</h2>
          <p className="text-gray-700 mb-6">
            Our support team is here to assist you with any questions about refunds or cancellations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:billing@goforms.ai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
