<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Alejandro Botero — Full Stack Engineer</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0b0e1a;
      --bg2: #111728;
      --card: #161d30;
      --card-hover: #1c2540;
      --blue: #5b8ef0;
      --purple: #a47cf3;
      --pink: #f06b9e;
      --green: #4ade80;
      --text: #e8eaf6;
      --muted: #8b92b0;
      --border: #1e2640;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      line-height: 1.6;
    }

    /* ── NAV ── */
    nav {
      position: fixed; top: 0; width: 100%; z-index: 100;
      background: rgba(11,14,26,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner {
      max-width: 1100px; margin: 0 auto;
      padding: 1.1rem 2rem;
      display: flex; align-items: center; justify-content: space-between;
    }
    .nav-logo {
      font-family: 'Syne', sans-serif;
      font-size: 1.3rem; font-weight: 800;
      background: linear-gradient(90deg, var(--blue), var(--purple));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .nav-links { display: flex; gap: 2.2rem; }
    .nav-links a {
      color: var(--muted); text-decoration: none;
      font-size: 0.95rem; font-weight: 500;
      transition: color .2s;
    }
    .nav-links a:hover { color: var(--blue); }

    /* ── HERO ── */
    .hero {
      padding: 9rem 2rem 5rem;
      max-width: 1100px; margin: 0 auto;
    }
    .available-badge {
      display: inline-flex; align-items: center; gap: .5rem;
      font-size: .85rem; color: var(--green); margin-bottom: 1.2rem;
    }
    .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--green);
      animation: pulse 1.8s ease-in-out infinite;
    }
    @keyframes pulse {
      0%,100% { opacity: 1; transform: scale(1); }
      50% { opacity: .5; transform: scale(.8); }
    }
    .hero h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.8rem, 7vw, 5.5rem);
      font-weight: 800; line-height: 1.05;
      background: linear-gradient(135deg, var(--blue), var(--purple), var(--pink));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1.4rem;
    }
    .hero-bio {
      font-size: 1.15rem; color: var(--muted);
      max-width: 640px; margin-bottom: 2.2rem;
    }
    .social-links { display: flex; gap: .75rem; }
    .social-links a {
      display: flex; align-items: center; justify-content: center;
      width: 46px; height: 46px;
      background: var(--card); border-radius: 10px;
      color: var(--text); text-decoration: none;
      border: 1px solid var(--border);
      transition: background .2s, transform .2s;
    }
    .social-links a:hover { background: var(--card-hover); transform: translateY(-2px); }
    .social-links svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

    /* ── SECTION SHARED ── */
    section { padding: 5rem 2rem; }
    .section-inner { max-width: 1100px; margin: 0 auto; }
    .section-header {
      display: flex; align-items: center; gap: .75rem;
      margin-bottom: 2.5rem;
    }
    .section-header svg { width: 26px; height: 26px; color: var(--blue); fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .section-header h2 {
      font-family: 'Syne', sans-serif;
      font-size: 1.9rem; font-weight: 700;
    }
    .alt-bg { background: var(--bg2); }

    /* ── ABOUT ── */
    .about-text {
      font-size: 1.1rem; color: var(--muted);
      max-width: 720px; line-height: 1.8;
    }

    /* ── PROJECTS ── */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
    }
    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.6rem;
      transition: background .2s, transform .2s;
    }
    .card:hover { background: var(--card-hover); transform: translateY(-3px); }
    .card h3 {
      font-family: 'Syne', sans-serif;
      font-size: 1.2rem; font-weight: 700;
      margin-bottom: .6rem;
      transition: color .2s;
    }
    .card:hover h3 { color: var(--blue); }
    .card p { font-size: .9rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6; }
    .tech-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1.1rem; }
    .tech-tag {
      padding: .25rem .75rem;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 99px;
      font-size: .75rem; color: var(--blue);
    }
    .card-links { display: flex; gap: 1rem; }
    .card-links a {
      display: flex; align-items: center; gap: .35rem;
      font-size: .85rem; color: var(--muted);
      text-decoration: none; transition: color .2s;
    }
    .card-links a:hover { color: var(--blue); }
    .card-links svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

    /* ── SKILLS ── */
    .skills-grid { display: flex; flex-wrap: wrap; gap: .75rem; }
    .skill-pill {
      padding: .6rem 1.4rem;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 10px;
      font-size: 1rem;
      transition: background .2s, transform .2s;
      cursor: default;
    }
    .skill-pill:hover { background: #1a2a5e; transform: scale(1.04); }

    /* ── CONTACT ── */
    .contact-section { text-align: center; }
    .contact-section h2 {
      font-family: 'Syne', sans-serif;
      font-size: 2.2rem; font-weight: 700; margin-bottom: .75rem;
    }
    .contact-section p { color: var(--muted); font-size: 1.1rem; margin-bottom: 2rem; }
    .cta-btn {
      display: inline-flex; align-items: center; gap: .6rem;
      padding: .9rem 2rem;
      background: var(--blue); border-radius: 10px;
      color: #fff; text-decoration: none;
      font-size: 1rem; font-weight: 600;
      transition: background .2s, transform .2s;
    }
    .cta-btn:hover { background: #4577e0; transform: translateY(-2px); }
    .cta-btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem;
      text-align: center;
      color: var(--muted);
      font-size: .88rem;
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <div class="nav-inner">
      <span class="nav-logo">Alejandro Botero</span>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <div class="hero">
    <div class="available-badge"><span class="dot"></span> Available for work</div>
    <h1>Full Stack Software Engineer</h1>
    <p class="hero-bio">
      SWE with hands-on experience in full-stack web development, databases and agile + scrum
      environments. Bilingual in Spanish and English, with a strong foundation in algorithms,
      system design, and practical problem-solving.
    </p>
    <div class="social-links">
      <a href="https://github.com/alejobotero" target="_blank" title="GitHub">
        <!-- GitHub icon -->
        <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      </a>
      <a href="https://linkedin.com/in/alejboat" target="_blank" title="LinkedIn">
        <!-- LinkedIn icon -->
        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="mailto:alej.boat@gmail.com" title="Email">
        <!-- Mail icon -->
        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </div>
  </div>

  <!-- ABOUT -->
  <section id="about" class="alt-bg">
    <div class="section-inner">
      <div class="section-header">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <h2>About Me</h2>
      </div>
      <p class="about-text">
        I'm a developer who loves turning ideas into reality through code. With a strong foundation
        in both frontend and backend technologies, I build scalable applications that prioritize
        user experience and clean architecture. I'm constantly learning and adapting to new
        technologies to stay at the forefront of web development.
      </p>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects">
    <div class="section-inner">
      <div class="section-header">
        <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        <h2>Featured Projects</h2>
      </div>
      <div class="projects-grid">

        <div class="card">
          <h3>Heartspark</h3>
          <p>A full-stack web application that helps users manage their daily tasks with an intuitive interface and real-time updates.</p>
          <div class="tech-tags">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
          </div>
          <div class="card-links">
            <a href="https://github.com/alejobotero" target="_blank">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              Code
            </a>
            <a href="#" target="_blank">
              <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
          </div>
        </div>

        <div class="card">
          <h3>Strayfinder</h3>
          <p>An e-commerce platform with payment integration, product management, and user authentication features.</p>
          <div class="tech-tags">
            <span class="tech-tag">Next.js</span>
            <span class="tech-tag">TypeScript</span>
            <span class="tech-tag">React</span>
          </div>
          <div class="card-links">
            <a href="https://github.com/alejobotero" target="_blank">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              Code
            </a>
            <a href="#" target="_blank">
              <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
          </div>
        </div>

        <div class="card">
          <h3>Algorithm Visualizer</h3>
          <p>A data visualization dashboard that displays real-time analytics with interactive charts and graphs.</p>
          <div class="tech-tags">
            <span class="tech-tag">React</span>
            <span class="tech-tag">D3.js</span>
            <span class="tech-tag">Express</span>
          </div>
          <div class="card-links">
            <a href="https://github.com/alejobotero" target="_blank">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              Code
            </a>
            <a href="#" target="_blank">
              <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="alt-bg">
    <div class="section-inner">
      <div class="section-header">
        <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        <h2>Skills &amp; Technologies</h2>
      </div>
      <div class="skills-grid">
        <span class="skill-pill">JavaScript</span>
        <span class="skill-pill">React</span>
        <span class="skill-pill">Node.js</span>
        <span class="skill-pill">Python</span>
        <span class="skill-pill">TypeScript</span>
        <span class="skill-pill">MongoDB</span>
        <span class="skill-pill">PostgreSQL</span>
        <span class="skill-pill">Git</span>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="section-inner contact-section">
      <h2>Let's Work Together</h2>
      <p>I'm always interested in hearing about new projects and opportunities.</p>
      <a href="mailto:alej.boat@gmail.com" class="cta-btn">
        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Get In Touch
      </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>© 2025 Alejandro Botero. Built with HTML &amp; CSS.</p>
  </footer>

</body>
</html>
  
