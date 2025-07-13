import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign,
  Clock,
  Settings,
  Volume2,
  VolumeX
} from 'lucide-react';

interface Notification {
  id: string;
  type: 'savings' | 'achievement' | 'reminder' | 'insight';
  title: string;
  message: string;
  value?: string;
  timeToAct?: string;
  priority: 'low' | 'medium' | 'high';
  timestamp: Date;
  actionable: boolean;
  action?: {
    label: string;
    url: string;
  };
}

interface EthicalNotificationSystemProps {
  userPreferences: {
    frequency: 'minimal' | 'balanced' | 'comprehensive';
    quietHours: { start: string; end: string };
    enableSound: boolean;
    types: {
      savings: boolean;
      achievements: boolean;
      reminders: boolean;
      insights: boolean;
    };
  };
  onUpdatePreferences: (preferences: any) => void;
}

export default function EthicalNotificationSystem({ 
  userPreferences, 
  onUpdatePreferences 
}: EthicalNotificationSystemProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Sample notifications that respect user value and time
  const generateValueBasedNotification = (): Notification | null => {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Respect quiet hours
    const quietStart = parseInt(userPreferences.quietHours.start);
    const quietEnd = parseInt(userPreferences.quietHours.end);
    
    if (currentHour >= quietStart || currentHour <= quietEnd) {
      return null; // Don't send notifications during quiet hours
    }

    const notificationTypes = [
      {
        type: 'savings' as const,
        title: 'New savings opportunity detected',
        message: 'We found a subscription you haven\'t used in 30 days',
        value: '$29/month potential savings',
        timeToAct: '2 min to review',
        priority: 'high' as const,
        actionable: true,
        action: { label: 'Review Now', url: '/subscriptions' }
      },
      {
        type: 'insight' as const,
        title: 'Your optimization is working',
        message: 'You\'ve reduced SaaS costs by 15% this quarter',
        value: '$340 saved',
        priority: 'medium' as const,
        actionable: false
      },
      {
        type: 'achievement' as const,
        title: 'Milestone reached!',
        message: 'You\'ve maintained your optimization streak for 30 days',
        priority: 'low' as const,
        actionable: false
      }
    ];

    // Only send notifications for enabled types
    const enabledTypes = notificationTypes.filter(notif => 
      userPreferences.types[notif.type]
    );

    if (enabledTypes.length === 0) return null;

    const selectedType = enabledTypes[Math.floor(Math.random() * enabledTypes.length)];
    
    return {
      id: `notif-${Date.now()}`,
      timestamp: now,
      ...selectedType
    };
  };

  // Intelligent notification timing based on user behavior
  useEffect(() => {
    const scheduleNotification = () => {
      const notification = generateValueBasedNotification();
      if (notification) {
        setNotifications(prev => [notification, ...prev.slice(0, 4)]); // Keep only 5 most recent
        setUnreadCount(prev => prev + 1);
        
        // Play sound if enabled
        if (userPreferences.enableSound && notification.priority === 'high') {
          // Subtle notification sound would go here
        }
      }
    };

    // Frequency-based scheduling
    let interval: NodeJS.Timeout;
    
    switch (userPreferences.frequency) {
      case 'minimal':
        interval = setInterval(scheduleNotification, 24 * 60 * 60 * 1000); // Daily
        break;
      case 'balanced':
        interval = setInterval(scheduleNotification, 8 * 60 * 60 * 1000); // 3 times daily
        break;
      case 'comprehensive':
        interval = setInterval(scheduleNotification, 4 * 60 * 60 * 1000); // 6 times daily
        break;
    }

    return () => clearInterval(interval);
  }, [userPreferences]);

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setUnreadCount(0);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'savings':
        return <DollarSign className="w-5 h-5 text-green-400" />;
      case 'achievement':
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
      case 'reminder':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'insight':
        return <TrendingUp className="w-5 h-5 text-purple-400" />;
      default:
        return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-500/30 bg-red-900/20';
      case 'medium':
        return 'border-yellow-500/30 bg-yellow-900/20';
      case 'low':
        return 'border-blue-500/30 bg-blue-900/20';
      default:
        return 'border-gray-500/30 bg-gray-900/20';
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <div className="relative">
        <button
          onClick={markAllAsRead}
          className="relative p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Bell className="w-6 h-6" />
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </motion.div>
          )}
        </button>
      </div>

      {/* Notification Panel */}
      <div className="absolute right-0 top-12 w-96 bg-gray-800 rounded-xl border border-gray-700 shadow-xl z-50">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Notifications</h3>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 border-b border-gray-700 bg-gray-750"
            >
              <h4 className="text-sm font-semibold text-white mb-3">Notification Preferences</h4>
              
              {/* Frequency */}
              <div className="mb-4">
                <label className="text-xs text-gray-400 mb-2 block">Frequency</label>
                <select
                  value={userPreferences.frequency}
                  onChange={(e) => onUpdatePreferences({
                    ...userPreferences,
                    frequency: e.target.value
                  })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                >
                  <option value="minimal">Minimal (Daily)</option>
                  <option value="balanced">Balanced (3x daily)</option>
                  <option value="comprehensive">Comprehensive (6x daily)</option>
                </select>
              </div>

              {/* Notification Types */}
              <div className="mb-4">
                <label className="text-xs text-gray-400 mb-2 block">Types</label>
                <div className="space-y-2">
                  {Object.entries(userPreferences.types).map(([type, enabled]) => (
                    <div key={type} className="flex items-center justify-between">
                      <span className="text-sm text-gray-300 capitalize">{type}</span>
                      <button
                        onClick={() => onUpdatePreferences({
                          ...userPreferences,
                          types: { ...userPreferences.types, [type]: !enabled }
                        })}
                        className={`w-8 h-5 rounded-full transition-colors ${
                          enabled ? 'bg-blue-600' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          enabled ? 'translate-x-4' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sound */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Sound</span>
                <button
                  onClick={() => onUpdatePreferences({
                    ...userPreferences,
                    enableSound: !userPreferences.enableSound
                  })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {userPreferences.enableSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-6 text-center text-gray-400">
              <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No notifications yet</p>
              <p className="text-xs mt-1">We'll only notify you about genuinely valuable updates</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`p-4 ${getPriorityColor(notification.priority)} border-l-4`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {notification.title}
                        </h4>
                        <p className="text-xs text-gray-300 mb-2">
                          {notification.message}
                        </p>
                        
                        {(notification.value || notification.timeToAct) && (
                          <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                            {notification.value && (
                              <span className="text-green-400 font-medium">
                                {notification.value}
                              </span>
                            )}
                            {notification.timeToAct && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {notification.timeToAct}
                              </span>
                            )}
                          </div>
                        )}

                        {notification.actionable && notification.action && (
                          <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors">
                            {notification.action.label}
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => dismissNotification(notification.id)}
                      className="text-gray-400 hover:text-white transition-colors ml-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">
                    {notification.timestamp.toLocaleTimeString()}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Transparency Footer */}
        <div className="p-3 bg-gray-750 rounded-b-xl border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            We respect your time. Notifications are sent only for genuinely valuable updates.
          </p>
        </div>
      </div>
    </div>
  );
}