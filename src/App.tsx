import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Request from "./pages/Request";
import RequestEdit from "./pages/RequestEdit";
import RequestReview from "./pages/RequestReview";
import SearchWorkers from "./pages/SearchWorkers";
import Feedback from "./pages/Feedback";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPanel from "./pages/admin/AdminPanel";
import ViewWorkers from "./pages/admin/ViewWorkers";
import ViewRequests from "./pages/admin/ViewRequests";
import ViewContacts from "./pages/admin/ViewContacts";

// User Pages
import UserHome from "./pages/user/UserHome";
import UserProfile from "./pages/user/UserProfile";

// Worker Pages
import WorkerHome from "./pages/worker/WorkerHome";
import WorkerRegister from "./pages/worker/WorkerRegister";
import WorkerProfileEdit from "./pages/worker/WorkerProfileEdit";
import WorkerProfileView from "./pages/worker/WorkerProfileView";
import WorkerFeedback from "./pages/worker/WorkerFeedback";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request" element={<Request />} />
          <Route path="/request/edit/:id" element={<RequestEdit />} />
          <Route path="/request/review" element={<RequestReview />} />
          <Route path="/search-workers" element={<SearchWorkers />} />
          <Route path="/feedback" element={<Feedback />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="/admin/view-workers" element={<ViewWorkers />} />
          <Route path="/admin/view-requests" element={<ViewRequests />} />
          <Route path="/admin/view-contacts" element={<ViewContacts />} />
          
          {/* User Routes */}
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/profile" element={<UserProfile />} />
          
          {/* Worker Routes */}
          <Route path="/worker/home" element={<WorkerHome />} />
          <Route path="/worker/register" element={<WorkerRegister />} />
          <Route path="/worker/profile/edit" element={<WorkerProfileEdit />} />
          <Route path="/worker/profile/view" element={<WorkerProfileView />} />
          <Route path="/worker/feedback" element={<WorkerFeedback />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
