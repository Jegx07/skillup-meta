
import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Bell, Settings, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Skills Input', href: '/skills-input', icon: '✍️' },
    { name: 'Career Goals', href: '/career-goals', icon: '🎯' },
    { name: 'Gap Analysis', href: '/gap-analysis', icon: '🧠' },
    { name: 'Recommendations', href: '/recommendations', icon: '🎁' },
    { name: 'Progress', href: '/progress', icon: '📆' },
    { name: 'Profile', href: '/profile', icon: '👤' },
  ];

  const handleLogout = () => {
    // Simulate logout and redirect to login
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-border/50 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden mr-3"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 chrome-gradient rounded-xl flex items-center justify-center shadow-lg border border-primary/20">
                <span className="text-lg font-black text-background">S</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-chrome to-primary bg-clip-text text-transparent drop-shadow-sm">
                  SkillsUp
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative glass-hover">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full animate-pulse-glow"></span>
            </Button>
            <Button variant="ghost" size="sm" className="glass-hover">
              <Settings className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="glass-hover"
              onClick={() => navigate('/profile')}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="glass-hover text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`glass border-r border-border/50 transition-all duration-300 backdrop-blur-xl ${
          sidebarOpen ? 'w-72' : 'w-72 hidden lg:block'
        } ${sidebarOpen ? 'fixed inset-y-0 z-40 lg:relative' : ''}`}>
          <nav className="p-6 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                    isActive
                      ? 'bg-primary/20 border border-primary/30 glow text-primary shadow-lg'
                      : 'hover:bg-accent/50 glass-hover text-muted-foreground hover:text-foreground'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
