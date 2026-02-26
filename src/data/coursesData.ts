export interface Assessment {
  MCQ: string;
  Practical: string;
  Total: string;
}

export interface Course {
  slug: string;
  title: string;
  category?: string;
  duration: string;
  fees?: string;
  modules_count?: number;
  key_topics?: string[];
  core_modules?: Record<string, string>;
  assessment: Assessment;
}

export interface CourseCategory {
  title: string;
  programs: Course[];
}

export const coursesData: Record<string, CourseCategory> = {
  Student_Programs: {
    title: "For Students (Short Term Courses)",
    programs: [
      {
        slug: "cyber-security-90-days",
        title: "Cyber Security",
        category: "Short Term Course",
        duration: "90 Days",
        fees: "₹ 15,000",
        modules_count: 19,
        key_topics: [
          "Cyber Security Fundamentals (CIA Triad, OSI Model)",
          "Networking (IP, Ports, DNS, DHCP)",
          "Linux for Hackers",
          "Ethical Hacking lifecycle",
          "Information Gathering (OSINT, Google Dorking)",
          "Network Scanning (Nmap, Banner Grabbing)",
          "System Hacking & Password Attacks",
          "Web Tech (HTTP/S, Cookies)",
          "OWASP Top 10 (SQLi, XSS, CSRF)",
          "Network Attacks (MITM, DoS)",
          "Security Tools (Wireshark, Burp Suite, Nikto)",
          "Firewall & IDS",
          "Cryptography",
          "API & Cloud Security",
          "Secure Coding Practices",
        ],
        assessment: {
          MCQ: "30 Marks",
          Practical: "70 Marks",
          Total: "100 Marks",
        },
      },
      {
        slug: "web-development-90-days",
        title: "Web Development",
        category: "Short Term Course",
        duration: "90 Days",
        fees: "₹ 15,000",
        modules_count: 19,
        key_topics: [
          "Frontend vs Backend & VS Code",
          "HTML Structure & Semantic Tags",
          "CSS Layout (Box Model, Flexbox, Grid)",
          "Tailwind CSS (Utility Classes, Responsive Design)",
          "JavaScript (Fundamentals, ES6, DOM Manipulation)",
          "Git & GitHub",
          "React.js (Vite, Components, Hooks, Routing)",
          "API Integration (Fetch, Async/Await)",
          "Deployment (Netlify, GitHub Pages)",
          "Portfolio Project",
        ],
        assessment: {
          MCQ: "30 Marks",
          Practical: "70 Marks",
          Total: "100 Marks",
        },
      },
      {
        slug: "accounting-with-ai-90-days",
        title: "Accounting with AI",
        category: "Short Term Course",
        duration: "90 Days",
        fees: "₹ 15,000",
        modules_count: 19,
        key_topics: [
          "Accounting Principles & Journal Entries",
          "Ledger, Trial Balance & Final Accounts",
          "TallyPrime (Company Creation, Vouchers, GST Setup)",
          "GST Fundamentals & Invoicing",
          "Inventory & Payroll Management",
          "Banking & Reconciliation",
          "Generative AI for Accountants",
          "AI Prompt Writing for Financial Reports",
          "AI + Tally Workflow Automation",
          "Excel Automation using AI",
        ],
        assessment: {
          MCQ: "30 Marks",
          Practical: "70 Marks",
          Total: "100 Marks",
        },
      },
      {
        slug: "cyber-security-45-days",
        title: "Cyber Security Basics",
        category: "Short Term Course",
        duration: "45 Days",
        fees: "₹ 8,000",
        modules_count: 15,
        key_topics: [
          "Cyber Security Basics",
          "Networking for Security",
          "Linux Security Fundamentals",
          "Footprinting & OSINT",
          "Network & Vulnerability Scanning (CVE/CVSS)",
          "Web App Security",
          "OWASP Top 10",
          "Network Attacks (MITM, Sniffing)",
          "Security Tools",
          "Secure Coding & MERN Stack Security",
          "Incident Response & Final Project",
        ],
        assessment: {
          MCQ: "30 Marks",
          Practical: "70 Marks",
          Total: "100 Marks",
        },
      },
      {
        slug: "web-development-45-days",
        title: "Web Development Basics",
        category: "Short Term Course",
        duration: "45 Days",
        fees: "₹ 8,000",
        modules_count: 15,
        key_topics: [
          "Web Fundamentals",
          "HTML (Fundamentals to Advanced/SEO)",
          "CSS (Layout, Flexbox, Grid)",
          "Responsive Design",
          "Bootstrap & Tailwind CSS",
          "JavaScript (Fundamentals & DOM)",
          "Portfolio & Responsive Website Projects",
          "Deployment Basics",
        ],
        assessment: {
          MCQ: "30 Marks",
          Practical: "70 Marks",
          Total: "100 Marks",
        },
      },
    ],
  },
  Faculty_Programs: {
    title: "For Faculty (FDP)",
    programs: [
      {
        slug: "data-analysis-fdp",
        title: "Data Analysis FDP",
        duration: "30 Days / 60 Hours",
        core_modules: {
          Excel: "Advanced Functions, Data Cleaning, Pivot Tables, Power Query",
          Statistics:
            "Descriptive Statistics, Probability, Hypothesis Testing, Forecasting",
          SQL: "MySQL, Joins, Subqueries, Window Functions, CTEs",
          Power_BI: "Data Visualization, DAX, Modelling, ETL, Dashboarding",
          Projects: "Business Case Studies & Capstone Project",
        },
        assessment: {
          MCQ: "40 Marks",
          Practical: "60 Marks",
          Total: "100 Marks",
        },
      },
      {
        slug: "cyber-security-fdp",
        title: "Cyber Security FDP",
        duration: "30 Days / 60 Hours",
        core_modules: {
          Web_Development: "HTML5, CSS, Tailwind CSS, JS Basics",
          Fundamentals: "Computer Hardware/Software, Linux/Windows OS",
          Networking: "OSI Model, IP Addressing, Troubleshooting",
          Cyber_Security:
            "Ethical Hacking, Vulnerability Basics, Web Security (OWASP Top 10)",
          Generative_AI:
            "LLMs, Prompt Engineering, AI in Code & Threat Detection",
          Project: "AI-based Code Assistant / Security Chatbot",
        },
        assessment: {
          MCQ: "40 Marks",
          Practical: "60 Marks",
          Total: "100 Marks",
        },
      },
      {
        slug: "artificial-intelligence-fdp",
        title: "Artificial Intelligence FDP",
        duration: "30 Days / 60 Hours",
        core_modules: {
          Python: "Fundamentals, Data Structures, Modular Programming",
          Data_Handling: "File Handling (CSV, Pickle), MySQL Connectivity",
          NumPy_Pandas:
            "Statistical Computing, Data Preprocessing, Series/DataFrames",
          EDA_Visualization:
            "Matplotlib, Seaborn, Outlier Detection, Feature Creation",
          Machine_Learning:
            "Regression (L1/L2), Classification (KNN, Decision Tree, Random Forest), Clustering (K-Means, Hierarchical)",
          Capstone: "Kaggle Dataset Projects & End-to-End ML Evaluation",
        },
        assessment: {
          MCQ: "40 Marks",
          Practical: "60 Marks",
          Total: "100 Marks",
        },
      },
    ],
  },
};
