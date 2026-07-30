import { useState } from "react";
import { Mail, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";
import { Link, useSearchParams } from "react-router-dom";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_ENDPOINT,
  CONTACT_NAME,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/config/contact";

const programOptions = [
  { value: "scratch-beginners", label: "Scratch Beginners" },
  { value: "python-fundamentals", label: "Python Fundamentals" },
  { value: "intro-ai-ml", label: "AI & Machine Learning" },
  { value: "general", label: "General Questions" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedInterest = searchParams.get("interest") ?? "";
  const initialInterest = programOptions.some((option) => option.value === requestedInterest)
    ? requestedInterest
    : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentAge: "",
    interest: initialInterest,
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formEndpoint =
    import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || CONTACT_FORM_ENDPOINT;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!formData.consent) {
      setSubmitError("Please check the consent box before sending your message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedProgram =
        programOptions.find((option) => option.value === formData.interest)?.label ||
        "Not specified";
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          student_age: formData.studentAge || "Not specified",
          program_interest: selectedProgram,
          message: formData.message,
          consent_to_reply: formData.consent ? "Yes" : "No",
          _subject: "New For Kids, By Kids website inquiry",
          _template: "table",
          _url: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Your message could not be sent. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <PageMeta
          title="Message Received | For Kids, By Kids"
          description="Thank you for contacting For Kids, By Kids."
        />
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Send className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Message Sent!
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Thanks for reaching out! We will respond as soon as we can.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                studentAge: "",
                interest: initialInterest,
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
      <PageMeta
        title="Contact | For Kids, By Kids"
        description="Contact For Kids, By Kids about coding programs, enrollment, partnerships, or general questions."
      />
      {/* Contact Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            We love hearing from students, parents, and educators! Whether you have a question, want to join a class, or just want to say hi, reach out below.
          </p>
        </div>
      </section>

      {/* Contact Details and Form */}
      <div className="container mx-auto px-4 pb-16">
        <div className="mx-auto mb-10 grid max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-card p-6 text-center shadow-soft">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-heading text-sm font-semibold text-muted-foreground">
              Contact
            </h2>
            <p className="mt-1 font-medium text-foreground">{CONTACT_NAME}</p>
          </div>
          <div className="rounded-2xl bg-card p-6 text-center shadow-soft">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-heading text-sm font-semibold text-muted-foreground">
              Email
            </h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-1 block break-all font-medium text-primary underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="rounded-2xl bg-card p-6 text-center shadow-soft">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-heading text-sm font-semibold text-muted-foreground">
              Phone
            </h2>
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              className="mt-1 block font-medium text-primary underline-offset-4 hover:underline"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-card shadow-soft rounded-2xl p-8">
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
                  type="number"
                  id="studentAge"
                  name="studentAge"
                  value={formData.studentAge}
                  onChange={handleInputChange}
                  min="5"
                  max="18"
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="e.g., 12"
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
                  {programOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
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
                placeholder="How can we help? Ask us anything!"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                required
                aria-describedby="consent-description"
                className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <label id="consent-description" htmlFor="consent" className="text-sm text-muted-foreground">
                I consent to For Kids, By Kids contacting me by email to respond to my
                inquiry. We will only use this information to reply, as explained in our{" "}
                <Link to="/privacy" className="font-medium text-primary underline-offset-4 hover:underline">
                  privacy notice
                </Link>
                . *
              </label>
            </div>
            {submitError && (
              <p
                role="alert"
                aria-live="assertive"
                className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {submitError}
              </p>
            )}
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
  );
}
