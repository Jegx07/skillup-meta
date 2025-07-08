
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, Star, ExternalLink, Target, TrendingUp } from 'lucide-react';

interface CareerStep {
  id: string;
  title: string;
  description: string;
  skills: string[];
  certifications: { name: string; provider: string; link: string }[];
  timeframe: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  status: 'completed' | 'current' | 'upcoming';
}

interface CareerPathVisualizationProps {
  targetRole: string;
  industry: string;
  steps: CareerStep[];
}

const CareerPathVisualization: React.FC<CareerPathVisualizationProps> = ({
  targetRole,
  industry,
  steps
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'current':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'upcoming':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 chrome-gradient rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-background" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Career Path to {targetRole}
            </h2>
            <p className="text-muted-foreground">in {industry}</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex gap-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 glass ${getStatusColor(step.status)} border z-10`}>
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              
              <Card className="flex-1 glass glow-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="mt-1">{step.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getDifficultyColor(step.difficulty)}>
                        {step.difficulty}
                      </Badge>
                      <Badge variant="outline" className="glass">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.timeframe}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {step.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{step.progress}%</span>
                      </div>
                      <Progress value={step.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Required Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="glass">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {step.certifications.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Recommended Certifications
                        </h4>
                        <div className="space-y-2">
                          {step.certifications.map(cert => (
                            <div key={cert.name} className="flex items-center justify-between p-3 glass rounded-lg">
                              <div>
                                <div className="font-medium">{cert.name}</div>
                                <div className="text-sm text-muted-foreground">{cert.provider}</div>
                              </div>
                              <Button variant="outline" size="sm" className="glass glass-hover" asChild>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPathVisualization;
