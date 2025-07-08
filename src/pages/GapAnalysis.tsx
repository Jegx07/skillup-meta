
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, TrendingUp, Target, AlertCircle, Download, Zap, Star, Trophy } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

const GapAnalysis = () => {
  // Sample data for charts
  const radarData = [
    { skill: 'JavaScript', current: 65, required: 90 },
    { skill: 'React', current: 45, required: 85 },
    { skill: 'Node.js', current: 30, required: 75 },
    { skill: 'Database', current: 70, required: 80 },
    { skill: 'Cloud', current: 25, required: 70 },
    { skill: 'DevOps', current: 35, required: 65 },
  ];

  const barData = [
    { name: 'JavaScript Frameworks', current: 30, required: 100, gap: 70 },
    { name: 'Cloud Computing', current: 55, required: 100, gap: 45 },
    { name: 'Data Analysis', current: 80, required: 100, gap: 20 },
    { name: 'Machine Learning', current: 15, required: 100, gap: 85 },
  ];

  const skillDistribution = [
    { name: 'Proficient', value: 35, color: '#00ffae' },
    { name: 'Intermediate', value: 25, color: '#00bfff' },
    { name: 'Beginner', value: 40, color: '#ff4c4c' },
  ];

  const prioritySkills = [
    {
      name: 'React.js',
      priority: 'High',
      gap: 70,
      timeToLearn: '3-4 months',
      aiTip: 'Focus on hooks and state management',
      icon: <Zap className="w-5 h-5" />,
      color: 'destructive'
    },
    {
      name: 'AWS Certification',
      priority: 'Medium',
      gap: 45,
      timeToLearn: '2-3 months',
      aiTip: 'Start with EC2 and S3 fundamentals',
      icon: <Star className="w-5 h-5" />,
      color: 'yellow'
    },
    {
      name: 'Machine Learning',
      priority: 'Low',
      gap: 20,
      timeToLearn: '1-2 months',
      aiTip: 'Python basics will accelerate learning',
      icon: <Trophy className="w-5 h-5" />,
      color: 'green'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="glass p-8 rounded-2xl border border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-chrome/10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-black bg-gradient-to-r from-white via-chrome to-primary bg-clip-text text-transparent mb-3">
            AI-Powered Skill Gap Analysis
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Advanced analytics reveal your skill gaps and provide personalized learning pathways to accelerate your career growth.
          </p>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass glow-hover border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overall Skill Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-primary mb-2">72/100</div>
            <Progress value={72} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover border-yellow-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Critical Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-yellow-500 mb-2">4</div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-1 bg-yellow-500 rounded-full"></div>
              ))}
              <div className="w-6 h-1 bg-muted rounded-full"></div>
            </div>
            <p className="text-xs text-muted-foreground">High priority skills needed</p>
          </CardContent>
        </Card>

        <Card className="glass glow-hover border-green-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Est. Learning Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-green-500 mb-2">6mo</div>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: '33%' }}></div>
            </div>
            <p className="text-xs text-muted-foreground">To reach target proficiency</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Skill Coverage Analysis
            </CardTitle>
            <CardDescription>
              Current vs Required skill levels across key competencies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: '#888', fontSize: 12 }} />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: '#888', fontSize: 10 }}
                    tickCount={5}
                  />
                  <Radar
                    name="Required"
                    dataKey="required"
                    stroke="#00bfff"
                    fill="#00bfff"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Current"
                    dataKey="current"
                    stroke="#00ffae"
                    fill="#00ffae"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00ffae] rounded-full"></div>
                <span className="text-sm text-muted-foreground">Current Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00bfff] rounded-full"></div>
                <span className="text-sm text-muted-foreground">Required Level</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skill Distribution Pie Chart */}
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Skill Proficiency Distribution
            </CardTitle>
            <CardDescription>
              Breakdown of your current skill mastery levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #333',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {skillDistribution.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{item.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gap Analysis Bar Chart */}
      <Card className="glass glow-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Detailed Gap Analysis
          </CardTitle>
          <CardDescription>
            Skill-by-skill breakdown showing current proficiency vs market requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fill: '#888', fontSize: 12 }}
                />
                <YAxis tick={{ fill: '#888', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="current" fill="#00ffae" name="Current Level" />
                <Bar dataKey="gap" fill="#ff4c4c" name="Gap to Close" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Priority Skills Section */}
      <Card className="glass glow-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Priority Learning Path
          </CardTitle>
          <CardDescription>
            AI-recommended skills to focus on for maximum career impact
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {prioritySkills.map((skill, index) => (
            <div key={index} className="glass rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg glass ${
                    skill.color === 'destructive' ? 'text-destructive' :
                    skill.color === 'yellow' ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <Badge variant={skill.color === 'destructive' ? 'destructive' : 'secondary'}>
                        {skill.priority} Priority
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{skill.aiTip}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Gap: {skill.gap}%</span>
                      <span>•</span>
                      <span>Est. Time: {skill.timeToLearn}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    skill.color === 'destructive' ? 'text-destructive' :
                    skill.color === 'yellow' ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {skill.gap}%
                  </div>
                  <div className="text-xs text-muted-foreground">Gap</div>
                </div>
              </div>
              <div className="mt-3">
                <Progress 
                  value={100 - skill.gap} 
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 glow-hover h-12 text-base font-semibold">
          <Download className="w-5 h-5 mr-2" />
          Generate Detailed Report
        </Button>
        <Button variant="outline" className="flex-1 glass glass-hover h-12 text-base font-semibold">
          <Brain className="w-5 h-5 mr-2" />
          View Learning Recommendations
        </Button>
      </div>
    </div>
  );
};

export default GapAnalysis;
