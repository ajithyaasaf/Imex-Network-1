import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatBot } from "@/components/ChatBot";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import WhoWeAre from "@/pages/who-we-are";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import Clients from "@/pages/clients";
import Contact from "@/pages/contact";
import ProjectsHospitals from "@/pages/projects-hospitals";
import ProjectsHotels from "@/pages/projects-hotels";
import ProjectsVillas from "@/pages/projects-villas";
import ProjectsInstitutes from "@/pages/projects-institutes";
import ProjectsRetail from "@/pages/projects-retail";
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";

function Router() {
  const [location] = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/who-we-are" component={WhoWeAre} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/clients" component={Clients} />
      <Route path="/projects/hospitals" component={ProjectsHospitals} />
      <Route path="/projects/hotels" component={ProjectsHotels} />
      <Route path="/projects/villas" component={ProjectsVillas} />
      <Route path="/projects/institutes" component={ProjectsInstitutes} />
      <Route path="/projects/retail" component={ProjectsRetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ChatBot />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
