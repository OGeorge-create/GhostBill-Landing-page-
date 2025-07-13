import React, { useState } from 'react';
import { Book, Code, Zap, Settings, Shield, ChevronRight, Copy, Check, Database } from 'lucide-react';

export default function Docs() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sections = [
    {
      icon: Zap,
      title: "Quick Start",
      description: "Get up and running in minutes",
      items: [
        "Installation",
        "Authentication",
        "First API Call",
        "Basic Configuration"
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation",
      items: [
        "Subscriptions",
        "Analytics",
        "Webhooks",
        "Rate Limits"
      ]
    },
    {
      icon: Settings,
      title: "Integrations",
      description: "Connect with your favorite tools",
      items: [
        "Slack Integration",
        "Zapier Webhooks",
        "Custom Integrations",
        "SSO Setup"
      ]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Keep your data safe and secure",
      items: [
        "Authentication",
        "API Keys",
        "Permissions",
        "Best Practices"
      ]
    }
  ];

  const codeExamples = [
    {
      title: "Get All Subscriptions",
      language: "javascript",
      code: `// Get all subscriptions for the authenticated user
const response = await fetch('https://api.ghostbill.ai/v1/subscriptions', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const subscriptions = await response.json();
console.log(subscriptions);`
    },
    {
      title: "Create a New Subscription",
      language: "javascript",
      code: `// Add a new subscription
const newSubscription = {
  name: "Adobe Creative Suite",
  cost: 52.99,
  billing_cycle: "monthly",
  next_billing_date: "2024-01-15"
};

const response = await fetch('https://api.ghostbill.ai/v1/subscriptions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newSubscription)
});

const result = await response.json();`
    },
    {
      title: "Get AI Recommendations",
      language: "javascript",
      code: `// Get AI-powered optimization recommendations
const response = await fetch('https://api.ghostbill.ai/v1/recommendations', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const recommendations = await response.json();
recommendations.forEach(rec => {
  console.log(\`\${rec.type}: \${rec.description}\`);
});`
    }
  ];

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-300/30">
            <Book className="w-4 h-4" />
            Developer Documentation
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            API
            <span className="block text-blue-300">Documentation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to integrate Ghostbill AI into your applications and workflows.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 border border-blue-500/30 group-hover:border-blue-500/50 transition-all">
                <section.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                    <ChevronRight className="w-3 h-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Getting Started */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">Getting Started</h2>
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Authentication</h3>
            <p className="text-gray-300 mb-6">
              All API requests require authentication using an API key. You can generate your API key from your dashboard settings.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Base URL</span>
                <button
                  onClick={() => copyToClipboard('https://api.ghostbill.ai/v1', 'base-url')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'base-url' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <code className="text-blue-400">https://api.ghostbill.ai/v1</code>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Important Note</h4>
            <p className="text-yellow-200">
              Keep your API keys secure and never expose them in client-side code. All requests should be made from your server.
            </p>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">Code Examples</h2>
          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                  <button
                    onClick={() => copyToClipboard(example.code, `code-${index}`)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === `code-${index}` ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">API Endpoints</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Subscriptions</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                  <code className="text-gray-300">/subscriptions</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-mono">POST</span>
                  <code className="text-gray-300">/subscriptions</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs font-mono">PUT</span>
                  <code className="text-gray-300">/subscriptions/:id</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-mono">DEL</span>
                  <code className="text-gray-300">/subscriptions/:id</code>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Analytics</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                  <code className="text-gray-300">/analytics/spending</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                  <code className="text-gray-300">/analytics/trends</code>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-mono">GET</span>
                  <code className="text-gray-300">/recommendations</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Help with Integration?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate GhostBill AI into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Contact Developer Support
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Join Developer Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}