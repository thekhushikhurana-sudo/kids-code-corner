import { useState, useEffect } from "react";
import { stats, testimonials } from "@/data/mockData";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function StatsTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real numbers, real stories. See how peer-led learning is changing the way kids discover coding and AI.
          </p>
        </div>
      </section>

      {/* Stats Panel */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-card shadow-soft rounded-2xl p-8 hover:shadow-medium transition-smooth">
                  <div className="text-4xl md:text-5xl font-heading font-bold gradient-hero bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            What Families Are Saying
          </h2>
          
          <div className="relative">
            <div className="bg-card shadow-medium rounded-2xl p-8 md:p-12 text-center min-h-[280px] flex flex-col justify-center">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-white font-heading font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-heading font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background shadow-soft rounded-full flex items-center justify-center hover:shadow-medium transition-smooth"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background shadow-soft rounded-full flex items-center justify-center hover:shadow-medium transition-smooth"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentTestimonial 
                      ? 'bg-primary' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            More Happy Voices
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-card shadow-soft rounded-xl p-6 hover:shadow-medium transition-smooth">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Ready to join our happy community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't just take our word for it - experience the joy of peer-led learning yourself. Join our next coding camp or workshop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/courses"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
            >
              Explore Our Courses
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Ask Us Anything
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}