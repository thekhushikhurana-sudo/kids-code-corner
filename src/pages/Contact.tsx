import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentAge: "",
    interest: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please check the consent box to continue.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Send className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Message Sent!
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Thanks for reaching out! We'll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                studentAge: "",
                interest: "",
                message: "",
                consent: false
              });
            }}
            variant="outline"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your coding journey? Have questions about our programs? We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
              Let's Connect
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@forkidsbykkids.org</p>
                  <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Community Center & Online</p>
                  <p className="text-sm text-muted-foreground">Serving students nationwide</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Response Time</h3>
                  <p className="text-muted-foreground">Within 24 hours</p>
                  <p className="text-sm text-muted-foreground">Usually much faster!</p>
                </div>
              </div>
            </div>

            <div className="bg-card shadow-soft rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                Quick Questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out our most common questions:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Ages 11-16 for most programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">No coding experience needed</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Scholarships available</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">In-person & virtual options</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card shadow-soft rounded-2xl p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="studentAge" className="block text-sm font-medium text-foreground mb-2">
                    Student Age
                  </label>
                  <input
                    type="text"
                    id="studentAge"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="e.g., 12 years old"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                    Interest Area
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  >
                    <option value="">Select a program</option>
                    <option value="python-basics">Python Basics</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="data-science">Data Science</option>
                    <option value="general">General Questions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                  placeholder="Tell us about your interest in our programs, any questions you have, or how we can help..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I consent to For Kids, By Kids contacting me by email to respond to my inquiry. We'll only use your information to reply to your message. *
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="hero"
                size="lg"
                className="w-full"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Alternative Contact */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Prefer to email directly?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            No problem! Send us an email at{" "}
            <a 
              href="mailto:hello@forkidsbykkids.org" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              hello@forkidsbykkids.org
            </a>
            {" "}and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@forkidsbykkids.org"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us Directly
            </a>
            <a 
              href="/courses"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              View Our Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}