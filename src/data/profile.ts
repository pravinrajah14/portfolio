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
    gpa: "3.75",
    gradDate: "May. 2027",
    awards: ["Eta Kappa Nu (HKN) – EECS Honor Society"],
    organizations: ["IEEE"],
  },

  experience: [
    {
      org: "SAP",
      title: "Software Engineer Consultant",
      location: "Berkeley, CA",
      start: "Sep. 2025",
      end: "Present",
      bullets: [
        "Built an AI assistant to automate UX research analysis across usability studies, A/B tests, and analytics data.",
        "Implemented NLP features to interpret prompts, summarize findings, and recommend usability testing strategies.",
        "Delivered a web tool/Figma plugin that streamlined design workflows and automated competitor benchmarking.",
      ],
    },
    {
      org: "BerkeleyTime",
      title: "Full-Stack Developer",
      location: "Berkeley, CA",
      start: "Sep. 2025",
      end: "Present",
      bullets: [
        "Engineered a real-time discussion platform integrated into BerkeleyTime, enabling 5000+ students to post and manage comments with live updates, persistent storage, and secure authentication.",
        "Extended coverage across 300+ UC Berkeley classes with seamless course infrastructure integration.",
        "Designed and deployed a GraphQL API backed by Mongoose, providing robust CRUD, timestamps, and error handling.",
      ],
    },
    {
      org: "UC Berkeley — SIS",
      title: "Quality Assurance Assistant",
      location: "Berkeley, CA",
      start: "Jun. 2025",
      end: "Present",
      bullets: [
        "Maintained 40+ automated Ruby/Selenium test scripts for critical features, reducing repetitive manual testing.",
        "Created QA workflows to catch regressions, improving reliability for a site used by 50,000+ students and faculty.",
        "Partnered with developers to debug infrastructure issues for smooth semester rollouts.",
      ],
    },
    {
      org: "HARP AI",
      title: "Full-Stack Developer Consultant",
      location: "Berkeley, CA",
      start: "Sep. 2024",
      end: "Dec. 2024",
      bullets: [
        "Built attention-focused reading features (React/Firebase) displaying text word-by-word to aid comprehension.",
        "Integrated PDF upload/preview with a secure backend (Flask, PostgreSQL) for reliable note access.",
        "Delivered an MVP study tool piloted by students, combining focused reading with note-taking.",
      ],
    },
    {
      org: "Care For Education",
      title: "Website Designer",
      location: "Colombo, Sri Lanka (remote)",
      start: "Sep. 2022",
      end: "Oct. 2023",
      bullets: [
        "Redesigned the organization’s website and created Facebook posts to enhance user engagement using WordPress.",
        "Captured media to implement on the site and show direct impact of the organization’s work.",
      ],
    },
    {
      org: "Sierra Service Project",
      title: "Board Member",
      location: "Sacramento, CA",
      start: "Sep. 2022",
      end: "Oct. 2024",
      bullets: [
        "Led an initiative increasing youth board and advisory council membership by 45%.",
        "Launched programs to attract and engage youth across four counties.",
        "Provided perspective on 15+ service projects; advocated for youth initiatives at the board level.",
      ],
    },
  ] as Exp[],

  projects: [
    {
      name: "Stock Dashboard (Analysis & Backtesting)",
      bullets: [
        "Developed a full-stack analytics dashboard (React, Express, Yahoo Finance API) to explore quantitative finance, learn fundamentals, and experiment with investment strategies and predictive models.",
        "Implemented charts for price trends, rolling volatility, drawdowns, and CAPM beta/alpha.",
        "Built reusable UI components and backend APIs for metrics (CAGR, Sharpe, max drawdown, volatility).",
      ],
      link: "https://github.com/pravinrajah14/stock-tracker",
      tools: ["React", "Express", "Node.js", "Yahoo Finance API", "ReCharts"],
    },
    {
      name: "Dynamic Course Description Model (HKN)",
      bullets: [
        "Developed a dynamic course description feature using Django’s template inheritance, integrated with base.html and routing.",
        "Implemented a database-driven CourseDescription model with slug-based URLs for SEO- and user-friendly navigation.",
        "Streamlined access to course information for 5000+ students without managing 300+ individual files.",
      ],
      link: "https://github.com/compserv/hknweb/pull/575",
      tools: ["Django", "Python", "HTML/CSS", "Bootstrap", "SQLite"],
    },
    {
      name: "Dengue Protein Analysis (Inspirit AI)",
      bullets: [
        "Researched methods to destabilize dengue virus proteins using diffusion models to target hotspots and disrupt replication.",
        "Used Pandas and Seaborn to visualize and analyze RMSD and related metrics.",
      ],
      link: "",
      tools: ["Python", "Pandas", "NumPy", "Seaborn", "PyMOL"],
    },
    {
      name: "Personal Portfolio",
      bullets: [
        "Built with Next.js 15 and Tailwind CSS v4.",
        "Deployed responsive, fast pages with modern UI components.",
        "You’re viewing it now!",
      ],
      link: "",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ] as Proj[],

  skills: {
    languages: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL", "Ruby", "C", "RISC-V"],
    frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Flask",
      "Django",
      "Firebase",
      "Tailwind",
      "NumPy",
      "Pandas",
      "Cucumber",
      "GraphQL",
      "Mongoose",
      "Bootstrap",
    ],
    databases: ["PostgreSQL", "SQLite"],
    tools: ["Docker", "Git", "Selenium", "WordPress", "Jira", "MS Suite"],
    courses: [
      "Data Structures and Algorithms",
      "Discrete Mathematics & Probability Theory",
      "Computer Architecture",
      "Structure and Interpretation of Computer Programs",
      "Designing Information Devices and Systems (I & II)",
      "Operating Systems and System Programming",
      "Optimization",
      "Machine Learning",
    ],
  },
};
