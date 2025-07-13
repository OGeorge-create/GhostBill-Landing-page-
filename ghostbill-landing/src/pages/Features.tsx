import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, BarChart3, Bell, Download, Shield, Zap, Users, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { ScrollAnimation, StaggeredAnimation, FloatingElement, CountUp } from '../components/ScrollAnimations';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Spend Analyzer",
      description: "Smart algorithms identify usage patterns and cost optimization opportunities across all your subscriptions",
      details: [
        "Machine learning algorithms analyze your spending patterns",
        "Identifies unused and underutilized subscriptions",
        "Provides personalized cost optimization recommendations",
        "Tracks usage across multiple payment methods"
      ]
    },
    {
      icon: Target,
      title: "Redundancy Detection",
      description: "Automatically finds overlapping tools and suggests consolidation to eliminate duplicate spending",
      details: [
        "Scans for duplicate functionality across tools",
        "Suggests consolidation opportunities",
        "Identifies feature overlap between subscriptions",
        "Recommends optimal tool combinations"
      ]
    },
    {
      icon: BarChart3,
      title: "Live Dashboard & Analytics",
      description: "Real-time visualization of your spending patterns, trends, and optimization opportunities",
      details: [
        "Interactive spending dashboards",
        "Trend analysis and forecasting",
        "Category-based spending breakdowns",
        "Custom reporting and insights"
      ]
    },
    {
      icon: Bell,
      title: "Smart Renewal Alerts",
      description: "Never get surprised by auto-renewals again with intelligent notifications and reminders",
      details: [
        "Customizable renewal notifications",
        "Usage-based renewal recommendations",
        "Calendar integration for renewal dates",
        "Email and in-app alert system"
      ]
    },
    {
      icon: Download,
      title: "Detailed Reporting",
      description: "Export comprehensive reports for accounting, budget planning, and financial analysis",
      details: [
        "CSV and PDF export options",
        "Custom date range reporting",
        "Accounting-ready expense reports",
        "Budget vs. actual spending analysis"
      ]
    },
    {
      icon: Shield,
      title: "Secure Integration",
      description: "Bank-level security with read-only access to protect your financial information",
      details: [
        "256-bit SSL encryption",
        "Read-only access to financial data",
        "SOC 2 Type II compliance",
        "Multi-factor authentication support"
      ]
    }
  ];

  const stats = [
    { number: "30-40%", label: "Average SaaS waste reduction", icon: DollarSign },
    { number: "2 weeks", label: "Average time to identify savings", icon: Clock },
    { number: "47", label: "Average tools tracked per company", icon: Users },
    { number: "99.9%", label: "Uptime guarantee", icon: TrendingUp }
  ];

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-300/30">
            <Zap className="w-4 h-4" />
            AI-Powered Features
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block text-blue-300">Control SaaS Spending</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you track, analyze, and optimize your SaaS subscriptions with unprecedented accuracy and ease.
          </p>
        </ScrollAnimation>

        {/* Stats */}
        <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700"
            >
              <FloatingElement delay={index * 0.2}>
                <div className="flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
              </FloatingElement>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </StaggeredAnimation>

        {/* Features Grid */}
        <StaggeredAnimation className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="flex items-start gap-6">
                <FloatingElement delay={index * 0.3}>
                  <div className="w-16 h-16 bg-blue-900/50 rounded-xl flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </FloatingElement>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="scale" delay={0.3} className="mt-20 text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using Ghostbill AI to optimize their SaaS spending and eliminate waste.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </div>
  );
}