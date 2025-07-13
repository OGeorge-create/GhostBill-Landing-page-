import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Bell, 
  Award, 
  Calendar, 
  DollarSign, 
  Users, 
  CheckCircle,
  Star,
  Zap,
  Clock,
  ArrowRight,
  Settings,
  X
} from 'lucide-react';

interface DashboardProps {
  user?: {
    name: string;
    joinDate: string;
    totalSavings: number;
    subscriptionsTracked: number;
  };
}

export default function Dashboard({ user }: DashboardProps) {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [weeklyGoal, setWeeklyGoal] = useState(85);
  const [achievements, setAchievements] = useState([
    { id: 1, title: "First Week Complete", unlocked: true, date: "2024-12-10" },
    { id: 2, title: "Money Saver", unlocked: true, date: "2024-12-12" },
    { id: 3, title: "Optimization Expert", unlocked: false, progress: 60 }
  ]);
  
  const [personalizedInsights, setPersonalizedInsights] = useState([
    {
      id: 1,
      type: "savings_opportunity",
      title: "Potential $47/month savings detected",
      description: "You have 3 unused subscriptions that could be cancelled",
      action: "Review Now",
      priority: "high",
      timeToComplete: "2 min"
    },
    {
      id: 2,
      type: "usage_pattern",
      title: "Your spending pattern analysis is ready",
      description: "See how your SaaS usage compares to similar companies",
      action: "View Insights",
      priority: "medium",
      timeToComplete: "5 min"
    }
  ]);

  const [communityStats, setCommunityStats] = useState({
    totalSaved: 2847392,
    activeUsers: 1247,
    thisWeekSavings: 23847
  });

  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [notificationPreferences, setNotificationPreferences] = useState({
    savingsOpportunities: true,
    weeklyReports: true,
    achievementUnlocks: true,
    communityUpdates: false,
    marketingEmails: false
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCommunityStats(prev => ({
        ...prev,
        totalSaved: prev.totalSaved + Math.floor(Math.random() * 100),
        thisWeekSavings: prev.thisWeekSavings + Math.floor(Math.random() * 50)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const progressToNextLevel = 75;
  const currentLevel = 3;

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header with Immediate Value */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Welcome back, {user?.name || 'there'}! 👋
                </h1>
                <p className="text-blue-100 mb-4">
                  You've saved <span className="font-bold">${user?.totalSavings || 1247}</span> since joining. 
                  Here's what's new in your optimization journey.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>{currentStreak} day streak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>Level {currentLevel}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">${personalizedInsights[0]?.title.match(/\$(\d+)/)?.[1] || '47'}</div>
                <div className="text-blue-200 text-sm">potential monthly savings</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personalized Action Items */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Your Action Items</h2>
                <span className="text-sm text-gray-400">Updated 5 min ago</span>
              </div>
              
              <div className="space-y-4">
                {personalizedInsights.map((insight, index) => (
                  <motion.div
                    key={insight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      insight.priority === 'high' 
                        ? 'bg-red-900/20 border-red-500' 
                        : 'bg-blue-900/20 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2">{insight.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {insight.timeToComplete}
                          </div>
                          <div className={`px-2 py-1 rounded ${
                            insight.priority === 'high' ? 'bg-red-600' : 'bg-blue-600'
                          } text-white`}>
                            {insight.priority} priority
                          </div>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                        {insight.action}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Progress & Achievements */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-xl font-bold text-white mb-6">Your Progress</h2>
              
              {/* Level Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Level {currentLevel} Progress</span>
                  <span className="text-gray-400 text-sm">{progressToNextLevel}% to Level {currentLevel + 1}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressToNextLevel}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* Weekly Goal */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Weekly Optimization Goal</span>
                  <span className="text-gray-400 text-sm">{weeklyGoal}% complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${weeklyGoal}%` }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* Recent Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Recent Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className={`p-4 rounded-lg border ${
                        achievement.unlocked 
                          ? 'bg-yellow-900/20 border-yellow-500/30' 
                          : 'bg-gray-700 border-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {achievement.unlocked ? (
                          <Award className="w-6 h-6 text-yellow-400" />
                        ) : (
                          <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                        )}
                        <span className={`font-medium ${
                          achievement.unlocked ? 'text-yellow-400' : 'text-gray-400'
                        }`}>
                          {achievement.title}
                        </span>
                      </div>
                      {achievement.unlocked ? (
                        <p className="text-xs text-gray-400">Unlocked {achievement.date}</p>
                      ) : (
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-lg font-bold text-white mb-4">Community Impact</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    ${communityStats.totalSaved.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Total saved by community</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">
                    {communityStats.activeUsers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Active optimizers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">
                    ${communityStats.thisWeekSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Saved this week</div>
                </div>
              </div>
            </motion.div>

            {/* Notification Settings */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Notification Preferences</h3>
                <button 
                  onClick={() => setShowNotificationSettings(!showNotificationSettings)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
              
              <AnimatePresence>
                {showNotificationSettings && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    {Object.entries(notificationPreferences).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <button
                          onClick={() => setNotificationPreferences(prev => ({
                            ...prev,
                            [key]: !value
                          }))}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            value ? 'bg-blue-600' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            value ? 'translate-x-5' : 'translate-x-1'
                          }`}></div>
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <p className="text-xs text-blue-300">
                  We respect your time. Notifications are sent only for genuinely valuable updates.
                </p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Target className="w-4 h-4" />
                  Run AI Analysis
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Review
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Share Progress
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transparency Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Commitment to You</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                This dashboard is designed to help you succeed with your SaaS optimization goals. 
                All features focus on delivering genuine value. You can customize notifications, 
                export your data anytime, and opt out of any feature. We never use manipulative 
                tactics - just helpful tools that respect your time and autonomy.
              </p>
              <div className="mt-3 flex gap-4 text-xs text-gray-400">
                <button className="hover:text-blue-400 transition-colors">Privacy Settings</button>
                <button className="hover:text-blue-400 transition-colors">Data Export</button>
                <button className="hover:text-blue-400 transition-colors">Opt-out Options</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}