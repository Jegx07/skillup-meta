import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Upload, Link2, Plus, X } from 'lucide-react';

const SkillsInput = () => {
  const [manualSkills, setManualSkills] = useState('');
  const [skillsList, setSkillsList] = useState([
    'JavaScript', 'React', 'Python', 'SQL', 'Git'
  ]);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !skillsList.includes(newSkill.trim())) {
      setSkillsList([...skillsList, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkillsList(skillsList.filter(skill => skill !== skillToRemove));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);
      // Placeholder for file processing logic
    }
  };

  return (
    <div className="space-y-6">
      <div className="glass p-6 rounded-2xl border border-border/50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent mb-2">
          Skills Input Center
        </h1>
        <p className="text-muted-foreground">
          Add your skills manually, upload your resume, or import from professional platforms
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>✍️</span>
              Manual Input
            </CardTitle>
            <CardDescription>
              Type your skills directly or add them one by one
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Bulk Skills Entry</label>
              <Textarea
                placeholder="Enter your skills separated by commas (e.g., JavaScript, Python, React, Node.js...)"
                value={manualSkills}
                onChange={(e) => setManualSkills(e.target.value)}
                className="glass min-h-[100px]"
              />
              <Button className="w-full glow-hover">
                <Plus className="w-4 h-4 mr-2" />
                Parse & Add Skills
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Add Individual Skill</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter skill name"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  className="glass"
                />
                <Button onClick={addSkill} className="glow-hover">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass glow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>📄</span>
              Resume Upload
            </CardTitle>
            <CardDescription>
              Upload your resume for automatic skill extraction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center glass-hover">
              <div className="mx-auto w-12 h-12 chrome-gradient rounded-lg flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-background" />
              </div>
              <p className="text-sm font-medium mb-2">Drop your resume here</p>
              <p className="text-xs text-muted-foreground mb-4">
                Supports PDF, DOC, DOCX files up to 5MB
              </p>
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
              />
              <label htmlFor="resume-upload">
                <Button className="glow-hover" asChild>
                  <span>Choose File</span>
                </Button>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="glass glass-hover">
                <Upload className="w-4 h-4 mr-2" />
                Browse Files
              </Button>
              <Button variant="outline" className="glass glass-hover">
                <Link2 className="w-4 h-4 mr-2" />
                From URL
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>🔗</span>
            Platform Integrations
          </CardTitle>
          <CardDescription>
            Import skills from your professional profiles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="glass glass-hover h-16 flex-col w-full">
                <div className="w-8 h-8 bg-blue-600 rounded mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
                LinkedIn Import
              </Button>
            </a>
            <a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="glass glass-hover h-16 flex-col w-full">
                <div className="w-8 h-8 bg-gray-900 rounded mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">GH</span>
                </div>
                GitHub Analysis
              </Button>
            </a>
            <a href="https://www.cvlogin.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="glass glass-hover h-16 flex-col w-full">
                <div className="w-8 h-8 bg-orange-500 rounded mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">CV</span>
                </div>
                CSV Import
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>🏷️</span>
            Current Skills ({skillsList.length})
          </CardTitle>
          <CardDescription>
            Review and manage your skill portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skillsList.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 flex items-center gap-2 glass glass-hover"
              >
                <span className="flex items-center gap-2">
                  {skill}
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-destructive"
                    onClick={() => removeSkill(skill)}
                  />
                </span>
              </Badge>
            ))}
          </div>
          {skillsList.length === 0 && (
            <p className="text-muted-foreground text-center py-8">
              No skills added yet. Start by adding your first skill above!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsInput;

          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsInput;
