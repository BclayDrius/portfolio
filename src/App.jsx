import { useState } from "react";
import "./App.css";

const experience = [
  {
    company: "LanguageLine Solutions",
    role: "Bilingual Interpreter (EN/ES)",
    period: "Feb 2026 – Present",
    location: "Remote",
    bullets: [
      "Real-time communication facilitation for medical, legal, and financial sectors via Teleperformance.",
      "Consecutive interpretation with technical precision and cultural mediation.",
      "Compliance with complex terminology under HIPAA and PCI regulations.",
    ],
  },
  {
    company: "Teleperformance (TP)",
    role: "Bilingual Interpreter (EN/ES) · Customer Interaction Expert",
    period: "Oct 2025 – Present · 6 months",
    location: "La Merced, Junín, Perú · Remote",
    bullets: [
      "Specialized interpretation: consecutive VRI/OPI services in real time for medical, legal, financial, and government sectors.",
      "Terminology management: complex technical lexicon and effective cultural mediation under HIPAA and PCI privacy standards.",
      "Quality assurance: compliance with international communication standards and data confidentiality protocols.",
      "Customer Interaction Expert (Oct 2025 – Feb 2026): multichannel support (calls & chat) for Nordstrom.com, focused on account management, orders, and incident resolution in English.",
    ],
  },
  {
    company: "KetBia",
    role: "Web Systems & Digital Infrastructure Lead",
    period: "Feb 2026 – Present",
    location: "La Merced, Junín, Perú · Hybrid",
    url: "https://www.ketbia.com/",
    bullets: [
      "Led KetBia's digital transformation: full-stack web development, systems architecture, and payment gateway integration.",
      "Optimized organic positioning through technical SEO and managed social media strategy, achieving a coherent brand identity.",
      "Built a scalable platform for commercializing fitness services.",
      "Skills: Full-stack Web Development · Payment Gateway Integration · Technical SEO · Digital Marketing & Social Media Strategy · Brand Management · Systems Architecture & Automation.",
    ],
  },
  {
    company: "Barón Club",
    role: "Web Developer & Paid Media Strategist",
    period: "Dec 2025 – Present",
    location: "Valencia, España · Remote",
    url: "https://baronclub.es/",
    bullets: [
      "Collaborated with the team to develop baronclub.es and its advertising on Google and Meta.",
      "Engineered a custom WordPress reservation plugin using Telegram Bot API and SMTP for automated management.",
      "Skills: Google Ads · WordPress · Elementor · Telegram · Automation · E-Commerce.",
    ],
  },
  {
    company: "Nordstrom",
    role: "Customer Service Representative",
    period: "Oct 2025 – Feb 2026",
    location: "United States · Remote",
    bullets: [
      "Full-time multichannel support for Nordstrom.com international clients.",
      "Skills: Incident Resolution · Customer Service · E-Commerce · Communication · Customer Relations · Attention to Detail.",
    ],
  },
  {
    company: "El Hada Artesana",
    role: "Frontend Developer",
    period: "Jun 2025 – Jul 2025",
    location: "Lima, Perú · Remote",
    bullets: [
      "Developed the landing page for a local artisan business.",
      "Skills: Agile Methodologies · Front-End Development · JavaScript · SASS · React.js · Web Applications.",
    ],
  },
  {
    company: "Zent Piper",
    role: "Senior Frontend Developer",
    period: "Aug 2025 – Oct 2025",
    location: "Lima, Perú · Hybrid",
    url: "https://www.zentpiper.com/",
    bullets: [
      "Led the complete frontend development of the official website, deployed on Vercel with a custom domain configured via Cloudflare.",
      "Handled full web development and Google SEO simultaneously while onboarding the first client (Cegrisa) and completing the first stage of their site.",
      "Skills: Front-End Design · JavaScript · SEO · Vercel · Cloudflare.",
    ],
  },
  {
    company: "Majanayim Sport",
    role: "Fitness Coach & Integral Wellness Advisor",
    period: "Jun 2024 – Aug 2024",
    location: "Huancayo, Junín, Perú · On-site",
    bullets: [
      "360° fitness specialist combining high-performance training, strategic nutritional planning, and exceptional client experience.",
      "Boosted members' physical results through personalized programs, ensuring a premium experience and constant lifestyle support.",
      "Skills: Fitness · Coaching · Sports Coaching · Fitness Training.",
    ],
  },
];

const projects = [
  {
    title: "Zentpiper",
    description:
      "Official website for a web agency — full frontend development, Vercel deployment, and Cloudflare domain setup.",
    url: "https://www.zentpiper.com/",
    image: "/zentpiper.png",
    tags: ["React", "Vercel", "Cloudflare", "SEO"],
  },
  {
    title: "KetBia",
    description:
      "Full-stack fitness platform — payment integration, technical SEO, and systems architecture.",
    url: "https://www.ketbia.com/",
    image: "/ketbia.png",
    tags: ["React", "SEO", "Payments"],
  },
  {
    title: "Barón Club",
    description:
      "Premium web solution with a custom WordPress reservation plugin via Telegram Bot API and SMTP.",
    url: "https://baronclub.es/",
    image: "/baronclub.png",
    tags: ["WordPress", "Telegram API", "SMTP"],
  },
  {
    title: "MaXGrind",
    description:
      "Migrating this project to a React Native – Expo application with Supabase backend.",
    url: "https://bclaydrius.github.io/maxgrind/",
    image: "/maxgrind-preview.png",
    tags: ["React Native", "Expo", "Supabase"],
    wip: true,
  },
  {
    title: "Cernext",
    description: "Enterprise for technical solutions. Built with WordPress.",
    url: "https://cernext.vercel.app/",
    image: "/cernext.png",
    tags: ["WordPress", "Technical Solutions"],
    wip: true,
  },
];

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "WordPress",
  "Supabase",
  "PostgreSQL",
  "API Management",
  "IONOS",
  "Web Hosting",
  "SQL",
  "NoSQL",
  "Technical SEO",
  "Git",
  "Kiro (AI IDE)",
  "Vercel",
  "Cloudflare",
  "Cursor (AI IDE)",
];

const education = [
  {
    school: "Coderhouse",
    degree: "Full-Stack Web Development",
    period: "Apr 2025 – Mar 2026",
  },
  {
    school: "Universidad Continental",
    degree: "B.S. in Systems Engineering and Computer Science",
    period: "Mar 2023 – Present",
  },
];

const certifications = [
  "Advanced Search Engine Optimization",
  "Git y GitHub",
  "Backend Development – Advanced Backend",
  "Personal Development G9 – ONE",
  "JavaScript",
];

const languages = [
  { lang: "Spanish", level: "Native / Bilingual" },
  { lang: "English", level: "Native / Bilingual" },
  { lang: "Portuguese", level: "Limited Working" },
  { lang: "Japanese", level: "Elementary" },
];

// ── PDF / simplified view ──────────────────────────────────────────────────
function PdfView({ onClose }) {
  return (
    <div className="pdf-overlay">
      <div className="pdf-toolbar no-print">
        <span className="pdf-toolbar-title">PDF Preview</span>
        <div className="pdf-toolbar-actions">
          <button className="btn btn-primary" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            ✕ Close
          </button>
        </div>
      </div>

      <div className="pdf-page">
        {/* Sidebar */}
        <aside className="pdf-sidebar">
          <section>
            <h4>Contact</h4>
            <p>+51 988 490 319</p>
            <p>barclaydario@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/barclay-leach">
                linkedin.com/in/barclay-leach
              </a>
            </p>
            <p>
              <a href="https://github.com/BclayDrius">github.com/BclayDrius</a>
            </p>
            <p>
              <a href="https://barclayleach.vercel.app/">
                barclayleach.vercel.app
              </a>
            </p>
          </section>
          <section>
            <h4>Languages</h4>
            {languages.map((l) => (
              <p key={l.lang}>
                <strong>{l.lang}</strong> <span>{l.level}</span>
              </p>
            ))}
          </section>
          <section>
            <h4>Tech Stack</h4>
            {stack.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </section>
          <section>
            <h4>Certifications</h4>
            {certifications.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </section>
        </aside>

        {/* Main */}
        <main className="pdf-main">
          <div className="pdf-header">
            <h1>Barclay Leach</h1>
            <p className="pdf-headline">
              Systems Engineering Student | Web Developer at KetBia &amp; Barón
              Club | Bilingual Interpreter (EN/ES) at LanguageLine Solutions
              (LLS)
            </p>
            <p className="pdf-location">Lima Metropolitan Area, Perú</p>
          </div>

          <div className="pdf-section">
            <h2>Experience</h2>
            {experience.map((job, i) => (
              <div key={i} className="pdf-job">
                <div className="pdf-job-header">
                  <strong>{job.role}</strong>
                  <span>{job.period}</span>
                </div>
                <p className="pdf-job-meta">
                  {job.company} · {job.location}
                </p>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pdf-section">
            <h2>Education</h2>
            {education.map((e, i) => (
              <div key={i} className="pdf-job">
                <div className="pdf-job-header">
                  <strong>{e.degree}</strong>
                  <span>{e.period}</span>
                </div>
                <p className="pdf-job-meta">{e.school}</p>
              </div>
            ))}
          </div>

          <div className="pdf-watermark">
            pdf generated from barclayleach.vercel.app/
          </div>
        </main>
      </div>
    </div>
  );
}

// ── Developer CV (IBM-targeted) ───────────────────────────────────────────
const devCvExperience = [
  {
    company: "KetBia",
    role: "Full Stack Developer & Web Systems Lead",
    period: "Feb 2026 – Present",
    location: "La Merced, Perú · Hybrid",
    url: "https://www.ketbia.com/",
    bullets: [
      "Architected and developed a full-stack fitness platform using React and Node.js, handling both frontend UI and backend API services.",
      "Designed and integrated RESTful APIs for payment gateway processing and third-party service automation.",
      "Implemented technical SEO and systems architecture strategies, improving organic reach and platform scalability.",
      "Managed deployment pipelines and web hosting infrastructure via IONOS, ensuring high availability.",
    ],
  },
  {
    company: "Barón Club",
    role: "Full Stack Web Developer",
    period: "Dec 2025 – Present",
    location: "Valencia, España · Remote",
    url: "https://baronclub.es/",
    bullets: [
      "Built and deployed baronclub.es, a production-level web application serving real users.",
      "Engineered a custom WordPress plugin integrating Telegram Bot API and SMTP for automated reservation management — a full backend service with external API orchestration.",
      "Collaborated cross-functionally with designers and stakeholders on system design and feature implementation.",
    ],
  },
  {
    company: "El Hada Artesana",
    role: "Frontend Developer",
    period: "Jun 2025 – Jul 2025",
    location: "Lima, Perú · Remote",
    bullets: [
      "Developed a responsive React frontend with JavaScript, SASS, and component-based architecture.",
      "Applied agile methodologies within a collaborative team environment.",
    ],
  },
];

const devCvProjects = [
  {
    title: "KetBia Platform",
    url: "https://www.ketbia.com/",
    bullets: [
      "Full-stack web application: React frontend, Node.js/Express backend, SQL/NoSQL data layer.",
      "RESTful API integration for payments, user management, and content delivery.",
      "Deployed on IONOS with custom domain, SSL, and performance optimization.",
    ],
  },
  {
    title: "MaXGrind",
    url: "https://bclaydrius.github.io/maxgrind/",
    bullets: [
      "Migrating to React Native – Expo with a Supabase (PostgreSQL) backend.",
      "Demonstrates cross-platform development skills and cloud database integration.",
    ],
  },
  {
    title: "Barón Club Reservation Plugin",
    url: "https://baronclub.es/",
    bullets: [
      "Custom backend service built as a WordPress plugin using PHP, Telegram Bot API, and SMTP.",
      "Automated end-to-end reservation workflow with external API calls and email notifications.",
    ],
  },
];

const devStack = [
  { category: "Languages", items: "JavaScript (ES6+), TypeScript" },
  {
    category: "Frontend",
    items: "React, Next.js, React Native, HTML5, CSS3, SASS",
  },
  { category: "Backend", items: "Node.js, Express, RESTful APIs, PHP" },
  { category: "Databases", items: "PostgreSQL, Supabase, SQL, NoSQL, MySQL" },
  {
    category: "Tools & Platforms",
    items: "Git, GitHub, IONOS, WordPress, Vercel, API Management",
  },
  { category: "AI-Powered IDEs", items: "Kiro, Cursor" },
  {
    category: "Methodologies",
    items: "Agile, Cross-functional collaboration, CI/CD awareness",
  },
];

function DevCvView({ onClose }) {
  return (
    <div className="pdf-overlay">
      <div className="pdf-toolbar no-print">
        <span className="pdf-toolbar-title">
          Developer CV — IBM Entry-Level Full Stack
        </span>
        <div className="pdf-toolbar-actions">
          <button className="btn btn-primary" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            ✕ Close
          </button>
        </div>
      </div>

      <div className="devcv-page">
        {/* Header */}
        <div className="devcv-header">
          <div>
            <h1>Barclay Leach</h1>
            <p className="devcv-title">
              Full Stack Developer · Systems Engineering Student
            </p>
          </div>
          <div className="devcv-contact">
            <span>barclaydario@gmail.com</span>
            <span>+51 988 490 319</span>
            <span>
              <a href="https://github.com/BclayDrius">github.com/BclayDrius</a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/barclay-leach">
                linkedin.com/in/barclay-leach
              </a>
            </span>
            <span>
              <a href="https://barclayleach.vercel.app/">
                barclayleach.vercel.app
              </a>
            </span>
          </div>
        </div>

        {/* Summary */}
        <div className="devcv-section">
          <h2>Summary</h2>
          <p className="devcv-summary">
            Full Stack Developer with hands-on production experience building
            React and Node.js applications, designing RESTful APIs, and managing
            end-to-end web systems. Currently pursuing a B.S. in Systems
            Engineering and Computer Science. Proficient in TypeScript,
            SQL/NoSQL databases, and cross-functional collaboration. Experienced
            working remotely with international teams. Fluent in English and
            Spanish.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="devcv-section">
          <h2>Technical Skills</h2>
          <table className="devcv-stack-table">
            <tbody>
              {devStack.map((row) => (
                <tr key={row.category}>
                  <td className="devcv-stack-cat">{row.category}</td>
                  <td className="devcv-stack-items">{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Experience */}
        <div className="devcv-section">
          <h2>Experience</h2>
          {devCvExperience.map((job, i) => (
            <div key={i} className="devcv-job">
              <div className="devcv-job-header">
                <div>
                  <strong>{job.role}</strong>
                  <span className="devcv-company">
                    {job.url ? (
                      <a href={job.url}>{job.company}</a>
                    ) : (
                      job.company
                    )}
                    {" · "}
                    {job.location}
                  </span>
                </div>
                <span className="devcv-period">{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="devcv-section">
          <h2>Projects</h2>
          {devCvProjects.map((p, i) => (
            <div key={i} className="devcv-job">
              <div className="devcv-job-header">
                <strong>
                  <a href={p.url}>{p.title}</a>
                </strong>
              </div>
              <ul>
                {p.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="devcv-section">
          <h2>Education</h2>
          {education.map((e, i) => (
            <div key={i} className="devcv-job">
              <div className="devcv-job-header">
                <div>
                  <strong>{e.degree}</strong>
                  <span className="devcv-company">{e.school}</span>
                </div>
                <span className="devcv-period">{e.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="devcv-section">
          <h2>Certifications</h2>
          <ul className="devcv-certs">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="devcv-section">
          <h2>Languages</h2>
          <p className="devcv-langs">
            {languages.map((l) => `${l.lang} (${l.level})`).join(" · ")}
          </p>
        </div>

        <div
          className="pdf-watermark"
          style={{
            textAlign: "right",
            marginTop: "24px",
            fontSize: "8px",
            color: "#bbb",
            fontStyle: "italic",
          }}
        >
          pdf generated from barclayleach.vercel.app/
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const [pdfMode, setPdfMode] = useState(false);
  const [devCvMode, setDevCvMode] = useState(false);

  if (pdfMode) return <PdfView onClose={() => setPdfMode(false)} />;
  if (devCvMode) return <DevCvView onClose={() => setDevCvMode(false)} />;

  return (
    <div className="portfolio">
      {/* Floating buttons */}
      <div className="fab-group no-print">
        <button
          className="pdf-fab"
          onClick={() => setPdfMode(true)}
          title="Export full portfolio as PDF"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          Portfolio PDF
        </button>
        <button
          className="pdf-fab pdf-fab-dev"
          onClick={() => setDevCvMode(true)}
          title="Export developer CV"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          Dev CV
        </button>
      </div>

      {/* Hero */}
      <header className="hero">
        <div className="container hero-inner">
          <img src="/me.png" alt="Barclay Leach" className="avatar" />
          <div className="hero-text">
            <h1>Barclay Leach</h1>
            <p className="hero-sub">
              Systems Engineering Student | Web Developer at KetBia &amp; Barón
              Club | Bilingual Interpreter (EN/ES) at LanguageLine Solutions
              (LLS)
            </p>
            <div className="hero-links">
              <a
                href="mailto:barclaydario@gmail.com"
                className="btn btn-primary"
              >
                barclaydario@gmail.com
              </a>
              <a
                href="https://github.com/BclayDrius"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/barclay-leach"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stack */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tags-row">
            {stack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="job-header">
                    <div>
                      <h3 className="job-role">{job.role}</h3>
                      <p className="job-company">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                        <span className="job-meta"> · {job.location}</span>
                      </p>
                    </div>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <ul className="job-bullets">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-img-wrap">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-body">
                  <h3>
                    {p.title}
                    {p.wip && (
                      <span className="wip-badge">Work in Progress</span>
                    )}
                  </h3>
                  <p>{p.description}</p>
                  <div className="tags-row">
                    {p.tags.map((t) => (
                      <span key={t} className="tag tag-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="edu-grid">
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <p className="edu-period">{e.period}</p>
                <h3 className="edu-degree">{e.degree}</h3>
                <p className="edu-school">{e.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="tags-row">
            {certifications.map((c) => (
              <span key={c} className="tag">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="lang-grid">
            {languages.map((l) => (
              <div key={l.lang} className="lang-card">
                <span className="lang-name">{l.lang}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-alt contact-section">
        <div className="container contact-inner">
          <h2 className="section-title">Get in touch</h2>
          <p className="contact-sub">
            Open to new opportunities and collaborations.
          </p>
          <div className="contact-links">
            <a href="mailto:barclaydario@gmail.com" className="btn btn-primary">
              barclaydario@gmail.com
            </a>
            <a href="tel:+51988490319" className="btn btn-ghost">
              +51 988 490 319
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            © 2026 Barclay Leach ·{" "}
            <a
              href="https://barclayleach.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              barclayleach.vercel.app
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
