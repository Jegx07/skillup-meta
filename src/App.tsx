
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
import GapAnalysis from "./pages/GapAnalysis";
import Recommendations from "./pages/Recommendations";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PersonalDetails from "./pages/PersonalDetails";
import SkillsPage from "./pages/SkillsPage";
import { UserSkillsProvider } from './components/skills/UserSkillsContext';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UserSkillsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="skills-input" element={<SkillsInput />} />
              <Route path="career-goals" element={<CareerGoals />} />
              <Route path="gap-analysis" element={<GapAnalysis />} />
              <Route path="recommendations" element={<Recommendations />} />
              <Route path="progress" element={<Progress />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserSkillsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
