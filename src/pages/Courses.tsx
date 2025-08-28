import { useState } from "react";
import { courses } from "@/data/mockData";
import { Clock, Users, Calendar, DollarSign } from "lucide-react";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const course = selectedCourse ? courses.find(c => c.id === selectedCourse) : null;

  if (course) {
    return (
      <div className="min-h-screen bg-background">
        {/* Course Detail Header */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="mb-6 text-primary hover:text-primary/80 font-medium"
            >
              ← Back to Courses
            </button>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {course.shortBlurb}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-2 bg-background px-3 py-2 rounded-full">
                    <Users className="w-4 h-4 text-primary" />
                    {course.ageRange}
                  </span>
                  <span className="flex items-center gap-2 bg-background px-3 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-primary" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2 bg-background px-3 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-primary" />
                    {course.nextStartDate}
                  </span>
                  {course.price && (
                    <span className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-full">
                      <DollarSign className="w-4 h-4" />
                      {course.price}
                    </span>
                  )}
                </div>
              </div>
              <div className="bg-card shadow-soft rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Ready to enroll?</h3>
                <p className="text-muted-foreground mb-6">
                  Join {course.title} and start building amazing projects with peer instructors who get it.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center w-full h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Syllabus */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  What You'll Learn
                </h2>
                <ul className="space-y-3">
                  {course.syllabus.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  What You'll Build
                </h2>
                <div className="space-y-4">
                  {course.projects.map((project, index) => (
                    <div key={index} className="bg-card shadow-soft rounded-xl p-4">
                      <h4 className="font-medium text-foreground">{project}</h4>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">
                  What to Bring
                </h3>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Hands-on coding and AI programs designed by students, for students. Every class is taught by peer instructors who make learning fun and approachable.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-card shadow-soft rounded-2xl overflow-hidden hover:shadow-medium transition-smooth">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🎓</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.skillLevel === 'Beginner' ? 'bg-accent text-accent-foreground' :
                      course.skillLevel === 'Intermediate' ? 'bg-secondary/20 text-secondary' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {course.skillLevel}
                    </span>
                    <span className="text-sm text-muted-foreground">{course.ageRange}</span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {course.shortBlurb}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    {course.price && (
                      <span className="font-medium text-primary">{course.price}</span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedCourse(course.id)}
                    className="w-full h-12 px-6 py-3 text-base rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Info FAQ */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Parent Information
          </h2>
          <div className="space-y-6">
            <div className="bg-card shadow-soft rounded-xl p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                How are classes structured?
              </h3>
              <p className="text-muted-foreground">
                Our classes are small (6-8 students max) and taught by trained teenage instructors with adult supervision. We focus on hands-on projects rather than lectures, so kids build real things while learning concepts.
              </p>
            </div>
            <div className="bg-card shadow-soft rounded-xl p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                What if my child has never coded before?
              </h3>
              <p className="text-muted-foreground">
                Perfect! Our beginner courses assume zero experience. Peer instructors are especially good at remembering what it's like to be new to coding, so they explain things in ways that really click.
              </p>
            </div>
            <div className="bg-card shadow-soft rounded-xl p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Are there scholarships available?
              </h3>
              <p className="text-muted-foreground">
                Yes! We believe every kid should have access to coding education. Contact us to discuss scholarship options - we work with families to make our programs accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Ready to start coding?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of young coders and start building amazing projects with peer instructors who make learning fun.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}