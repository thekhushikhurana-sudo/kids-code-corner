import { journeyMilestones } from "@/data/mockData";
import { PageMeta } from "@/components/PageMeta";
import { Link } from "react-router-dom";

export default function Journey() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Our Journey | For Kids, By Kids"
        description="Follow the growth of For Kids, By Kids from its first peer-led coding camp to research, presentations, and expanded programs."
      />
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Our Journey So Far
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Made by students, for students. Here's how we grew from a bedroom idea to a thriving learning community.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 -translate-x-px bg-gradient-to-b from-primary via-primary to-secondary md:left-1/2"></div>

            {journeyMilestones.map((milestone, index) => (
              <div key={milestone.id} className={`relative mb-16 flex flex-col gap-6 pl-10 md:items-center md:gap-0 md:pl-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="absolute left-2 top-6 z-10 h-4 w-4 rounded-full border-4 border-background gradient-hero shadow-medium md:hidden"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="bg-card shadow-soft rounded-2xl p-6 transition-smooth hover:shadow-medium">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                      milestone.tag === 'Foundation' ? 'bg-primary/10 text-primary' :
                      milestone.tag === 'Teaching' ? 'bg-secondary/10 text-secondary' :
                      milestone.tag === 'Growth' ? 'bg-accent text-accent-foreground' :
                      milestone.tag === 'Milestone' ? 'bg-primary/20 text-primary' :
                      milestone.tag === 'Innovation' ? 'bg-secondary/20 text-secondary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {milestone.tag}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {milestone.description}
                    </p>
                    <time className="text-sm font-medium text-primary">
                      {milestone.date}
                    </time>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden w-2/12 justify-center md:flex">
                  <div className="w-4 h-4 gradient-hero rounded-full border-4 border-background shadow-medium z-10"></div>
                </div>

                {/* Milestone Image */}
                <div className="flex w-full items-center justify-center md:w-5/12">
                  <div className="aspect-[4/3] w-full max-w-xs bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden shadow-soft">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Want to be part of our story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always growing and looking for new students to join our community of young coders and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
            >
              Explore Our Courses
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
