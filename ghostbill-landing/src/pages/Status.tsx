import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server } from 'lucide-react';

export default function Status() {
  const currentStatus = {
    overall: "operational",
    lastUpdated: "2024-12-15 14:30 UTC"
  };

  const services = [
    {
      name: "API",
      status: "operational",
      uptime: "99.98%",
      responseTime: "145ms",
      description: "Core API services"
    },
    {
      name: "Dashboard",
      status: "operational",
      uptime: "99.95%",
      responseTime: "320ms",
      description: "Web application interface"
    },
    {
      name: "AI Analysis",
      status: "operational",
      uptime: "99.92%",
      responseTime: "2.1s",
      description: "Machine learning recommendations"
    },
    {
      name: "Data Sync",
      status: "maintenance",
      uptime: "99.89%",
      responseTime: "1.8s",
      description: "Subscription data synchronization"
    },
    {
      name: "Notifications",
      status: "operational",
      uptime: "99.97%",
      responseTime: "89ms",
      description: "Email and in-app notifications"
    },
    {
      name: "Authentication",
      status: "operational",
      uptime: "99.99%",
      responseTime: "67ms",
      description: "User authentication services"
    }
  ];

  const incidents = [
    {
      title: "Scheduled Maintenance - Data Sync Service",
      status: "maintenance",
      date: "December 15, 2024",
      time: "14:00 - 16:00 UTC",
      description: "Routine maintenance to improve data synchronization performance. Some users may experience delayed subscription updates during this window.",
      updates: [
        {
          time: "14:30 UTC",
          message: "Maintenance is proceeding as scheduled. Data sync service is temporarily unavailable."
        },
        {
          time: "14:00 UTC",
          message: "Scheduled maintenance has begun for the data sync service."
        }
      ]
    },
    {
      title: "API Response Time Degradation",
      status: "resolved",
      date: "December 12, 2024",
      time: "09:15 - 10:45 UTC",
      description: "Users experienced slower API response times due to increased traffic. The issue has been resolved by scaling our infrastructure.",
      updates: [
        {
          time: "10:45 UTC",
          message: "Issue resolved. API response times have returned to normal levels."
        },
        {
          time: "09:30 UTC",
          message: "We have identified the cause and are implementing a fix."
        },
        {
          time: "09:15 UTC",
          message: "We are investigating reports of slower API response times."
        }
      ]
    }
  ];

  const metrics = [
    {
      title: "Overall Uptime",
      value: "99.95%",
      period: "Last 30 days",
      icon: Activity,
      color: "green"
    },
    {
      title: "Average Response Time",
      value: "156ms",
      period: "Last 24 hours",
      icon: Clock,
      color: "blue"
    },
    {
      title: "Active Incidents",
      value: "1",
      period: "Current",
      icon: AlertTriangle,
      color: "yellow"
    },
    {
      title: "Resolved This Month",
      value: "3",
      period: "December 2024",
      icon: CheckCircle,
      color: "green"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'maintenance':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-orange-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'maintenance':
        return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'degraded':
        return 'text-orange-400 bg-orange-900/20 border-orange-500/30';
      case 'outage':
        return 'text-red-400 bg-red-900/20 border-red-500/30';
      default:
        return 'text-green-400 bg-green-900/20 border-green-500/30';
    }
  };

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            System
            <span className="block text-blue-300">Status</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time status and performance metrics for all GhostBill AI services.
          </p>

          {/* Overall Status */}
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${getStatusColor(currentStatus.overall)}`}>
            {getStatusIcon(currentStatus.overall)}
            <span className="font-semibold capitalize">{currentStatus.overall === 'operational' ? 'All Systems Operational' : 'System Issues Detected'}</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">Last updated: {currentStatus.lastUpdated}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-${metric.color}-900/50 rounded-lg flex items-center justify-center border border-${metric.color}-500/30`}>
                  <metric.icon className={`w-5 h-5 text-${metric.color}-400`} />
                </div>
                <h3 className="font-semibold text-white">{metric.title}</h3>
              </div>
              <div className={`text-3xl font-bold text-${metric.color}-400 mb-1`}>{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.period}</div>
            </div>
          ))}
        </div>

        {/* Services Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Service Status</h2>
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
            {services.map((service, index) => (
              <div key={index} className={`p-6 ${index !== services.length - 1 ? 'border-b border-gray-700' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div>
                        <div className="text-white font-medium">{service.uptime}</div>
                        <div>Uptime</div>
                      </div>
                      <div>
                        <div className="text-white font-medium">{service.responseTime}</div>
                        <div>Response</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(service.status)}`}>
                        {service.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incidents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-start gap-4 mb-6">
                  {getStatusIcon(incident.status)}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm mb-4">
                      {incident.date} • {incident.time}
                    </div>
                    <p className="text-gray-300 mb-6">{incident.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Updates:</h4>
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex gap-4 text-sm">
                          <div className="text-gray-400 font-mono min-w-[80px]">{update.time}</div>
                          <div className="text-gray-300">{update.message}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700">
            <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
              <Server className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Stay Informed</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to status updates and get notified about incidents, maintenance, and service improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}