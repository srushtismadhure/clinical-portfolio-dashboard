import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import PainToolsWorkstreamDetail from "./pages/PainToolsWorkstreamDetail";
import CaseStudies from "./pages/CaseStudies";
import Analytics from "./pages/Analytics";
import UXWork from "./pages/UXWork";
import Blog from "./pages/Blog";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Play from "./pages/Play";
import DataModelDetail from "./pages/DataModelDetail";
import SethoChatWidget from "@/components/chat/SethoChatWidget";
import { Footer } from "@/components/layout/Footer";
import PredictiveAnalytics from "@/components/projects/health-numerics/PredictiveAnalytics";
import NLPAnalytics from "@/components/projects/health-numerics/NLPAnalytics";
import Labs from "./pages/Labs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#EEF4FA] to-[#EAF2F8]">
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/play" element={<Play />} />

            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/:projectId/workstreams/:workstreamId"
              element={<PainToolsWorkstreamDetail />}
            />
            <Route path="/projects/health-numerics/predictive-analytics" element={<PredictiveAnalytics />} />
            <Route path="/projects/health-numerics/nlp" element={<NLPAnalytics />} />
            <Route path="/projects/:id/data-model" element={<DataModelDetail />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />

            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/ux-work" element={<UXWork />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <SethoChatWidget />
        </main>

        <Footer />
      </div>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
