export type Exp = {
  org: string; title: string; location: string; start: string; end: string; bullets: string[];
};
export type Proj = { name: string; bullets: string[]; link: string; tools: string[] };

export const profile = {
  name: "Pravin Rajah",
  tagline: "EECS @ UC Berkeley • SWE / QA • Full-Stack",
  location: "Berkeley, California",
  email: "pravin.rajah@gmail.com",
  phone: "(510) 364-4091",
  links: {
    linkedin: "https://www.linkedin.com/in/pravinrajah914",
    github: "https://github.com/pravinrajah14",
  },
  education: {
    school: "University of California, Berkeley",
    degree: "B.S. in Electrical Engineering and Computer Science",
    gpa: "3.7",
    gradDate: "Dec. 2027",
  },
  experience: [
    {
      org: "UC Berkeley — SIS",
      title: "Quality Assurance Assistant",
      location: "Berkeley, CA",
      start: "Jun. 2025",
      end: "Present",
      bullets: [
        "Developed automated tests to ensure functionality and reliability of CalCentral, with 50,000+ users",
        "Created QA processes with Ruby and Selenium to improve testing efficiency and overall site performance.",
        "Collaborated with team members to identify and resolve issues, for a high-quality user experience.",
      ],
    },
    {
      org: "HARP Contracting (Open Project)",
      title: "Full-Stack Developer",
      location: "Berkeley, CA",
      start: "Sep. 2024",
      end: "Dec. 2024",
      bullets: [
        "Utilized front-end development skills, including React and Firebase, to implement user authentication, dynamic UI improvements, and real-time features like word highlighting and note formatting.",
        "Applied knowledge of PostgreSQL, Amazon S3 storage, and Flask to integrate PDF processing and data management functionalities, ensuring seamless user experience and data accessibility.",
      ],
    },
    {
      org: "Care For Education",
      title: "Website Designer",
      location: "Colombo, Sri Lanka (remote)",
      start: "Sep. 2022",
      end: "Oct. 2023",
      bullets: [
        "Remote volunteer experience redesigning the organization’s website and creating Facebook posts to enhance user engagement and boost organization’s internet appearance using WordPress.",
        "Captured media to be directly implemented onto website and show direct impact of organization’s work",
      ],
    },
  ] as Exp[],
  projects: [
    {
      name: "Stock Dashboard",
      bullets: [
        "Developed a full-stack analytics dashboard (React, Express, Yahoo Finance API) to teach myself introductory concepts in quantitative finance and experiment with ideas.",
        "Implemented charts for price trends, rolling volatility, drawdowns, and CAPM beta/alpha.",
        "Built reusable UI components and backend APIs for metrics (CAGR, Sharpe, max drawdown, volatility).",
      ],
      link: "https://github.com/pravinrajah14/stock-tracker",
      tools: ["React", "Express", "Node.js", "Yahoo Finance API", "ReCharts"],
    },
    {
      name: "Django Course Descriptions - HKN",
      bullets: [
        "Developed a dynamic course description feature using Django's template inheritance, integrating with base.html and URL routing.",
        "Implemented database-driven content using a CourseDescription model with slug-based URLs for SEO- and user-friendly navigation.",
      ],
      link: "https://github.com/compserv/hknweb/pull/575",
      tools: ["Django", "Python", "HTML/CSS", "Bootstrap", "SQLite"],
    },
    {
      name: "Dengue Protein Analysis (Inspirit AI)",
      bullets: [
        "Researched methods to destabilize dengue virus proteins using diffusion models to target key hotspots and disrupt replication.",
        "Used Pandas and Seaborn to visualize and analyze RMSD and related metrics.",
      ],
      link: "",
      tools: ["Python", "Pandas", "NumPy", "Seaborn", "PyMOL"],
    },
    {
      name: "Personal Portfolio",
      bullets: [
        "Built with Next.js 15 and Tailwind CSS v4.",
        "You’re viewing it now!",
      ],
      link: "",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ] as Proj[],
  skills: {
    languages: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL", "Ruby", "C", "RISC-V"],
    frameworks: ["React", "Next.js", "Node.js", "Flask", "Django", "Firebase", "Tailwind", "NumPy", "Pandas", "Cucumber"],
    tools: ["WordPress", "Git", "Jira", "Selenium", "MS Suite"],
    courses: [
      "Data Structures and Algorithms",
      "Computer Architecture",
      "Discrete Math & Probability",
      "Designing Information Devices and Systems",
      "Structure/Interpretation of Computer Programs",
    ],
  },
};
