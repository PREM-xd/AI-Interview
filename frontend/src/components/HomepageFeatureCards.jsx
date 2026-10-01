import { motion } from "motion/react"
import { FiArrowRight, FiArrowUpRight, FiBarChart2, FiCheckCircle, FiMessageSquare, FiTarget, FiUploadCloud, FiZap } from "react-icons/fi"

const benefits = [
    "Personalized Questions",
    "Realistic Interview Simulation",
    "Instant AI Feedback",
]

function InterviewMockup() {
    return (
        <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#11111a]/90 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.25),transparent_42%)]" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="text-[10px] font-semibold text-white/70">AI Interviewer</span>
                </div>
                <span className="text-[10px] text-white/35">Question 3/5</span>
            </div>
            <div className="relative py-5">
                <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-violet-300/60">Technical question</p>
                <p className="max-w-xs text-sm font-medium leading-6 text-white sm:text-base">How does Redis improve application performance?</p>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/[0.05] px-3 py-4 text-[10px] text-white/25">Type your answer...</div>
            <div className="relative mt-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[9px] text-emerald-300/80"><FiCheckCircle size={12} /> Feedback enabled</span>
                <span className="flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-semibold text-black">Submit Answer <FiArrowRight size={11} /></span>
            </div>
        </div>
    )
}

function ResumeMockup() {
    return (
        <div className="relative mt-7 overflow-hidden rounded-2xl border border-cyan-900/10 bg-white/80 p-4 shadow-[0_18px_60px_rgba(30,64,175,0.12)] sm:p-5">
            <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative flex items-center justify-between border-b border-slate-900/10 pb-3">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-white"><FiUploadCloud size={14} /></span>
                    <span className="text-[10px] font-semibold text-slate-800">Your Resume</span>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-[9px] font-semibold text-emerald-700">Analyzed</span>
            </div>
            <div className="relative flex items-center gap-5 py-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[7px] border-cyan-100 border-t-violet-500 border-r-violet-500">
                    <div className="text-center"><p className="text-xl font-bold text-slate-900">85</p><p className="text-[8px] text-slate-400">Overall Score</p></div>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-2">
                    {["Skills Analysis", "Experience Match", "Improvement Tips", "Interview Readiness"].map((item) => (
                        <div key={item} className="flex items-center gap-1.5 rounded-lg bg-slate-900/[0.04] px-2 py-2 text-[9px] font-medium text-slate-600"><FiCheckCircle className="shrink-0 text-emerald-500" size={11} />{item}</div>
                    ))}
                </div>
            </div>
            <div className="relative flex h-8 items-end gap-1 border-t border-slate-900/10 pt-2">
                {[35, 55, 45, 75, 62, 88, 70, 92, 82, 100].map((height, index) => <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-cyan-400 to-violet-400" style={{ height: `${height}%` }} />)}
            </div>
        </div>
    )
}

function HomepageFeatureCards({ onInterview, onResume }) {
    return (
        <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 pb-20 sm:px-6 lg:grid-cols-2">
            <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-[28px] border border-violet-300/20 bg-[#0d0d16] p-5 text-white shadow-[0_24px_80px_rgba(49,46,129,0.18)] sm:p-7"
            >
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-40 w-56 bg-cyan-500/10 blur-3xl" />
                <div className="relative">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold text-white/70"><FiMessageSquare className="text-violet-300" size={16} /> AI Interview</div>
                        <FiArrowUpRight className="text-white/35" size={18} />
                    </div>
                    <h2 className="mt-8 max-w-sm text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">Take an AI Interview</h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-white/50">Practice realistic technical and HR interviews personalized to your role, experience and resume.</p>
                    <button type="button" onClick={onInterview} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-slate-950 transition hover:bg-violet-100">Start Interview <FiArrowRight size={14} /></button>
                    <InterviewMockup />
                    <div className="relative mt-4 grid gap-2 sm:grid-cols-3">
                        {benefits.map((benefit) => <div key={benefit} className="flex items-center gap-1.5 text-[10px] text-white/45"><FiZap className="text-violet-300" size={12} />{benefit}</div>)}
                    </div>
                </div>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="relative overflow-hidden rounded-[28px] border border-cyan-200 bg-gradient-to-br from-white via-cyan-50/60 to-violet-50/70 p-5 text-slate-950 shadow-[0_24px_80px_rgba(34,211,238,0.12)] sm:p-7"
            >
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
                <div className="relative">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700"><FiBarChart2 className="text-violet-600" size={16} /> Resume Analyzer</div>
                        <FiArrowUpRight className="text-slate-400" size={18} />
                    </div>
                    <h2 className="mt-8 max-w-sm text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">Analyze Your Resume</h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">Upload your resume and get AI-powered insights about your skills, experience and interview readiness.</p>
                    <button type="button" onClick={onResume} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-xs font-semibold text-white transition hover:bg-violet-700">Analyze Resume <FiArrowRight size={14} /></button>
                    <ResumeMockup />
                </div>
            </motion.article>
        </section>
    )
}

export default HomepageFeatureCards
