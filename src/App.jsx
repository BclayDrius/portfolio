import "./App.css";

const experience = [
  {
    company: "KetBia",
    role: "Web Systems & Digital Infrastructure Lead",
    period: "Feb 2026 – Present",
    location: "La Merced, Junín, Perú",
    url: "https://www.ketbia.com/",
    bullets: [
      "Leading digital transformation for a full-stack fitness platform.",
      "Responsible for payment gateway integration, systems architecture, and technical SEO.",
      "Managing social media strategy and brand identity.",
    ],
  },
  {
    company: "LanguageLine Solutions (via Teleperformance)",
    role: "Bilingual Interpreter EN/ES",
    period: "Feb 2026 – Present",
    location: "La Merced, Junín, Perú",
    bullets: [
      "Real-time consecutive interpretation (VRI/OPI) for medical, legal, financial, and government sectors.",
      "Complex terminology management and cultural mediation under HIPAA and PCI standards.",
    ],
  },
  {
    company: "Barón Club",
    role: "Web Developer & Paid Media Strategist",
    period: "Dec 2025 – Present",
    location: "Valencia, España",
    url: "https://baronclub.es/",
    bullets: [
      "Developed baronclub.es and engineered a custom WordPress reservation plugin using Telegram Bot API and SMTP.",
      "Managed Google Ads and Meta Ads campaigns.",
    ],
  },
  {
    company: "Teleperformance / Nordstrom",
    role: "Customer Interaction Expert",
    period: "Oct 2025 – Feb 2026",
    location: "Lima, Perú",
    bullets: [
      "Multichannel support (calls & chat) for Nordstrom.com US market.",
      "Managed high-value international accounts and resolved complex incidents.",
    ],
  },
  {
    company: "El Hada Artesana",
    role: "Frontend Developer",
    period: "Jun 2025 – Jul 2025",
    location: "Lima, Perú",
    bullets: [
      "Developed the frontend for a local artisan café in San Bartolo.",
    ],
  },
  {
    company: "Majanayim Sport",
    role: "Fitness Coach & Wellness Advisor",
    period: "Jun 2024 – Aug 2024",
    location: "Huancayo, Junín, Perú",
    bullets: [
      "360° fitness specialist combining high-performance training, nutritional planning, and premium client experience.",
    ],
  },
];

const projects = [
  {
    title: "KetBia",
    description:
      "Full-stack fitness platform — payment integration, technical SEO, and systems architecture.",
    url: "https://www.ketbia.com/",
    image: "/maxgrind-preview.png",
    tags: ["React", "SEO", "Payments"],
  },
  {
    title: "Barón Club",
    description:
      "Premium web solution with a custom WordPress reservation plugin via Telegram Bot API and SMTP.",
    url: "https://baronclub.es/",
    image: "/zentpiper.png",
    tags: ["WordPress", "Telegram API", "SMTP"],
  },
  {
    title: "El Hada Artesana",
    description: "Frontend for a local artisan café in San Bartolo, Lima.",
    url: "https://github.com/BclayDrius/artesana",
    image: "/artesana.png",
    tags: ["React", "CSS"],
  },
  {
    title: "Zentpiper",
    description:
      "Web agency landing page for quoting web development services.",
    url: "https://www.zentpiper.com/",
    image: "/cernext.png",
    tags: ["React", "Vite"],
  },
];

const stack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Django",
  "WordPress",
  "SQL",
  "NoSQL",
  "Technical SEO",
  "Git",
];

const education = [
  {
    school: "Universidad Continental",
    degree: "B.S. in Systems Engineering and Computer Science",
    period: "2023 – Present",
  },
  {
    school: "Coderhouse",
    degree: "Full-Stack Web Development Certification",
    period: "Apr 2025 – Mar 2026",
  },
];

export default function App() {
  return (
    <div className="portfolio">
      {/* Hero */}
      <header className="hero">
        <div className="container hero-inner">
          <img src="/me.png" alt="Barclay Leach" className="avatar" />
          <div className="hero-text">
            <p className="hero-label">Full Stack Developer</p>
            <h1>Barclay Leach</h1>
            <p className="hero-sub">
              Systems Engineering student building scalable web platforms,
              integrating payment systems, and bridging languages across
              industries.
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
                  <h3>{p.title}</h3>
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

      {/* Languages */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="lang-grid">
            {[
              { lang: "Spanish", level: "Native / Bilingual" },
              { lang: "English", level: "Native / Bilingual" },
              { lang: "Portuguese", level: "Limited Working" },
              { lang: "Japanese", level: "Elementary" },
            ].map((l) => (
              <div key={l.lang} className="lang-card">
                <span className="lang-name">{l.lang}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section">
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
