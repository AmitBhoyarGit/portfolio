import { createFileRoute, Link } from '@tanstack/react-router'
import { experiences } from '../data/experiences'


export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="max-w-xl mx-auto">
      <header className="p-6 pt-12 flex flex-col items-center text-center gap-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative p-[3px] rounded-full overflow-hidden spin-border group-hover:scale-105 transition-transform duration-500 ease-out">
            <div className="size-32 rounded-full overflow-hidden bg-background-border-box border-0 border-background-dark shadow-xl relative z-10">
              <img
                alt="Amit Bhoyar Profile"
                className="object-cover"
                src="/Amit_profile.png"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400">
            Amit Bhoyar
          </h1>
          <p className="text-primary font-medium tracking-wide uppercase text-sm">Full Stack Software Engineer</p>


          <div className="flex justify-center gap-4 pt-4">
            <a href="mailto:hello@amitbhoyar.com" className="px-2 py-2 rounded-full glass-card text-sm font-medium border-primary/30 glow-pill flex items-center gap-2 hover:bg-primary/10 hover:-translate-y-0.5 transition-all text-slate-200">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
            </a>
            <a href="/AmitBhoyar_Fullstack_2025.pdf" target="_blank" rel="noopener noreferrer" className="px-2 py-2 rounded-full glass-card text-sm font-medium border-primary/30 glow-pill flex items-center gap-2 hover:bg-primary/10 hover:-translate-y-0.5 transition-all text-slate-200">
              <span className="material-symbols-outlined text-primary text-xl">description</span>
            </a>
          </div>


          <p className="text-slate-400 text-sm max-w-s mx-auto">Results-driven Software Developer with 12+ years of experience crafting sophisticated web applications in fintech, media, and data visualization. Specialist in microfrontend architecture and modern JavaScript frameworks, AI driven solutions. Known for delivering scalable solutions with a focus on performance and user experience. Recognized with multiple awards for technical excellence and innovation.
          </p>
        </div>
      </header>

      {/* <section className="mt-4">
        <h2 className="px-6 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">The Journey</h2>
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 no-scrollbar">
          {['Palo Alto', 'New York City', 'Mumbai', 'Bengaluru'].map((city, i) => (
            <div key={city} className="flex-none flex items-center gap-3 glass-card px-5 py-3 rounded-full border-primary/10">
              <span className="material-symbols-outlined text-primary text-xl">
                {i === 0 ? 'location_on' : i === 1 ? 'location_city' : i === 2 ? 'holiday_village' : 'domain'}
              </span>
              <span className="text-sm font-medium whitespace-nowrap">{city}</span>
            </div>
          ))}
        </div>
      </section> */}

      <section className="mt-12 px-4">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-6">Tech Stack & Mastery</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'React', color: 'bg-blue-400' },
            { name: 'TypeScript', color: 'bg-blue-600' },
            { name: 'GraphQL', color: 'bg-pink-500' },
            { name: 'Node.js', color: 'bg-green-500' },
            { name: 'JavaScript', color: 'bg-yellow-300' },
            { name: 'Python', color: 'bg-yellow-400' },
            { name: 'Tanstack', color: 'bg-red-500' },
            { name: 'Shadcn', color: 'bg-slate-800' },
            { name: 'CSS', color: 'bg-red-400' },
            { name: 'Tailwind', color: 'bg-sky-400' },
            { name: 'Langchain', color: 'bg-emerald-500' },
            { name: 'Strapi', color: 'bg-purple-500' },
            { name: 'Assistant UI', color: 'bg-blue-500' },
            { name: 'Docker', color: 'bg-indigo-500' }
          ].map((tech) => (
            <div key={tech.name} className="px-2 py-0 rounded-full glass-card text-xs font-medium border-primary/20 glow-pill flex items-center gap-2">
              <div className={`size-1.5 rounded-full ${tech.color}`}></div> {tech.name}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 px-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">Experience</h2>
          <div className="h-px flex-1 ml-4 bg-slate-800"></div>
        </div>


        {experiences.map((job) => (
          <div key={job.company} className="glass-card p-6 rounded-xl space-y-4 relative overflow-hidden group">
            {job.company === 'JPMorgan Chase' && (
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 blur-2xl"></div>
            )}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-slate-100 group-hover:text-primary transition-colors flex items-center gap-2">
                  {job.company}
                </h3>
                <p className="text-slate-400 text-sm italic">{job.role}</p>
              </div>
              <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded tracking-wider">{job.location}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {job.desc}
              <Link to="/experience/$id" params={{ id: job.id }} className="inline-flex items-center justify-center px-2 py-0.5 ml-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-slate-100 transition-colors text-xs font-medium whitespace-nowrap">
                More...
              </Link>
            </p>
          </div>
        ))}
      </section>



      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm glass-card h-16 rounded-full flex items-center justify-around px-2 z-50 shadow-2xl border-white/5">
        <a className="flex flex-col items-center justify-center p-2 rounded-full bg-primary/10 text-primary" href="#">
          <span className="material-symbols-outlined">home</span>
        </a>
        <a className="flex flex-col items-center justify-center p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all" href="#">
          <span className="material-symbols-outlined">work</span>
        </a>
        <a className="flex flex-col items-center justify-center p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all" href="#">
          <span className="material-symbols-outlined">code</span>
        </a>
        <a className="flex flex-col items-center justify-center p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all" href="#">
          <span className="material-symbols-outlined">mail</span>
        </a>
      </nav>
    </div>
  )
}
