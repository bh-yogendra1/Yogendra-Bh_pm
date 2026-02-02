// =====================
// CONFIG (edit easily)
// =====================
const PROFILE = {
  name: "Yogendra Bharadwaj",
  email: "bharadwaj.yogendra1@gmail.com",
  phone: "+91-9784831595",
  location: "India",

  // Put real links here
  resumeUrl: "ADD_YOUR_RESUME_PDF_LINK_HERE",
  linkedin: "https://www.linkedin.com/in/bh-yogendra/",
  github: "https://github.com/bh-yogendra1",
  scholar: "ADD_GOOGLE_SCHOLAR_LINK_HERE",

  // Images (local path or hosted URL)
  profileImg: "assets/profile.jpg",
  heroBannerImg: "assets/hero-banner.jpg", // BIG image above "Yogendra Bharadwaj / Profile Summary" area

  // Optional: Nav/Footer logo (set empty string to hide image and show "YB" fallback)
  navLogo: "assets/logo.png",       // NAV LOGO image path (customize anytime)
  footerLogo: "assets/logo.png",    // FOOTER LOGO image path
  heroBannerImg2: "assets/hero-banner-2.jpg", // Right-side hero highlight image

  // Contact extras
  mapEmbedUrl: "ADD_GOOGLE_MAP_EMBED_URL_HERE",  // CONTACT MAP: paste iframe src URL (NOT the whole iframe)
  contactQrImg: "assets/qr/contact-qr.png",      // CONTACT SECTION QR image
  footerQrImg: "assets/qr/footer-qr.png",        // FOOTER QR image
};

// Hero text
const HERO = {
  bullets: [
    "AI + Web applications: build, enhance, optimize.",
    "Research work: papers, patents, book projects.",
    "Robotics + automation development exposure."
  ],
  badges: ["AI","ML / DL","MERN","Robotics","Research"],
  float1: "15K+ LinkedIn followers",
  float2: "M.Tech (AI) @ IIT Patna",
};

// About
const ABOUT = {
  text: "I’m Yogendra Bharadwaj — an Artificial Intelligence Software Developer who builds robust, user-centered systems: AI applications, dashboards, conversational assistants, and robotics automation.",
  focus: "AI • Full-Stack • Research",
  tools: "Git/GitHub • Docker • Linux",
};

// 5 demo counters (0 -> big number)
const STATS = [
  { label: "Followers", value: 15000, suffix: "+" },
  { label: "Projects", value: 1000, suffix: "+" },
  { label: "Certificates", value: 1200, suffix: "+" },
  { label: "Research Reads", value: 1000, suffix: "K+" }, // demo
  { label: "Impact Score", value: 1000, suffix: "+" }
];

// Skills (devicon)
const SKILLS = {
  languages: [
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-cplusplus-plain colored", name: "C/C++" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-mysql-plain colored", name: "SQL" },
  ],
  stack: [
    { icon: "devicon-react-original colored", name: "React" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-express-original colored", name: "Express" },
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
  ],
  tools: [
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-linux-plain colored", name: "Linux" },
  ]
  ,
  // NEW (extra 3 cards) — add minimum 12 items each for better visibility
  ai: [
    { icon: "devicon-tensorflow-original colored", name: "TensorFlow" },
    { icon: "devicon-pytorch-original colored", name: "PyTorch" },
    { icon: "devicon-opencv-plain colored", name: "OpenCV" },
    { icon: "devicon-numpy-plain colored", name: "NumPy" },
    { icon: "devicon-pandas-original colored", name: "Pandas" },
    { icon: "devicon-scikitlearn-plain colored", name: "Scikit-learn" },
    { icon: "devicon-jupyter-plain colored", name: "Jupyter" },
    { icon: "devicon-anaconda-original colored", name: "Anaconda" },
    { icon: "devicon-googlecloud-plain colored", name: "GCP (AI)" },
    { icon: "devicon-amazonwebservices-original colored", name: "AWS (AI)" },
    { icon: "devicon-azure-plain colored", name: "Azure (AI)" },
    { icon: "devicon-kaggle-original colored", name: "Kaggle" }
  ],
  cloud: [
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
    { icon: "devicon-jenkins-line colored", name: "Jenkins" },
    { icon: "devicon-gitlab-plain colored", name: "GitLab CI" },
    { icon: "devicon-amazonwebservices-original colored", name: "AWS" },
    { icon: "devicon-googlecloud-plain colored", name: "GCP" },
    { icon: "devicon-azure-plain colored", name: "Azure" },
    { icon: "devicon-nginx-original colored", name: "NGINX" },
    { icon: "devicon-linux-plain colored", name: "Linux" },
    { icon: "devicon-bash-plain colored", name: "Bash" },
    { icon: "devicon-grafana-original colored", name: "Grafana" },
    { icon: "devicon-prometheus-original colored", name: "Prometheus" }
  ],
  research: [
    { icon: "devicon-python-plain colored", name: "Python (Tools)" },
    { icon: "devicon-latex-original colored", name: "LaTeX" },
    { icon: "devicon-markdown-original colored", name: "Markdown" },
    { icon: "devicon-git-plain colored", name: "Versioning" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-notion-plain colored", name: "Notion" },
    { icon: "devicon-slack-plain colored", name: "Slack" },
    { icon: "devicon-google-plain colored", name: "Google Scholar" },
    { icon: "devicon-figma-plain colored", name: "Figma" },
    { icon: "devicon-vscode-original colored", name: "VS Code" },
    { icon: "devicon-ubuntu-plain colored", name: "Ubuntu" },
    { icon: "devicon-matlab-plain colored", name: "MATLAB" }
  ]

};

// Experience cards (bigger + 2 images + pdf)
const EXPERIENCES = [
  {
    key: "geu",
    role: "Summer Intern",
    org: "Graphic Era Deemed University (GEU), Dehradun",
    date: "03/07/2023 – 16/08/2023",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Graphic_Era_University_Logo.png/240px-Graphic_Era_University_Logo.png",
    points: [
      "Built humanoid robot features: locomotion + “namaste” greeting within ~50cm range.",
      "Implemented voice-based conversational abilities using AI.",
      "Developed a web page to control robot speed/direction for manual operation."
    ],
    tags: ["Python","ML","GenAI","C","HTML/CSS/JS"],
    media: [
      { name: "Completion Certificate", type: "image", thumb: "assets/exp/geu-1.jpg", url: "assets/exp/geu-1.jpg" },
      { name: "Recommendation Letter", type: "image", thumb: "assets/exp/geu-2.jpg", url: "assets/exp/geu-2.jpg" },
      // You can add pdf too:
      // { name:"Certificate PDF", type:"pdf", url:"assets/exp/geu-cert.pdf" }
    ],
    links: [
      { label:"Organization Website", url:"https://www.geu.ac.in/" },
      { label:"Internship Proof", url:"ADD_GEU_PROOF_LINK" }
    ]
  },
  {
    key: "visit",
    role: "SDE Intern",
    org: "VISIT-UTTRAKHAND (visituttrakhand.in), Dehradun",
    date: "01/04/2023 – 30/06/2023",
    logo: "https://uttarakhandtourism.gov.in/sites/default/files/2022-10/uttarakhand-tourism-logo.png",
    points: [
      "Full-stack development (frontend + backend) for a travel website.",
      "Built executive dashboards for travel package plans and overviews."
    ],
    tags: ["MERN","Dashboards","UX"],
    media: [
      { name: "Offer/Proof", type: "image", thumb: "assets/exp/visit-1.jpg", url: "assets/exp/visit-1.jpg" },
      { name: "Certificate", type: "image", thumb: "assets/exp/visit-2.jpg", url: "assets/exp/visit-2.jpg" },
    ],
    links: [
      { label:"Visit Uttarakhand", url:"https://www.visituttrakhand.in/" },
      { label:"Internship Proof", url:"ADD_VISIT_PROOF_LINK" }
    ]
  }
];

// Education cards (logo + media)
const EDUCATION = [
  {
    key: "iitp",
    degree: "M.Tech in Computer Science (Artificial Intelligence)",
    inst: "IIT Patna",
    date: "2025 – Present",
    logo: "https://www.pngkit.com/png/detail/89-895805_iit-patna-logo-png.png",
    media: [
      { name: "ID Card / Proof", type: "image", thumb: "assets/edu/iitp-1.jpg", url: "assets/edu/iitp-1.jpg" },
      { name: "Recommendation", type: "image", thumb: "assets/edu/iitp-2.jpg", url: "assets/edu/iitp-2.jpg" },
    ]
  },
  {
    key: "geu",
    degree: "B.Tech in Computer Science",
    inst: "Graphic Era Deemed University (GEU), Dehradun",
    date: "2020 – 2024 • CGPA: 8.11",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Graphic_Era_University_Logo.png/240px-Graphic_Era_University_Logo.png",
    media: [
      { name: "Degree/Marksheet", type: "image", thumb: "assets/edu/geu-1.jpg", url: "assets/edu/geu-1.jpg" },
      { name: "Recommendation", type: "image", thumb: "assets/edu/geu-2.jpg", url: "assets/edu/geu-2.jpg" },
    ]
  }
];

// Projects (6+) + 2 images + 2 links
const PROJECTS = [
  {
    title: "Voice-Enabled AI Disease Prediction",
    meta: "Python • ML • NLP",
    desc: "Voice-based disease prediction with intelligent outputs and user-friendly workflow. Scalable architecture for deployment and future enhancements.",
    img1: "assets/projects/p1-1.jpg",
    img2: "assets/projects/p1-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Robotics Control Dashboard",
    meta: "HTML • CSS • JS",
    desc: "A web dashboard to control robot speed/direction with low-latency control and a clean UI for manual operation.",
    img1: "assets/projects/p2-1.jpg",
    img2: "assets/projects/p2-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Travel Executive Dashboard",
    meta: "MERN • Analytics",
    desc: "Full-stack dashboard for travel packages: planning views, management tools, and admin analytics for better operations.",
    img1: "assets/projects/p3-1.jpg",
    img2: "assets/projects/p3-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "AI Chat Assistant (Demo)",
    meta: "LLM • UI • API",
    desc: "A demo assistant interface for question answering, structured outputs, and knowledge-base style responses (backend extendable).",
    img1: "assets/projects/p4-1.jpg",
    img2: "assets/projects/p4-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Smart Safety Detection System",
    meta: "IoT • Sensors • AI",
    desc: "Home/industry safety system prototype with detection, alert logic, and monitoring dashboard concept.",
    img1: "assets/projects/p5-1.jpg",
    img2: "assets/projects/p5-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  },
  {
    title: "Portfolio 3D Website",
    meta: "Modern UI • 3D Glass",
    desc: "Premium 3D-glass portfolio with sections, animations, sliders, search, blogs, LinkedIn cards, and light/dark mode.",
    img1: "assets/projects/p6-1.jpg",
    img2: "assets/projects/p6-2.jpg",
    github: "ADD_GITHUB_LINK",
    live: "ADD_LIVE_LINK"
  }
];


// =====================
// NEW: Fixed 9 projects grid (3 categories × 3 cards)
// NOTE: This is separate from the existing PROJECTS slider below.
// Edit titles, stacks, links, and images here.
// =====================
const PROJECT_GRID_9 = {
  cat1Title: "Project Category 1",
  cat2Title: "Project Category 2",
  cat3Title: "Project Category 3",
  cat1: [
    { title:"Project 1", subtitle:"Short subtitle", stack:["AI","Python","NLP"], img:"assets/projects/g1.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
    { title:"Project 2", subtitle:"Short subtitle", stack:["MERN","UI"], img:"assets/projects/g2.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
    { title:"Project 3", subtitle:"Short subtitle", stack:["IoT","Sensors"], img:"assets/projects/g3.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
  ],
  cat2: [
    { title:"Project 4", subtitle:"Short subtitle", stack:["LLM","RAG"], img:"assets/projects/g4.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Demo", url:"ADD_LINK"} },
    { title:"Project 5", subtitle:"Short subtitle", stack:["Robotics","CV"], img:"assets/projects/g5.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Video", url:"ADD_LINK"} },
    { title:"Project 6", subtitle:"Short subtitle", stack:["Dashboard","Charts"], img:"assets/projects/g6.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
  ],
  cat3: [
    { title:"Project 7", subtitle:"Short subtitle", stack:["Research","Paper"], img:"assets/projects/g7.jpg", link1:{label:"Paper", url:"ADD_LINK"}, link2:{label:"Code", url:"ADD_LINK"} },
    { title:"Project 8", subtitle:"Short subtitle", stack:["Automation","Python"], img:"assets/projects/g8.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
    { title:"Project 9", subtitle:"Short subtitle", stack:["Web","3D UI"], img:"assets/projects/g9.jpg", link1:{label:"GitHub", url:"ADD_LINK"}, link2:{label:"Live", url:"ADD_LINK"} },
  ],
};

// =====================
// NEW: Certificates (6 cards) + slider rail
// =====================
const CERTIFICATES = [
  { title:"Certificate 1", subtitle:"Issuer • Year", img:"assets/cert/c1.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 2", subtitle:"Issuer • Year", img:"assets/cert/c2.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 3", subtitle:"Issuer • Year", img:"assets/cert/c3.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 4", subtitle:"Issuer • Year", img:"assets/cert/c4.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 5", subtitle:"Issuer • Year", img:"assets/cert/c5.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
  { title:"Certificate 6", subtitle:"Issuer • Year", img:"assets/cert/c6.jpg", link1:{label:"View", url:"ADD_LINK"}, link2:{label:"Verify", url:"ADD_LINK"} },
];

// Slider items (optional separate highlights)
const CERT_SLIDES = [
  { title:"Highlighted Certificate", subtitle:"Short story / result", img:"assets/cert/s1.jpg", desc:"Write 2-4 lines about this certificate and why it matters." },
  { title:"Another Highlight", subtitle:"Issuer • Year", img:"assets/cert/s2.jpg", desc:"Write 2-4 lines about this certificate and why it matters." },
];

// =====================
// NEW: Recommendations (images + LinkedIn)
// =====================
const RECOMMENDATIONS = [
  { title:"Recommendation 1", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r1.jpg", source:"LinkedIn" },
  { title:"Recommendation 2", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r2.jpg", source:"Image proof" },
  { title:"Recommendation 3", from:"Name • Role • Company", text:"Paste recommendation text here (2-5 lines).", img:"assets/reco/r3.jpg", source:"LinkedIn" },
];


// NEW: Media slider (Projects ke baad)
const MEDIA_SLIDES = [
  {
    img: "assets/media/m1.jpg",
    title: "Conference / Talk",
    subtitle: "Speaker / Guest Session",
    desc: "Write 5–7 lines about this media moment. Explain context, your role, impact, audience, and key outcome. Add more details to make it strong and impressive."
  },
  {
    img: "assets/media/m2.jpg",
    title: "Hackathon Moment",
    subtitle: "Team + Solution Demo",
    desc: "Write 5–7 lines about your hackathon achievement, the problem statement, what you built, and why it mattered. Keep it story-like and professional."
  },
  {
    img: "assets/media/m3.jpg",
    title: "Lab / Robotics",
    subtitle: "Automation & Experiments",
    desc: "Write 5–7 lines describing the robotics/AI lab work, experiments, results, and learnings. Add measurable results if possible."
  }
];

// NEW: Video glimpse
const VIDEO = {
  src: "assets/video/glimpse.mp4" // put your mp4 file here
};

// Publications / Patents / Books: (2 buttons + optional 2 images)
const PUBLICATIONS = [
  {
    title: "Gas & Fire Detection Systems for Home/Industry",
    subtitle: "CRC Press • 2023",
    meta: "Publication",
    desc: "This work focuses on design and implementation of detection mechanisms for safety monitoring, including alerts, architecture, and deployment notes.",
    img1: "assets/pubs/pub1-1.jpg",
    img2: "assets/pubs/pub1-2.jpg",
    btn1: { label: "View Paper", url: "ADD_PUBLICATION_LINK" },
    btn2: { label: "Publisher", url: "ADD_PUBLISHER_LINK" }
  }
];

const PATENTS = [
  {
    title: "202531085495 — Solar-electric marine vessel with dual turbine propulsion",
    subtitle: "Filed/Published • 2025",
    meta: "Patent",
    desc: "Patent describing a marine vessel with energy efficiency and safety focus. Includes propulsion details and environmental safety aspects.",
    img1: "assets/patents/p1-1.jpg",
    img2: "assets/patents/p1-2.jpg",
    btn1: { label: "View Patent", url: "ADD_PATENT_LINK" },
    btn2: { label: "Patent Portal", url: "ADD_PATENT_PORTAL_LINK" }
  }
];

const BOOK_CHAPTERS = [
  {
    title: "Fuzzy & Hybrid Techniques for Brain Signal Understanding",
    subtitle: "Book Chapter",
    meta: "Book Chapter",
    desc: "Discusses fuzzy/hybrid approaches for analyzing brain signals, improving interpretability, and optimizing classification pipelines.",
    img1: "assets/books/c1-1.jpg",
    img2: "assets/books/c1-2.jpg",
    btn1: { label: "View Chapter", url: "ADD_CHAPTER_LINK" },
    btn2: { label: "Publisher", url: "ADD_CHAPTER_PUBLISHER_LINK" }
  }
];

const EDITED_BOOKS = [
  {
    title: "AI for Drones in Smart Healthcare",
    subtitle: "Edited Book (Proposal)",
    meta: "Edited Book",
    desc: "Edited book proposal with scope on drone-based healthcare monitoring, intelligent sensing, and future research directions.",
    img1: "assets/books/e1-1.jpg",
    img2: "assets/books/e1-2.jpg",
    btn1: { label: "View Details", url: "ADD_BOOK_LINK" },
    btn2: { label: "Publisher", url: "ADD_BOOK_PUBLISHER_LINK" }
  }
];

// Achievements (9) — bigger card + 2 images + 2 links
const ACHIEVEMENTS = [
  { icon:"🏆", title:"Best Researcher Award", meta:"G20 Symposium • 2023", sub:"Robotics & Automation (Digital Agriculture)", desc:"Write 5–7 lines about this recognition: why you got it, what you delivered, impact, and audience. Keep it strong, measurable, and professional.", img1:"assets/ach/a1-1.jpg", img2:"assets/ach/a1-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Gallery", url:"ADD_LINK"} },
  { icon:"🎖️", title:"Top Performer Recognition", meta:"Academic / Research", sub:"Consistent results & contributions", desc:"Write 5–7 lines describing your performance recognition and what outcomes you achieved.", img1:"assets/ach/a2-1.jpg", img2:"assets/ach/a2-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Certificate", url:"ADD_LINK"} },
  { icon:"🥇", title:"Hackathon Winner", meta:"Tech Event", sub:"Solution impact & execution", desc:"Write 5–7 lines about hackathon: problem, your approach, role, and final result.", img1:"assets/ach/a3-1.jpg", img2:"assets/ach/a3-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Photos", url:"ADD_LINK"} },
  { icon:"📜", title:"Publication Milestone", meta:"Research Output", sub:"Peer-reviewed contribution", desc:"Write 5–7 lines: what you published, novelty, and why it matters.", img1:"assets/ach/a4-1.jpg", img2:"assets/ach/a4-2.jpg", btn1:{label:"View", url:"ADD_LINK"}, btn2:{label:"Index", url:"ADD_LINK"} },
  { icon:"🔬", title:"Research Collaboration", meta:"Interdisciplinary", sub:"Evaluation & reporting", desc:"Write 5–7 lines about collaboration and what you delivered.", img1:"assets/ach/a5-1.jpg", img2:"assets/ach/a5-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Docs", url:"ADD_LINK"} },
  { icon:"🤖", title:"Robotics Achievement", meta:"Automation", sub:"AI-based interaction workflow", desc:"Write 5–7 lines about robotics build, demos, and outcomes.", img1:"assets/ach/a6-1.jpg", img2:"assets/ach/a6-2.jpg", btn1:{label:"Video", url:"ADD_LINK"}, btn2:{label:"Proof", url:"ADD_LINK"} },
  { icon:"🌟", title:"Community Recognition", meta:"Mentoring / Outreach", sub:"Helping & guidance", desc:"Write 5–7 lines on mentoring/outreach impact.", img1:"assets/ach/a7-1.jpg", img2:"assets/ach/a7-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Photos", url:"ADD_LINK"} },
  { icon:"📈", title:"Growth Milestone", meta:"Professional", sub:"Skill + deliverables", desc:"Write 5–7 lines describing growth and results.", img1:"assets/ach/a8-1.jpg", img2:"assets/ach/a8-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"Notes", url:"ADD_LINK"} },
  { icon:"🎓", title:"Certification Highlights", meta:"Upskilling", sub:"AI/Full-stack certifications", desc:"Write 5–7 lines about certification journey & outcomes.", img1:"assets/ach/a9-1.jpg", img2:"assets/ach/a9-2.jpg", btn1:{label:"Proof", url:"ADD_LINK"}, btn2:{label:"All Certs", url:"ADD_LINK"} }
];

// BLOGS (local + optional external RSS)
const BLOG_POSTS = [
  {
    title: "My AI Journey at IIT Patna",
    subtitle: "Learning + research + product building",
    desc: "Write 5–7 lines for the blog preview. Add a nice summary for readers to click and read the full post.",
    img1: "assets/blog/b1-1.jpg",
    img2: "assets/blog/b1-2.jpg",
    btn1: { label: "Read Blog", url: "ADD_BLOG_LINK" },
    btn2: { label: "Related", url: "ADD_RELATED_LINK" }
  }
];

// OPTIONAL: external RSS feeds (CORS depends). Use a proxy like rss2json.
// Example: https://api.rss2json.com/v1/api.json?rss_url=YOUR_RSS
const BLOG_FEEDS = [
  // { label: "My Medium", rss2json: "https://api.rss2json.com/v1/api.json?rss_url=YOUR_MEDIUM_RSS" }
];

// LinkedIn Posts (manual reliable)
const LINKEDIN_POSTS = [
  {
    title: "Latest LinkedIn Post",
    subtitle: "4–5 recent posts (manual links/snippets)",
    meta: "LinkedIn",
    desc: "Put 2–3 lines summary here for preview. Button opens LinkedIn post.",
    img1: "assets/li/li1-1.jpg",
    img2: "assets/li/li1-2.jpg",
    btn1: { label: "Open Post", url: "ADD_LINKEDIN_POST_URL" },
    btn2: { label: "My Profile", url: PROFILE.linkedin },
    // Optional: embed html snippet (if you want)
    embedHtml: "" // e.g. '<iframe ...></iframe>' OR LinkedIn embed snippet
  }
];

// =====================
// Utilities
// =====================
function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function safeUrl(url){
  if (!url || String(url).startsWith("ADD_")) return "#";
  try { return new URL(url, window.location.href).href; }
  catch { return "#"; }
}
function safeText(s, fallback=""){
  const t = String(s ?? "").trim();
  return t || fallback;
}
function isPdf(url){
  return String(url || "").toLowerCase().endsWith(".pdf");
}

// =====================
// Navbar mobile toggle
// =====================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// =====================
// Scroll progress
// =====================
const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  if (progress) progress.style.width = `${scrolled}%`;
});

// =====================
// Theme toggle
// =====================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
function setTheme(mode){
  if (mode === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");
  localStorage.setItem("theme", mode);
  if (themeIcon) themeIcon.innerHTML = mode === "light" ? `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>` : `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.6A8.5 8.5 0 0 1 11.4 3a6.8 6.8 0 1 0 9.6 9.6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
}
setTheme(localStorage.getItem("theme") || "dark");
themeToggle?.addEventListener("click", () => {
  const current = document.body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});

// =====================
// LANGUAGE (dropdown + simple i18n)
// NOTE (important): Full automatic translation needs an external translation service.
// This implementation is "dictionary-based" so you can fully control the wording.
// Add/extend strings in TRANSLATIONS below.
// =====================
const LANGUAGES = [
  { key:"en", code:"EN", name:"English", flag:"🇺🇸" },
  { key:"hi", code:"HI", name:"Hindi", flag:"🇮🇳" },
  { key:"bn", code:"BN", name:"Bengali", flag:"🇧🇩" },
  { key:"mr", code:"MR", name:"Marathi", flag:"🇮🇳" },
  { key:"ta", code:"TA", name:"Tamil", flag:"🇮🇳" },
  { key:"te", code:"TE", name:"Telugu", flag:"🇮🇳" },
  { key:"pa", code:"PA", name:"Punjabi", flag:"🇮🇳" },
  { key:"ur", code:"UR", name:"Urdu", flag:"🇵🇰" },
];

const TRANSLATIONS = {
  hi: {
    nav_about:"About", nav_skills:"Skills", nav_experience:"Experience", nav_education:"Education",
    nav_projects:"Projects", nav_cert:"Certificates", nav_reco:"Recommendations", nav_contact:"Contact",
    hero_btn_projects:"View Projects", hero_btn_contact:"Contact Me", hero_btn_resume:"Download Resume",
    sec_cert:"Certificates", sec_reco:"Recommendations"
  },
  // Add more languages similarly:
  bn: {}, mr: {}, ta: {}, te: {}, pa: {}, ur: {}
};

function t(langKey, token, fallback){
  return (TRANSLATIONS[langKey] && TRANSLATIONS[langKey][token]) || fallback || token;
}

function bindI18nTokens(){
  // NAV tokens (matches current HTML order)
  const nav = document.getElementById("navLinks");
  if (nav){
    const links = Array.from(nav.querySelectorAll("a"));
    const byHref = (hash) => links.find(a => a.getAttribute("href") === hash);

    byHref("#about")?.setAttribute("data-i18n", "nav_about");
    byHref("#skills")?.setAttribute("data-i18n", "nav_skills");
    byHref("#experience")?.setAttribute("data-i18n", "nav_experience");
    byHref("#education")?.setAttribute("data-i18n", "nav_education");
    byHref("#projects")?.setAttribute("data-i18n", "nav_projects");
    byHref("#certifications")?.setAttribute("data-i18n", "nav_cert");
    byHref("#recommendations")?.setAttribute("data-i18n", "nav_reco");
    byHref("#contact")?.setAttribute("data-i18n", "nav_contact");
  }

  // Hero CTA buttons (by text or positions)
  const ctaBtns = document.querySelectorAll("#home .ctaRow .btn");
  if (ctaBtns.length >= 3){
    ctaBtns[0].setAttribute("data-i18n", "hero_btn_projects");
    ctaBtns[1].setAttribute("data-i18n", "hero_btn_contact");
    ctaBtns[2].setAttribute("data-i18n", "hero_btn_resume");
  }

  // Section titles
  document.querySelector("#certifications h2")?.setAttribute("data-i18n", "sec_cert");
  document.querySelector("#recommendations h2")?.setAttribute("data-i18n", "sec_reco");
}

function applyLanguage(langKey){
  document.documentElement.lang = langKey;

  // update visible tokens
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const token = el.getAttribute("data-i18n");
    el.textContent = t(langKey, token, el.textContent);
  });

  // button code in nav
  const langCode = document.getElementById("langCode");
  const langMeta = LANGUAGES.find(l => l.key === langKey) || LANGUAGES[0];
  if (langCode) langCode.textContent = langMeta.code;

  localStorage.setItem("lang", langKey);
}

function initLanguageUI(){
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  if (!btn || !menu) return;

  // Build menu once
  menu.innerHTML = LANGUAGES.map(l => `
    <button class="langItem" role="option" data-lang="${l.key}">
      <span class="langLeft">
        <span class="langFlag">${l.flag}</span>
        <span class="langName">${l.name}</span>
      </span>
      <span class="langKey">${l.code}</span>
    </button>
  `).join("");

  const closeMenu = () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded","false");
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu.addEventListener("click", (e) => {
    const target = e.target.closest(".langItem");
    if (!target) return;
    applyLanguage(target.dataset.lang);
    closeMenu();
  });

  document.addEventListener("click", closeMenu);
}

// bind tokens + load saved language
bindI18nTokens();
initLanguageUI();
applyLanguage(localStorage.getItem("lang") || "en");

// =====================
// Resume + year
// =====================
document.getElementById("resumeBtn")?.setAttribute("href", safeUrl(PROFILE.resumeUrl));
document.getElementById("year").innerText = new Date().getFullYear();

// =====================
// Hero images + text
// =====================
const profileImg = document.getElementById("profileImg");
if (profileImg) profileImg.src = safeText(PROFILE.profileImg, "assets/profile.jpg");

const heroBannerImg = document.getElementById("heroBannerImg");
if (heroBannerImg){
  const src = safeText(PROFILE.heroBannerImg, "");
  if (src){
    heroBannerImg.src = src;
    heroBannerImg.addEventListener("load", () => heroBannerImg.classList.add("ready"));
  }
}

const bulletsEl = document.getElementById("profileBullets");
if (bulletsEl){
  bulletsEl.innerHTML = HERO.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");
}
const badgesEl = document.getElementById("heroBadges");
if (badgesEl){
  badgesEl.innerHTML = HERO.badges.map(x => `<span class="badge">${escapeHtml(x)}</span>`).join("");
}
document.getElementById("heroFloat1").textContent = HERO.float1;
document.getElementById("heroFloat2").textContent = HERO.float2;

// =====================
// About
// =====================
document.getElementById("aboutText").textContent = ABOUT.text;
document.getElementById("aboutFocus").textContent = ABOUT.focus;
document.getElementById("aboutTools").textContent = ABOUT.tools;

// =====================
// About quick links
// =====================
const linkGrid = document.getElementById("linkGrid");
if (linkGrid){
  const items = [
    { title:"LinkedIn", hint:"Open profile", url: PROFILE.linkedin },
    { title:"GitHub", hint:"Open repositories", url: PROFILE.github },
    { title:"Google Scholar", hint:"Open publications", url: PROFILE.scholar }
  ];
  linkGrid.innerHTML = items.map(i => `
    <a class="linkCard" href="${safeUrl(i.url)}" target="_blank" rel="noopener">
      <div class="lcTitle">${escapeHtml(i.title)}</div>
      <div class="lcHint">${escapeHtml(i.hint)}</div>
    </a>
  `).join("");
}

// =====================
// Skills render
// =====================
function renderSkills(elId, items){
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = items.map(it => `
    <div class="logoItem">
      <i class="${escapeHtml(it.icon)}"></i>
      <span>${escapeHtml(it.name)}</span>
    </div>
  `).join("");
}
renderSkills("skillsLang", SKILLS.languages);
renderSkills("skillsStack", SKILLS.stack);
renderSkills("skillsTools", SKILLS.tools);
// EXTRA SKILLS (below) — change arrays in SKILLS.ai / SKILLS.cloud / SKILLS.research
renderSkills("skillsAI", SKILLS.ai || []);
renderSkills("skillsCloud", SKILLS.cloud || []);
renderSkills("skillsResearch", SKILLS.research || []);

// =====================
// Count-up stats (fixed bug)
// =====================
const statsGrid = document.getElementById("statsGrid");
if (statsGrid){
  statsGrid.innerHTML = STATS.map((s, idx) => `
    <div class="statCard">
      <div class="statIn">
        <div class="statValue" data-target="${s.value}" data-suffix="${escapeHtml(s.suffix || "")}" id="stat-${idx}">0</div>
        <div class="statLabel">${escapeHtml(s.label)}</div>
      </div>
    </div>
  `).join("");
}

function formatNum(n){
  return n.toLocaleString("en-IN");
}
function animateCount(el, target, suffix){
  const duration = 1200;
  const start = performance.now();
  const from = 0;

  function tick(now){
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(from + (target - from) * eased);
    el.textContent = formatNum(val) + (suffix || "");
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function startCountersOnce(){
  const els = [...document.querySelectorAll(".statValue")];
  els.forEach(el => {
    const target = Number(el.getAttribute("data-target") || "0");
    const suffix = el.getAttribute("data-suffix") || "";
    animateCount(el, target, suffix);
  });
}

let countersStarted = false;
const hero = document.getElementById("home");
if (hero){
  const io = new IntersectionObserver((entries) => {
    if (!countersStarted && entries.some(e => e.isIntersecting)){
      countersStarted = true;
      startCountersOnce();
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(hero);
}

// =====================
// Media renderer (image/pdf) for cards
// =====================
function renderMediaGrid(items){
  if (!items || !items.length) return `<div class="muted">Add media in script.js</div>`;
  return items.map(m => {
    const url = safeText(m.url, "#");
    const name = safeText(m.name, "Media");
    const type = safeText(m.type, isPdf(url) ? "pdf" : "image").toLowerCase();
    const thumb = safeText(m.thumb, url);

    const thumbHtml = type === "pdf" || isPdf(url)
      ? `<div class="pdfBadge">PDF</div>`
      : `<img src="${escapeHtml(thumb)}" alt="${escapeHtml(name)}" onerror="this.closest('.mediaCard').style.display='none'">`;

    return `
      <a class="mediaCard" href="${safeUrl(url)}" target="_blank" rel="noopener">
        <div class="mediaThumb">${thumbHtml}</div>
        <div class="mediaMeta">
          <div class="mediaName">${escapeHtml(name)}</div>
          <div class="mediaType">${escapeHtml(type.toUpperCase())}</div>
        </div>
      </a>
    `;
  }).join("");
}

function renderBtnRow(btns){
  if (!btns || !btns.length) return "";
  return btns.map(b => `
    <a class="linkBtn ${b.primary ? "primary" : ""}" href="${safeUrl(b.url)}" target="_blank" rel="noopener">
      ${escapeHtml(b.label)}
    </a>
  `).join("");
}

// =====================
// Experience render
// =====================
const expTimeline = document.getElementById("expTimeline");
if (expTimeline){
  expTimeline.innerHTML = EXPERIENCES.map(exp => `
    <div class="tItem card glass tilt">
      <div class="tIn">
        <div class="tTop">
          <div class="org">
            <img class="orgLogo" alt="${escapeHtml(exp.org)} logo" src="${escapeHtml(exp.logo)}" onerror="this.style.display='none'">
            <div>
              <div class="tRole">${escapeHtml(exp.role)}</div>
              <div class="tOrg">${escapeHtml(exp.org)}</div>
            </div>
          </div>
          <div class="tDate">${escapeHtml(exp.date)}</div>
        </div>

        <div class="tBody">
          <ul class="bullets">
            ${exp.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
          </ul>

          <div class="tagRow">
            ${exp.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          </div>

          <div class="mediaBlock">
            <div class="mediaHead">
              <div class="mediaTitle">Certificates / Proofs</div>
              <div class="mediaSub">2 images + PDF supported</div>
            </div>
            <div class="mediaGrid">${renderMediaGrid(exp.media)}</div>
          </div>

          <div class="btnRow">
            ${renderBtnRow([
              { label: exp.links?.[0]?.label || "Link 1", url: exp.links?.[0]?.url, primary: true },
              { label: exp.links?.[1]?.label || "Link 2", url: exp.links?.[1]?.url }
            ])}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// =====================
// Education render
// =====================
const eduGrid = document.getElementById("eduGrid");
if (eduGrid){
  eduGrid.innerHTML = EDUCATION.map(ed => `
    <div class="card glass tilt cardXL">
      <div class="eduTop">
        <img class="eduLogo" alt="${escapeHtml(ed.inst)} logo" src="${escapeHtml(ed.logo)}" onerror="this.style.display='none'">
        <div>
          <div class="eduDegree">${escapeHtml(ed.degree)}</div>
          <div class="eduInst">${escapeHtml(ed.inst)}</div>
          <div class="eduDate">${escapeHtml(ed.date)}</div>
        </div>
      </div>

      <div class="mediaBlock">
        <div class="mediaHead">
          <div class="mediaTitle">Certificates / Recommendations</div>
          <div class="mediaSub">2 images + PDF supported</div>
        </div>
        <div class="mediaGrid">${renderMediaGrid(ed.media)}</div>
      </div>
    </div>
  `).join("");
}

// =====================
// Fixed 9 project cards (above the slider)
// =====================
function renderProjectGrid9(){
  const c1 = document.getElementById("projCat1");
  const c2 = document.getElementById("projCat2");
  const c3 = document.getElementById("projCat3");
  if (!c1 || !c2 || !c3) return;

  // Update category headings (if you change titles in PROJECT_GRID_9)
  document.querySelectorAll(".projCatTitle")[0].textContent = PROJECT_GRID_9.cat1Title;
  document.querySelectorAll(".projCatTitle")[1].textContent = PROJECT_GRID_9.cat2Title;
  document.querySelectorAll(".projCatTitle")[2].textContent = PROJECT_GRID_9.cat3Title;

  const card = (p) => `
    <div class="projGridCard tilt-sm">
      <div class="pTitle">${escapeHtml(p.title)}</div>
      <div class="muted" style="margin-top:6px">${escapeHtml(p.subtitle || "")}</div>

      <div class="projStackRow">
        ${(p.stack || []).slice(0,12).map(s => `<span class="stackPill">${escapeHtml(s)}</span>`).join("")}
      </div>

      <div class="certActions" style="margin-top:12px">
        ${p.link1?.url ? `<a class="btn" href="${safeUrl(p.link1.url)}" target="_blank" rel="noopener">${escapeHtml(p.link1.label || "Link 1")}</a>` : ""}
        ${p.link2?.url ? `<a class="btn ghost" href="${safeUrl(p.link2.url)}" target="_blank" rel="noopener">${escapeHtml(p.link2.label || "Link 2")}</a>` : ""}
      </div>

      <div class="projThumb">
        <img src="${safeText(p.img, "")}" alt="${escapeHtml(p.title)}"/>
      </div>
    </div>
  `;

  c1.innerHTML = PROJECT_GRID_9.cat1.map(card).join("");
  c2.innerHTML = PROJECT_GRID_9.cat2.map(card).join("");
  c3.innerHTML = PROJECT_GRID_9.cat3.map(card).join("");
}
renderProjectGrid9();

// =====================
// Projects slider (auto swap)
// =====================
const track = document.getElementById("projectTrack");
const dots = document.getElementById("projDots");
let projIndex = 0;
let autoTimer = null;

function renderProjects(){
  if (!track) return;

  track.innerHTML = PROJECTS.map(p => `
    <div class="projectCard">
      <div class="projectIn">
        <div class="pTitle">${escapeHtml(p.title)}</div>
        <div class="pMeta">${escapeHtml(p.meta)}</div>
        <div class="pDesc">${escapeHtml(p.desc)}</div>

        <div class="cardMedia2">
          <div class="miniImg"><img src="${escapeHtml(p.img1)}" alt="project image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
          <div class="miniImg"><img src="${escapeHtml(p.img2)}" alt="project image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
        </div>

        <div class="actionRow">
          <a class="linkBtn primary" href="${safeUrl(p.github)}" target="_blank" rel="noopener">GitHub</a>
          <a class="linkBtn" href="${safeUrl(p.live)}" target="_blank" rel="noopener">Live Demo</a>
        </div>
      </div>
    </div>
  `).join("");

  if (dots){
    dots.innerHTML = PROJECTS.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to slide ${i+1}" data-i="${i}"></button>
    `).join("");

    dots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        projIndex = Number(d.getAttribute("data-i"));
        goToProject(projIndex);
        restartAuto();
      });
    });
  }

  goToProject(0);
}

function goToProject(i){
  if (!track) return;

  const card = track.querySelector(".projectCard");
  if (!card) return;

  const isMobile = window.matchMedia("(max-width: 1020px)").matches;

  const cardWidth = card.getBoundingClientRect().width;
  const gap = 16;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(projIndex * (cardWidth + gap));
  track.style.transform = `translateX(${x}px)`;

  if (dots){
    const all = [...dots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === projIndex));
  }
}

function nextProject(){
  const isMobile = window.matchMedia("(max-width: 1020px)").matches;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = (projIndex >= maxIndex) ? 0 : projIndex + 1;
  goToProject(projIndex);
}
function prevProject(){
  const isMobile = window.matchMedia("(max-width: 1020px)").matches;
  const visible = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, PROJECTS.length - visible);
  projIndex = (projIndex <= 0) ? maxIndex : projIndex - 1;
  goToProject(projIndex);
}

function restartAuto(){
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(nextProject, 3800);
}

document.getElementById("projNext")?.addEventListener("click", () => { nextProject(); restartAuto(); });
document.getElementById("projPrev")?.addEventListener("click", () => { prevProject(); restartAuto(); });
window.addEventListener("resize", () => goToProject(projIndex));

renderProjects();
restartAuto();

// =====================
// Certificates section (6 cards + rail slider)
// =====================
function renderCertificates(){
  const grid = document.getElementById("certGrid");
  const rail = document.getElementById("certTrack");
  if (grid){
    grid.innerHTML = CERTIFICATES.map(c => `
      <div class="certCard tilt-sm">
        <div class="certThumb"><img src="${safeText(c.img,"")}" alt="${escapeHtml(c.title)}"/></div>
        <div class="certMeta">
          <div class="certTitle">${escapeHtml(c.title)}</div>
          <div class="certSub">${escapeHtml(c.subtitle || "")}</div>
          <div class="certActions">
            ${c.link1?.url ? `<a class="btn" href="${safeUrl(c.link1.url)}" target="_blank" rel="noopener">${escapeHtml(c.link1.label || "View")}</a>` : ""}
            ${c.link2?.url ? `<a class="btn ghost" href="${safeUrl(c.link2.url)}" target="_blank" rel="noopener">${escapeHtml(c.link2.label || "Verify")}</a>` : ""}
          </div>
        </div>
      </div>
    `).join("");
  }
  if (rail){
    rail.innerHTML = CERT_SLIDES.map(s => `
      <div class="certSlide">
        <div class="certThumb"><img src="${safeText(s.img,"")}" alt="${escapeHtml(s.title)}"/></div>
        <div class="certMeta">
          <div class="certTitle">${escapeHtml(s.title)}</div>
          <div class="certSub">${escapeHtml(s.subtitle || "")}</div>
          <div class="p" style="margin-top:10px">${escapeHtml(s.desc || "")}</div>
        </div>
      </div>
    `).join("");
  }
}
renderCertificates();

// =====================
// Recommendations section
// =====================
function renderRecommendations(){
  const grid = document.getElementById("recGrid");
  if (!grid) return;
  grid.innerHTML = RECOMMENDATIONS.map(r => `
    <div class="recCard tilt-sm">
      <div class="recImg"><img src="${safeText(r.img,"")}" alt="${escapeHtml(r.title)}"/></div>
      <div class="recBody">
        <div class="recTitle">${escapeHtml(r.title)}</div>
        <div class="recText">${escapeHtml(r.text || "")}</div>
        <div class="recFrom">— ${escapeHtml(r.from || "")} • ${escapeHtml(r.source || "")}</div>
      </div>
    </div>
  `).join("");
}
renderRecommendations();

// =====================
// Media slider (NEW)
// =====================
const mediaTrack = document.getElementById("mediaTrack");
const mediaDots = document.getElementById("mediaDots");
let mediaIndex = 0;
let mediaTimer = null;

function renderMediaSlider(){
  if (!mediaTrack) return;

  mediaTrack.innerHTML = MEDIA_SLIDES.map(s => `
    <div class="mediaSlide">
      <img class="msImg" src="${escapeHtml(s.img)}" alt="${escapeHtml(s.title)}" onerror="this.closest('.mediaSlide').style.display='none'">
      <div class="msBody">
        <div class="msTitle">${escapeHtml(s.title)}</div>
        <div class="msSub">${escapeHtml(s.subtitle)}</div>
        <div class="msDesc">${escapeHtml(s.desc)}</div>
      </div>
    </div>
  `).join("");

  if (mediaDots){
    mediaDots.innerHTML = MEDIA_SLIDES.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to media ${i+1}" data-i="${i}"></button>
    `).join("");

    mediaDots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        mediaIndex = Number(d.getAttribute("data-i"));
        goToMedia(mediaIndex);
        restartMediaAuto();
      });
    });
  }

  goToMedia(0);
}

function goToMedia(i){
  if (!mediaTrack) return;
  const slide = mediaTrack.querySelector(".mediaSlide");
  if (!slide) return;

  const slideWidth = slide.getBoundingClientRect().width;
  const gap = 16;

  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(mediaIndex * (slideWidth + gap));
  mediaTrack.style.transform = `translateX(${x}px)`;

  if (mediaDots){
    const all = [...mediaDots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === mediaIndex));
  }
}
function nextMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex >= maxIndex) ? 0 : mediaIndex + 1;
  goToMedia(mediaIndex);
}
function prevMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex <= 0) ? maxIndex : mediaIndex - 1;
  goToMedia(mediaIndex);
}
function restartMediaAuto(){
  if (mediaTimer) clearInterval(mediaTimer);
  mediaTimer = setInterval(nextMedia, 3600);
}
document.getElementById("mediaNext")?.addEventListener("click", () => { nextMedia(); restartMediaAuto(); });
document.getElementById("mediaPrev")?.addEventListener("click", () => { prevMedia(); restartMediaAuto(); });
window.addEventListener("resize", () => goToMedia(mediaIndex));

renderMediaSlider();
restartMediaAuto();

// =====================
// Video glimpse (NEW)
// =====================
const v = document.getElementById("glimpseVideo");
if (v){
  const src = safeText(VIDEO.src, "");
  if (src && !src.startsWith("ADD_")){
    v.innerHTML = `<source src="${escapeHtml(src)}" type="video/mp4">`;
  }
  // autoplay might be blocked if not muted (we keep muted in HTML)
  v.muted = true;
  v.autoplay = true;
  v.loop = true;
}

// =====================
// 2-button list renderer (with optional 2 images)
// =====================
function renderTwoBtnList(elId, arr){
  const el = document.getElementById(elId);
  if (!el) return;

  el.innerHTML = arr.map(item => `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(item.title)}</div>
      ${item.subtitle ? `<div class="itemSub">${escapeHtml(item.subtitle)}</div>` : ""}
      <div class="itemMeta">${escapeHtml(item.meta || "")}</div>
      <div class="itemDesc">${escapeHtml(item.desc || "")}</div>

      <div class="itemMedia2">
        <div class="miniImg"><img src="${escapeHtml(item.img1 || "")}" alt="image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
        <div class="miniImg"><img src="${escapeHtml(item.img2 || "")}" alt="image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
      </div>

      <div class="actionRow">
        <a class="linkBtn primary" href="${safeUrl(item.btn1?.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn1?.label || "View")}</a>
        <a class="linkBtn" href="${safeUrl(item.btn2?.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn2?.label || "External")}</a>
      </div>

      ${item.embedHtml ? `<div class="muted" style="margin-top:12px">Embedded content below:</div><div style="margin-top:10px">${item.embedHtml}</div>` : ""}
    </div>
  `).join("");
}

renderTwoBtnList("pubList", PUBLICATIONS);
renderTwoBtnList("patentList", PATENTS);
renderTwoBtnList("chapterList", BOOK_CHAPTERS);
renderTwoBtnList("editedBookList", EDITED_BOOKS);
renderTwoBtnList("liGrid", LINKEDIN_POSTS);

// =====================
// Blogs render (local + optional external RSS)
// =====================
const blogGrid = document.getElementById("blogGrid");

function renderBlogs(posts){
  if (!blogGrid) return;
  blogGrid.innerHTML = posts.map(p => `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(p.title)}</div>
      <div class="itemSub">${escapeHtml(p.subtitle || "")}</div>
      <div class="itemDesc">${escapeHtml(p.desc || "")}</div>

      <div class="itemMedia2">
        <div class="miniImg"><img src="${escapeHtml(p.img1 || "")}" alt="blog image 1" onerror="this.closest('.miniImg').style.display='none'"></div>
        <div class="miniImg"><img src="${escapeHtml(p.img2 || "")}" alt="blog image 2" onerror="this.closest('.miniImg').style.display='none'"></div>
      </div>

      <div class="actionRow">
        <a class="linkBtn primary" href="${safeUrl(p.btn1?.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn1?.label || "Read")}</a>
        <a class="linkBtn" href="${safeUrl(p.btn2?.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn2?.label || "External")}</a>
      </div>
    </div>
  `).join("");
}

async function fetchExternalBlogs(){
  const external = [];
  for (const f of BLOG_FEEDS){
    try{
      const res = await fetch(f.rss2json);
      const data = await res.json();
      const items = (data.items || []).slice(0, 4);
      items.forEach(it => {
        external.push({
          title: it.title || `Blog from ${f.label}`,
          subtitle: f.label,
          desc: (it.description || "").replace(/<[^>]*>?/gm, "").slice(0, 360) + "...",
          img1: it.thumbnail || "assets/blog/placeholder.jpg",
          img2: "assets/blog/placeholder2.jpg",
          btn1: { label: "Read Blog", url: it.link || "#" },
          btn2: { label: "More", url: it.guid || it.link || "#" }
        });
      });
    }catch(e){
      // ignore feed errors
    }
  }
  return external;
}

(async function initBlogs(){
  const external = await fetchExternalBlogs();
  const all = [...BLOG_POSTS, ...external];
  renderBlogs(all);
})();

// =====================
// Achievements render (BIG)
// =====================
// =====================
// Achievements (BIG) — passport proof image + left/right
// =====================
const achGrid = document.getElementById("achGrid");
if (achGrid){
  // Normalize proof images (supports old img1/img2, and also new "proofs" array)
  const normalized = ACHIEVEMENTS.map(a => ({
    ...a,
    proofs: Array.isArray(a.proofs) ? a.proofs : [a.img1, a.img2].filter(Boolean)
  }));

  achGrid.innerHTML = normalized.map((a, idx) => `
    <div class="awardCard tilt">
      <div class="awardIn">
        <div class="awHead">
          <div class="awIcon">${escapeHtml(a.icon || "🏆")}</div>
          <div>
            <div class="awTitle">${escapeHtml(a.title)}</div>
            <div class="awMeta muted">${escapeHtml(a.meta || "")}</div>
            <div class="awSub">${escapeHtml(a.sub || "")}</div>
          </div>
        </div>

        <div class="p" style="margin-top:12px">${escapeHtml(a.desc || "")}</div>

        <!-- Proof image (passport size) + nav buttons -->
        <div class="proofRow" data-ach="${idx}">
          <button class="proofNavBtn" data-proof="prev" aria-label="Previous proof">‹</button>
          <div class="proofFrame">
            <img class="proofImg" src="${safeText(a.proofs[0] || "", "")}" alt="Proof image"/>
          </div>
          <button class="proofNavBtn" data-proof="next" aria-label="Next proof">›</button>
          <div class="muted" style="font-size:12px;margin-left:auto">Proof</div>
        </div>

        <div class="btnRow" style="margin-top:14px">
          ${a.btn1?.url ? `<a class="btn" href="${safeUrl(a.btn1.url)}" target="_blank" rel="noopener">${escapeHtml(a.btn1.label || "Link 1")}</a>` : ""}
          ${a.btn2?.url ? `<a class="btn ghost" href="${safeUrl(a.btn2.url)}" target="_blank" rel="noopener">${escapeHtml(a.btn2.label || "Link 2")}</a>` : ""}
        </div>

        <div class="proofHint">Tip: Add more proofs by using <b>proofs: [ ... ]</b> in script.js</div>
      </div>
    </div>
  `).join("");

  // proof navigation state
  const state = new Map();
  const setImg = (row, dir) => {
    const idx = Number(row.dataset.ach);
    const proofs = normalized[idx].proofs || [];
    if (!proofs.length) return;
    const cur = state.get(idx) ?? 0;
    const next = (cur + dir + proofs.length) % proofs.length;
    state.set(idx, next);
    row.querySelector(".proofImg").src = safeText(proofs[next], "");
  };

  achGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-proof]");
    if (!btn) return;
    const row = e.target.closest(".proofRow");
    if (!row) return;
    setImg(row, btn.dataset.proof === "next" ? 1 : -1);
  });
}


// =====================
// Contact card
// =====================
// =====================
// Contact (card left + form right) + MAP + QR
// =====================
const contactCard = document.getElementById("contactCard");
if (contactCard){
  const mapSrc = safeText(PROFILE.mapEmbedUrl, "");
  const hasMap = mapSrc && !mapSrc.includes("ADD_GOOGLE_MAP");
  const hasQr = PROFILE.contactQrImg && !PROFILE.contactQrImg.includes("ADD_");

  contactCard.innerHTML = `
    <h3>Quick Info</h3>
    <div class="muted" style="margin-top:8px">I reply fastest on email / LinkedIn.</div>

    <div style="margin-top:16px; display:flex; flex-direction:column; gap:14px">
      <div><b>📍 Location</b><div class="muted">${escapeHtml(PROFILE.location)}</div></div>
      <div><b>✉️ Email</b><div class="muted">${escapeHtml(PROFILE.email)}</div></div>
      <div><b>📞 Phone</b><div class="muted">${escapeHtml(PROFILE.phone)}</div></div>
    </div>

    <!-- CONTACT MAP / QR (customizable)
         1) Map: paste the iframe SRC (only src) into PROFILE.mapEmbedUrl
         2) QR: change PROFILE.contactQrImg -->
    <div class="contactExtras">
      <div class="mapFrame">
        ${hasMap ? `<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${mapSrc}" aria-label="Google map"></iframe>` : `<div style="height:100%;display:grid;place-items:center" class="muted">Add map embed URL in <b>script.js</b></div>`}
      </div>
      <div class="qrFrame" id="contactQr">
        ${hasQr ? `<img src="${safeText(PROFILE.contactQrImg,"")}" alt="Contact QR"/>` : `<div class="muted">Add QR image in <b>script.js</b></div>`}
      </div>
    </div>
  `;
}

// Footer QR
const footerQr = document.getElementById("footerQr");
if (footerQr){
  const ok = PROFILE.footerQrImg && !PROFILE.footerQrImg.includes("ADD_");
  footerQr.innerHTML = ok ? `<img src="${safeText(PROFILE.footerQrImg,"")}" alt="Footer QR"/>` : `<div class="muted" style="padding:10px;text-align:center">Add footer QR in <b>script.js</b></div>`;
}


// =====================
// Footer links (auto copy from navbar so both stay in sync)
// =====================
const footerLinks = document.getElementById("footerLinks");
if (footerLinks){
  const navLinks = document.querySelectorAll("#navLinks a");
  footerLinks.innerHTML = Array.from(navLinks).map(a => {
    const href = a.getAttribute("href");
    const label = a.textContent.trim();
    const token = a.getAttribute("data-i18n");
    return `<a href="${href}" ${token ? `data-i18n="${token}"` : ""}>${escapeHtml(label)}</a>`;
  }).join("");

  // Apply translation to new footer links too
  applyLanguage(localStorage.getItem("lang") || "en");
}

// =====================
// Footer socials
// =====================
const socialRow = document.getElementById("socialRow");
if (socialRow){
  socialRow.innerHTML = `
    <a class="social" href="${safeUrl(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="social" href="${safeUrl(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>
    <a class="social" href="${safeUrl(PROFILE.scholar)}" target="_blank" rel="noopener">Scholar</a>
    <a class="social" href="${safeUrl(PROFILE.resumeUrl)}" target="_blank" rel="noopener">Resume</a>
  `;
}

// =====================
// Schedule meeting (demo)
// =====================
document.getElementById("meetBtn")?.addEventListener("click", () => {
  const name = document.getElementById("meetName")?.value || "";
  const email = document.getElementById("meetEmail")?.value || "";
  const when = document.getElementById("meetWhen")?.value || "";
  const topic = document.getElementById("meetTopic")?.value || "";
  alert(`Demo request sent!\n\nName: ${name}\nEmail: ${email}\nWhen: ${when}\nTopic: ${topic}\n\n(Connect Calendly/Backend later)`);
});

// =====================
// Optional: simple tilt
// =====================
function attachTilt(el, intensity = 12) {
  let rect = null;
  const onMove = (e) => {
    rect = rect || el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * intensity;
    const rotX = (0.5 - y) * intensity;
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
  };
  const onLeave = () => {
    rect = null;
    el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
}
document.querySelectorAll(".tilt").forEach((el) => attachTilt(el, 14));
document.querySelectorAll(".tilt-sm").forEach((el) => attachTilt(el, 10));
document.querySelectorAll(".card3d").forEach((el) => attachTilt(el, 16));

// =====================
// Navbar Search (NEW)
// - keyword type => suggestions
// - click => scroll to best match section
// =====================
const SEARCH_INDEX = [
  { id:"home", title:"Home", keywords:["hero","summary","profile","stats","banner"] },
  { id:"about", title:"About", keywords:["about","who i am","focus","tools"] },
  { id:"skills", title:"Skills", keywords:["skills","technical","stack","python","mern","react","node","docker"] },
  { id:"experience", title:"Experience", keywords:["experience","intern","geu","visit uttarakhand","work"] },
  { id:"education", title:"Education", keywords:["education","iit patna","geu","btech","mtech"] },
  { id:"projects", title:"Projects", keywords:["projects","github","live","deployed"] },
  { id:"media", title:"Media", keywords:["media","gallery","slider","photos"] },
  { id:"glimpse", title:"Video Glimpse", keywords:["video","glimpse","demo","showreel"] },
  { id:"blogs", title:"Blogs", keywords:["blog","articles","posts","medium","rss"] },
  { id:"linkedin", title:"LinkedIn Posts", keywords:["linkedin","posts","updates"] },
  { id:"publications", title:"Publications", keywords:["publication","paper","research","crc press"] },
  { id:"patents", title:"Patents", keywords:["patent","ipr","published"] },
  { id:"bookchapter", title:"Book Chapter", keywords:["book chapter","chapter"] },
  { id:"editedbook", title:"Edited Book", keywords:["edited book","editor"] },
  { id:"achievements", title:"Recognition", keywords:["achievement","award","recognition","speaker","reviewer","hackathon"] },
  { id:"contact", title:"Contact", keywords:["contact","email","phone","message"] },
];

const siteSearch = document.getElementById("siteSearch");
const searchDrop = document.getElementById("searchDrop");

function scoreMatch(q, item){
  const query = q.toLowerCase().trim();
  if (!query) return 0;
  let s = 0;
  if (item.title.toLowerCase().includes(query)) s += 10;
  item.keywords.forEach(k => {
    const kk = k.toLowerCase();
    if (kk.includes(query) || query.includes(kk)) s += 5;
  });
  return s;
}
function openDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "block";
  searchDrop.setAttribute("aria-hidden","false");
}
function closeDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "none";
  searchDrop.setAttribute("aria-hidden","true");
}
function scrollToSection(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior:"smooth", block:"start" });
  closeDrop();
  if (siteSearch) siteSearch.blur();
}

siteSearch?.addEventListener("input", () => {
  const q = siteSearch.value || "";
  const query = q.trim();
  if (!query){
    closeDrop();
    if (searchDrop) searchDrop.innerHTML = "";
    return;
  }

  const results = SEARCH_INDEX
    .map(it => ({...it, score: scoreMatch(query, it)}))
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0, 6);

  if (!results.length){
    if (searchDrop){
      searchDrop.innerHTML = `<div class="searchItem"><div class="siTitle">No match</div><div class="siHint">Try: projects, patents, blogs, contact...</div></div>`;
      openDrop();
    }
    return;
  }

  if (searchDrop){
    searchDrop.innerHTML = results.map(r => `
      <div class="searchItem" data-id="${escapeHtml(r.id)}">
        <div class="siTitle">${escapeHtml(r.title)}</div>
        <div class="siHint">Jump to #${escapeHtml(r.id)}</div>
      </div>
    `).join("");
    openDrop();

    searchDrop.querySelectorAll(".searchItem").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        if (id) scrollToSection(id);
      });
    });
  }
});

siteSearch?.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    const q = (siteSearch.value || "").trim();
    if (!q) return;
    // best match
    const best = SEARCH_INDEX
      .map(it => ({...it, score: scoreMatch(q, it)}))
      .sort((a,b) => b.score - a.score)[0];
    if (best && best.score > 0) scrollToSection(best.id);
  }
  if (e.key === "Escape"){
    closeDrop();
    siteSearch.blur();
  }
});

document.addEventListener("click", (e) => {
  const t = e.target;
  if (!t) return;
  const inside = t.closest?.(".navSearch");
  if (!inside) closeDrop();
});


// =====================
// LOADER control (2.5s)
// =====================
const pageLoader = document.getElementById("pageLoader");
if (pageLoader){
  // Hide after 2.5s (as you requested). You can change this number anytime.
  const HIDE_AFTER_MS = 2500;
  setTimeout(() => pageLoader.classList.add("hide"), HIDE_AFTER_MS);

  // Also hide quickly after full load (whichever happens later is fine).
  window.addEventListener("load", () => {
    setTimeout(() => pageLoader.classList.add("hide"), 200);
  });
}