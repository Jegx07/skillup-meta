import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, TrendingUp, Target, Download, Zap, Star, Trophy } from 'lucide-react';
import { useUserSkills } from '../components/skills/UserSkillsContext';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const COLORS = ['#00ffae', '#00bfff', '#ff4c4c'];

const GapAnalysis = () => {
  const { skills: userSkills } = useUserSkills();
  const navigate = useNavigate();

  // Fallback if no user skills are present
  const defaultSkills = [
    { skill: 'JavaScript', level: 65 },
    { skill: 'React', level: 45 },
    { skill: 'Node.js', level: 30 },
    { skill: 'Database', level: 70 },
    { skill: 'Cloud', level: 25 },
    { skill: 'DevOps', level: 35 },
  ];
  const userSkillsData = userSkills.length > 0 ? userSkills : defaultSkills;
  const requiredSkills = [
    { skill: 'JavaScript', required: 90 },
    { skill: 'React', required: 85 },
    { skill: 'Node.js', required: 75 },
    { skill: 'Database', required: 80 },
    { skill: 'Cloud', required: 70 },
    { skill: 'DevOps', required: 65 },
  ];

  // Calculate gaps and prepare data for charts
  const radarData = userSkillsData.map(userSkill => {
    const req = requiredSkills.find(r => r.skill === userSkill.skill);
    return {
      skill: userSkill.skill,
      Current: userSkill.level,
      Required: req ? req.required : 80,
      Gap: req ? req.required - userSkill.level : 0,
    };
  });

  const barData = radarData.map(row => ({
    skill: row.skill,
    Current: row.Current,
    Gap: row.Gap,
    Required: row.Required,
  }));

  // Pie chart: Skill proficiency distribution
  const skillDistribution = [
    { name: 'Proficient', value: userSkillsData.filter(s => s.level >= 70).length },
    { name: 'Intermediate', value: userSkillsData.filter(s => s.level >= 40 && s.level < 70).length },
    { name: 'Beginner', value: userSkillsData.filter(s => s.level < 40).length },
  ];

  // Compact Priority Skills
  const prioritySkills = [
    {
      name: 'React.js',
      priority: 'High',
      gap: 70,
      timeToLearn: '3-4 months',
      aiTip: 'Focus on hooks and state management',
      icon: <Zap className="w-5 h-5" />, color: 'destructive'
    },
    {
      name: 'AWS Certification',
      priority: 'Medium',
      gap: 45,
      timeToLearn: '2-3 months',
      aiTip: 'Start with EC2 and S3 fundamentals',
      icon: <Star className="w-5 h-5" />, color: 'yellow'
    },
    {
      name: 'Machine Learning',
      priority: 'Low',
      gap: 20,
      timeToLearn: '1-2 months',
      aiTip: 'Python basics will accelerate learning',
      icon: <Trophy className="w-5 h-5" />, color: 'green'
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
            <div className="text-3xl font-black text-primary mb-2">{Math.round((userSkillsData.reduce((a, b) => a + b.level, 0) / userSkillsData.length) || 0)}/100</div>
            <Progress value={Math.round((userSkillsData.reduce((a, b) => a + b.level, 0) / userSkillsData.length) || 0)} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass glow-hover border-yellow-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Critical Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-yellow-500 mb-2">{radarData.filter(s => s.Gap > 30).length}</div>
            <div className="flex gap-1 mb-2">
              {[...Array(radarData.filter(s => s.Gap > 30).length)].map((_, i) => (
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
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Radar Chart */}
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Skill Coverage (Radar)
            </CardTitle>
            <CardDescription>
              Current vs Required skill levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius={90}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: '#888', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#888', fontSize: 10 }} tickCount={5} />
                  <Radar name="Required" dataKey="Required" stroke="#00bfff" fill="#00bfff" fillOpacity={0.1} strokeWidth={2} />
                  <Radar name="Current" dataKey="Current" stroke="#00ffae" fill="#00ffae" fillOpacity={0.2} strokeWidth={2} />
                  <Legend />
                  <RechartsTooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        {/* Bar Chart */}
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Gap by Skill (Bar)
            </CardTitle>
            <CardDescription>
              Current, Required, and Gap per skill
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="skill" tick={{ fill: '#888', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#888', fontSize: 12 }} />
                  <RechartsTooltip />
                  <Legend />
                  <Bar dataKey="Current" fill="#00ffae" name="Current Level" />
                  <Bar dataKey="Gap" fill="#ff4c4c" name="Gap to Close" />
                  <Bar dataKey="Required" fill="#00bfff" name="Required Level" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        {/* Pie Chart */}
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Skill Proficiency (Pie)
            </CardTitle>
            <CardDescription>
              Distribution of your skill mastery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72 flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Priority Skills Section - Compact Cards */}
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
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prioritySkills.map((skill, index) => (
              <div key={index} className="glass rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className={`p-2 rounded-lg glass mb-2 ${
                  skill.color === 'destructive' ? 'text-destructive' :
                  skill.color === 'yellow' ? 'text-yellow-500' : 'text-green-500'
                }`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <Badge variant={skill.color === 'destructive' ? 'destructive' : 'secondary'} className="mb-1">
                  {skill.priority} Priority
                </Badge>
                <p className="text-xs text-muted-foreground mb-2">{skill.aiTip}</p>
                <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  <span>Gap: <span className="font-bold">{skill.gap}%</span></span>
                  <span>Est. Time: <span className="font-bold">{skill.timeToLearn}</span></span>
                </div>
                <Progress value={100 - skill.gap} className="h-2 mt-2 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gap Analysis Table */}
      <Card className="glass glow-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Detailed Gap Analysis Table
          </CardTitle>
          <CardDescription>
            Skill-by-skill breakdown showing current proficiency vs market requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-muted/30">
                  <th className="px-4 py-2 font-semibold">Skill</th>
                  <th className="px-4 py-2 font-semibold">Current Level</th>
                  <th className="px-4 py-2 font-semibold">Required Level</th>
                  <th className="px-4 py-2 font-semibold">Gap</th>
                </tr>
              </thead>
              <tbody>
                {radarData.map((row, idx) => (
                  <tr key={row.skill} className={idx % 2 === 0 ? 'bg-background' : 'bg-muted/10'}>
                    <td className="px-4 py-2 font-medium">{row.skill}</td>
                    <td className="px-4 py-2">{row.Current}%</td>
                    <td className="px-4 py-2">{row.Required}%</td>
                    <td className={`px-4 py-2 font-bold ${row.Gap > 30 ? 'text-destructive' : row.Gap > 15 ? 'text-yellow-500' : 'text-green-500'}`}>{row.Gap}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 glow-hover h-12 text-base font-semibold">
          <Download className="w-5 h-5 mr-2" />
          Generate Detailed Report
        </Button>
        <Button variant="outline" className="flex-1 glass glass-hover h-12 text-base font-semibold" onClick={() => navigate('/recommendations')}>
          <Brain className="w-5 h-5 mr-2" />
          View Learning Recommendations
        </Button>
      </div>
    </div>
  );
};

export default GapAnalysis;
