
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillGapData {
  skill: string;
  current: number;
  required: number;
  priority: 'High' | 'Medium' | 'Low';
}

interface SkillGapRadarChartProps {
  data: SkillGapData[];
  targetRole: string;
}

const SkillGapRadarChart: React.FC<SkillGapRadarChartProps> = ({ data, targetRole }) => {
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

  const highPrioritySkills = data.filter(item => item.priority === 'High' && item.current < item.required);

  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
              <span className="text-sm">📊</span>
            </div>
            Skill Gap Analysis
          </CardTitle>
          <CardDescription>
            Analysis for {targetRole} role requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis 
                  dataKey="skill" 
                  tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }}
                />
                <Radar
                  name="Current Level"
                  dataKey="current"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Radar
                  name="Required Level"
                  dataKey="required"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.1}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Legend 
                  wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {highPrioritySkills.length > 0 && (
        <Card className="glass border-red-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-red-400">
              <span className="text-lg">🚨</span>
              High Priority Skills Gap
            </CardTitle>
            <CardDescription>
              Focus on these skills to close critical gaps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {highPrioritySkills.map(skill => (
                <div key={skill.skill} className="flex items-center justify-between p-4 glass rounded-lg border border-red-500/20">
                  <div className="space-y-1">
                    <div className="font-semibold">{skill.skill}</div>
                    <div className="text-sm text-muted-foreground">
                      Current: {skill.current}% | Required: {skill.required}%
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm font-bold text-red-400">
                        {skill.required - skill.current}% gap
                      </div>
                    </div>
                    <Badge className={getPriorityColor(skill.priority)}>
                      {skill.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SkillGapRadarChart;
