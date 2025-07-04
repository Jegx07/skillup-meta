
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import Dashboard from "./components/dashboard/Dashboard";
import SkillsInput from "./components/skills/SkillsInput";
import CareerGoals from "./components/career/CareerGoals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="skills-input" element={<SkillsInput />} />
            <Route path="career-goals" element={<CareerGoals />} />
            <Route path="gap-analysis" element={<div className="text-center p-8">Gap Analysis Coming Soon</div>} />
            <Route path="recommendations" element={<div className="text-center p-8">Recommendations Coming Soon</div>} />
            <Route path="progress" element={<div className="text-center p-8">Progress Tracker Coming Soon</div>} />
            <Route path="profile" element={<div className="text-center p-8">Profile Coming Soon</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
