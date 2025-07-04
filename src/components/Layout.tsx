
import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Bell, Settings, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Skills Input', href: '/skills-input', icon: '✍️' },
    { name: 'Career Goals', href: '/career-goals', icon: '🎯' },
    { name: 'Gap Analysis', href: '/gap-analysis', icon: '🧠' },
    { name: 'Recommendations', href: '/recommendations', icon: '🎁' },
    { name: 'Progress', href: '/progress', icon: '📆' },
    { name: 'Profile', href: '/profile', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-border/50 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden mr-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 chrome-gradient rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-background">S</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-chrome bg-clip-text text-transparent">
                SkillsUp
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full animate-pulse-glow"></span>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`glass border-r border-border/50 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-64 hidden lg:block'
        }`}>
          <nav className="p-6 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/20 border border-primary/30 glow'
                      : 'hover:bg-accent/50 glass-hover'
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
