import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Replace with your actual information
  const portfolio = {
    name: "Alejandro Botero",
    title: "Full Stack Software Engineer",
    bio: "SWE with hands-on experience in full-stack web development, databases and agile + scrum environments. Bilingual in Spanish and English, with a strong foundation in algorithms, system design, and practical problem-solving. Eager to contribute to dynamic tech teams through collaborative and user-focused development.",
    email: "alej.boat@gmail.com",
    github: "https://github.com/alejobotero",
    linkedin: "https://linkedin.com/in/alejboat",
    
    skills: [
      "JavaScript", "React", "Node.js", "Python", 
      "TypeScript", "MongoDB", "PostgreSQL", "Git"
    ],
    
    projects: [
      {
        id: 1,
        title: "Heartspark",
        description: "A full-stack web application that helps users manage their daily tasks with an intuitive interface and real-time updates.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/project",
        demo: "https://project1-demo.com"
      },
      {
        id: 2,
        title: "Strayfinder",
        description: "An e-commerce platform with payment integration, product management, and user authentication features.",
        tech: ["Next.js", "TypeScript", "React"],
        github: "https://github.com/yourusername/project2",
        demo: "https://project2-demo.com"
      },
      {
        id: 3,
        title: "Algorithm Visualizer",
        description: "A data visualization dashboard that displays real-time analytics with interactive charts and graphs.",
        tech: ["React", "D3.js", "Express"],
        github: "https://github.com/yourusername/project",
        demo: "https://project3-demo.com"
      }
    ]
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {portfolio.name}
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-400 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-400 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-400 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-400 transition">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm">Available for work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {portfolio.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8">
            {portfolio.bio}
          </p>
          <div className="flex gap-4">
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <Github size={24} />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${portfolio.email}`}
               className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <User className="text-blue-400" size={28} />
            <h3 className="text-3xl font-bold">About Me</h3>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            I'm a developer who loves turning ideas into reality through code. With a strong foundation 
            in both frontend and backend technologies, I build scalable applications that prioritize 
            user experience and clean architecture. I'm constantly learning and adapting to new 
            technologies to stay at the forefront of web development.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-400" size={28} />
            <h3 className="text-3xl font-bold">Featured Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.projects.map(project => (
              <div key={project.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition group">
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h4>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-900 rounded-full text-xs text-blue-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
                    <Github size={16} /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-blue-400" size={28} />
            <h3 className="text-3xl font-bold">Skills & Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {portfolio.skills.map(skill => (
              <span key={skill} 
                    className="px-6 py-3 bg-slate-900 rounded-lg text-lg hover:bg-blue-900 hover:scale-105 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a href={`mailto:${portfolio.email}`}
             className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition">
            <Mail size={20} />
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 {portfolio.name}. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
