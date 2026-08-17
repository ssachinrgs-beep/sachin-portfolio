import { ParallaxComponent } from '@/components/ui/parallax-scrolling'
import { 
  Mail, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  GraduationCap, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Layers, 
  CheckCircle2, 
  Award,
  ChevronRight
} from 'lucide-react'

export function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* 1. Parallax Hero Section with BRNPRO */}
      <section className="w-full">
        <ParallaxComponent />
      </section>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-wider uppercase font-mono hover:opacity-80 transition-opacity">
            BRNPRO<span className="text-zinc-500">.DEV</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors py-2">About</a>
            <a href="#skills" className="hover:text-white transition-colors py-2">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors py-2">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors py-2">Projects</a>
            <a href="#education" className="hover:text-white transition-colors py-2">Education</a>
          </nav>
          <a 
            href="mailto:Bharanidharan0578@gmail.com" 
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-32">

        {/* 2. Hero Summary / About Section */}
        <section id="about" className="pt-8 space-y-12">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Available for Software Engineering Roles
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Bharanidharan S
            </h1>
            
            <p className="text-xl text-zinc-300 font-normal leading-relaxed">
              Java Software Developer with hands-on experience designing and building RESTful APIs, microservices, and full-stack web applications using <strong className="text-white">Spring Boot, MySQL, and React.js</strong>.
            </p>
            
            <p className="text-base text-zinc-400 leading-relaxed max-w-3xl">
              Strong foundation in Data Structures, Algorithms, and Object-Oriented Design, backed by <strong className="text-white">700+ problems solved</strong> across competitive programming platforms. Experienced in backend architecture, database design, and secure payment integrations following MVC design principles.
            </p>

            {/* Quick Details & Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>Tiruppur, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>+91 9150974102</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-500" />
                <a href="mailto:Bharanidharan0578@gmail.com" className="hover:text-white underline">Bharanidharan0578@gmail.com</a>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="https://bharanidharan.dev/" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-white hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>bharanidharan.dev</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a 
                href="https://github.com/bharani303" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-white hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a 
                href="https://www.linkedin.com/in/bharani303" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-white hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a 
                href="https://codolio.com/profile/bharani303" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-white hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>Codolio (700+ Solved)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>
        </section>

        {/* 3. Skills Section */}
        <section id="skills" className="space-y-12 pt-8">
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
            <Cpu className="w-6 h-6 text-white" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Languages */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Java', 'Python', 'JavaScript', 'C', 'SQL'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Frameworks */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Backend &amp; Architecture</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Spring Boot', 'Spring MVC', 'Spring Data JPA (Hibernate)', 
                  'Spring Security (JWT, OAuth2)', 'RESTful API Development', 
                  'Monolithic Architecture', 'Microservices Architecture', 'MVC Design Pattern'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Databases &amp; Caching</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {['MySQL', 'MongoDB', 'Redis', 'Vector Databases'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Computer Science */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Core CS &amp; Problem Solving</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Data Structures & Algorithms (700+ Solved)', 'Object-Oriented Programming', 
                  'System Design (LLD & HLD)', 'Time & Space Complexity', 'Design Patterns'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">DevOps &amp; Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Docker', 'Kubernetes (Basics)', 'GitHub Actions', 'NGINX', 
                  'Kafka', 'API Gateway', 'WebSocket', 'AWS (EC2, S3, IAM, CloudFront)'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Frontend Tools */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Frontend &amp; AI Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 
                  'RAG', 'Vector Embeddings', 'Prompt Engineering', 'OpenRouter API',
                  'Git', 'Linux (Ubuntu)', 'Maven', 'Postman', 'JUnit', 'Log4j', 'Power BI'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. Experience Section */}
        <section id="experience" className="space-y-12 pt-8">
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
            <Briefcase className="w-6 h-6 text-white" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Work Experience</h2>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-6 hover:border-zinc-700 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                <p className="text-base text-zinc-400 font-medium">N3X Global Solutions — Full-time</p>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-mono text-zinc-300 self-start sm:self-auto">
                Apr 2026 – Present
              </span>
            </div>

            <ul className="space-y-4 pt-2 text-base text-zinc-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Develop and maintain backend modules for QBot and other enterprise products using <strong>Java and Spring Boot</strong>, supporting AI workflow automation and CRM functionality.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Design and implement authentication and business-process automation features used across multiple client-facing modules.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Collaborate with senior engineers on scalable backend architecture and optimize SQL queries to improve application response times.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Shipped production-ready features by writing unit tests, reviewing code, debugging issues, and deploying applications using <strong>Git, Docker, Linux, and CI/CD workflows</strong>.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Projects Section */}
        <section id="projects" className="space-y-12 pt-8">
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
            <FolderGit2 className="w-6 h-6 text-white" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-10">

            {/* Project 1: LoopChat */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-6 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">LoopChat — Real-Time Chat Application</h3>
                    <a 
                      href="https://loopchat.bharanidharan.dev" 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm font-mono text-zinc-400 mt-1">
                    Java, Spring Boot, Microservices, MySQL, Redis, WebSocket (STOMP), NGINX, Docker, React
                  </p>
                </div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-mono text-zinc-300 self-start sm:self-auto">
                  Jan 2026 – Apr 2026
                </span>
              </div>

              <ul className="space-y-3 pt-2 text-base text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Architected a microservices-based real-time chat platform with independent API Gateway, Auth Service, and Chat Service, enabling independent scaling and deployment of each component.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Implemented real-time messaging using WebSocket (STOMP/SockJS) with Redis-backed session management to support concurrent users across multiple chat rooms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Containerized services with Docker, configured NGINX reverse-proxy routing, and optimized MySQL queries to reduce response latency.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a 
                  href="https://loopchat.bharanidharan.dev" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
                >
                  <span>Visit Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 2: Leo Club Web Application */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-6 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">Leo Club Web Application</h3>
                    <a 
                      href="https://leoclub.vercel.app" 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm font-mono text-zinc-400 mt-1">
                    Java, Spring Boot, MySQL, Razorpay, Tailwind CSS, NGINX
                  </p>
                </div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-mono text-zinc-300 self-start sm:self-auto">
                  Dec 2024 – Jan 2025
                </span>
              </div>

              <ul className="space-y-3 pt-2 text-base text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Built a full-stack event registration platform with secure online payments via the Razorpay API.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Developed RESTful APIs in Spring Boot using a layered MVC architecture (Controller, Service, Repository) and designed the MySQL schema for production deployment.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a 
                  href="https://leoclub.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Education Section */}
        <section id="education" className="space-y-12 pt-8">
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
            <GraduationCap className="w-6 h-6 text-white" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">2023 – 2026</span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 text-xs font-semibold text-white border border-zinc-800">
                  CGPA: 8.6 / 10.0
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Hindustan College of Arts and Science</h3>
              <p className="text-base text-zinc-400">Bachelor of Science in Computer Science</p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">2022 – 2023</span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 text-xs font-semibold text-white border border-zinc-800">
                  CGPA: 9.6 / 10.0
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">APS Academy Matric Hr Sec School</h3>
              <p className="text-base text-zinc-400">High School Certificate</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black mt-32 py-16 text-center text-sm text-zinc-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <p>© 2026 Bharanidharan S — Designed &amp; Developed with BRNPRO</p>
          <div className="flex items-center justify-center gap-6 text-zinc-400">
            <a href="https://github.com/bharani303" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/bharani303" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <span>•</span>
            <a href="https://codolio.com/profile/bharani303" target="_blank" rel="noreferrer" className="hover:text-white">Codolio</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
