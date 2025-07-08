
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bookmark, ExternalLink, Star, Clock, Filter, Search, Heart, BookOpen, Plus, Play, CheckCircle } from 'lucide-react';
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
  inLearningPath: boolean;
  completed: boolean;
  link: string;
  logo: string;
}

const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [showLearningPath, setShowLearningPath] = useState(false);
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
      description: 'Master advanced React patterns, hooks, and performance optimization techniques with hands-on projects.',
      skills: ['React', 'Performance Optimization', 'Advanced Patterns', 'Hooks'],
      bookmarked: false,
      inLearningPath: false,
      completed: false,
      link: '#',
      logo: '🎓'
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
      description: 'Build real-world Node.js applications with Express, MongoDB, and authentication from scratch.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'REST API'],
      bookmarked: true,
      inLearningPath: true,
      completed: false,
      link: '#',
      logo: '📚'
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
      description: 'Comprehensive system design concepts for technical interviews with real-world examples.',
      skills: ['System Design', 'Architecture', 'Scalability', 'Database Design'],
      bookmarked: false,
      inLearningPath: false,
      completed: true,
      link: '#',
      logo: '🎥'
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
      description: 'Learn TypeScript from basics to advanced concepts with practical examples and real projects.',
      skills: ['TypeScript', 'JavaScript', 'Type Safety', 'Interfaces'],
      bookmarked: false,
      inLearningPath: false,
      completed: false,
      link: '#',
      logo: '🔷'
    },
    {
      id: '5',
      title: 'Database Design and Optimization',
      provider: 'Skillshare',
      duration: '10 weeks',
      rating: 4.5,
      level: 'Intermediate',
      price: '$99',
      category: 'Database',
      description: 'Master database design principles and query optimization techniques for modern applications.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Indexing'],
      bookmarked: true,
      inLearningPath: false,
      completed: false,
      link: '#',
      logo: '🎨'
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
      description: 'Complete DevOps pipeline with Docker, Kubernetes, and CI/CD automation tools.',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Jenkins'],
      bookmarked: false,
      inLearningPath: true,
      completed: false,
      link: '#',
      logo: '📚'
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

  const toggleLearningPath = (courseId: string) => {
    setCourses(courses.map(course => 
      course.id === courseId 
        ? { ...course, inLearningPath: !course.inLearningPath }
        : course
    ));
    
    const course = courses.find(c => c.id === courseId);
    toast({
      title: course?.inLearningPath ? "Removed from Learning Path" : "Added to Learning Path",
      description: course?.title,
    });
  };

  const enrollNow = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setCourses(courses.map(c => 
      c.id === courseId 
        ? { ...c, inLearningPath: true }
        : c
    ));
    
    toast({
      title: "Enrollment Started",
      description: `You're now enrolled in "${course?.title}"`,
    });
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLevel = !levelFilter || course.level === levelFilter;
    const matchesCategory = !categoryFilter || course.category === categoryFilter;
    const matchesBookmark = !showBookmarked || course.bookmarked;
    const matchesLearningPath = !showLearningPath || course.inLearningPath;
    
    return matchesSearch && matchesLevel && matchesCategory && matchesBookmark && matchesLearningPath;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'price':
        return a.price === 'Free' ? -1 : b.price === 'Free' ? 1 : 0;
      default:
        return 0;
    }
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
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

      <Card className="glass glow-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Advanced Filters & Search
          </CardTitle>
          <CardDescription>
            Find the perfect learning resources for your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="glass">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="glass backdrop-blur-xl border border-border/50">
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="duration">Shortest Duration</SelectItem>
                <SelectItem value="price">Free First</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={showBookmarked ? "default" : "outline"}
                onClick={() => setShowBookmarked(!showBookmarked)}
                className="glass glass-hover flex-1"
                size="sm"
              >
                <Heart className={`w-4 h-4 ${showBookmarked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant={showLearningPath ? "default" : "outline"}
                onClick={() => setShowLearningPath(!showLearningPath)}
                className="glass glass-hover flex-1"
                size="sm"
              >
                <BookOpen className={`w-4 h-4 ${showLearningPath ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCourses.map((course) => (
          <Card key={course.id} className="glass glow-hover group hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center text-2xl">
                    {course.logo}
                  </div>
                  <div>
                    <Badge variant="outline" className="glass text-xs mb-1">
                      {course.provider}
                    </Badge>
                    {course.completed && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBookmark(course.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity glass-hover"
                  >
                    <Heart className={`w-4 h-4 ${course.bookmarked ? 'fill-current text-red-400' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleLearningPath(course.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity glass-hover"
                  >
                    <BookOpen className={`w-4 h-4 ${course.inLearningPath ? 'fill-current text-blue-400' : ''}`} />
                  </Button>
                </div>
              </div>
              
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                {course.title}
              </CardTitle>
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
                  <div className="text-sm font-bold text-primary">{course.price}</div>
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
                <Button 
                  onClick={() => enrollNow(course.id)}
                  className="flex-1 glow-hover bg-gradient-to-r from-primary to-blue-500 hover:from-primary/80 hover:to-blue-500/80"
                  disabled={course.completed}
                >
                  {course.completed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </>
                  ) : course.inLearningPath ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Enroll Now
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm" className="glass glass-hover" asChild>
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedCourses.length === 0 && (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-400">
              <Star className="w-5 h-5" />
              Recommended Learning Paths
            </CardTitle>
            <CardDescription>
              Curated sequences based on your career goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 glass rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                <h4 className="font-semibold text-sm">📚 Full-Stack Foundation (4-6 months)</h4>
                <p className="text-xs text-muted-foreground">TypeScript → React → Node.js → Database</p>
              </div>
              <div className="p-3 glass rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                <h4 className="font-semibold text-sm">🚀 Senior Developer Track (6-8 months)</h4>
                <p className="text-xs text-muted-foreground">System Design → Architecture → Leadership</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <BookOpen className="w-5 h-5" />
              Your Learning Stats
            </CardTitle>
            <CardDescription>
              Track your progress and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 glass rounded-lg">
                <div className="text-2xl font-bold text-blue-400">
                  {courses.filter(c => c.inLearningPath).length}
                </div>
                <div className="text-xs text-muted-foreground">In Learning Path</div>
              </div>
              <div className="text-center p-3 glass rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {courses.filter(c => c.completed).length}
                </div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div className="text-center p-3 glass rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">
                  {courses.filter(c => c.bookmarked).length}
                </div>
                <div className="text-xs text-muted-foreground">Bookmarked</div>
              </div>
              <div className="text-center p-3 glass rounded-lg">
                <div className="text-2xl font-bold text-purple-400">
                  {Math.round((courses.filter(c => c.completed).length / courses.length) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground">Completion Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendations;
