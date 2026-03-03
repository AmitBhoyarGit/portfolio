import { createFileRoute, notFound, Link } from '@tanstack/react-router'
import { experiences } from '../data/experiences'

export const Route = createFileRoute('/experience/$id')({
    loader: ({ params }) => {
        const experience = experiences.find((exp) => exp.id === params.id)
        if (!experience) {
            throw notFound()
        }
        return experience
    },
    component: ExperiencePage,
})

function ExperiencePage() {
    const experience = Route.useLoaderData()

    return (
        <div className="max-w-xl mx-auto pb-16 pt-12 px-4 md:px-0">
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors mb-8 group"
            >
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Home
            </Link>

            <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
                {experience.company === 'JPMorgan Chase' && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 blur-3xl"></div>
                )}

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-100 mb-2">
                                {experience.company}
                            </h1>
                            <p className="text-primary font-medium tracking-wide uppercase text-sm">
                                {experience.role}
                            </p>
                        </div>
                        <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full tracking-wider whitespace-nowrap">
                            {experience.location}
                        </span>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Overview</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {experience.desc}
                        </p>
                    </div>

                    {experience.skills && experience.skills.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Core Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 glass-card border-primary/20 rounded-full text-xs font-medium text-slate-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {experience.projects && experience.projects.length > 0 && (
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">Key Projects</h2>
                                <div className="h-px flex-1 bg-slate-800"></div>
                            </div>
                            <div className="space-y-4">
                                {experience.projects.map((project, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                                        <h3 className="font-bold text-slate-200 mb-2 text-base">{project.name}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
