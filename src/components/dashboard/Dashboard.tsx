
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const skillStats = {
    mastered: 12,
    inProgress: 8,
    recommended: 15,
    totalAnalyzed: 35
  };

  const recentActivity = [
    { skill: 'React.js', action: 'Completed', time: '2 hours ago', level: 85 },
    { skill: 'Python', action: 'In Progress', time: '1 day ago', level: 65 },
    { skill: 'Data Analysis', action: 'Started', time: '3 days ago', level: 25 },
    { skill: 'Machine Learning', action: 'Recommended', time: '5 days ago', level: 0 },
  ];

  const weeklyGoals = [
    { goal: 'Complete TypeScript Course', progress: 75, deadline: '2 days left' },
    { goal: 'Practice Algorithm Problems', progress: 40, deadline: '5 days left' },
    { goal: 'Build Portfolio Project', progress: 90, deadline: '1 day left' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="glass p-6 rounded-2xl border border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent">
              Welcome back, John! 👋
            </h1>
            <p className="text-muted-foreground mt-2">
              Ready to level up your skills today? Let's analyze your progress.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 chrome-gradient rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass glow-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Mastered</CardTitle>
            <span className="text-2xl">🎯</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{skillStats.mastered}</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <span className="text-2xl">⚡</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{skillStats.inProgress}</div>
            <p className="text-xs text-muted-foreground">Active learning paths</p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recommended</CardTitle>
            <span className="text-2xl">💡</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{skillStats.recommended}</div>
            <p className="text-xs text-muted-foreground">AI suggestions</p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Analyzed</CardTitle>
            <span className="text-2xl">📊</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{skillStats.totalAnalyzed}</div>
            <p className="text-xs text-muted-foreground">Skills in database</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>📈</span>
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your latest skill development progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg glass-hover">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{activity.skill}</span>
                    <Badge variant={activity.action === 'Completed' ? 'default' : 'secondary'}>
                      {activity.action}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{activity.level}%</div>
                  <Progress value={activity.level} className="w-20 h-2 mt-1" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Goals */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🎯</span>
              Weekly Goals
            </CardTitle>
            <CardDescription>
              Track your learning milestones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="p-3 rounded-lg glass-hover">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{goal.goal}</span>
                  <span className="text-xs text-muted-foreground">{goal.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={goal.progress} className="flex-1 h-2" />
                  <span className="text-xs font-medium">{goal.progress}%</span>
                </div>
              </div>
            ))}
            <Button className="w-full mt-4 glow-hover">
              View All Goals
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>⚡</span>
            Quick Actions
          </CardTitle>
          <CardDescription>
            Jump into your skill development journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col glow-hover metallic-gradient text-white">
              <span className="text-2xl mb-1">📝</span>
              Add New Skills
            </Button>
            <Button className="h-20 flex-col glow-hover" variant="outline">
              <span className="text-2xl mb-1">🎯</span>
              Set Career Goal
            </Button>
            <Button className="h-20 flex-col glow-hover" variant="outline">
              <span className="text-2xl mb-1">🧠</span>
              AI Analysis
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
