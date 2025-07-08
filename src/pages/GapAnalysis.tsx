
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import SkillGapRadarChart from '../components/analysis/SkillGapRadarChart';

const GapAnalysis = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [analysisGenerated, setAnalysisGenerated] = useState(false);

  // Sample data for skill gap analysis
  const skillGapData = [
    { skill: 'JavaScript', current: 85, required: 90, priority: 'Medium' as const },
    { skill: 'React', current: 80, required: 95, priority: 'High' as const },
    { skill: 'Node.js', current: 60, required: 85, priority: 'High' as const },
    { skill: 'TypeScript', current: 70, required: 90, priority: 'High' as const },
    { skill: 'Database Design', current: 45, required: 80, priority: 'High' as const },
    { skill: 'System Design', current: 30, required: 75, priority: 'Medium' as const },
    { skill: 'DevOps', current: 40, required: 70, priority: 'Medium' as const },
    { skill: 'Testing', current: 55, required: 80, priority: 'High' as const },
  ];

  const recommendations = [
    {
      skill: 'React',
      gap: 15,
      priority: 'High',
      tools: ['React Documentation', 'Advanced React Patterns Course', 'React Testing Library'],
      timeEstimate: '2-3 months'
    },
    {
      skill: 'Node.js',
      gap: 25,
      priority: 'High',
      tools: ['Node.js Complete Guide', 'Express.js Mastery', 'API Design Patterns'],
      timeEstimate: '3-4 months'
    },
    {
      skill: 'Database Design',
      gap: 35,
      priority: 'High',
      tools: ['Database Design Course', 'SQL Mastery', 'MongoDB University'],
      timeEstimate: '4-5 months'
    }
  ];

  const handleGenerateAnalysis = () => {
    if (selectedRole) {
      setAnalysisGenerated(true);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-8">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent mb-2">
          AI-Powered Gap Analysis
        </h1>
        <p className="text-muted-foreground">
          Discover the skills gap between your current abilities and your dream role
        </p>
      </div>

      <Card className="glass glow-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Role Selection
          </CardTitle>
          <CardDescription>
            Choose a target role to analyze your skill gaps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Target Role</label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="Select your target role" />
                </SelectTrigger>
                <SelectContent className="glass backdrop-blur-xl border border-border/50">
                  <SelectItem value="senior-fullstack">Senior Full Stack Developer</SelectItem>
                  <SelectItem value="frontend-lead">Frontend Team Lead</SelectItem>
                  <SelectItem value="backend-architect">Backend Architect</SelectItem>
                  <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                  <SelectItem value="tech-lead">Technical Lead</SelectItem>
                  <SelectItem value="product-manager">Product Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleGenerateAnalysis}
                disabled={!selectedRole}
                className="w-full glow-hover bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Brain className="w-4 h-4 mr-2" />
                Generate Analysis
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {analysisGenerated && selectedRole && (
        <>
          <SkillGapRadarChart 
            data={skillGapData} 
            targetRole={selectedRole.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Skill Assessment Summary
                </CardTitle>
                <CardDescription>
                  Overview of your current skill levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillGapData.map((skill) => (
                    <div key={skill.skill} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.skill}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {skill.current}% / {skill.required}%
                          </span>
                          <Badge className={getPriorityColor(skill.priority)}>
                            {skill.priority}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <Progress value={skill.current} className="h-2" />
                        </div>
                        <div className="flex-1">
                          <Progress value={skill.required} className="h-2 opacity-50" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Smart Recommendations
                </CardTitle>
                <CardDescription>
                  Prioritized learning path to close skill gaps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={rec.skill} className="p-4 glass rounded-lg border border-border/50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{rec.skill}</h4>
                          <p className="text-sm text-muted-foreground">
                            {rec.gap}% skill gap • Est. {rec.timeEstimate}
                          </p>
                        </div>
                        <Badge className={getPriorityColor(rec.priority)}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Recommended Resources:</p>
                        <div className="flex flex-wrap gap-1">
                          {rec.tools.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant="outline" className="text-xs glass">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                Analysis Complete
              </CardTitle>
              <CardDescription>
                Your personalized skill development roadmap is ready
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-red-400">
                    {skillGapData.filter(s => s.priority === 'High').length}
                  </div>
                  <div className="text-sm text-muted-foreground">High Priority Skills</div>
                </div>
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">
                    {Math.round(skillGapData.reduce((acc, skill) => acc + (skill.required - skill.current), 0) / skillGapData.length)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Average Skill Gap</div>
                </div>
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-2xl font-bold text-green-400">6-8</div>
                  <div className="text-sm text-muted-foreground">Months to Target</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default GapAnalysis;
