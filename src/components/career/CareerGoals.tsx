
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Target, Briefcase, Building, Calendar, X } from 'lucide-react';
import CareerPathVisualization from './CareerPathVisualization';
import { useToast } from '@/hooks/use-toast';

const CareerGoals = () => {
  const [targetRole, setTargetRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [companies, setCompanies] = useState<string[]>([]);
  const [newCompany, setNewCompany] = useState('');
  const [timeline, setTimeline] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [showVisualization, setShowVisualization] = useState(false);
  const { toast } = useToast();

  // Sample career path data
  const sampleSteps = [
    {
      id: '1',
      title: 'Foundation Skills',
      description: 'Build core programming and development skills',
      skills: ['JavaScript', 'HTML/CSS', 'Git', 'Problem Solving'],
      certifications: [
        { name: 'JavaScript Fundamentals', provider: 'Coursera', link: '#' },
        { name: 'Git Version Control', provider: 'Udemy', link: '#' }
      ],
      timeframe: '3-4 months',
      difficulty: 'Beginner' as const,
      progress: 85,
      status: 'completed' as const
    },
    {
      id: '2',
      title: 'Frontend Development',
      description: 'Master modern frontend frameworks and tools',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
      certifications: [
        { name: 'React Developer Certification', provider: 'Meta', link: '#' },
        { name: 'TypeScript Fundamentals', provider: 'Microsoft', link: '#' }
      ],
      timeframe: '4-6 months',
      difficulty: 'Intermediate' as const,
      progress: 65,
      status: 'current' as const
    },
    {
      id: '3',
      title: 'Full Stack Development',
      description: 'Learn backend technologies and database management',
      skills: ['Node.js', 'Express', 'MongoDB', 'API Design', 'Authentication'],
      certifications: [
        { name: 'Node.js Certification', provider: 'OpenJS Foundation', link: '#' },
        { name: 'MongoDB Developer', provider: 'MongoDB University', link: '#' }
      ],
      timeframe: '5-7 months',
      difficulty: 'Advanced' as const,
      progress: 0,
      status: 'upcoming' as const
    },
    {
      id: '4',
      title: 'Senior Developer Skills',
      description: 'Advanced architecture, team leadership, and system design',
      skills: ['System Design', 'Team Leadership', 'Code Review', 'Mentoring', 'DevOps'],
      certifications: [
        { name: 'AWS Solutions Architect', provider: 'Amazon', link: '#' },
        { name: 'Technical Leadership', provider: 'LinkedIn Learning', link: '#' }
      ],
      timeframe: '8-12 months',
      difficulty: 'Advanced' as const,
      progress: 0,
      status: 'upcoming' as const
    }
  ];

  const addCompany = () => {
    if (newCompany.trim() && !companies.includes(newCompany.trim())) {
      setCompanies([...companies, newCompany.trim()]);
      setNewCompany('');
    }
  };

  const removeCompany = (companyToRemove: string) => {
    setCompanies(companies.filter(company => company !== companyToRemove));
  };

  const handleGeneratePath = () => {
    if (!targetRole || !industry) {
      toast({
        title: "Missing Information",
        description: "Please fill in your target role and industry first.",
        variant: "destructive"
      });
      return;
    }

    setShowVisualization(true);
    toast({
      title: "Career Path Generated",
      description: "Your personalized career roadmap has been created!",
    });
  };

  return (
    <div className="space-y-8">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent mb-2">
          Career Goals & Planning
        </h1>
        <p className="text-muted-foreground">
          Define your career aspirations and get a personalized roadmap to success
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Goal Definition
            </CardTitle>
            <CardDescription>
              Tell us about your dream career path
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="target-role">Target Role</Label>
              <Input
                id="target-role"
                placeholder="e.g., Senior Full Stack Developer"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="glass"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="Select your target industry" />
                </SelectTrigger>
                <SelectContent className="glass backdrop-blur-xl border border-border/50">
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Desired Timeline</Label>
              <Select value={timeline} onValueChange={setTimeline}>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="When do you want to achieve this?" />
                </SelectTrigger>
                <SelectContent className="glass backdrop-blur-xl border border-border/50">
                  <SelectItem value="6months">6 months</SelectItem>
                  <SelectItem value="1year">1 year</SelectItem>
                  <SelectItem value="2years">2 years</SelectItem>
                  <SelectItem value="3years">3+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Dream Companies</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a company"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCompany()}
                  className="glass"
                />
                <Button onClick={addCompany} className="glow-hover">
                  Add
                </Button>
              </div>
              {companies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {companies.map((company, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 flex items-center gap-2 glass"
                    >
                      <Building className="w-3 h-3" />
                      {company}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() => removeCompany(company)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea
                id="additional-info"
                placeholder="Any specific requirements, preferences, or constraints..."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="glass min-h-[80px]"
              />
            </div>

            <Button 
              onClick={handleGeneratePath}
              className="w-full glow-hover bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              Generate Career Path
            </Button>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Current Status
            </CardTitle>
            <CardDescription>
              Overview of your career planning progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 glass rounded-lg">
                <span className="text-sm">Target Role</span>
                <span className="font-semibold">{targetRole || 'Not set'}</span>
              </div>
              <div className="flex items-center justify-between p-3 glass rounded-lg">
                <span className="text-sm">Industry</span>
                <span className="font-semibold">{industry || 'Not selected'}</span>
              </div>
              <div className="flex items-center justify-between p-3 glass rounded-lg">
                <span className="text-sm">Timeline</span>
                <span className="font-semibold">{timeline || 'Not specified'}</span>
              </div>
              <div className="flex items-center justify-between p-3 glass rounded-lg">
                <span className="text-sm">Dream Companies</span>
                <span className="font-semibold">{companies.length} added</span>
              </div>
            </div>

            {targetRole && industry && (
              <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-400 mb-2">Ready to Generate!</h4>
                <p className="text-sm text-muted-foreground">
                  You've provided enough information to create your personalized career roadmap.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {showVisualization && targetRole && industry && (
        <CareerPathVisualization
          targetRole={targetRole}
          industry={industry}
          steps={sampleSteps}
        />
      )}
    </div>
  );
};

export default CareerGoals;
