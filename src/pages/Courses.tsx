import { courses } from "@/data/mockData";
import { Clock, Users, Calendar, DollarSign } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { Link, Navigate, useParams } from "react-router-dom";

export default function Courses() {
  const { courseId } = useParams();
  const course = courseId ? courses.find((item) => item.id === courseId) : null;

  if (courseId && !course) {
    return <Navigate to="/courses" replace />;
  }

  if (course) {
    return (
      <div className="min-h-screen bg-background">
        <PageMeta
          title={`${course.title} | For Kids, By Kids`}
          description={course.shortBlurb}
        />
        {/* Course Detail Header */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <Link
              to="/courses"
              className="mb-6 inline-flex text-primary hover:text-primary/80 font-medium"
            >
              ← Back to Courses
            </Link>
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
                <h3 className="font-heading font-semibold text-lg mb-4">
                  Interested in this program?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Send us your information and we will share scheduling and registration
                  details when the next session is confirmed.
                </p>
                <Link
                  to={`/contact?interest=${course.id}`}
                  className="inline-flex items-center justify-center w-full h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
                >
                  Join the Interest List
                </Link>
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
      <PageMeta
        title="Courses | For Kids, By Kids"
        description="Explore beginner-friendly coding and AI programs taught by student instructors through hands-on projects."
      />
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

                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-smooth hover:bg-primary/90"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Info FAQ */}
      <section className="bg-muted px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Information for Families
            </h2>
            <p className="mt-4 text-muted-foreground">
              Programs are beginner-friendly, project-based, and designed to help students
              learn in a welcoming environment.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Who can participate?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Each course lists its recommended age range and experience level. Most
                programs are designed for beginners.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                How much does it cost?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The programs currently listed on this page are free. Any future changes will
                be shared before registration.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                When is the next session?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Dates are announced after locations and instructors are confirmed. Join the
                interest list to ask about upcoming opportunities.
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
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
          >
            Ask About Upcoming Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
