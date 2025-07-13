import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, DollarSign, Brain, Target } from 'lucide-react';

export default function Blog() {
  const featuredPost = {
    title: "The Hidden Cost of SaaS Sprawl: How Companies Waste 40% of Their Software Budget",
    excerpt: "Most companies don't realize they're hemorrhaging money on unused software subscriptions. Here's how to identify and eliminate SaaS waste in your organization.",
    author: "George Opare",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "SaaS Management",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      title: "5 Signs Your Team Has a SaaS Spending Problem",
      excerpt: "Warning signs that indicate your organization might be overspending on software subscriptions and what to do about it.",
      author: "George Opare",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Cost Optimization",
      icon: DollarSign
    },
    {
      title: "How AI is Revolutionizing SaaS Spend Management",
      excerpt: "Discover how artificial intelligence is helping businesses automatically identify waste and optimize their software spending.",
      author: "George Opare",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "AI Technology",
      icon: Brain
    },
    {
      title: "The Complete Guide to SaaS Audit: Step-by-Step Process",
      excerpt: "A comprehensive walkthrough of how to conduct a thorough audit of your organization's software subscriptions.",
      author: "George Opare",
      date: "November 28, 2024",
      readTime: "12 min read",
      category: "Best Practices",
      icon: Target
    },
    {
      title: "ROI Calculator: Measuring the Impact of SaaS Optimization",
      excerpt: "Learn how to calculate the return on investment from optimizing your SaaS spending and present results to stakeholders.",
      author: "George Opare",
      date: "November 20, 2024",
      readTime: "6 min read",
      category: "Analytics",
      icon: TrendingUp
    },
    {
      title: "Common SaaS Renewal Traps and How to Avoid Them",
      excerpt: "Auto-renewals can be costly. Here's how to stay on top of your subscriptions and avoid unexpected charges.",
      author: "George Opare",
      date: "November 15, 2024",
      readTime: "4 min read",
      category: "Tips & Tricks",
      icon: Target
    },
    {
      title: "Building a SaaS Governance Framework for Your Organization",
      excerpt: "Establish policies and procedures to prevent SaaS sprawl and maintain control over software spending.",
      author: "George Opare",
      date: "November 8, 2024",
      readTime: "10 min read",
      category: "Governance",
      icon: Brain
    }
  ];

  const categories = [
    "All Posts",
    "SaaS Management",
    "Cost Optimization",
    "AI Technology",
    "Best Practices",
    "Analytics",
    "Tips & Tricks",
    "Governance"
  ];

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            GhostBill AI
            <span className="block text-blue-300">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tips, and best practices for optimizing your SaaS spending and eliminating software waste.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredPost.image})` }}
              ></div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-400 text-sm">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all group">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <post.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-400 text-sm">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest insights on SaaS optimization, cost management, and AI-powered spend analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}