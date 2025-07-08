import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Target, TrendingUp, Clock, CheckCircle, PlayCircle, AlertCircle, Sparkles, UserCircle } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const skillStats = {
    mastered: 12,
    inProgress: 8,
    recommended: 15,
    totalAnalyzed: 35
  };

  const recentActivity = [
    { 
      skill: 'React.js', 
      action: 'Completed', 
      time: '2 hours ago', 
      level: 85,
      icon: '⚛️',
      status: 'completed'
    },
    { 
      skill: 'Python', 
      action: 'In Progress', 
      time: '1 day ago', 
      level: 65,
      icon: '🐍',
      status: 'progress'
    },
    { 
      skill: 'Data Analysis', 
      action: 'Started', 
      time: '3 days ago', 
      level: 25,
      icon: '📊',
      status: 'started'
    },
    { 
      skill: 'Machine Learning', 
      action: 'Recommended', 
      time: '5 days ago', 
      level: 0,
      icon: '🤖',
      status: 'recommended'
    },
  ];

  const weeklyGoals = [
    { 
      goal: 'Complete TypeScript Course', 
      progress: 75, 
      deadline: '2 days left',
      status: 'on-track',
      emoji: '🔥'
    },
    { 
      goal: 'Practice Algorithm Problems', 
      progress: 40, 
      deadline: '5 days left',
      status: 'behind',
      emoji: '⚡'
    },
    { 
      goal: 'Build Portfolio Project', 
      progress: 90, 
      deadline: '1 day left',
      status: 'ahead',
      emoji: '🚀'
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>;
      case 'progress':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">In Progress</Badge>;
      case 'started':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Started</Badge>;
      case 'recommended':
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Recommended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getGoalStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'text-green-400';
      case 'behind':
        return 'text-yellow-400';
      case 'ahead':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleStartAnalysis = () => {
    navigate('/gap-analysis');
  };

  const handleViewGoals = () => {
    navigate('/career-goals');
  };

  const handleAddNewSkills = () => {
    navigate('/skills-input');
  };

  const handleSetCareerGoal = () => {
    navigate('/career-goals');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="relative glass p-8 rounded-3xl border border-border/50">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold flex items-center gap-2">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome back, John!
                </span>
                <Sparkles className="ml-3 h-8 w-8 text-purple-400 drop-shadow-md" />
              </h1>
              <p className="text-xl text-muted-foreground/80 font-medium">
                Let's bridge your skills to your dream career.
              </p>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group hover:scale-105 transition-transform duration-200"
                onClick={handleStartAnalysis}
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Analysis
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="w-40 h-40 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-pulse-glow">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-float">
                  <span className="text-4xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass glow-hover group hover:scale-105 transition-all duration-300 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Skills Mastered</CardTitle>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Target className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400">{skillStats.mastered}</div>
            <p className="text-xs text-green-400/70 flex items-center mt-1">
              <span className="mr-1 text-base">🚀</span>
              +2 from last week
            </p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover group hover:scale-105 transition-all duration-300 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Zap className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-400">{skillStats.inProgress}</div>
            <p className="text-xs text-yellow-400/70">Active learning paths</p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover group hover:scale-105 transition-all duration-300 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Recommended</CardTitle>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-400">{skillStats.recommended}</div>
            <p className="text-xs text-purple-400/70">AI suggestions</p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover group hover:scale-105 transition-all duration-300 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Analyzed</CardTitle>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-400">{skillStats.totalAnalyzed}</div>
            <p className="text-xs text-blue-400/70">Skills in database</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your latest skill development progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl glass-hover group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold text-foreground">{activity.skill}</span>
                      {getStatusBadge(activity.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary mb-2">{activity.level}%</div>
                  <div className="w-24">
                    <Progress value={activity.level} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Goals */}
        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <Target className="h-4 w-4 text-white" />
              </div>
              Weekly Goals
            </CardTitle>
            <CardDescription>
              Track your learning milestones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="p-4 rounded-xl glass-hover group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{goal.emoji}</span>
                    <span className="font-semibold text-sm">{goal.goal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {goal.deadline}
                    </Badge>
                    <span className={`text-xs font-medium ${getGoalStatusColor(goal.status)}`}>
                      {goal.status === 'on-track' ? '🔥 On Track' : 
                       goal.status === 'ahead' ? '🚀 Ahead' : '⚠️ Behind'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={goal.progress} className="flex-1 h-3" />
                  <span className="text-sm font-bold text-primary">{goal.progress}%</span>
                </div>
              </div>
            ))}
            <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl glow-hover"
              onClick={handleViewGoals}
            >
              <Target className="mr-2 h-4 w-4" />
              View All Goals
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Tip Section */}
      <Card className="glass border-border/50 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center animate-pulse-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            This Week's AI Tip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                Focus on building projects that combine your React skills with Python backend development. 
                This will create a powerful full-stack profile that's highly sought after in the current job market.
              </p>
              <Button variant="outline" className="mt-4 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            Quick Actions
          </CardTitle>
          <CardDescription>
            Jump into your skill development journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button className="h-24 flex-col gap-3 bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl glow-hover group"
              onClick={handleAddNewSkills}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">📝</span>
              <span>Add New Skills</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-3 border-border/50 glass-hover group hover:border-purple-500/50 hover:text-purple-400 rounded-xl"
              onClick={handleSetCareerGoal}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">🎯</span>
              <span>Set Career Goal</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-3 border-border/50 glass-hover group hover:border-green-500/50 hover:text-green-400 rounded-xl">
              <span className="text-3xl group-hover:scale-110 transition-transform">🧠</span>
              <span>AI Analysis</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
