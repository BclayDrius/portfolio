import "./App.css";

function App() {
  const projects = [
    {
      title: "MaXGrind 💪",
      description: "Powerlifting & hypertrophy platform",
      status: "Active",
      placeholder: "maxgrind-preview.jpg",
    },
    {
      title: "After Life 🧑🏻‍🏫",
      description: "(Stay tuned...)",
      status: "Coming Soon",
      placeholder: "afterlife-preview.jpg",
    },
    {
      title: "Macerados Emperador Inka 🇵🇪",
      description: "Homegrown project with Peruvian vibes",
      status: "Active",
      placeholder: "emperador-preview.jpg",
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
                <div className="gym-icon">💪</div>
              </div>
              <div className="profile-info">
                <h1 className="name">b_clay</h1>
                <p className="tagline">
                  Tech Obsession × Fitness Madness × World Curiosity
                </p>
                <div className="pronouns">bar/clay</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a fusion of tech obsession, fitness madness, and curiosity for
            the world
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3>🔭 Current Projects</h3>
              <ul>
                <li>MaXGrind 💪 – Powerlifting & hypertrophy platform</li>
                <li>After Life 🧑🏻‍🏫 – (Stay tuned...)</li>
                <li>
                  Macerados Emperador Inka 🇵🇪 – Homegrown project with Peruvian
                  vibes
                </li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🌱 Learning</h3>
              <ul>
                <li>Next.js + React</li>
                <li>Django backend magic</li>
                <li>Japanese 🇯🇵 (because reading kanji is fun)</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>💬 Ask me about</h3>
              <ul>
                <li>Linux & ricing desktops 🐧</li>
                <li>MMA, UFC, and Gym life 💪</li>
                <li>Weird tech combos that somehow work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">
                    <span>📸 {project.placeholder}</span>
                  </div>
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
                  <button className="project-btn">View Project</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>
              📫 Reach me: <span className="highlight">b_clay</span> on Discord
            </p>
            <p className="fun-fact">
              ⚡ Fun Fact: I genuinely love everything above.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2024 b_clay. Built with React + Vite. No pain, no gain! 💪
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
