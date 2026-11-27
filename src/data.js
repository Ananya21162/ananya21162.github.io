export const profile = {
  name: "Ananya Dabas",
  title: "Senior AI Engineer",
  location: "New York, NY",
  photo: "/profile.png",
  links: {
    email: "ananya.dabas1526@gmail.com",
    github: "https://github.com/Ananya21162",
    linkedin: "https://www.linkedin.com/in/ananya-dabas-894204161/",
    resume: "/Ananya_Dabas_Resume.pdf",
  },
};

export const keywords = [
  "AI Agents",
  "LLM Integration",
  "Multi-tenant Platforms",
  "Model Serving",
  "Cloud Infrastructure",
];

export const experience = [
  {
    period: "2026 — now",
    role: "Senior AI Engineer",
    org: "Cornerstone OnDemand",
    tile: { label: "CS", color: "#d94f3d" },
    note: "A multi-tenant Slack platform and a compensation-agent service, both built from scratch.",
  },
  {
    period: "2023 — 2026",
    role: "Software Engineer — OCI AI Services",
    org: "Oracle",
    orgUrl: "https://www.oracle.com/artificial-intelligence/",
    tile: { label: "OR", color: "#c74634" },
    note: "Conversational-AI and text-to-speech platforms — one of them became a US patent.",
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer",
    org: "Orange Business Services",
    tile: { label: "OB", color: "#ff7900" },
    note: "Real-time telemetry pipelines powering network AIOps.",
  },
];

export const workProjects = [
  {
    name: "Proactive Coach readiness agent",
    url: "https://www.cornerstoneondemand.com/readiness-agents/",
    org: "Cornerstone OnDemand",
    orgUrl: "https://www.cornerstoneondemand.com/",
    desc: "An AI coaching partner that helps employees and managers get more out of their 1:1s and tie their work to clear priorities. I was the sole contributor on the Slack app, which laid the foundation for later Slack apps and service integrations, and I worked on the agent's frontend and backend.",
    tech: ["Python", "React", "TypeScript", "AWS", "DynamoDB", "Slack API", "LLMs"],
  },
  {
    name: "OCI Speech: text-to-speech",
    url: "https://blogs.oracle.com/ai-and-datascience/oci-speech-texttospeech-realtime-transcription-custom-vocab",
    org: "Oracle",
    orgUrl: "https://www.oracle.com/artificial-intelligence/",
    desc: "Built and scaled the RESTful model-serving APIs behind OCI's text-to-speech service (dynamic parameters, multi-format encodings, word-level timestamps), serving 10K+ daily requests. Delivered multilingual voice support end to end with language and voice-selection APIs and a React voice-preview UI, and built a self-service fine-tuning interface in React with real-time job monitoring.",
    tech: ["Python", "FastAPI", "Java", "React", "Kubernetes"],
  },
  {
    name: "Species segregation for tiger estimation",
    url: "https://repository.iiitd.edu.in/jspui/handle/123456789/1371",
    org: "IIIT Delhi (M.Tech thesis)",
    desc: "Automated species-segregation tool for the Wildlife Institute of India's All-India Tiger Estimation.",
    tech: ["Python", "PyTorch", "Computer Vision"],
  },
];

export const timeline = [
  { org: "IGDTUW", url: "https://www.igdtuw.ac.in/", logo: "/logos/igdtuw.png", period: "2015 — 2019" },
  { org: "Orange Business Services", url: "https://www.orange-business.com/", logo: "/logos/orange-business-services.png", period: "2019 — 2021" },
  { org: "IIIT Delhi", url: "https://www.iiitd.ac.in/", logo: "/logos/iiitd.png", period: "2021 — 2023" },
  { org: "Oracle", url: "https://www.oracle.com/artificial-intelligence/", logo: "/logos/oracle.png", period: "2023 — 2026" },
  { org: "Cornerstone OnDemand", url: "https://www.cornerstoneondemand.com/", logo: "/logos/cornerstone.png", period: "2026 — Present" },
];

export const skills = [
  { group: "Languages", items: ["Python", "C++/C", "SQL"] },
  { group: "Backend & APIs", items: ["FastAPI", "Flask", "REST", "Microservices"] },
  { group: "Frontend", items: ["React", "TypeScript"] },
  { group: "Data", items: ["Redis", "DynamoDB", "PostgreSQL", "ClickHouse"] },
  { group: "Infra & DevOps", items: ["AWS", "Docker", "Kubernetes", "Terraform", "Helm", "CI/CD"] },
  { group: "ML / Gen AI", items: ["PyTorch", "TensorFlow", "LLMs", "Hugging Face", "Fine-tuning", "MLflow"] },
];

export const projects = [
  { name: "Animal Detection in Camera-Trap Images", lang: "Python", desc: "Detecting animals in camera-trap images for the Wildlife Institute of India.", url: "https://github.com/Ananya21162/WII_animal_detection" },
  { name: "Indian Monument Architecture Recognition", lang: "HTML", desc: "Identifying Indian monument architecture from uploaded images.", url: "https://github.com/Ananya21162/Monument-Architecture-Recognition" },
  { name: "Stock Price Prediction", lang: "Jupyter", desc: "ML models for stock-price prediction.", url: "https://github.com/Ananya21162/Stock-Price-Prediction-using-ML" },
];

export const liveApps = [
  {
    name: "Lock In",
    category: "In the browser",
    tech: "Expo · React Native Web",
    tile: { label: "LI", color: "#2e7d4f" },
    desc: "A daily challenge & habit tracker — pick a handful of habits, check them off each day, and watch your streaks and a calendar of perfect days build up. Fully offline; nothing leaves your browser.",
    url: "/live-apps/habit-tracker/",
  },
];

export const education = [
  { school: "IIIT Delhi", degree: "M.Tech, Machine Learning", detail: "CGPA 9.62 / 10", period: "2021 — 2023" },
  { school: "Indira Gandhi Delhi Technical University", degree: "B.Tech, Electronics & Communication", detail: "CPI 85.97 / 100", period: "2015 — 2019" },
];

export const awards = [
  { title: "U.S. Patent Application (ORC24138659-US-NPR)", org: "Oracle, 2024", detail: "A semi-supervised technique to extend text-to-speech training datasets — rapidly expanding speaker voice databases without extensive audio recording." },
  { title: "Best Master's Thesis", org: "IIIT Delhi, 2022", detail: "Automated species-segregation tool built for the Wildlife Institute of India's All-India Tiger Estimation." },
];
