import type { PreviewVariant } from "@/components/ProjectPreview";

export type Exp = {
  org: string; title: string; location: string; start: string; end: string; bullets: string[];
};
export type Proj = { name: string; bullets: string[]; link: string; tools: string[]; preview: PreviewVariant };

export const profile = {
  name: "Pravin Rajah",
  tagline: "EECS student at UC Berkeley building ML systems and full-stack platforms.",
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
    gradDate: "May 2028",
    awards: ["Eta Kappa Nu (HKN) – EECS Honor Society", "IEEE"],
  },

  experience: [
    {
      org: "Amazon AWS",
      title: "Software Engineering Intern",
      location: "Seattle, WA",
      start: "Jun. 2026",
      end: "Aug. 2026",
      bullets: [
        "Engineered a query pipeline capable of retrieving full product-history metrics in under 1 second, redesigning architecture off the legacy V1 Business Insights platform to improve reliability and efficiency for managers and engineers.",
        "Designed and shipped an end-to-end internal analytics dashboard for AWS Resilience Hub, automating a manual daily process with a 24-hour staleness SLA, with full CDK infra and test coverage through canaries and alarms.",
        "Delivered the project in 8 weeks against a 12-week estimate, then kept driving impact with a fast-follow feature for the platform and a run of bug fixes and pipeline optimizations.",
      ],
    },
    {
      org: "Oracle",
      title: "Machine Learning Consultant",
      location: "Berkeley, CA",
      start: "Feb. 2026",
      end: "May 2026",
      bullets: [
        "Built a LangGraph agent that turns prompts into multi-week outdoor activity plans across 3,300+ trails, synced to Google Calendar.",
        "Engineered an Oracle 23ai recommendation system combining vector, spatial, and graph search, scaling to 100k+ users.",
        "Shipped a full-stack app with database setup as reproducible SQL scripts and a Docker + OCI deploy pipeline.",
      ],
    },
    {
      org: "Berkeleytime",
      title: "Fullstack Developer",
      location: "Berkeley, CA",
      start: "Sep. 2025",
      end: "May 2026",
      bullets: [
        "Engineered a real-time notifications platform integrated into BerkeleyTime, enabling 30K+ UC Berkeley students to manage class enrollment with live updates, persistent storage, secure authentication, and a seamless user experience.",
        "Created platform coverage across 300+ UC Berkeley classes, ensuring seamless integration with course infrastructure.",
        "Designed and deployed a GraphQL API with Mongoose, providing reliable CRUD operations, auto timestamping, and robust error handling consistent with production standards.",
      ],
    },
    {
      org: "SAP",
      title: "Machine Learning Consultant",
      location: "Berkeley, CA",
      start: "Sep. 2025",
      end: "Dec. 2025",
      bullets: [
        "Developed an AI chatbot processing 100+ articles and research papers (LangChain, ChromaDB) to answer research queries.",
        "Engineered a RAG pipeline that cut operational costs while maintaining sub-1-second query response times.",
        "Architected a modular AI system with 4 microservices for processing, vector storage, retrieval, and the interface layer.",
      ],
    },
  ] as Exp[],

  leadership: [
    {
      org: "EECS Honor Society (HKN)",
      title: "External Vice President",
      location: "Berkeley, CA",
      start: "Dec. 2025",
      end: "May 2026",
      bullets: [
        "Led onboarding and programming for 60+ prospective members across 30+ events, coordinating logistics end to end.",
        "Ran cross-committee operations, coordinating transitions across 9 committees and communications for 50+ officers to align timelines, standardize handoffs, and keep execution consistent across the semester.",
        "Increased engagement by launching 10+ new event formats and creating direct-impact committee projects.",
      ],
    },
    {
      org: "Sierra Service Project",
      title: "Board Member",
      location: "Sacramento, CA",
      start: "Oct. 2022",
      end: "Sep. 2024",
      bullets: [
        "Started an initiative that grew youth board and advisory council membership by 45%.",
        "Built programs to draw in new youth and engage the existing youth community across 4 counties.",
        "Advised on 15+ community-improvement service projects and advocated board-level approval for youth-led initiatives.",
      ],
    },
  ] as Exp[],

  projects: [
    {
      name: "Latency Simulator for Systolic-Array Accelerators",
      bullets: [
        "Built a closed-form simulator estimating training-step latency for transformer layers on systolic arrays.",
        "Cross-validated cycles and DRAM traffic against Timeloop's mapping search, hitting an exact traffic match.",
        "Cut real-GPU step-latency error from 500% to 7% via calibrated compute-efficiency and overhead corrections.",
      ],
      link: "https://github.com/pravinrajah14/accel-sim",
      tools: ["Python", "PyTorch", "CUDA"],
      preview: "systolic",
    },
    {
      name: "Roadside Vehicle Headway Estimation",
      bullets: [
        "Estimates following distance and per-vehicle speed from a single fixed traffic camera using YOLO11 detection, ByteTrack, and a ground-plane homography, with Depth Anything V2 as an occlusion signal.",
        "Validated on two independently calibrated NGSIM cameras against real ground truth on held-out footage the calibration never saw (speed MAE 3.6 and 4.7 m/s).",
        "Documented negative results in full, including a fine-tuning experiment that exposed a bias in the auto-labeling process; 63 offline unit tests.",
      ],
      link: "https://github.com/pravinrajah14/cv-project",
      tools: ["Python", "PyTorch", "OpenCV", "YOLO"],
      preview: "road",
    },
    {
      name: "Calibrated Router for Mixture-of-Experts",
      bullets: [
        "Built a toy Mixture-of-Experts model whose router is a calibrated typed-decision gate with an explicit \"unsure\" option and post-hoc temperature scaling, instead of a standard linear-softmax gate.",
        "Compared four router configurations under soft and hard top-k mixing, measuring accuracy, expert purity, and ECE; decoupling the gate recovered standard-gate accuracy while keeping calibrated confidence.",
        "Reproducible end to end from configs, with 35 tests covering gradient flow, temperature invariance, and load-balancing loss bounds.",
      ],
      link: "https://github.com/pravinrajah14/jev-exploration",
      tools: ["Python", "PyTorch"],
      preview: "router",
    },
    {
      name: "PintOS Operating System",
      bullets: [
        "Engineered core kernel subsystems for a UNIX-like OS, designing a priority-donation scheduler that eliminated priority inversion across nested locks and condition variables under concurrent execution.",
        "Built process isolation and virtual memory from scratch — safe user-program execution, page-fault-driven demand paging, and dynamic stack growth for programs beyond physical memory limits.",
        "Designed a crash-resilient file system with an LRU-cached buffer layer and extensible inodes, cutting redundant disk I/O while supporting dynamic file growth and nested directories.",
      ],
      link: "",
      tools: ["C"],
      preview: "kernel",
    },
    {
      name: "Stock Dashboard (Analysis & Backtesting)",
      bullets: [
        "Built a full-stack analytics dashboard (React, Express, Yahoo Finance API) to explore quantitative finance and backtest investment strategies.",
        "Implemented charts for price trends, rolling volatility, drawdowns, and CAPM beta/alpha.",
        "Built reusable UI components and backend APIs for metrics like CAGR, Sharpe ratio, max drawdown, and volatility.",
      ],
      link: "https://github.com/pravinrajah14/stock-tracker",
      tools: ["React", "Express", "Node.js", "Yahoo Finance API", "Recharts"],
      preview: "candles",
    },
    {
      name: "Dynamic Course Description Model (HKN)",
      bullets: [
        "Designed a database-driven CourseDescription model with slug-based URLs for SEO-friendly, discoverable course pages.",
        "Replaced 300+ individually managed files with a single dynamic feature, supporting 5,000+ students during course selection.",
        "Built the feature on Django's template inheritance for scalable page generation within the existing site structure.",
      ],
      link: "https://github.com/compserv/hknweb/pull/575",
      tools: ["Django", "Python", "HTML/CSS", "Bootstrap", "SQLite"],
      preview: "nodes",
    },
  ] as Proj[],

  skills: {
    languages: ["C++", "Python", "Java", "TypeScript", "C", "SQL", "x86", "Rust"],
    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Flask",
      "GraphQL",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "OpenCV",
      "Matplotlib",
      "Redux",
      "Tailwind CSS",
    ],
    databases: ["PostgreSQL", "MySQL", "DynamoDB"],
    tools: ["Docker", "Kubernetes", "Terraform", "AWS Services", "Git"],
    courses: [
      "Data Structures and Algorithms",
      "Discrete Mathematics and Probability Theory",
      "Computer Architecture",
      "Operating Systems / System Programming",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Internet Architecture",
    ],
  },
};
