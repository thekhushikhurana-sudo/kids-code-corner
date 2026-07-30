import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageMeta } from "@/components/PageMeta";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <PageMeta
        title="Page Not Found | For Kids, By Kids"
        description="The requested page could not be found."
      />
      <div className="text-center px-4">
        <div className="w-24 h-24 gradient-hero rounded-full flex items-center justify-center text-white text-4xl font-heading font-bold mx-auto mb-8">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
          >
            Return to Home
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
