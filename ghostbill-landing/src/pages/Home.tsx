import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  CreditCard, 
  TrendingUp, 
  Bell, 
  Download,
  ChevronRight,
  Check,
  Star,
  Zap,
  Target,
  BarChart3,
  Users,
  ArrowRight,
  Play,
  Quote,
  Shield,
  Clock,
  DollarSign,
  Calendar
} from 'lucide-react';
import { ScrollAnimation, StaggeredAnimation, FloatingElement, CountUp } from '../components/ScrollAnimations';

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI Spend Analyzer",
      description: "Smart algorithms identify usage patterns and cost optimization opportunities across all your subscriptions"
    },
    {
      icon: Target,
      title: "Redundancy Detection",
      description: "Automatically finds overlapping tools and suggests consolidation to eliminate duplicate spending"
    },
    {
      icon: BarChart3,
      title: "Live Dashboard & Analytics",
      description: "Real-time visualization of your spending patterns, trends, and optimization opportunities"
    },
    {
      icon: Bell,
      title: "Smart Renewal Alerts",
      description: "Never get surprised by auto-renewals again with intelligent notifications and reminders"
    },
    {
      icon: Download,
      title: "Detailed Reporting",
      description: "Export comprehensive reports for accounting, budget planning, and financial analysis"
    },
    {
      icon: Shield,
      title: "Secure Integration",
      description: "Bank-level security with read-only access to protect your financial information"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Your Accounts",
      description: "Securely link your payment methods or manually add your SaaS subscriptions to get started",
      icon: CreditCard
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our advanced AI scans usage patterns, identifies waste, and finds optimization opportunities",
      icon: Brain
    },
    {
      number: "03",
      title: "Take Action",
      description: "Get clear, actionable recommendations to cancel, downgrade, or consolidate your tools",
      icon: Target
    }
  ];

  const testimonials = [
    {
      quote: "GhostBill AI helped us identify $2,700 in annual savings within just two weeks. The AI found subscriptions we had completely forgotten about.",
      author: "Sarah Chen",
      role: "CFO at TechStart Inc.",
      rating: 5,
      savings: "$2,700"
    },
    {
      quote: "Finally, a tool that actually helps us control SaaS sprawl. The insights are incredible and the interface is intuitive. Essential for any growing team.",
      author: "Michael Rodriguez",
      role: "CTO at FlowTech",
      rating: 5,
      savings: "$1,850"
    },
    {
      quote: "The redundancy detection feature alone paid for itself in the first month. We were paying for three different project management tools!",
      author: "Jennifer Walsh",
      role: "Operations Director",
      rating: 5,
      savings: "$960"
    }
  ];

  const stats = [
    { number: "30-40%", label: "Average SaaS waste", icon: DollarSign },
    { number: "47", label: "Average tools per company", icon: Users },
    { number: "23%", label: "Unused subscriptions", icon: Clock }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pb-20 min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/85"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-blue-100/20 backdrop-blur-sm text-blue-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-300/30"
              >
                <Zap className="w-4 h-4" />
                AI-Powered SaaS Management
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Stop Wasting Money on
                <span className="block text-blue-300">Forgotten SaaS</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Stop wasting money on tools you don't use. GhostBill AI finds forgotten SaaS subscriptions and helps you cut costs in seconds.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Try for Free
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  See How It Works
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-3 gap-3 sm:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20"
                  >
                    <FloatingElement delay={index * 0.5}>
                      <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300" />
                      </div>
                    </FloatingElement>
                    <div className="text-lg sm:text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-8 lg:mt-0"
            >
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-xs sm:text-sm text-gray-600">GhostBill AI Dashboard</div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Monthly Spend</h3>
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">$4,287</div>
                    <div className="text-sm text-green-600">↓ 23% from last month</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Active Tools</h3>
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-purple-600">47</div>
                    <div className="text-sm text-red-600">12 unused detected</div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Potential Savings</h3>
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-green-600">$1,340</div>
                  <div className="text-sm text-gray-600">Available this month</div>
                </motion.div>
              </motion.div>
              
              {/* Floating Elements for Visual Interest */}
              <FloatingElement duration={4} delay={0}>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
              </FloatingElement>
              <FloatingElement duration={3} delay={1}>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
              </FloatingElement>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              The Hidden Cost of SaaS Sprawl
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Most teams forget what they signed up for. Auto-renewals happen. Budgets bleed.
            </p>
          </ScrollAnimation>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <FloatingElement>
                <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                <DollarSign className="w-8 h-8 text-red-400" />
                </div>
              </FloatingElement>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <CountUp end={35} suffix="%" />
              </h3>
              <p className="text-sm sm:text-base text-gray-300">of SaaS spend is completely wasted on unused or redundant tools</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <FloatingElement delay={0.5}>
                <div className="w-16 h-16 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                <Clock className="w-8 h-8 text-orange-400" />
                </div>
              </FloatingElement>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <CountUp end={6} suffix=" months" />
              </h3>
              <p className="text-sm sm:text-base text-gray-300">average time before teams realize they're paying for unused subscriptions</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <FloatingElement delay={1}>
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                <Users className="w-8 h-8 text-purple-400" />
                </div>
              </FloatingElement>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                <CountUp end={47} suffix=" tools" />
              </h3>
              <p className="text-sm sm:text-base text-gray-300">used by the average company, with significant overlap and redundancy</p>
            </motion.div>
          </StaggeredAnimation>

          <ScrollAnimation direction="scale" delay={0.3} className="max-w-sm sm:max-w-md mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-red-400" />
                <CreditCard className="w-8 h-8 text-orange-400" />
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">ALERT</div>
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Auto-Renewal Notice</h3>
              <p className="text-gray-200 mb-1 text-sm sm:text-base">Adobe Creative Suite - $52.99/month</p>
              <p className="text-sm text-red-400">Last used: 3 months ago</p>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent platform automatically identifies waste and optimizes your SaaS spending with advanced AI algorithms
            </p>
          </ScrollAnimation>

          <StaggeredAnimation className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-700 hover:shadow-lg hover:border-gray-600 transition-all"
              >
                <FloatingElement delay={index * 0.2}>
                  <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 border border-blue-500/30">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </FloatingElement>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Three simple steps to start saving money on your SaaS subscriptions
            </p>
          </ScrollAnimation>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative text-center"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  whileHover={{ backgroundColor: "rgb(75, 85, 99)" }}
                  className="bg-gray-700 rounded-xl p-6 sm:p-8 hover:bg-gray-600 transition-colors border border-gray-600"
                >
                  <FloatingElement delay={index * 0.3}>
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </FloatingElement>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your team size and needs. No hidden fees, cancel anytime.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-xl p-2"
            >
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
              </button>
            </motion.div>
          </ScrollAnimation>

          <StaggeredAnimation className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-700"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">${isYearly ? '24' : '29'}</span>
                <span className="text-gray-300 text-base sm:text-lg">/month</span>
                {isYearly && <span className="text-xs sm:text-sm text-green-600 ml-2 bg-green-100 px-2 py-1 rounded">Save 17%</span>}
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">Perfect for growing teams and startups</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Unlimited subscriptions tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">AI analysis & recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Smart renewal alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Detailed reporting & CSV export</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-colors">
                Start Free Trial
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-500 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Custom</span>
                <span className="text-gray-300 text-base sm:text-lg">/month</span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">For larger teams with advanced needs</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Team collaboration features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Advanced API integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Custom reporting & analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm sm:text-base text-gray-200">Priority support & onboarding</span>
                </li>
              </ul>
              <button className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Creator Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollAnimation direction="left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                Built by someone who got tired of seeing money wasted.
              </h2>
              
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="bg-gray-700 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-600"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/Ghostbill App icon .png" 
                    alt="George Opare" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">George Opare</h3>
                    <p className="text-sm sm:text-base text-gray-300">Designer & Product Builder</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-blue-400 opacity-50 mb-4" />
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-6 italic">
                    "I'm a designer + product builder who's helped real estate, SaaS, and startup clients save time and convert leads. GhostBill AI was born from a problem I saw *every week* — founders losing money to auto-renewals and forgotten tools."
                  </p>
                  <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-sm sm:text-base text-red-400 font-semibold">
                      "They wasted $1,300/month. I built this so it never happens again."
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" className="relative mt-8 lg:mt-0">
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: -2 }}
                className="bg-gray-700 rounded-2xl p-6 sm:p-8 border border-gray-600"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl flex items-center justify-center mb-8 border border-gray-600">
                  <div className="text-center">
                    <img 
                      src="/Ghostbill App icon .png" 
                      alt="George Opare" 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                    <p className="text-sm sm:text-base text-gray-300">George Opare</p>
                    <p className="text-sm text-gray-400">Founder & Creator</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center shadow-sm border border-gray-600">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-300">Clients Helped</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center shadow-sm border border-gray-600">
                    <div className="text-xl sm:text-2xl font-bold text-purple-600">$2M+</div>
                    <div className="text-sm text-gray-300">Money Saved</div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who've transformed their SaaS spending
            </p>
          </ScrollAnimation>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/Ghostbill App icon .png" 
                      alt={testimonial.author} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">{testimonial.author}</div>
                      <div className="text-gray-300 text-xs sm:text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-bold text-sm sm:text-base">{testimonial.savings}</div>
                    <div className="text-xs text-gray-400">saved</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <ScrollAnimation direction="scale" className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Start Saving Money Today
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already saving thousands with Ghostbill AI. Get started with a free trial.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2"
              >
                Launch the App
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "rgb(37, 99, 235)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors"
              >
                Talk to the Builder
              </motion.button>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}