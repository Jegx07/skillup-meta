
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Star, Clock, ExternalLink } from 'lucide-react';

const Recommendations = () => {
  const courses = [
    {
      title: "Complete React Developer Course",
      provider: "Udemy",
      rating: 4.8,
      duration: "40 hours",
      price: "$89.99",
      skills: ["React", "JavaScript", "Redux"],
      image: "📚"
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "AWS Training",
      rating: 4.9,
      duration: "20 hours",
      price: "Free",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      image: "☁️"
    },
    {
      title: "Python for Data Science",
      provider: "Coursera",
      rating: 4.7,
      duration: "60 hours",
      price: "$49/month",
      skills: ["Python", "Data Analysis", "Machine Learning"],
      image: "🐍"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent mb-2">
          Personalized Recommendations
        </h1>
        <p className="text-muted-foreground">
          AI-curated learning paths tailored to your skill gaps and career goals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="glass glow-hover">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="text-4xl mb-2">{course.image}</div>
                <Badge variant="secondary" className="glass">
                  {course.provider}
                </Badge>
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">{course.price}</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="glass glass-hover">
                    <Play className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="glow-hover">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Enroll
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Learning Path Suggestions
          </CardTitle>
          <CardDescription>
            Structured learning journeys for your career goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 glass rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Full-Stack Developer Path</h3>
                <Badge className="bg-primary/20 text-primary">6 months</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Complete roadmap from frontend to backend development
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">HTML/CSS</Badge>
                <Badge variant="outline" className="text-xs">JavaScript</Badge>
                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">Node.js</Badge>
                <Badge variant="outline" className="text-xs">Database</Badge>
              </div>
            </div>
            <Button className="w-full glow-hover">
              Start Learning Path
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;
