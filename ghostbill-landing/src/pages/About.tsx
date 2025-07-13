import React from 'react';
import { Quote, Target, Users, TrendingUp, Award, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're on a mission to eliminate SaaS waste and help businesses optimize their spending."
    },
    {
      icon: Heart,
      title: "Customer-First",
      description: "Every feature we build is designed with our customers' success and satisfaction in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to solve real-world financial challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product design to customer support."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Problem Identified",
      description: "George noticed clients consistently wasting money on forgotten SaaS subscriptions."
    },
    {
      year: "Early 2024",
      title: "Development Begins",
      description: "Started building the first version of Ghostbill AI with basic tracking features."
    },
    {
      year: "Mid 2024",
      title: "AI Integration",
      description: "Added machine learning algorithms for spend analysis and optimization recommendations."
    },
    {
      year: "Late 2024",
      title: "Public Launch",
      description: "Launched GhostBill AI to help businesses worldwide optimize their SaaS spending."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Helped", icon: Users },
    { number: "$2M+", label: "Money Saved", icon: TrendingUp },
    { number: "47", label: "Average Tools Tracked", icon: Target },
    { number: "30%", label: "Average Savings", icon: Award }
  ];

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            About
            <span className="block text-blue-300">GhostBill</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Born from frustration with SaaS waste, built to solve a real problem that affects every growing business.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet the Founder
            </h2>
            
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/Ghostbill App icon .png" 
                  alt="George Opare" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">George Opare</h3>
                  <p className="text-gray-300">Designer & Product Builder</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-400 opacity-50 mb-4" />
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  "I'm a designer and product builder who's helped real estate, SaaS, and startup clients save time and convert leads. GhostBill AI was born from a problem I saw every week — founders losing money to auto-renewals and forgotten tools."
                </p>
                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-400 font-semibold">
                    "One client was wasting $1,300/month on unused tools. I built GhostBill AI so this never happens again."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl flex items-center justify-center mb-8 border border-gray-600">
                <div className="text-center">
                  <img 
                    src="/Ghostbill App icon .png" 
                    alt="George Opare" 
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <p className="text-gray-300">George Opare</p>
                  <p className="text-sm text-gray-400">Founder & Creator</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 text-center border border-gray-600">
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe every business deserves to have full control over their software spending without the complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all">
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From identifying the problem to building the solution that helps businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Impact by Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from helping businesses optimize their SaaS spending.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Help us eliminate SaaS waste and optimize spending for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Contact George
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}