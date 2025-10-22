import "./App.css";

function App() {
  const projects = [
    {
      title: "MaXGrind 💪",
      description:
        "Plataforma integral para powerlifting e hipertrofia muscular",
      status: "Activo",
      image: "/maxgrind-preview.png",
      link: "https://bclaydrius.github.io/maxgrind/",
    },
    {
      title: "Zent Academy 🧑🏻‍🏫",
      description: "Plataforma educativa innovadora (próximamente)",
      status: "Próximamente",
      image: "/afterlife.png",
    },
    {
      title: "Zentpiper 🎯",
      description:
        "Página web en donde se cotizan servicios de creación de páginas web",
      status: "Activo",
      image: "/zentpiper.png",
      link: "https://zentpiper.vercel.app/",
    },
    {
      title: "Cernext 🚀",
      description: "Plataforma web avanzada con tecnología de vanguardia",
      status: "Activo",
      image: "/cernext.png",
      link: "https://cernext.vercel.app/",
    },
    {
      title: "El Hada Artesana ☕",
      description: "Cafetería en San Bartolo, Lima - Proyecto gastronómico",
      status: "Inactivo",
      image: "/artesana.png",
      link: "https://github.com/BclayDrius/artesana",
    },
    {
      title: "Macerados Emperador Inka 🇵🇪",
      description: "Proyecto artesanal con auténtica esencia peruana",
      status: "Inactivo",
      image: "/macerados-preview.png",
      link: "https://github.com/BclayDrius/chelas",
    },
  ];

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="profile-section">
              <div className="profile-image">
                <img
                  src="/me.png"
                  alt="b_clay profile"
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h1 className="name">Barclay Leach</h1>
                <h2 className="subtitle">
                  Ingeniero de Sistemas e Informática | Desarrollador Full Stack
                </h2>
                <p className="tagline">
                  Con el sueño de liderar equipos de gente apasionada con el
                  crecimiento personal.
                </p>
                <div className="profile-actions">
                  <a
                    href="https://github.com/BclayDrius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mini-github-btn"
                    title="Sígueme en GitHub"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    BclayDrius
                  </a>
                  <a
                    href="https://www.linkedin.com/in/barclay-leach/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mini-linkedin-btn"
                    title="Conéctate en LinkedIn"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Barclay Leach
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="about-text">
            Soy una fusión entre la pasión por la tecnología, el entusiasmo por
            el fitness y la curiosidad por el mundo que nos rodea
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3>🔭 Proyectos</h3>
              <ul>
                <li>MaXGrind 💪 – Plataforma de powerlifting e hipertrofia</li>
                <li>Zent Academy 🧑🏻‍🏫 – Plataforma educativa (próximamente)</li>
                <li>Zentipiper 🎯 – Aplicación web moderna</li>
                <li>Cernext 🚀 – Plataforma web avanzada</li>
                <li>El Hada Artesana ☕ – Cafetería en San Bartolo, Lima</li>
                <li>
                  Macerados Emperador Inka 🇵🇪 – Proyecto con esencia peruana
                </li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🌱 Aprendiendo</h3>
              <ul>
                <li>Next.js + React (Desarrollo Frontend)</li>
                <li>Django (Backend y APIs)</li>
                <li>Japonés 🇯🇵 (Porque leer kanji es fascinante)</li>
                <li>Arquitectura de microservicios</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>💬 Pregúntame sobre</h3>
              <ul>
                <li>Desarrollo web full stack 💻</li>
                <li>Linux y personalización de escritorios 🐧</li>
                <li>Entrenamiento y vida fitness 💪</li>
                <li>Inglés nativo y traducción técnica 🌍</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-preview"
                  />
                  <div
                    className={`status-badge ${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="project-btn"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <p>
              📫 Encuéntrame en Discord:{" "}
              <span className="highlight">b_clay</span>
            </p>
            <p>
              ✉️ Email:{" "}
              <span className="highlight">barclaydario@gmail.com</span>
            </p>

            <p className="fun-fact">
              ⚡ Dato curioso: Realmente amo todo lo mencionado anteriormente.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2025 b_clay. Desarrollado con React + Vite. ¡Sin dolor, no
            hay ganancia! 💪
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
