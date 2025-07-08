
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Target, TrendingUp, Star } from 'lucide-react';

const CareerGoals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const careerPaths = [
    {
      id: 'frontend-dev',
      title: 'Frontend Developer',
      description: 'Build user interfaces and web experiences',
      demand: 'High',
      avgSalary: '$75,000 - $120,000',
      skills: ['React', 'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Redux'],
      icon: '💻'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Analyze data to extract business insights',
      demand: 'Very High',
      avgSalary: '$95,000 - $150,000',
      skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'Pandas'],
      icon: '📊'
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      description: 'Lead product strategy and development',
      demand: 'High',
      avgSalary: '$85,000 - $140,000',
      skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile', 'Communication'],
      icon: '🎯'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      description: 'Bridge development and operations teams',
      demand: 'Very High',
      avgSalary: '$90,000 - $160,000',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Terraform'],
      icon: '⚙️'
    },
    {
      id: 'ux-designer',
      title: 'UX Designer',
      description: 'Design user-centered digital experiences',
      demand: 'High',
      avgSalary: '$70,000 - $115,000',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
      icon: '🎨'
    },
    {
      id: 'full-stack-dev',
      title: 'Full Stack Developer',
      description: 'Work on both frontend and backend systems',
      demand: 'Very High',
      avgSalary: '$80,000 - $130,000',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Git'],
      icon: '🚀'
    }
  ];

  const filteredCareers = careerPaths.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCareerData = careerPaths.find(career => career.id === selectedCareer);

  return (
    <div className="space-y-6">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent mb-2">
          Career Goal Selector
        </h1>
        <p className="text-muted-foreground">
          Choose your target career path and discover the skills you need to succeed
        </p>
      </div>

      {/* Search */}
      <Card className="glass">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search career paths..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Career Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Target className="w-5 h-5" />
            Available Career Paths
          </h2>
          <div className="space-y-3">
            {filteredCareers.map((career) => (
              <Card
                key={career.id}
                className={`glass cursor-pointer transition-all duration-200 ${
                  selectedCareer === career.id
                    ? 'border-primary/50 glow'
                    : 'glass-hover'
                }`}
                onClick={() => setSelectedCareer(career.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{career.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold">{career.title}</h3>
                        <Badge variant={career.demand === 'Very High' ? 'default' : 'secondary'}>
                          {career.demand} Demand
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {career.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {career.avgSalary}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Career Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Star className="w-5 h-5" />
            Career Details
          </h2>
          
          {selectedCareerData ? (
            <Card className="glass glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{selectedCareerData.icon}</span>
                  {selectedCareerData.title}
                </CardTitle>
                <CardDescription>{selectedCareerData.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Market Demand</p>
                    <p className="font-semibold text-primary">{selectedCareerData.demand}</p>
                  </div>
                  <div className="glass p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Salary Range</p>
                    <p className="font-semibold text-primary text-sm">{selectedCareerData.avgSalary}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareerData.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="glass">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full glow-hover metallic-gradient text-white">
                  Set as Career Goal
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 chrome-gradient rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-semibold mb-2">Select a Career Path</h3>
                <p className="text-muted-foreground text-sm">
                  Choose a career from the list to see detailed requirements and set it as your goal
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Current Goal Status */}
      {selectedCareerData && (
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>📈</span>
              Your Progress Toward {selectedCareerData.title}
            </CardTitle>
            <CardDescription>
              Track your skill development journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-primary">65%</div>
                <p className="text-sm text-muted-foreground">Skills Match</p>
                <Progress value={65} className="mt-2" />
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-primary">4/6</div>
                <p className="text-sm text-muted-foreground">Skills Acquired</p>
                <Progress value={67} className="mt-2" />
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-primary">3mo</div>
                <p className="text-sm text-muted-foreground">Est. Time to Goal</p>
                <Progress value={33} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CareerGoals;
