import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    dob: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('personalDetails', JSON.stringify(formData));
    setSubmitted(true);
    setTimeout(() => navigate('/skills'), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-accent/10">
      <div className="w-full max-w-md">
        <Card className="glass glow-hover border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Personal Details</CardTitle>
            <CardDescription className="text-base">
              Please fill in your personal information to complete your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center text-green-600 font-semibold py-8">
                Details saved! Redirecting to dashboard...
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">First Name</label>
                    <Input
                      placeholder="John"
                      value={formData.firstName}
                      onChange={e => handleChange('firstName', e.target.value)}
                      className="glass h-11"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Last Name</label>
                    <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={e => handleChange('lastName', e.target.value)}
                      className="glass h-11"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="glass h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Phone</label>
                  <Input
                    type="tel"
                    placeholder="123-456-7890"
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className="glass h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Address</label>
                  <Input
                    placeholder="123 Main St, City, Country"
                    value={formData.address}
                    onChange={e => handleChange('address', e.target.value)}
                    className="glass h-11"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Gender</label>
                    <select
                      className="glass h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={formData.gender}
                      onChange={e => handleChange('gender', e.target.value)}
                      required
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Date of Birth</label>
                    <Input
                      type="date"
                      value={formData.dob}
                      onChange={e => handleChange('dob', e.target.value)}
                      className="glass h-11"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full h-12 text-base font-semibold glow-hover metallic-gradient text-white">
                  Save Details
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalDetails; 
