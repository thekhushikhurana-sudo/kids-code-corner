import { PageMeta } from "@/components/PageMeta";
import { Link } from "react-router-dom";
import peerTeachingImage from "@/assets/peer-teaching.jpg";

export default function AboutUs() {
  const instructors = [
    {
      name: "Khushi Khurana",
      role: "Founder, Head Instructor & Curriculum Lead",
      funFact: "Gave a TEDx talk at 14 🎤",
      skills: ["Python", "AI/ML", "Web Development", "Teaching", "Public Speaking", "Women in Tech Advocacy", "Curriculum Design"],
      bio: "Khushi Khurana is a student educator whose journey began at a STEM conference where she discovered that coding could be creative and exciting. She founded For Kids, By Kids to make technology more accessible through peer learning and has helped teach more than 120 students through hands-on coding camps. Her mission is to help close the gender gap in technology by empowering young people to learn from and inspire one another."
    },
    {
      name: "Aditya Khurana",
      role: "Co-founder, Content Lead & Instructor",
      funFact: "Runs his own business 🚀",
      skills: ["Python", "Game Development", "Debugging", "Entrepreneurship", "Web Development", "Problem Solving", "AI Tools Integration"],
      bio: "Aditya Khurana is a student entrepreneur with a passion for coding and technology. He has experience in Python programming, web development, community-service projects using AI tools, and data visualization. Aditya loves solving complex problems and is dedicated to helping other students discover the joy of coding through peer-led learning."
    },
    {
      name: "Charu Khurana",
      role: "Mentor & AI Adviser",
      funFact: "Acted in a Bollywood movie 🤩",
      skills: ["Machine Learning", "Ethics in AI", "Python", "Mentoring", "Cloud Architecture", "Leadership Development", "Research"],
      bio: "Charu Khurana is a Solution Architect Manager at Amazon Web Services with a passion for teaching, mentoring, and technology. She is dedicated to making technology accessible and inspiring kids to think critically about its impact on society. She believes every young person should understand how technology works."
    }
  ];

  const values = [
    {
      title: "Peer Learning",
      description: "Students learn better from students. We remember what it's like to be confused, so we explain things differently than adults do."
    },
    {
      title: "Inclusion First",
      description: "Every kid belongs in tech. We create welcoming spaces where questions are celebrated and everyone's perspective matters."
    },
    {
      title: "Real Projects",
      description: "No boring exercises. Everything we build is something you'd actually want to show your friends and family."
    },
    {
      title: "Growth Mindset",
      description: "Mistakes are learning opportunities. We celebrate the process, not just the final product."
    },
    {
      title: "Joy in Learning",
      description: "Learning should be fun! We use games, challenges, and collaborative projects to keep energy high and engagement real."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="About Our Team | For Kids, By Kids"
        description="Meet the student instructors and mentors behind For Kids, By Kids and learn why peer-led technology education works."
      />
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                About Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are a team of student instructors and mentors who believe learning works
                best when it feels relatable. Our mission is simple: make technology
                approachable, hands-on, and led by students who remember what it is like to
                be beginners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
                >
                  See Our Courses
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={peerTeachingImage}
                alt="Teenage instructor teaching younger students in a bright classroom setting"
                className="rounded-2xl shadow-strong w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-card shadow-medium rounded-xl p-4">
                <div className="text-2xl font-heading font-bold text-primary">120+</div>
                <div className="text-sm text-muted-foreground">Students taught</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            Why We Started For Kids, By Kids
          </h2>
          <div className="bg-card shadow-soft rounded-2xl p-8 md:p-12">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I used to think coding was boring, until I realized it wasn’t the subject—it 
              was how it was being taught. Adult tutorials took hours, 
              but when a peer explained it, everything made sense in minutes. 
              Kids explain things differently than adults: we share the same slang, 
              the same frustrations, and we remember exactly which parts are confusing 
              because we just went through them ourselves. 
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              That’s the power of peer learning—it makes coding fun, relatable, and 
              less intimidating. That insight shaped the beginning of my first camp, 
              and it’s what continues to drive them today. 
            </p>
            <p className="text-lg text-primary font-medium">
              "If kids can teach kids better, why isn't this how all coding education works?"
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Meet Our Instructors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-card shadow-soft rounded-2xl p-6 hover:shadow-medium transition-smooth text-center">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white font-heading font-bold text-xl mb-4 mx-auto">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                  {instructor.name}
                </h3>
                <p className="text-primary font-medium mb-3">{instructor.role}</p>

                <div className="bg-accent/50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-accent-foreground">
                    <span className="font-medium">Fun fact:</span> {instructor.funFact}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {instructor.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {instructor.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            What We Believe
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card shadow-soft rounded-xl p-6 hover:shadow-medium transition-smooth">
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            What's Next for Us
          </h2>
          <div className="bg-card shadow-soft rounded-2xl p-8 md:p-12">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We're just getting started! Our goal is to prove that peer-led education works so well that schools and programs everywhere start incorporating it.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Our next steps are to serve more students, train additional peer instructors,
              and develop new courses in areas such as web development and data science.
            </p>
            <p className="text-lg text-primary font-medium">
              Want to help us change how kids learn technology? Join our community!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Ready to learn with us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of young coders and experience the difference peer-led learning makes. Every student deserves to feel confident in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium gradient-hero text-white hover:shadow-medium transition-bounce"
            >
              View Our Courses
            </Link>
            <Link
              to="/journey"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-base rounded-full font-medium border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              See Our Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
