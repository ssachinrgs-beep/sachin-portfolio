import { useState } from 'react'
import { ParallaxComponent } from '@/components/ui/parallax-scrolling'
import { 
  Mail, 
  ExternalLink, 
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
  ChevronRight,
  Cloud,
  Server,
  Sparkles,
  ShieldCheck,
  Activity,
  FileDown,
  Send,
  ArrowUpRight
} from 'lucide-react'

export function App() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    
    // Construct mailto link with encoded content
    const subjectLine = formState.subject ? encodeURIComponent(formState.subject) : encodeURIComponent(`Portfolio Inquiry from ${formState.name}`)
    const bodyContent = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)
    window.location.href = `mailto:ssachinrgs@gmail.com?subject=${subjectLine}&body=${bodyContent}`
    
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* 1. Parallax Hero Section */}
      <section className="w-full">
        <ParallaxComponent />
      </section>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-wider uppercase font-mono hover:opacity-80 transition-opacity">
            SACHIN<span className="text-zinc-500">.CLOUD</span>
          </a>
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors py-2">About</a>
            <a href="#skills" className="hover:text-white transition-colors py-2">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors py-2">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors py-2">Projects</a>
            <a href="#certifications" className="hover:text-white transition-colors py-2">Certifications</a>
            <a href="#education" className="hover:text-white transition-colors py-2">Education</a>
            <a href="#contact" className="hover:text-white transition-colors py-2">Contact</a>
          </nav>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-32">

        {/* 2. Hero Headline & Terminal Section */}
        <section id="hero-details" className="pt-8 space-y-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Cloud &amp; DevOps Roles • Graduating Apr 2027
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm Sachin S
              </h1>
              <p className="text-2xl sm:text-3xl text-zinc-300 font-semibold">
                Aspiring Cloud Engineer <span className="text-zinc-600 font-light">|</span> MSc Computer Science
              </p>
            </div>
            
            <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed">
              Architecting scalable AWS &amp; GCP cloud infrastructure with automated CI/CD pipelines, containerized microservices, and serverless architectures.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#contact"
                className="px-6 py-3 rounded-lg border border-zinc-700 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <a 
                href="mailto:ssachinrgs@gmail.com?subject=Resume%20Request%20-%20Sachin%20S"
                className="px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors inline-flex items-center gap-2"
              >
                <FileDown className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </a>

              <a 
                href="https://github.com/ssachinrgs-beep" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a 
                href="https://linkedin.com/in/sachin-s-ba7019412" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            {/* Quick Pillars Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg border border-zinc-800/80 bg-zinc-950/40 flex items-center gap-3">
                <Cloud className="w-5 h-5 text-zinc-300 shrink-0" />
                <div>
                  <p className="text-xs font-mono uppercase text-zinc-500">AWS Architecture</p>
                  <p className="text-sm font-medium text-zinc-200">EC2 • S3 • Lambda</p>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-zinc-800/80 bg-zinc-950/40 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-zinc-300 shrink-0" />
                <div>
                  <p className="text-xs font-mono uppercase text-zinc-500">Python Core &amp; AI</p>
                  <p className="text-sm font-medium text-zinc-200">LLMs &amp; Automation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Cloud Shell / Terminal Mockup */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs text-zinc-400 ml-2 hidden sm:inline">sachin@cloud-shell:~ (aws-us-east-1)</span>
              </div>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest">Bash • Cloud CLI</span>
            </div>
            <div className="p-5 sm:p-6 space-y-4 text-zinc-300">
              <div className="space-y-1">
                <p className="text-zinc-400">
                  <span className="text-emerald-400">sachin@cloud-shell</span>:<span className="text-cyan-400">~</span>$ aws sts get-caller-identity
                </p>
                <p className="text-zinc-300 pl-4 bg-zinc-900/40 py-1 rounded border border-zinc-800/50">
                  {`{ "UserId": "AROA-SACHIN-ENGINEER", "Role": "Cloud & DevOps Enthusiast", "Status": "Final-Year MSc CS (84%)" }`}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-zinc-400">
                  <span className="text-emerald-400">sachin@cloud-shell</span>:<span className="text-cyan-400">~</span>$ cat profile.json | jq .primary_stack
                </p>
                <p className="text-zinc-300 pl-4 bg-zinc-900/40 py-1 rounded border border-zinc-800/50">
                  {`["AWS", "GCP", "Python", "Docker", "LangChain"]`}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-zinc-400">
                  <span className="text-emerald-400">sachin@cloud-shell</span>:<span className="text-cyan-400">~</span>$ kubectl get pods --status=ready
                </p>
                <p className="text-emerald-400 pl-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All cloud services operational (100% SLA)</span>
                </p>
              </div>

              <div className="pt-1 flex items-center text-zinc-500">
                <span className="text-emerald-400 mr-2">$</span>
                <span className="w-2 h-4 bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="space-y-12 pt-8">
          <div className="space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Background</span>
            <div className="flex items-center gap-4">
              <Globe className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">About Me</h2>
            </div>
          </div>

          <div className="space-y-8 max-w-4xl">
            <p className="text-xl sm:text-2xl text-zinc-200 font-medium leading-relaxed">
              Bridging cloud infrastructure, clean software engineering, and intelligent machine learning.
            </p>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Final-year MSc Computer Science student passionate about building resilient, cost-effective cloud architectures and intelligent systems.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed">
              I am currently pursuing my Master of Science in Computer Science (graduating April 2027) with a solid academic track record of <strong className="text-white">84%</strong>. My core technical interest lies in designing robust, auto-scaling, and secure cloud environments on <strong className="text-white">AWS and Google Cloud Platform (GCP)</strong>, complemented by backend development in <strong className="text-white">Python</strong>.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed">
              With hands-on experience deploying scalable multi-tier architectures, managing serverless workflows via AWS Lambda, containerizing services, and working with modern Generative AI &amp; LLM tooling, I thrive at the intersection of Cloud Engineering and intelligent automation.
            </p>

            {/* Stats Highlight Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 text-center space-y-1 hover:border-zinc-700 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-white">84%</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">MSc CS Aggregate</p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 text-center space-y-1 hover:border-zinc-700 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-white">Apr '27</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Graduation Target</p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 text-center space-y-1 hover:border-zinc-700 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-white">20%</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Bug Reduction</p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 text-center space-y-1 hover:border-zinc-700 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-white">4+</p>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Cloud &amp; Dev Certs</p>
              </div>
            </div>

            {/* 3 Core Pillars Focus Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 space-y-3 hover:border-zinc-700 transition-colors">
                <Cloud className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Cloud Infrastructure</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Architecting reliable compute, storage, and serverless backends using AWS (EC2, S3, Lambda, IAM, CloudWatch) &amp; GCP foundational services.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 space-y-3 hover:border-zinc-700 transition-colors">
                <Terminal className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Backend &amp; Scripting</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Writing clean, maintainable Python code for REST APIs, automated deployment scripts, testing suites, and data pipelines.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 space-y-3 hover:border-zinc-700 transition-colors">
                <Sparkles className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">AI / ML &amp; Gen AI</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Leveraging Large Language Models, LangChain orchestration, Azure AI Fundamentals, and prompt engineering for intelligent solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Skills Section */}
        <section id="skills" className="space-y-12 pt-8">
          <div className="space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Capabilities</span>
            <div className="flex items-center gap-4">
              <Cpu className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Technical Skills</h2>
            </div>
            <p className="text-sm text-zinc-400">
              Proficiencies categorized across cloud platforms, developer tooling, programming languages, and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Cloud Platforms */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cloud className="w-5 h-5 text-zinc-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Cloud Platforms</h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">Compute &amp; Serverless</span>
              </div>
              <p className="text-xs text-zinc-400">Infrastructure, compute, serverless &amp; storage</p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { name: 'AWS', detail: 'EC2, S3, Lambda' },
                  { name: 'Google Cloud (GCP)', detail: 'Foundations & Cloud Shell' },
                  { name: 'Azure AI', detail: 'AI Fundamentals' },
                  { name: 'AWS IAM & CloudWatch', detail: 'Security & Observability' }
                ].map((item) => (
                  <div key={item.name} className="px-3.5 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm">
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="text-zinc-400 text-xs ml-1.5">({item.detail})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-zinc-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">DevOps &amp; Tools</h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">CI/CD &amp; Systems</span>
              </div>
              <p className="text-xs text-zinc-400">Version control, containerization &amp; OS environments</p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { name: 'Git & GitHub', detail: 'VCS, branching & PRs' },
                  { name: 'Linux / Bash', detail: 'CLI, Shell Scripting' },
                  { name: 'Docker (Basics)', detail: 'Containerization' },
                  { name: 'REST APIs', detail: 'Design, Integration & JSON' }
                ].map((item) => (
                  <div key={item.name} className="px-3.5 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm">
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="text-zinc-400 text-xs ml-1.5">({item.detail})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-zinc-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Programming Languages</h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">Core Engineering</span>
              </div>
              <p className="text-xs text-zinc-400">Core software development &amp; database querying</p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { name: 'Python', detail: 'OOP, Scripting, Automation' },
                  { name: 'Java', detail: 'OOP & Data Structures' },
                  { name: 'C++', detail: 'Core Algorithms & Memory' },
                  { name: 'SQL', detail: 'RDBMS, Queries & Schema' },
                  { name: 'HTML5 / CSS3', detail: 'Responsive Web Design' }
                ].map((item) => (
                  <div key={item.name} className="px-3.5 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm">
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="text-zinc-400 text-xs ml-1.5">({item.detail})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Generative AI & ML */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-zinc-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Generative AI &amp; ML</h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">Intelligent Pipelines</span>
              </div>
              <p className="text-xs text-zinc-400">Modern language models &amp; intelligent pipelines</p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { name: 'LLMs', detail: 'Model Integration & Context' },
                  { name: 'LangChain', detail: 'Chains, Agents & RAG' },
                  { name: 'Prompt Engineering', detail: 'Few-Shot, System Design' },
                  { name: 'TensorFlow', detail: 'Pursuing — Deep Learning Foundations' }
                ].map((item) => (
                  <div key={item.name} className="px-3.5 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm">
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="text-zinc-400 text-xs ml-1.5">({item.detail})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 5. Experience Section */}
        <section id="experience" className="space-y-12 pt-8">
          <div className="space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Track Record</span>
            <div className="flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Work Experience</h2>
            </div>
            <p className="text-sm text-zinc-400">
              Real-world software development internship and collaborative engineering impact.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-6 hover:border-zinc-700 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Python Developer Intern</h3>
                <p className="text-base text-zinc-400 font-medium">Nitroware Technologies</p>
              </div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-mono text-zinc-300 self-start sm:self-auto">
                Jul 2023 – Aug 2023
              </span>
            </div>

            <ul className="space-y-4 pt-2 text-base text-zinc-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span><strong className="text-white">Module Engineering:</strong> Developed and tested robust Python modules, ensuring rigorous boundary testing and standard compliance.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span><strong className="text-white">Quality Assurance &amp; Optimization:</strong> Identified edge cases and debugged complex logic, resulting in a documented <strong className="text-emerald-400">20% reduction in bugs</strong> during development cycles.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span><strong className="text-white">Cross-Functional Collaboration:</strong> Partnered closely with the UI/UX team to integrate backend logic smoothly with frontend client components.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span><strong className="text-white">Code Maintenance &amp; Documentation:</strong> Authored unit test scripts and structured technical documentation for maintainable codebases.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900">
              {['Python', 'Unit Testing', 'Git', 'UI/UX Sync', 'SQL'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Featured Project Section */}
        <section id="projects" className="space-y-12 pt-8">
          <div className="space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Implementations</span>
            <div className="flex items-center gap-4">
              <FolderGit2 className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Featured Project</h2>
            </div>
            <p className="text-sm text-zinc-400">
              Real-world AWS cloud infrastructure architecture designed for high availability, security, and low latency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">

            {/* Scalable Web App Deployment on AWS */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-8 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                    <Cloud className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Featured Cloud Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Scalable Web App Deployment on AWS</h3>
                    <a 
                      href="https://github.com/ssachinrgs-beep" 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm font-mono text-zinc-400">
                    AWS EC2 • AWS S3 • AWS Lambda • AWS IAM • CloudWatch • Python Backend • Linux OS
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start">
                  <a 
                    href="https://github.com/ssachinrgs-beep" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-base text-zinc-300 leading-relaxed max-w-4xl">
                A production-grade, multi-tier web application infrastructure deployed on Amazon Web Services. Built with decoupled compute layers, highly available object storage, serverless processing routines, strict IAM role boundaries, and full CloudWatch observability.
              </p>

              {/* AWS Architecture Workflow & Topology Box */}
              <div className="rounded-lg border border-zinc-800/90 bg-zinc-900/40 p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">AWS Architecture Workflow &amp; Topology</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">Compute / EC2</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">Storage / S3</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">Lambda</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">Security &amp; Ops</span>
                  </div>
                </div>

                {/* Topology Flowchart */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-2">
                    <p className="text-xs font-mono text-zinc-500 uppercase">Traffic Ingestion</p>
                    <p className="text-sm font-semibold text-white">Web Clients</p>
                    <p className="text-xs text-zinc-400">HTTPS Requests / DNS</p>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-2">
                    <p className="text-xs font-mono text-zinc-500 uppercase">Decoupled Compute</p>
                    <p className="text-sm font-semibold text-white">Amazon EC2</p>
                    <p className="text-xs text-zinc-400">Web App Server &amp; Auto Scaling</p>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-2">
                    <p className="text-xs font-mono text-zinc-500 uppercase">Object Storage</p>
                    <p className="text-sm font-semibold text-white">Amazon S3</p>
                    <p className="text-xs text-zinc-400">Static Assets &amp; Media Store</p>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-2">
                    <p className="text-xs font-mono text-zinc-500 uppercase">Serverless Routine</p>
                    <p className="text-sm font-semibold text-white">AWS Lambda</p>
                    <p className="text-xs text-zinc-400">S3 Triggered Event Processing</p>
                  </div>
                </div>

                <div className="p-3.5 rounded bg-zinc-950/80 border border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>IAM Roles &amp; CloudWatch: Least-privilege policies &amp; real-time metric streams enabled</span>
                  </div>
                  <span className="text-emerald-400 hidden sm:inline">Active Telemetry</span>
                </div>
              </div>

              {/* Live Telemetry Architectural Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-lg border border-zinc-800/70 bg-zinc-900/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-white" />
                    <h5 className="font-semibold text-white text-sm">Compute &amp; Elasticity</h5>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Configured Amazon EC2 instances with security groups, reverse proxy, and health check routes to ensure zero downtime.
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-zinc-800/70 bg-zinc-900/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-white" />
                    <h5 className="font-semibold text-white text-sm">Storage &amp; Serverless</h5>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Implemented Amazon S3 bucket policies and lifecycle rules, triggering asynchronous AWS Lambda functions for image optimization.
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-zinc-800/70 bg-zinc-900/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-white" />
                    <h5 className="font-semibold text-white text-sm">IAM &amp; Security</h5>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Designed least-privilege IAM Roles and Policies for service-to-service communication, preventing token leaks.
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-zinc-800/70 bg-zinc-900/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-white" />
                    <h5 className="font-semibold text-white text-sm">Observability &amp; Alarms</h5>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Configured Amazon CloudWatch metrics, dashboards, and automated SNS alarm triggers for high CPU and network anomalies.
                  </p>
                </div>
              </div>

              {/* Explore Button */}
              <div className="pt-2">
                <a 
                  href="https://github.com/ssachinrgs-beep" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
                >
                  <span>Explore Codebase</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Certifications Section */}
        <section id="certifications" className="space-y-12 pt-8">
          <div className="space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Verification</span>
            <div className="flex items-center gap-4">
              <Award className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Certifications &amp; Credentials</h2>
            </div>
            <p className="text-sm text-zinc-400">
              Validated skills across cloud engineering, machine learning, and algorithmic programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Cert 1 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-medium">
                  In Progress
                </span>
                <span className="text-xs font-mono text-zinc-400">Cloud Architecture</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AWS Certified Cloud Practitioner</h3>
                <p className="text-sm text-zinc-400 font-medium mt-1">Amazon Web Services (AWS)</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Mastering cloud concepts, security, architecture, compute, networking, pricing models, and AWS shared responsibility principles.
              </p>
            </div>

            {/* Cert 2 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-mono font-medium">
                  Pursuing
                </span>
                <span className="text-xs font-mono text-zinc-400">AI &amp; Deep Learning</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Google TensorFlow Developer</h3>
                <p className="text-sm text-zinc-400 font-medium mt-1">Google / DeepLearning.AI</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Building and training deep neural networks, computer vision, natural language processing, and sequence models using TensorFlow.
              </p>
            </div>

            {/* Cert 3 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-medium">
                  Verified
                </span>
                <span className="text-xs font-mono text-zinc-400">Python Programming</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Python (Basic) Certification</h3>
                <p className="text-sm text-zinc-400 font-medium mt-1">HackerRank</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Demonstrated foundational and intermediate Python proficiency including data structures, logic, functions, OOP, and string manipulation.
              </p>
            </div>

            {/* Cert 4 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-4 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-mono font-medium">
                  Completed
                </span>
                <span className="text-xs font-mono text-zinc-400">Systems Programming</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">C++ Course Completion</h3>
                <p className="text-sm text-zinc-400 font-medium mt-1">Technical Institute / Coursework</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Comprehensive coverage of C++ fundamental syntax, memory management, pointers, object-oriented concepts, and standard template library (STL).
              </p>
            </div>

          </div>
        </section>

        {/* 8. Education Section */}
        <section id="education" className="space-y-12 pt-8">
          <div className="space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Academics</span>
            <div className="flex items-center gap-4">
              <GraduationCap className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Academic Journey</h2>
            </div>
            <p className="text-sm text-zinc-400">
              Consistent academic excellence in Computer Science disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Master of Science */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-5 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Current Program • Graduating Apr 2027
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 text-xs font-semibold text-white border border-zinc-800">
                  Score: 84%
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Master of Science in Computer Science</h3>
                <p className="text-base text-zinc-400">Hindusthan College of Arts and Science</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Specializing in Advanced Cloud Systems, Machine Learning, Distributed Architectures, and Software Engineering. Conducting research and practical implementations in cloud automation and neural networks.
              </p>
              <div className="pt-2">
                <p className="text-xs font-mono text-zinc-500 uppercase mb-2">Key Subjects:</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Cloud Computing', 'AI & Deep Learning', 'Advanced Python', 'Distributed Systems', 'Information Security'].map((sub) => (
                    <span key={sub} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800/80 text-xs text-zinc-300">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bachelor of Science */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 space-y-5 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                  Graduated • Completed
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 text-xs font-semibold text-white border border-zinc-800">
                  Score: 70%
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-base text-zinc-400">Muthayammal College of Arts and Science</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Built a strong mathematical and computational foundation covering Object-Oriented Programming, Database Management Systems, Data Structures, Algorithms, and Operating Systems.
              </p>
              <div className="pt-2">
                <p className="text-xs font-mono text-zinc-500 uppercase mb-2">Key Subjects:</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Data Structures', 'OOP (Java/C++)', 'RDBMS & SQL', 'Operating Systems', 'Web Technologies'].map((sub) => (
                    <span key={sub} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800/80 text-xs text-zinc-300">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 9. Contact / Get In Touch Section */}
        <section id="contact" className="space-y-12 pt-8">
          <div className="space-y-2 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Get In Touch</span>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">Let's Connect</h2>
            </div>
            <p className="text-sm text-zinc-400">
              Interested in discussing cloud engineering roles, internship opportunities, or tech collaborations? Reach out anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left Channels Column */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Contact Channels</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Feel free to drop a direct email or connect through professional networks.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email */}
                <a 
                  href="mailto:ssachinrgs@gmail.com" 
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-xs font-mono uppercase text-zinc-500">Direct Email</p>
                      <p className="text-sm font-medium text-white">ssachinrgs@gmail.com</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/sachin-s-ba7019412" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-current text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <div>
                      <p className="text-xs font-mono uppercase text-zinc-500">LinkedIn Profile</p>
                      <p className="text-sm font-medium text-white">linkedin.com/in/sachin-s-ba7019412</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/ssachinrgs-beep" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-current text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <div>
                      <p className="text-xs font-mono uppercase text-zinc-500">GitHub Repositories</p>
                      <p className="text-sm font-medium text-white">github.com/ssachinrgs-beep</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </a>
              </div>

              {/* Status Box */}
              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs font-mono uppercase tracking-wider text-white font-semibold">Ready for Cloud Roles</p>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Open to Cloud Engineer / DevOps Internships &amp; Full-Time opportunities (Hybrid / Remote / Relocation).
                </p>
              </div>
            </div>

            {/* Right Message Form Column */}
            <div className="lg:col-span-3 rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Fill out this quick form and I will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Prompt Ready!</span>
                  </div>
                  <p className="text-sm text-zinc-300">
                    Your email client should open with your message addressed to <strong className="text-white">ssachinrgs@gmail.com</strong>.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormState({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="text-xs text-zinc-400 hover:text-white underline font-mono"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      placeholder="Cloud Role / Project Discussion"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Hi Sachin, I'd like to discuss an opportunity on our cloud team..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-y"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black mt-32 py-16 text-center text-sm text-zinc-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div className="space-y-2">
            <h4 className="text-white text-base font-bold tracking-wider uppercase">Sachin.cloud</h4>
            <p className="text-xs text-zinc-400">
              Aspiring Cloud Engineer | Final-Year MSc Computer Science (Graduating Apr 2027)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span>•</span>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span>•</span>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <span>•</span>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span>•</span>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <span>•</span>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center justify-center gap-6 text-zinc-400 pt-2">
            <a href="https://github.com/ssachinrgs-beep" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span>•</span>
            <a href="https://linkedin.com/in/sachin-s-ba7019412" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="mailto:ssachinrgs@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>

          <p className="text-xs text-zinc-600 pt-4">
            © 2026 Sachin S — Built for Cloud &amp; DevOps Engineering
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
