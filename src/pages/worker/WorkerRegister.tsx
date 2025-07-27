import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WorkerRegister = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="gradient-hero text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Join as Professional</h1>
          <Link to="/register"><Button>Get Started</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default WorkerRegister;