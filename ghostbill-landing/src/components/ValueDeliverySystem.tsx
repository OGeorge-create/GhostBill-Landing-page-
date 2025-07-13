import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Target, 
  Bell,
  X,
  CheckCircle,
  ArrowRight,
  Calendar
} from 'lucide-react';

interface ValueDeliverySystemProps {
  isFirstVisit?: boolean;
  userPreferences?: {
    industry: string;
    companySize: string;
    primaryGoal: string;
  };
}

export default function ValueDeliverySystem({ 
  isFirstVisit = false, 
  userPreferences 
}: ValueDeliverySystemProps) {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [showQuickWin, setShowQuickWin] = useState(isFirstVisit);
  const [completedActions, setCompletedActions] = useState<number[]>([]);

  // Personalized insights based on user context
  const personalizedInsights = [
    {
      id: 1,
      type: 'immediate_value',
      title: 'Found $127 in potential monthly savings',
      description: 'We detected 3 subscriptions with low usage that could be optimized',
      timeToValue: '30 seconds',
      action: 'Review Now',
      impact: 'high',
      category: 'cost_optimization'
    },
    {
      id: 2,
      type: 'usage_pattern',
      title: 'Your team uses 23% fewer tools than similar companies',
      description: 'This efficiency puts you ahead of 78% of companies your size',
      timeToValue: '1 minute',
      action: 'See Comparison',
      impact: 'medium',
      category: 'benchmarking'
    },
    {
      id: 3,
      type: 'optimization_opportunity',
      title: 'Consolidation opportunity identified',
      description: 'You have 2 project management tools with overlapping features',
      timeToValue: '2 minutes',
      action: 'Explore Options',
      impact: 'medium',
      category: 'efficiency'
    }
  ];

  const quickWins = [
    {
      id: 1,
      title: 'Connect your first payment method',
      description: 'Get instant visibility into your SaaS spending',
      timeEstimate: '2 min',
      value: 'Immediate insights',
      completed: false
    },
    {
      id: 2,
      title: 'Review AI-detected subscriptions',
      description: 'Verify and categorize automatically found subscriptions',
      timeEstimate: '3 min',
      value: '$50+ potential savings',
      completed: false
    },
    {
      id: 3,
      title: 'Set your optimization goals',
      description: 'Define what success looks like for your team',
      timeEstimate: '1 min',
      value: 'Personalized recommendations',
      completed: false
    }
  ];

  // Rotate insights every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % personalizedInsights.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [personalizedInsights.length]);

  const handleCompleteAction = (actionId: number) => {
    setCompletedActions(prev => [...prev, actionId]);
  };

  const completionRate = (completedActions.length / quickWins.length) * 100;

  return (
    <div className="space-y-6">
      {/* First 30 Seconds Value - Quick Win Modal */}
      <AnimatePresence>
        {showQuickWin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full border border-gray-700"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Welcome! Let's get you saving money in 30 seconds
                  </h2>
                  <p className="text-gray-300">
                    We've already found potential savings in your account. Here's how to unlock them:
                  </p>
                </div>
                <button
                  onClick={() => setShowQuickWin(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {quickWins.map((win, index) => (
                  <motion.div
                    key={win.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border ${
                      completedActions.includes(win.id)
                        ? 'bg-green-900/20 border-green-500/30'
                        : 'bg-gray-700 border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        {completedActions.includes(win.id) ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        ) : (
                          <div className="w-5 h-5 bg-gray-600 rounded-full mt-0.5 flex items-center justify-center text-xs text-white">
                            {index + 1}
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-white">{win.title}</h3>
                          <p className="text-gray-300 text-sm">{win.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {win.timeEstimate}
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              {win.value}
                            </div>
                          </div>
                        </div>
                      </div>
                      {!completedActions.includes(win.id) && (
                        <button
                          onClick={() => handleCompleteAction(win.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Start
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Setup Progress</span>
                  <span className="text-sm text-gray-400">{Math.round(completionRate)}% complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${completionRate}%` }}
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowQuickWin(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  I'll do this later
                </button>
                <button
                  onClick={() => setShowQuickWin(false)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Continue to Dashboard
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Insights Carousel */}
      <motion.div
        key={currentInsight}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              {personalizedInsights[currentInsight].category === 'cost_optimization' && <DollarSign className="w-6 h-6" />}
              {personalizedInsights[currentInsight].category === 'benchmarking' && <TrendingUp className="w-6 h-6" />}
              {personalizedInsights[currentInsight].category === 'efficiency' && <Target className="w-6 h-6" />}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                {personalizedInsights[currentInsight].title}
              </h3>
              <p className="text-blue-100 mb-4">
                {personalizedInsights[currentInsight].description}
              </p>
              <div className="flex items-center gap-4 text-sm text-blue-200">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {personalizedInsights[currentInsight].timeToValue}
                </div>
                <div className={`px-2 py-1 rounded ${
                  personalizedInsights[currentInsight].impact === 'high' 
                    ? 'bg-red-500/30' 
                    : 'bg-yellow-500/30'
                }`}>
                  {personalizedInsights[currentInsight].impact} impact
                </div>
              </div>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            {personalizedInsights[currentInsight].action}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {personalizedInsights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentInsight(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentInsight ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Daily Routine Integration */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-6 h-6 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Your Optimization Routine</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">Monday Morning</div>
            <div className="font-semibold text-white">Weekly Review</div>
            <div className="text-xs text-gray-400 mt-2">5 min • Check new recommendations</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">Wednesday</div>
            <div className="font-semibold text-white">Quick Check-in</div>
            <div className="text-xs text-gray-400 mt-2">2 min • Review alerts</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">Friday</div>
            <div className="font-semibold text-white">Progress Update</div>
            <div className="text-xs text-gray-400 mt-2">3 min • Track savings</div>
          </div>
        </div>
      </div>

      {/* Value Reinforcement */}
      <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-8 h-8 text-green-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Why This Matters</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every minute you spend optimizing your SaaS stack saves your team hours of manual work 
              and hundreds of dollars in unnecessary costs. These small, consistent actions compound 
              into significant business value over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}