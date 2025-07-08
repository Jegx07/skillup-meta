
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Link2, Github, Linkedin } from 'lucide-react';
import SkillsAutocomplete from './SkillsAutocomplete';
import { useToast } from '@/hooks/use-toast';

const SkillsInput = () => {
  const [manualSkills, setManualSkills] = useState('');
  const [skillsList, setSkillsList] = useState([
    'JavaScript', 'React', 'Python', 'SQL', 'Git'
  ]);
  const { toast } = useToast();

  const parseAndAddSkills = () => {
    if (manualSkills.trim()) {
      const newSkills = manualSkills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill && !skillsList.includes(skill));
      
      if (newSkills.length > 0) {
        setSkillsList([...skillsList, ...newSkills]);
        setManualSkills('');
        toast({
          title: "Skills Added",
          description: `Added ${newSkills.length} new skills to your profile.`,
        });
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate skill extraction from resume
      const extractedSkills = ['Project Management', 'Leadership', 'Data Analysis', 'Machine Learning'];
      const newSkills = extractedSkills.filter(skill => !skillsList.includes(skill));
      
      if (newSkills.length > 0) {
        setSkillsList([...skillsList, ...newSkills]);
        toast({
          title: "Resume Processed",
          description: `Extracted ${newSkills.length} skills from your resume.`,
        });
      }
    }
  };

  const simulateGitHubIntegration = () => {
    const githubSkills = ['Docker', 'Kubernetes', 'CI/CD', 'MongoDB'];
    const newSkills = githubSkills.filter(skill => !skillsList.includes(skill));
    
    if (newSkills.length > 0) {
      setSkillsList([...skillsList, ...newSkills]);
      toast({
        title: "GitHub Integration",
        description: `Found ${newSkills.length} skills from your repositories.`,
      });
    }
  };

  const simulateLinkedInIntegration = () => {
    const linkedinSkills = ['Strategic Planning', 'Team Leadership', 'Business Development'];
    const newSkills = linkedinSkills.filter(skill => !skillsList.includes(skill));
    
    if (newSkills.length > 0) {
      setSkillsList([...skillsList, ...newSkills]);
      toast({
        title: "LinkedIn Integration",
        description: `Imported ${newSkills.length} skills from your profile.`,
      });
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
              Type your skills with smart autocomplete suggestions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Smart Skill Entry</label>
              <SkillsAutocomplete
                selectedSkills={skillsList}
                onSkillsChange={setSkillsList}
                placeholder="Start typing a skill (e.g., JavaScript, Python...)"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Bulk Skills Entry</label>
              <Textarea
                placeholder="Enter multiple skills separated by commas (e.g., JavaScript, Python, React, Node.js...)"
                value={manualSkills}
                onChange={(e) => setManualSkills(e.target.value)}
                className="glass min-h-[80px]"
              />
              <Button onClick={parseAndAddSkills} className="w-full glow-hover" disabled={!manualSkills.trim()}>
                Parse & Add Skills
              </Button>
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
            <Button 
              onClick={simulateLinkedInIntegration}
              variant="outline" 
              className="glass glass-hover h-16 flex-col gap-2 hover:border-blue-500/50"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span>LinkedIn Import</span>
            </Button>
            <Button 
              onClick={simulateGitHubIntegration}
              variant="outline" 
              className="glass glass-hover h-16 flex-col gap-2 hover:border-gray-400/50"
            >
              <Github className="w-6 h-6" />
              <span>GitHub Analysis</span>
            </Button>
            <Button variant="outline" className="glass glass-hover h-16 flex-col gap-2" disabled>
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">CSV</span>
              </div>
              <span>CSV Import</span>
            </Button>
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
            Your comprehensive skill portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SkillsAutocomplete
            selectedSkills={skillsList}
            onSkillsChange={setSkillsList}
            placeholder=""
          />
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
