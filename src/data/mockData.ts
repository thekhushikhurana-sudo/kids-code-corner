// Mock data for the website - in a real app, this would come from a CMS

export interface Course {
  id: string;
  title: string;
  shortBlurb: string;
  ageRange: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  topic: "Python" | "AI/ML" | "Data" | "Web" | "Other";
  duration: string;
  format: string;
  nextStartDate: string;
  price?: string;
  thumbnail: string;
  syllabus: string[];
  projects: string[];
  requirements: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: "Student" | "Parent";
  photo?: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tag: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: "All" | "Camps" | "Projects" | "Events";
  date: string;
  credit?: string;
}

export const courses: Course[] = [
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    shortBlurb: "Build games, calculators, and charts while learning coding basics from peer instructors.",
    ageRange: "Ages 11-15",
    skillLevel: "Beginner",
    topic: "Python",
    duration: "8 × 90-min sessions",
    format: "In-person & Virtual",
    nextStartDate: "March 15, 2024",
    price: "$240",
    thumbnail: "/api/placeholder/400/300",
    syllabus: [
      "Python basics and syntax",
      "Variables and data types",
      "Loops and conditionals",
      "Functions and modules",
      "File handling",
      "Building interactive programs",
      "Debugging techniques",
      "Final project presentation"
    ],
    projects: [
      "Calculator app",
      "Rock-Paper-Scissors game",
      "Data visualization charts",
      "Interactive quiz game"
    ],
    requirements: [
      "Laptop or computer",
      "Python 3.x installed",
      "Web browser",
      "Enthusiasm to learn!"
    ]
  },
  {
    id: "intro-ai-ml",
    title: "Intro to AI & Machine Learning",
    shortBlurb: "Train image classifiers, understand AI bias, and present your own ML project.",
    ageRange: "Ages 13-16",
    skillLevel: "Intermediate",
    topic: "AI/ML",
    duration: "6 × 2-hour sessions",
    format: "In-person preferred",
    nextStartDate: "April 1, 2024",
    price: "$320",
    thumbnail: "/api/placeholder/400/300",
    syllabus: [
      "What is AI and Machine Learning?",
      "Training your first model",
      "Image recognition basics",
      "Understanding bias in AI",
      "Ethics in artificial intelligence",
      "Project planning and execution"
    ],
    projects: [
      "Image classifier for animals",
      "Bias detection experiment",
      "AI ethics presentation",
      "Personal ML project"
    ],
    requirements: [
      "Completed Python Fundamentals or equivalent",
      "Laptop with 8GB+ RAM",
      "Google account for Colab",
      "Camera or phone for image collection"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "My child couldn't stop coding after class! The peer instructors made it so approachable and fun.",
    name: "Sarah M.",
    role: "Parent"
  },
  {
    id: "2",
    quote: "I finally understand loops and functions. Having older kids teach me made all the difference!",
    name: "Alex K.",
    role: "Student"
  },
  {
    id: "3",
    quote: "The projects were amazing - I built a game I can actually show my friends. So proud!",
    name: "Maya R.",
    role: "Student"
  },
  {
    id: "4",
    quote: "Such a welcoming environment. My shy daughter came out of her shell and loves programming now.",
    name: "David L.",
    role: "Parent"
  },
  {
    id: "5",
    quote: "Learning AI from teenagers who actually get it was incredible. They explained everything so clearly.",
    name: "Jordan P.",
    role: "Student"
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "1",
    title: "The Idea Sparked",
    date: "January 2023",
    description: "Started with a simple question: why can't kids teach other kids to code?",
    image: "/api/placeholder/400/300",
    tag: "Foundation"
  },
  {
    id: "2",
    title: "First Coding Session",
    date: "March 2023",
    description: "Taught 3 friends Python basics in my bedroom. Everyone actually understood it!",
    image: "/api/placeholder/400/300",
    tag: "Teaching"
  },
  {
    id: "3",
    title: "Community Center Partnership",
    date: "May 2023",
    description: "Local community center offered us a classroom space for weekend sessions.",
    image: "/api/placeholder/400/300",
    tag: "Growth"
  },
  {
    id: "4",
    title: "First Official Camp",
    date: "June 2023",
    description: "8 kids signed up for our first 2-week Python camp. Nervous but excited!",
    image: "/api/placeholder/400/300",
    tag: "Milestone"
  },
  {
    id: "5",
    title: "AI Workshop Launch",
    date: "August 2023",
    description: "Introduced machine learning concepts with image recognition projects.",
    image: "/api/placeholder/400/300",
    tag: "Innovation"
  },
  {
    id: "6",
    title: "Parent Feedback Form",
    date: "September 2023",
    description: "Started collecting formal feedback. 100% would recommend to other families!",
    image: "/api/placeholder/400/300",
    tag: "Quality"
  },
  {
    id: "7",
    title: "Library Collaboration",
    date: "October 2023",
    description: "Public library invited us to run monthly coding hours for kids.",
    image: "/api/placeholder/400/300",
    tag: "Community"
  },
  {
    id: "8",
    title: "First Demo Day",
    date: "November 2023",
    description: "Kids presented their projects to families. So much pride and joy!",
    image: "/api/placeholder/400/300",
    tag: "Celebration"
  },
  {
    id: "9",
    title: "Virtual Sessions Begin",
    date: "December 2023",
    description: "Launched online classes to reach kids beyond our local area.",
    image: "/api/placeholder/400/300",
    tag: "Expansion"
  },
  {
    id: "10",
    title: "Student Instructors Join",
    date: "January 2024",
    description: "Three of our best students became peer instructors. Full circle moment!",
    image: "/api/placeholder/400/300",
    tag: "Leadership"
  },
  {
    id: "11",
    title: "30 Students Milestone",
    date: "February 2024",
    description: "Reached 30 students taught across all our programs. Growing strong!",
    image: "/api/placeholder/400/300",
    tag: "Impact"
  },
  {
    id: "12",
    title: "Website Launch",
    date: "March 2024",
    description: "Built our own website to share our story and reach even more families.",
    image: "/api/placeholder/400/300",
    tag: "Digital"
  }
];

export const stats: Stat[] = [
  {
    label: "Students Reached",
    value: "30+",
    description: "Amazing kids who've joined our coding journey"
  },
  {
    label: "Sessions Run",
    value: "8",
    description: "Camps and workshops completed successfully"
  },
  {
    label: "Average Rating",
    value: "4.9/5",
    description: "Parent and student satisfaction score"
  },
  {
    label: "Projects Completed",
    value: "60+",
    description: "Games, apps, and AI models built by students"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "/api/placeholder/600/400",
    caption: "Students working on their first Python projects during summer camp",
    category: "Camps",
    date: "June 2023",
    credit: "Photo by teaching team"
  },
  {
    id: "2",
    image: "/api/placeholder/600/400",
    caption: "Demo Day presentations - kids showing off their games",
    category: "Events",
    date: "November 2023",
    credit: "Photo by parent volunteers"
  },
  {
    id: "3",
    image: "/api/placeholder/600/400",
    caption: "AI workshop - training image classifiers",
    category: "Camps",
    date: "August 2023"
  },
  {
    id: "4",
    image: "/api/placeholder/600/400",
    caption: "Calculator app built by 12-year-old Maya",
    category: "Projects",
    date: "July 2023"
  },
  {
    id: "5",
    image: "/api/placeholder/600/400",
    caption: "Rock-Paper-Scissors tournament with student-built games",
    category: "Events",
    date: "September 2023"
  },
  {
    id: "6",
    image: "/api/placeholder/600/400",
    caption: "Data visualization projects showing local weather patterns",
    category: "Projects",
    date: "October 2023"
  }
];