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
      title: "Zentipiper 🎯",
      description: "Aplicación web moderna con diseño elegante y funcional",
      status: "Activo",
      image: "/zentipiper-preview.png",
      link: "https://zentpiper.vercel.app/",
    },
    {
      title: "Macerados Emperador Inka 🇵🇪",
      description: "Proyecto artesanal con auténtica esencia peruana",
      status: "Activo",
      image: "/macerados-preview.png",
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
                  src="https://res.cloudinary.com/dtjygcy2x/image/upload/v1757803181/me.png"
                  alt="b_clay profile"
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h1 className="name">Barclay Leach</h1>
                <p className="tagline">
                  Desarrollador Full Stack × Entusiasta del Fitness × Explorador
                  del Mundo
                </p>
                <div className="profile-actions">
                  <div className="pronouns">bar/clay</div>
                  <a
                    href="https://github.com/BclayDrius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mini-github-btn"
                    title="Sígueme en GitHub"
                  >
                    BclayDrius 🐈‍⬛
                  </a>
                  <a
                    href="https://www.linkedin.com/in/barclay-leach/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mini-linkedin-btn"
                    title="Conéctate en LinkedIn"
                  >
                    Barclay Leach �
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
              <h3>🔭 Proyectos Actuales</h3>
              <ul>
                <li>MaXGrind 💪 – Plataforma de powerlifting e hipertrofia</li>
                <li>Zent Academy 🧑🏻‍🏫 – Plataforma educativa (próximamente)</li>
                <li>Zentipiper 🎯 – Aplicación web moderna</li>
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
