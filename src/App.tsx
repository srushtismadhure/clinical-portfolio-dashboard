import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import PainToolsWorkstreamDetail from "./pages/PainToolsWorkstreamDetail";
import CaseStudies from "./pages/CaseStudies";
import Analytics from "./pages/Analytics";
import UXWork from "./pages/UXWork";
import Labs from "./pages/Labs";
import Blog from "./pages/Blog";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Play from "./pages/Play";
import DataModelDetail from "./pages/DataModelDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/play" element={<Play />} />

        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/:projectId/workstreams/:workstreamId"
          element={<PainToolsWorkstreamDetail />}
        />
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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
