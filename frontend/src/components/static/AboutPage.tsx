import React from 'react';
import { Target, Users, Award, Zap, Shield, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to making data collection simple, powerful, and accessible to everyone."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature we build starts with understanding our users' needs and challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every form, template, and feature we deliver."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge AI and technology to provide smart insights and automation."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Your data security and privacy are our top priorities. We follow industry best practices."
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "We're passionate about our customers' success and go above and beyond to support them."
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "1M+", label: "Forms Created" },
    { number: "50M+", label: "Responses Collected" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About GoForms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses and individuals to create stunning forms, 
            collect meaningful data, and make informed decisions.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                GoForms was born from a simple observation: creating professional forms and 
                collecting data shouldn't be complicated or expensive. Founded in 2023, we set out 
                to build a platform that combines powerful features with intuitive design.
              </p>
              <p>
                What started as a small project to help businesses create better feedback forms 
                has grown into a comprehensive platform serving thousands of users worldwide. 
                From simple contact forms to complex multi-page assessments, GoForms has evolved 
                to meet the diverse needs of our community.
              </p>
              <p>
                Today, we're proud to be the go-to solution for organizations looking to 
                streamline their data collection processes, improve response rates, and gain 
                actionable insights through AI-powered analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 rounded-lg p-3 mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-primary-foreground/90">
              To be the world's most trusted and innovative platform for creating forms 
              and collecting data, empowering every organization to make data-driven decisions.
            </p>
          </div>
          <div className="bg-secondary text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-secondary-foreground/90">
              To democratize data collection by providing powerful, easy-to-use tools that 
              help businesses and individuals gather insights, understand their audience, 
              and drive growth.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-100 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Data Collection?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust GoForms for their forms and surveys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
