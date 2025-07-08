
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bookmark, ExternalLink, Star, Clock, Filter, Search, Heart, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  rating: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  category: string;
  description: string;
  skills: string[];
  bookmarked: boolean;
  link: string;
}

const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showBookmarked, setShowBookmarked] = useState(false);
  const { toast } = useToast();

  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      title: 'Advanced React Patterns and Performance',
      provider: 'Coursera',
      duration: '8 weeks',
      rating: 4.8,
      level: 'Advanced',
      price: '$49/month',
      category: 'Frontend',
      description: 'Master advanced React patterns, hooks, and performance optimization techniques.',
      skills: ['React', 'Performance Optimization', 'Advanced Patterns'],
      bookmarked: false,
      link: '#'
    },
    {
      id: '2',
      title: 'Node.js Complete Developer Course',
      provider: 'Udemy',
      duration: '12 hours',
      rating: 4.7,
      level: 'Intermediate',
      price: '$89.99',
      category: 'Backend',
      description: 'Build real-world Node.js applications with Express, MongoDB, and authentication.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Authentication'],
      bookmarked: true,
      link: '#'
    },
    {
      id: '3',
      title: 'System Design Interview Preparation',
      provider: 'YouTube',
      duration: '6 hours',
      rating: 4.9,
      level: 'Advanced',
      price: 'Free',
      category: 'System Design',
      description: 'Comprehensive system design concepts for technical interviews.',
      skills: ['System Design', 'Architecture', 'Scalability'],
      bookmarked: false,
      link: '#'
    },
    {
      id: '4',
      title: 'TypeScript Fundamentals',
      provider: 'Pluralsight',
      duration: '4 weeks',
      rating: 4.6,
      level: 'Beginner',
      price: '$29/month',
      category: 'Frontend',
      description: 'Learn TypeScript from basics to advanced concepts with practical examples.',
      skills: ['TypeScript', 'JavaScript', 'Type Safety'],
      bookmarked: false,
      link: '#'
    },
    {
      id: '5',
      title: 'Database Design and Optimization',
      provider: 'edX',
      duration: '10 weeks',
      rating: 4.5,
      level: 'Intermediate',
      price: '$199',
      category: 'Database',
      description: 'Master database design principles and query optimization techniques.',
      skills: ['SQL', 'Database Design', 'Query Optimization'],
      bookmarked: true,
      link: '#'
    },
    {
      id: '6',
      title: 'DevOps Engineering Bootcamp',
      provider: 'Udemy',
      duration: '20 hours',
      rating: 4.7,
      level: 'Intermediate',
      price: '$129.99',
      category: 'DevOps',
      description: 'Complete DevOps pipeline with Docker, Kubernetes, and CI/CD.',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
      bookmarked: false,
      link: '#'
    }
  ]);

  const toggleBookmark = (courseId: string) => {
    setCourses(courses.map(course => 
      course.id === courseId 
        ? { ...course, bookmarked: !course.bookmarked }
        : course
    ));
    
    const course = courses.find(c => c.id === courseId);
    toast({
      title: course?.bookmarked ? "Removed from Bookmarks" : "Added to Bookmarks",
      description: course?.title,
    });
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLevel = !levelFilter || course.level === levelFilter;
    const matchesCategory = !categoryFilter || course.category === categoryFilter;
    const matchesBookmark = !showBookmarked || course.bookmarked;
    
    return matchesSearch && matchesLevel && matchesCategory && matchesBookmark;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
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

  const getProviderIcon = (provider: string) => {
    switch (provider.toLowerCase()) {
      case 'youtube':
        return '🎥';
      case 'coursera':
        return '🎓';
      case 'udemy':
        return '📚';
      case 'pluralsight':
        return '🔷';
      case 'edx':
        return '🏛️';
      default:
        return '📖';
    }
  };

  return (
    <div className="space-y-8">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent mb-2">
          Smart Learning Recommendations
        </h1>
        <p className="text-muted-foreground">
          Discover courses and resources tailored to your skill gaps and career goals
        </p>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter & Search
          </CardTitle>
          <CardDescription>
            Find the perfect learning resources for your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search courses or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass pl-10"
              />
            </div>
            
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="glass">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent className="glass backdrop-blur-xl border border-border/50">
                <SelectItem value="">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="glass">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="glass backdrop-blur-xl border border-border/50">
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Database">Database</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
                <SelectItem value="System Design">System Design</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant={showBookmarked ? "default" : "outline"}
              onClick={() => setShowBookmarked(!showBookmarked)}
              className="glass glass-hover"
            >
              <Heart className={`w-4 h-4 mr-2 ${showBookmarked ? 'fill-current' : ''}`} />
              Bookmarked
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="glass glow-hover group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getProviderIcon(course.provider)}</span>
                  <div>
                    <Badge variant="outline" className="glass text-xs">
                      {course.provider}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleBookmark(course.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className={`w-4 h-4 ${course.bookmarked ? 'fill-current text-red-400' : ''}`} />
                </Button>
              </div>
              
              <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">{course.price}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Skills you'll learn:</div>
                <div className="flex flex-wrap gap-1">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs glass">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1 glass glass-hover" asChild>
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Course
                  </a>
                </Button>
                <Button
                  variant={course.bookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleBookmark(course.id)}
                  className="glass glass-hover"
                >
                  <Bookmark className={`w-4 h-4 ${course.bookmarked ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <Card className="glass text-center py-12">
          <CardContent>
            <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms to find relevant courses.
            </p>
          </CardContent>
        </Card>
      )}

      <Card className="glass bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyan-400">
            <Star className="w-5 h-5" />
            Learning Path Suggestions
          </CardTitle>
          <CardDescription>
            Based on your skill gaps and career goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 glass rounded-lg">
              <h4 className="font-semibold mb-2">📚 Foundation Track (3-4 months)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Build strong fundamentals before advancing to complex topics.
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">TypeScript</Badge>
                <Badge variant="outline" className="text-xs">Testing</Badge>
                <Badge variant="outline" className="text-xs">Git Advanced</Badge>
              </div>
            </div>
            
            <div className="p-4 glass rounded-lg">
              <h4 className="font-semibold mb-2">🚀 Advanced Track (4-6 months)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Master advanced concepts and system design principles.
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">System Design</Badge>
                <Badge variant="outline" className="text-xs">Microservices</Badge>
                <Badge variant="outline" className="text-xs">Performance</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;
