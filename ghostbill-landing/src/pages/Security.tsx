import React from 'react';
import { Shield, Eye, CheckCircle, AlertTriangle, Key, Database, Lock } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Bank-Level Encryption",
      description: "All data is encrypted using 256-bit SSL encryption, the same standard used by major financial institutions.",
      details: [
        "End-to-end encryption for all data transmission",
        "AES-256 encryption for data at rest",
        "TLS 1.3 for secure connections",
        "Regular security audits and penetration testing"
      ]
    },
    {
      icon: Eye,
      title: "Read-Only Access",
      description: "We only request read-only access to your financial data. We cannot make transactions or modify your accounts.",
      details: [
        "View-only permissions for connected accounts",
        "No ability to initiate transactions",
        "Cannot modify account settings",
        "Transparent permission requests"
      ]
    },
    {
      icon: Database,
      title: "Secure Data Storage",
      description: "Your data is stored in secure, compliant data centers with multiple layers of protection.",
      details: [
        "SOC 2 Type II compliant infrastructure",
        "Data centers with 24/7 physical security",
        "Regular automated backups",
        "Geographic data redundancy"
      ]
    },
    {
      icon: Key,
      title: "Multi-Factor Authentication",
      description: "Protect your account with additional security layers including 2FA and biometric authentication.",
      details: [
        "SMS and app-based 2FA support",
        "Biometric authentication options",
        "Single sign-on (SSO) integration",
        "Session management and timeout controls"
      ]
    }
  ];

  const compliance = [
    {
      title: "SOC 2 Type II",
      description: "Independently audited for security, availability, and confidentiality controls.",
      status: "Certified"
    },
    {
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations.",
      status: "Compliant"
    },
    {
      title: "CCPA Compliant",
      description: "Adheres to California Consumer Privacy Act requirements.",
      status: "Compliant"
    },
    {
      title: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance for payment data.",
      status: "Level 1"
    }
  ];

  const dataHandling = [
    {
      title: "Data Collection",
      description: "We only collect data necessary for providing our service and improving your experience."
    },
    {
      title: "Data Usage",
      description: "Your data is used solely for subscription tracking, analysis, and providing recommendations."
    },
    {
      title: "Data Sharing",
      description: "We never sell or share your personal data with third parties for marketing purposes."
    },
    {
      title: "Data Retention",
      description: "Data is retained only as long as necessary and can be deleted upon request."
    },
    {
      title: "Data Portability",
      description: "You can export your data at any time in standard formats."
    },
    {
      title: "Right to Deletion",
      description: "You can request complete deletion of your data from our systems."
    }
  ];

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100/20 backdrop-blur-sm text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-300/30">
            <Shield className="w-4 h-4" />
            Enterprise-Grade Security
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Data is
            <span className="block text-green-300">Safe & Secure</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We take security seriously. Your financial data is protected with bank-level security measures and industry-leading compliance standards.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-900/50 rounded-xl flex items-center justify-center border border-green-500/30 flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Compliance & Certifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of compliance with industry regulations and security frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                <span className="inline-block bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Handling */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Data Handling Practices</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparency in how we collect, use, and protect your data is fundamental to our approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataHandling.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-8 mb-20">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Best Practices</h3>
              <div className="text-gray-300 space-y-2">
                <p>• Always use strong, unique passwords for your GhostBill AI account</p>
                <p>• Enable two-factor authentication for additional security</p>
                <p>• Regularly review your connected accounts and permissions</p>
                <p>• Report any suspicious activity immediately to our security team</p>
                <p>• Keep your browser and devices updated with the latest security patches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Security Team */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700">
            <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
              <Lock className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Security?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our security team is here to address any concerns and provide additional information about our security practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Contact Security Team
              </button>
              <button className="border border-gray-600 hover:border-gray-500 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Security Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}