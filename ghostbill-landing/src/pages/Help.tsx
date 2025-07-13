import React, { useState } from 'react';
import { Search, Book, MessageCircle, Video, ChevronRight, HelpCircle, Download } from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of GhostBill AI",
      articles: 12,
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Account Management",
      description: "Manage your account and settings",
      articles: 8,
      color: "green"
    },
    {
      icon: Video,
      title: "Features & Tools",
      description: "Detailed guides for all features",
      articles: 15,
      color: "purple"
    },
    {
      icon: Download,
      title: "Integrations",
      description: "Connect your favorite tools",
      articles: 6,
      color: "orange"
    }
  ];

  const popularArticles = [
    {
      title: "How to connect your first subscription",
      category: "Getting Started",
      readTime: "3 min read",
      views: "2.1k views"
    },
    {
      title: "Understanding AI recommendations",
      category: "Features & Tools",
      readTime: "5 min read",
      views: "1.8k views"
    },
    {
      title: "Setting up renewal alerts",
      category: "Features & Tools",
      readTime: "2 min read",
      views: "1.5k views"
    },
    {
      title: "Exporting your data",
      category: "Account Management",
      readTime: "4 min read",
      views: "1.2k views"
    },
    {
      title: "Troubleshooting connection issues",
      category: "Integrations",
      readTime: "6 min read",
      views: "980 views"
    },
    {
      title: "Managing team permissions",
      category: "Account Management",
      readTime: "4 min read",
      views: "850 views"
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our support team",
      action: "Send Message",
      icon: MessageCircle
    },
    {
      title: "Schedule Demo",
      description: "Book a personalized walkthrough",
      action: "Book Now",
      icon: Video
    },
    {
      title: "Feature Request",
      description: "Suggest new features or improvements",
      action: "Submit Idea",
      icon: HelpCircle
    }
  ];

  const tutorials = [
    {
      title: "Getting Started with GhostBill AI",
      description: "Complete walkthrough for new users",
      duration: "8 minutes",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Setting Up AI Analysis",
      description: "Configure AI recommendations for your needs",
      duration: "5 minutes",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Advanced Reporting Features",
      description: "Create custom reports and analytics",
      duration: "12 minutes",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    }
  ];

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Help
            <span className="block text-blue-300">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers, get support, and learn how to make the most of GhostBill AI.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group">
              <div className={`w-12 h-12 bg-${category.color}-900/50 rounded-lg flex items-center justify-center mb-4 border border-${category.color}-500/30 group-hover:border-${category.color}-500/50 transition-all`}>
                <category.icon className={`w-6 h-6 text-${category.color}-400`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{category.articles} articles</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Popular Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">Popular Articles</h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="bg-blue-900/30 text-blue-400 px-2 py-1 rounded text-xs">
                          {article.category}
                        </span>
                        <span>{article.readTime}</span>
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Quick Actions</h2>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                      <action.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        {action.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Video Tutorials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch step-by-step video guides to master GhostBill AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group">
                <div className="relative">
                  <img 
                    src={tutorial.thumbnail} 
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Video className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{tutorial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700">
            <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
              <MessageCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the most out of GhostBill AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Contact Support
              </button>
              <button className="border border-gray-600 hover:border-gray-500 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}