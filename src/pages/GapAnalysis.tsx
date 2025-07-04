
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, Target, AlertCircle } from 'lucide-react';

const GapAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent mb-2">
          Skill Gap Analysis
        </h1>
        <p className="text-muted-foreground">
          AI-powered analysis of your skill gaps and improvement opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              AI Analysis Results
            </CardTitle>
            <CardDescription>
              Based on your current skills and career goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 glass rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">JavaScript Frameworks</span>
                <span className="text-sm text-destructive font-medium">70% Gap</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="p-4 glass rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Cloud Computing</span>
                <span className="text-sm text-yellow-500 font-medium">45% Gap</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="p-4 glass rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Data Analysis</span>
                <span className="text-sm text-green-500 font-medium">20% Gap</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <Button className="w-full glow-hover">
              <TrendingUp className="w-4 h-4 mr-2" />
              Generate Detailed Report
            </Button>
          </CardContent>
        </Card>

        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Priority Skills
            </CardTitle>
            <CardDescription>
              Skills to focus on for maximum career impact
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 glass rounded-lg">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <div>
                  <div className="font-medium">React.js</div>
                  <div className="text-sm text-muted-foreground">High Priority</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="font-medium">AWS Certification</div>
                  <div className="text-sm text-muted-foreground">Medium Priority</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass rounded-lg">
                <AlertCircle className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-medium">Machine Learning</div>
                  <div className="text-sm text-muted-foreground">Low Priority</div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full glass glass-hover">
              View All Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GapAnalysis;
