import React, { useState } from 'react';
import { Check, X, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for individuals getting started",
      features: [
        "Track up to 10 subscriptions",
        "Basic spending analytics",
        "Email renewal alerts",
        "CSV export",
        "Community support"
      ],
      limitations: [
        "No AI analysis",
        "No redundancy detection",
        "Limited reporting"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: { monthly: 29, yearly: 24 },
      description: "Perfect for growing teams and startups",
      features: [
        "Unlimited subscriptions tracking",
        "AI analysis & recommendations",
        "Smart renewal alerts",
        "Redundancy detection",
        "Detailed reporting & CSV export",
        "Usage pattern analysis",
        "Cost optimization suggestions",
        "Email support",
        "Dashboard analytics"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For larger teams with advanced needs",
      features: [
        "Everything in Professional",
        "Team collaboration features",
        "Advanced API integrations",
        "Custom reporting & analytics",
        "Priority support & onboarding",
        "SSO integration",
        "Custom data retention",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "You get full access to all Professional features for 14 days, no credit card required. You can cancel anytime during the trial period."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing adjustments."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level 256-bit SSL encryption and maintain SOC 2 Type II compliance. We only access read-only data and never store sensitive payment information."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
    },
    {
      question: "How does AI analysis work?",
      answer: "Our AI analyzes your subscription usage patterns, spending trends, and identifies optimization opportunities. It learns from your behavior to provide increasingly accurate recommendations."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export all your data in CSV format at any time. We believe in data portability and will never lock you in."
    }
  ];

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-300/30">
            <Zap className="w-4 h-4" />
          
          </div>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-xl p-2">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                !isYearly ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isYearly ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-gray-800 rounded-2xl p-8 shadow-sm border ${
              plan.popular ? 'border-blue-500 border-2 relative' : 'border-gray-700'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">
                  {typeof plan.price.monthly === 'number' && plan.price.monthly === 0 
                    ? 'Free' 
                    : `$${isYearly ? plan.price.yearly : plan.price.monthly}`}
                </span>
                {typeof plan.price.monthly === 'number' && plan.price.monthly > 0 && (
                  <span className="text-gray-300 text-lg">/month</span>
                )}
              </div>
              <p className="text-gray-300 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <li key={limitationIndex} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{limitation}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Stop Wasting Money?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already saving thousands with GhostBill AI.
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}