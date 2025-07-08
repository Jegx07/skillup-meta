
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Play, Star, Clock, ExternalLink, Filter, Sparkles, Award } from 'lucide-react';

const Recommendations = () => {
  const [platformFilter, setPlatformFilter] = useState('all');
  const [skillFilter, setSkillFilter] = useState('all');
  const [costFilter, setCostFilter] = useState('all');

  const courses = [
    {
      title: "Complete React Developer Course",
      provider: "Udemy",
      rating: 4.8,
      duration: "40 hours",
      price: "$89.99",
      originalPrice: "$199.99",
      skills: ["React", "JavaScript", "Redux"],
      image: "📚",
      recommended: true,
      difficulty: "Intermediate"
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "AWS Training",
      rating: 4.9,
      duration: "20 hours",
      price: "Free",
      originalPrice: null,
      skills: ["AWS", "Cloud Computing", "DevOps"],
      image: "☁️",
      recommended: true,
      difficulty: "Beginner"
    },
    {
      title: "Python for Data Science",
      provider: "Coursera",
      rating: 4.7,
      duration: "60 hours",
      price: "$49/month",
      originalPrice: null,
      skills: ["Python", "Data Analysis", "Machine Learning"],
      image: "🐍",
      recommended: false,
      difficulty: "Advanced"
    },
    {
      title: "Full-Stack JavaScript",
      provider: "Udemy",
      rating: 4.6,
      duration: "35 hours",
      price: "$79.99",
      originalPrice: "$159.99",
      skills: ["JavaScript", "Node.js", "MongoDB"],
      image: "💻",
      recommended: true,
      difficulty: "Intermediate"
    },
    {
      title: "UI/UX Design Masterclass",
      provider: "Coursera",
      rating: 4.8,
      duration: "25 hours",
      price: "$39/month",
      originalPrice: null,
      skills: ["Design", "Figma", "User Research"],
      image: "🎨",
      recommended: false,
      difficulty: "Beginner"
    },
    {
      title: "Cybersecurity Fundamentals",
      provider: "edX",
      rating: 4.5,
      duration: "30 hours",
      price: "Free",
      originalPrice: null,
      skills: ["Security", "Networking", "Ethical Hacking"],
      image: "🔒",
      recommended: true,
      difficulty: "Intermediate"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const platformMatch = platformFilter === 'all' || course.provider.toLowerCase() === platformFilter;
    const skillMatch = skillFilter === 'all' || course.skills.some(skill => skill.toLowerCase().includes(skillFilter));
    const costMatch = costFilter === 'all' || 
      (costFilter === 'free' && course.price === 'Free') ||
      (costFilter === 'paid' && course.price !== 'Free');
    
    return platformMatch && skillMatch && costMatch;
  });

  const getProviderIcon = (provider: string) => {
    switch (provider.toLowerCase()) {
      case 'udemy': return '🎓';
      case 'coursera': return '📖';
      case 'aws training': return '☁️';
      case 'edx': return '🏛️';
      default: return '📚';
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider.toLowerCase()) {
      case 'udemy': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'coursera': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'aws training': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'edx': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="glass p-8 rounded-2xl border border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chrome/5"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 chrome-gradient rounded-xl flex items-center justify-center shadow-lg border border-primary/20">
              <Sparkles className="w-6 h-6 text-background" />
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-white via-chrome to-primary bg-clip-text text-transparent">
                Personalized Recommendations
              </h1>
              <p className="text-muted-foreground text-lg mt-1">
                AI-curated learning paths tailored to your skill gaps and career goals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="glass p-6 rounded-2xl border border-border/50">
        <div className="flex items-center gap-4 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Filter Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Platform</label>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger className="glass glass-hover">
                <SelectValue placeholder="All platforms" />
              </SelectTrigger>
              <SelectContent className="glass border border-border/50">
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="udemy">Udemy</SelectItem>
                <SelectItem value="coursera">Coursera</SelectItem>
                <SelectItem value="aws training">AWS Training</SelectItem>
                <SelectItem value="edx">edX</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Skill</label>
            <Select value={skillFilter} onValueChange={setSkillFilter}>
              <SelectTrigger className="glass glass-hover">
                <SelectValue placeholder="All skills" />
              </SelectTrigger>
              <SelectContent className="glass border border-border/50">
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="aws">AWS</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Cost</label>
            <Select value={costFilter} onValueChange={setCostFilter}>
              <SelectTrigger className="glass glass-hover">
                <SelectValue placeholder="All costs" />
              </SelectTrigger>
              <SelectContent className="glass border border-border/50">
                <SelectItem value="all">All Costs</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, index) => (
          <Card key={index} className="glass glow-hover group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
            {course.recommended && (
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-gradient-to-r from-primary to-chrome text-background font-bold shadow-lg">
                  <Award className="w-3 h-3 mr-1" />
                  AI Pick
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chrome/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {course.image}
                </div>
                <Badge className={`glass border ${getProviderColor(course.provider)} font-medium`}>
                  <span className="mr-1">{getProviderIcon(course.provider)}</span>
                  {course.provider}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                {course.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-4 text-sm mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {course.difficulty}
                </Badge>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs glass border-primary/30 hover:bg-primary/20 transition-colors duration-200">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent">
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                  {course.originalPrice && (
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                      Save {Math.round((1 - parseFloat(course.price.replace('$', '')) / parseFloat(course.originalPrice.replace('$', ''))) * 100)}%
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="glass glass-hover group/btn">
                    <Play className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                    Preview
                  </Button>
                  <Button size="sm" className="glow-hover bg-gradient-to-r from-primary to-chrome group/btn">
                    <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                    Enroll
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Path Section */}
      <Card className="glass border border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chrome/5"></div>
        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 chrome-gradient rounded-xl flex items-center justify-center shadow-lg border border-primary/20">
              <BookOpen className="w-5 h-5 text-background" />
            </div>
            Learning Path Suggestions
          </CardTitle>
          <CardDescription className="text-lg">
            Structured learning journeys for your career goals
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="space-y-6">
            <div className="p-6 glass rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">Full-Stack Developer Path</h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/20 text-primary border-primary/30">6 months</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Recommended
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Complete roadmap from frontend to backend development with hands-on projects
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-xs glass border-primary/30">HTML/CSS</Badge>
                <Badge variant="outline" className="text-xs glass border-primary/30">JavaScript</Badge>
                <Badge variant="outline" className="text-xs glass border-primary/30">React</Badge>
                <Badge variant="outline" className="text-xs glass border-primary/30">Node.js</Badge>
                <Badge variant="outline" className="text-xs glass border-primary/30">Database</Badge>
                <Badge variant="outline" className="text-xs glass border-primary/30">DevOps</Badge>
              </div>
              <Button className="w-full glow-hover bg-gradient-to-r from-primary to-chrome text-lg py-6 group/btn">
                <BookOpen className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                Start Learning Path
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;
