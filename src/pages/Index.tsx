import heroImage from "@/assets/hero-coding-kids.jpg";
import projectShowcaseImage from "@/assets/project-showcase.jpg";
import { testimonials, stats } from "@/data/mockData";
import { useState, useEffect } from "react";
import { ChevronRight, Users, Target, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % Math.min(testimonials.length, 3));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
                For Kids, By Kids: 
                <span className="gradient-hero bg-clip-text text-transparent block">
                  Learn, Build, Lead
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Hands-on coding and AI programs created and taught by students for students. 
                Join our peer-led community where learning is fun, approachable, and totally gets you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <a href="/courses">
                    Explore Courses
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/journey">See Our Journey</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Diverse kids collaborating on coding projects in a bright classroom"
                className="rounded-2xl shadow-strong w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-card shadow-medium rounded-xl p-4">
                <div className="text-2xl font-heading font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card shadow-medium rounded-xl p-4">
                <div className="text-2xl font-heading font-bold text-secondary">4.9★</div>
                <div className="text-sm text-muted-foreground">Parent Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We create welcoming, peer-led tech learning so every kid can build something real—today. 
                No boring lectures, no intimidating jargon. Just students teaching students in the way that actually works.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Peer-Led</h3>
                  <p className="text-muted-foreground">Taught by students who remember exactly what it's like to be confused by loops</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-warm rounded-xl flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Project-Based</h3>
                  <p className="text-muted-foreground">Build games, apps, and AI models you'll actually want to show your friends</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-accent-foreground">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Welcoming & Inclusive</h3>
                  <p className="text-muted-foreground">Every question is celebrated, every student belongs, every idea matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Why Students Love Learning With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card shadow-soft rounded-2xl p-8 text-center hover:shadow-medium transition-smooth">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                ✨
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Beginner-Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Never coded before? Perfect! We start from absolute zero and build up step by step. 
                Our peer instructors remember being beginners too.
              </p>
            </div>
            <div className="bg-card shadow-soft rounded-2xl p-8 text-center hover:shadow-medium transition-smooth">
              <div className="w-16 h-16 gradient-warm rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                🚀
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Real Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build actual games, calculators, and AI models. No boring textbook exercises. 
                Everything you create is something you'd want to show off.
              </p>
            </div>
            <div className="bg-card shadow-soft rounded-2xl p-8 text-center hover:shadow-medium transition-smooth">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold mx-auto mb-6">
                🤝
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Supportive Mentors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from teenage instructors who speak your language and get your struggles. 
                It's like having a cool older sibling teach you to code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Stats Strip */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            What Families Are Saying
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card shadow-medium rounded-2xl p-8 md:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                "{testimonials[currentTestimonial]?.quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-white font-heading font-bold">
                  {testimonials[currentTestimonial]?.name?.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-heading font-semibold text-foreground">
                    {testimonials[currentTestimonial]?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial]?.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.slice(0, 3).map((_, index) => (
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

      {/* Project Showcase */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={projectShowcaseImage} 
                alt="Kids proudly displaying their completed coding projects on laptop screens"
                className="rounded-2xl shadow-strong w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Built by students, for students
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Every line of code in our curriculum was written by a student who learned it the hard way. 
                We know which explanations actually make sense because we've been exactly where you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero">
                  <a href="/courses">Start Learning Today</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/about">Meet Our Team</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our community of young coders and discover what you can create when learning is led by people who actually get it. 
            Your first project is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="/courses">
                Explore Our Courses
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/contact">Ask Us Anything</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
