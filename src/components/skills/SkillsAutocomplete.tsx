
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Plus } from 'lucide-react';

interface SkillsAutocompleteProps {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
  placeholder?: string;
}

const popularSkills = [
  'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java',
  'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin', 'HTML', 'CSS', 'SASS',
  'Tailwind CSS', 'Bootstrap', 'jQuery', 'Express.js', 'Django', 'Flask', 'Spring Boot',
  'Laravel', 'Rails', 'ASP.NET', 'GraphQL', 'REST API', 'MongoDB', 'PostgreSQL', 'MySQL',
  'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Git', 'Jenkins', 'CI/CD',
  'Agile', 'Scrum', 'Project Management', 'Machine Learning', 'Data Analysis', 'AI',
  'Blockchain', 'DevOps', 'Testing', 'Jest', 'Cypress', 'Selenium', 'UI/UX Design',
  'Figma', 'Adobe Creative Suite', 'Photoshop', 'Illustrator'
];

const SkillsAutocomplete: React.FC<SkillsAutocompleteProps> = ({
  selectedSkills,
  onSkillsChange,
  placeholder = "Start typing a skill..."
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue.trim()) {
      const filtered = popularSkills.filter(skill =>
        skill.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selectedSkills.includes(skill)
      );
      setFilteredSkills(filtered.slice(0, 8));
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue, selectedSkills]);

  const addSkill = (skill: string) => {
    if (skill.trim() && !selectedSkills.includes(skill.trim())) {
      onSkillsChange([...selectedSkills, skill.trim()]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onSkillsChange(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSkills.length > 0) {
        addSkill(filteredSkills[0]);
      } else if (inputValue.trim()) {
        addSkill(inputValue);
      }
    }
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => inputValue.trim() && setShowSuggestions(filteredSkills.length > 0)}
            placeholder={placeholder}
            className="glass flex-1"
          />
          <Button
            onClick={() => addSkill(inputValue)}
            disabled={!inputValue.trim()}
            className="glow-hover"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {showSuggestions && (
          <div
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 z-50 mt-1 glass border border-border/50 rounded-lg shadow-lg backdrop-blur-xl"
          >
            <div className="p-2 space-y-1 max-h-48 overflow-y-auto">
              {filteredSkills.map((skill, index) => (
                <button
                  key={skill}
                  onClick={() => addSkill(skill)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-accent/50 transition-colors text-sm"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-3 py-1 flex items-center gap-2 glass glass-hover group"
            >
              {skill}
              <X
                className="w-3 h-3 cursor-pointer hover:text-destructive transition-colors"
                onClick={() => removeSkill(skill)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsAutocomplete;
