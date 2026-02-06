export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  subject: string;
  chapter?: string;
}

export interface Resource {
  title: string;
  description: string;
  subject: string;
  class: string;
  fileSize: string;
  lastUpdated: string;
  pages: number | string;
  fileUrl: string;
}

export interface Metadata {
  siteInfo: {
    title: string;
    description: string;
    contactEmail: string;
    youtubeChannel: string;
    displayNumbers: {
      videosDisplay: string;
      notesDisplay: string;
      papersDisplay: string;
      caiDisplay: string;
      plansDisplay: string;
      schemesDisplay: string;
    };
  };
  videos: Video[];
  notes: Resource[];
  pastPapers: Resource[];
  cai: Resource[];
  lessonPlans: Resource[];
  schemesOfWork: Resource[];
}

export const metadata: Metadata = {
  siteInfo: {
    title: "Complete Academic Hub",
    description: "Free educational resources for students and teachers",
    contactEmail: "contact@example.com",
    youtubeChannel: "UC_YOUR_CHANNEL_ID",
    displayNumbers: {
      videosDisplay: "500+",
      notesDisplay: "800+",
      papersDisplay: "1500+",
      caiDisplay: "300+",
      plansDisplay: "600+",
      schemesDisplay: "400+"
    }
  },

  videos: [
    {
      id: "dQw4w9WgXcQ",
      title: "How to Study Effectively",
      description: "Learn proven study techniques and strategies to maximize your learning efficiency.",
      duration: "15:30",
      subject: "Study Skills",
      chapter: "Learning Methods"
    },
    {
      id: "jNgSpl45AHE",
      title: "Learn JavaScript - Full Course for Beginners",
      description: "Complete JavaScript programming course for absolute beginners.",
      duration: "3:26:43",
      subject: "Computer Science",
      chapter: "Programming"
    },
    {
      id: "pQN-pnXPaVg",
      title: "HTML Full Course - Build a Website Tutorial",
      description: "Learn the basics of HTML5 and web development in this crash course.",
      duration: "2:02:32",
      subject: "Computer Science",
      chapter: "Web Development"
    },
    {
      id: "kfChJH47V18",
      title: "Introduction to Calculus",
      description: "Basic concepts of differential and integral calculus explained clearly.",
      duration: "18:45",
      subject: "Mathematics",
      chapter: "Calculus"
    },
    {
      id: "fFkzJKYdS2Q",
      title: "Physics: Laws of Motion",
      description: "Understanding Newton's three laws of motion with practical examples.",
      duration: "22:15",
      subject: "Physics",
      chapter: "Mechanics"
    },
    {
      id: "yFq8a5D8Z6M",
      title: "Chemistry: Periodic Table Explained",
      description: "Complete guide to the periodic table and element properties.",
      duration: "19:30",
      subject: "Chemistry",
      chapter: "Periodic Table"
    },
    {
      id: "uBGl2BujkPQ",
      title: "Biology: Cell Structure",
      description: "Detailed explanation of eukaryotic and prokaryotic cell structures.",
      duration: "16:40",
      subject: "Biology",
      chapter: "Cell Biology"
    },
    {
      id: "zQGOcOUBi6s",
      title: "History: World War I Summary",
      description: "Key events, causes, and consequences of World War I.",
      duration: "25:10",
      subject: "History",
      chapter: "World Wars"
    }
  ],

  notes: [
    {
      title: "Complete Mathematics Notes",
      description: "Comprehensive notes covering algebra, geometry, calculus, and statistics.",
      subject: "Mathematics",
      grade: "Grade 11-12",
      fileSize: "4.2 MB",
      lastUpdated: "2024-01-15",
      pages: 45,
      fileUrl: "https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing"
    },
    {
      title: "Physics Formula Guide",
      description: "All essential physics formulas with explanations and examples.",
      subject: "Physics",
      grade: "Grade 10-12",
      fileSize: "3.1 MB",
      lastUpdated: "2024-01-10",
      pages: 32,
      fileUrl: "https://drive.google.com/file/d/2MNO123PQR456STU789VWX/view?usp=sharing"
    },
    {
      title: "Chemistry Practical Guide",
      description: "Step-by-step instructions for common chemistry laboratory experiments.",
      subject: "Chemistry",
      grade: "Grade 11-12",
      fileSize: "2.8 MB",
      lastUpdated: "2024-01-18",
      pages: 28,
      fileUrl: "https://drive.google.com/file/d/3XYZ123ABC456DEF789GHI/view?usp=sharing"
    },
    {
      title: "Biology Revision Notes",
      description: "Concise notes covering all major biology topics for quick revision.",
      subject: "Biology",
      grade: "Grade 10-12",
      fileSize: "5.0 MB",
      lastUpdated: "2024-01-12",
      pages: 52,
      fileUrl: "https://drive.google.com/file/d/4JKL123MNO456PQR789STU/view?usp=sharing"
    },
    {
      title: "English Literature Analysis",
      description: "Analysis of major literary works and writing techniques.",
      subject: "English",
      grade: "Grade 9-12",
      fileSize: "3.5 MB",
      lastUpdated: "2024-01-08",
      pages: 38,
      fileUrl: "https://drive.google.com/file/d/5VWX123YZA456BCD789EFG/view?usp=sharing"
    },
    {
      title: "Computer Science Fundamentals",
      description: "Notes on programming basics, algorithms, and data structures.",
      subject: "Computer Science",
      grade: "Grade 11-12",
      fileSize: "3.9 MB",
      lastUpdated: "2024-01-20",
      pages: 41,
      fileUrl: "https://drive.google.com/file/d/6HIJ123KLM456NOP789QRS/view?usp=sharing"
    }
  ],

  pastPapers: [
    {
      title: "Geography Paper 3 - 2022",
      description: "2022 A level geography paper 3, Geography of Ugand and Fieldwork",
      subject: "Geography",
      grade: "Grade S6",
      fileSize: "506 KB",
      lastUpdated: "2024-01-05",
      pages: 24,
      fileUrl: "https://drive.google.com/file/d/1jrW-LqgUDY98Y851wWHhyVYn1oyViNeW/view?usp=sharing"
    },
    {
      title: "Geography Paper 1 2024",
      description: "EJEB MOCK Geography Paper 1 S4",
      subject: "Geography",
      grade: "Grade S4",
      fileSize: "903 KB",
      lastUpdated: "2024-01-06",
      pages: 6,
      fileUrl: "https://drive.google.com/file/d/1avk0QWGiQcGr18z6S9nmS4Ngp4tuyiZa/view?usp=sharing"
    },
    {
      title: "Chemistry Paper 1 - 2023",
      description: "2023 Chemistry Paper 1 with answer key.",
      subject: "Chemistry",
      grade: "Grade 12",
      fileSize: "2.5 MB",
      lastUpdated: "2024-01-07",
      pages: 22,
      fileUrl: "https://drive.google.com/file/d/PAPER_ID_CHEM_2023_1/view?usp=sharing"
    },
    {
      title: "Biology Paper 2 - 2023",
      description: "2023 Biology Paper 2 with practical questions.",
      subject: "Biology",
      grade: "Grade 12",
      fileSize: "3.2 MB",
      lastUpdated: "2024-01-08",
      pages: 26,
      fileUrl: "https://drive.google.com/file/d/PAPER_ID_BIO_2023_2/view?usp=sharing"
    },
    {
      title: "English Paper 1 - 2023",
      description: "2023 English Language Paper 1.",
      subject: "English",
      grade: "Grade 12",
      fileSize: "2.1 MB",
      lastUpdated: "2024-01-09",
      pages: 20,
      fileUrl: "https://drive.google.com/file/d/PAPER_ID_ENG_2023_1/view?usp=sharing"
    },
    {
      title: "Mathematics Paper 2 - 2022",
      description: "2022 Mathematics Paper 2 with solutions.",
      subject: "Mathematics",
      grade: "Grade 12",
      fileSize: "3.0 MB",
      lastUpdated: "2024-01-10",
      pages: 25,
      fileUrl: "https://drive.google.com/file/d/PAPER_ID_MATH_2022_2/view?usp=sharing"
    }
  ],

  cai: [
    {
      title: "Mathematics Quiz 1 - Algebra",
      description: "Algebra quiz covering basic concepts and equations.",
      subject: "Mathematics",
      grade: "Grade 10",
      fileSize: "1.2 MB",
      lastUpdated: "2024-02-01",
      pages: 8,
      fileUrl: "https://drive.google.com/file/d/CAI_ID_MATH_QUIZ1/view?usp=sharing"
    },
    {
      title: "Physics Test - Mechanics",
      description: "Assessment test on mechanics with multiple choice and problems.",
      subject: "Physics",
      grade: "Grade 11",
      fileSize: "1.8 MB",
      lastUpdated: "2024-02-05",
      pages: 12,
      fileUrl: "https://drive.google.com/file/d/CAI_ID_PHYSICS_TEST/view?usp=sharing"
    },
    {
      title: "Chemistry Assignment - Periodic Table",
      description: "Research assignment on periodic table trends and properties.",
      subject: "Chemistry",
      grade: "Grade 10",
      fileSize: "2.1 MB",
      lastUpdated: "2024-02-10",
      pages: 15,
      fileUrl: "https://drive.google.com/file/d/CAI_ID_CHEM_ASSIGN/view?usp=sharing"
    },
    {
      title: "Biology Practical Assessment",
      description: "Practical assessment guide for biology experiments.",
      subject: "Biology",
      grade: "Grade 12",
      fileSize: "3.5 MB",
      lastUpdated: "2024-02-15",
      pages: 18,
      fileUrl: "https://drive.google.com/file/d/CAI_ID_BIO_PRACTICAL/view?usp=sharing"
    },
    {
      title: "English Comprehension Test",
      description: "Reading comprehension and language skills assessment.",
      subject: "English",
      grade: "Grade 9-12",
      fileSize: "1.5 MB",
      lastUpdated: "2024-02-20",
      pages: 10,
      fileUrl: "https://drive.google.com/file/d/CAI_ID_ENG_TEST/view?usp=sharing"
    },
    {
      title: "Computer Science Project Rubric",
      description: "Assessment rubric for programming projects.",
      subject: "Computer Science",
      grade: "Grade 11-12",
      fileSize: "0.9 MB",
      lastUpdated: "2024-02-25",
      pages: 6,
      fileUrl: "https://drive.google.com/file/d/CAI_ID_CS_RUBRIC/view?usp=sharing"
    }
  ],

  lessonPlans: [
    {
      title: "Mathematics Lesson Plan - Algebra",
      description: "Weekly lesson plan for Algebra topics.",
      subject: "Mathematics",
      grade: "Grade 10",
      fileSize: "1.8 MB",
      lastUpdated: "2024-01-12",
      pages: 15,
      fileUrl: "https://drive.google.com/file/d/PLAN_ID_MATH_ALGEBRA/view?usp=sharing"
    },
    {
      title: "Physics Syllabus Guide",
      description: "Complete physics syllabus for the academic year.",
      subject: "Physics",
      grade: "Grade 11-12",
      fileSize: "3.2 MB",
      lastUpdated: "2024-01-08",
      pages: 35,
      fileUrl: "https://drive.google.com/file/d/SYLLABUS_ID_PHYSICS/view?usp=sharing"
    },
    {
      title: "Chemistry Lesson Plan - Term 1",
      description: "Daily lesson plans for Term 1 chemistry topics.",
      subject: "Chemistry",
      grade: "Grade 11",
      fileSize: "2.2 MB",
      lastUpdated: "2024-01-14",
      pages: 18,
      fileUrl: "https://drive.google.com/file/d/PLAN_ID_CHEM_TERM1/view?usp=sharing"
    },
    {
      title: "Biology Syllabus",
      description: "Complete biology syllabus with learning objectives.",
      subject: "Biology",
      grade: "Grade 10-12",
      fileSize: "4.0 MB",
      lastUpdated: "2024-01-16",
      pages: 42,
      fileUrl: "https://drive.google.com/file/d/SYLLABUS_ID_BIOLOGY/view?usp=sharing"
    },
    {
      title: "English Lesson Plan - Poetry",
      description: "Two-week lesson plan for poetry analysis.",
      subject: "English",
      grade: "Grade 9",
      fileSize: "1.5 MB",
      lastUpdated: "2024-01-18",
      pages: 12,
      fileUrl: "https://drive.google.com/file/d/PLAN_ID_ENG_POETRY/view?usp=sharing"
    },
    {
      title: "Computer Science Curriculum",
      description: "Full year computer science curriculum guide.",
      subject: "Computer Science",
      grade: "Grade 11-12",
      fileSize: "3.8 MB",
      lastUpdated: "2024-01-20",
      pages: 38,
      fileUrl: "https://drive.google.com/file/d/CURRICULUM_ID_CS/view?usp=sharing"
    }
  ],

  schemesOfWork: [
    {
      title: "Mathematics Scheme of Work - Term 1",
      description: "Complete scheme of work for Term 1 mathematics.",
      subject: "Mathematics",
      grade: "Grade 10",
      fileSize: "2.3 MB",
      lastUpdated: "2024-01-18",
      pages: 22,
      fileUrl: "https://drive.google.com/file/d/0Bx2v_cVPUhbCc3RhcnRlcl9maWxl/view?usp=sharing"
    },
    {
      title: "Science Annual Scheme",
      description: "Year-long scheme covering physics, chemistry, biology.",
      subject: "Science",
      grade: "All Levels",
      fileSize: "4.8 MB",
      lastUpdated: "2024-01-14",
      pages: 45,
      fileUrl: "https://drive.google.com/file/d/SCHEME_ID_SCIENCE_ANNUAL/view?usp=sharing"
    },
    {
      title: "Physics Scheme of Work - Grade 12",
      description: "Detailed scheme of work for Grade 12 physics.",
      subject: "Physics",
      grade: "Grade 12",
      fileSize: "3.5 MB",
      lastUpdated: "2024-01-22",
      pages: 32,
      fileUrl: "https://drive.google.com/file/d/SCHEME_ID_PHYSICS_G12/view?usp=sharing"
    },
    {
      title: "Chemistry Term 2 Scheme",
      description: "Scheme of work for Term 2 chemistry topics.",
      subject: "Chemistry",
      grade: "Grade 11",
      fileSize: "2.1 MB",
      lastUpdated: "2024-01-24",
      pages: 19,
      fileUrl: "https://drive.google.com/file/d/SCHEME_ID_CHEM_TERM2/view?usp=sharing"
    },
    {
      title: "Biology Scheme of Work",
      description: "Complete biology scheme for all terms.",
      subject: "Biology",
      grade: "Grade 10-11",
      fileSize: "4.2 MB",
      lastUpdated: "2024-01-26",
      pages: 40,
      fileUrl: "https://drive.google.com/file/d/SCHEME_ID_BIOLOGY/view?usp=sharing"
    },
    {
      title: "Mathematics Grade 9 Scheme",
      description: "Annual scheme of work for Grade 9 mathematics.",
      subject: "Mathematics",
      grade: "Grade 9",
      fileSize: "3.0 MB",
      lastUpdated: "2024-01-28",
      pages: 28,
      fileUrl: "https://drive.google.com/file/d/SCHEME_ID_MATH_G9/view?usp=sharing"
    }
  ]
};
