import { motion } from "motion/react"
import { FaArrowRight } from "react-icons/fa6"
import { FiArrowUpRight, FiBarChart2, FiFileText, FiLogOut, FiMic, FiPlus, FiStar } from "react-icons/fi"
import { GiArtificialHive, GiTwoCoins } from "react-icons/gi"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import api from "../utils/axios"
import HomepageFeatureCards from "../components/HomepageFeatureCards"
import HomepageIntro from "../components/HomepageIntro"
import { useLandingParallax } from "../components/landing/useLandingParallax"
import landingBackground from "../assets/Cinematic Twilight Study Overlooking the City.png"

function Home({ user, setUser }) {
    const navigate = useNavigate()
    const parallax = useLandingParallax()

    const openFeature = (path) => {
        if (user) {
            navigate(path)
            return
        }

        sessionStorage.setItem("freshai-login-pending", "true")
        sessionStorage.setItem("freshai-login-pending-path", path)
        navigate("/login")
    }

    const openLogin = () => {
        sessionStorage.setItem("freshai-login-pending", "true")
        sessionStorage.setItem("freshai-login-pending-path", "/")
        navigate("/login")
    }

    const handleLogout = async () => {
        try {
            await api.get("/api/auth/logout")
            await signOut(auth)
            setUser(null)
            navigate("/", { replace: true })
        } catch (error) {
            console.error("Logout failed", error)
        }
    }

    return (
        <>
            <HomepageIntro />
            <div className="min-h-screen overflow-x-hidden bg-[#070b14] text-slate-950">
                <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
                    <motion.div
                        style={{
                            ...(parallax.enabled ? { x: parallax.backgroundX, y: parallax.backgroundY } : {}),
                            backgroundImage: `url("${landingBackground}")`,
                        }}
                        animate={{
                            rotateY: [0, -7, 0, 7, 0],
                            x: ["-2.5%", "2.5%", "-2.5%"],
                            y: ["0%", "-1.2%", "0%"],
                            scale: [1.2, 1.24, 1.2],
                            opacity: [0.86, 0.94, 0.86],
                            transformPerspective: 1800,
                        }}
                        transition={{
                            rotateY: { duration: 52, repeat: Infinity, ease: "easeInOut" },
                            x: { duration: 52, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 52, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 24, repeat: Infinity, ease: "easeInOut" },
                            opacity: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className="absolute inset-[-12%] bg-cover bg-center bg-no-repeat"
                    />
                    <div className="absolute inset-0 bg-[#07111f]/20" />
                    <motion.div
                        animate={{ x: ["-8%", "8%", "-8%"], y: ["-4%", "5%", "-4%"], opacity: [0.2, 0.38, 0.2] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-1/4 -top-1/4 h-[75%] w-[75%] rounded-full bg-violet-500/20 blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: ["10%", "-8%", "10%"], y: ["8%", "-5%", "8%"], opacity: [0.12, 0.28, 0.12] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-1/4 -right-1/4 h-[70%] w-[70%] rounded-full bg-cyan-400/20 blur-[140px]"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(3,7,18,0.42)_100%)]" />
                    <motion.div
                        style={parallax.enabled ? { x: parallax.backgroundX, y: parallax.backgroundY } : undefined}
                        className="absolute left-1/2 top-[-18rem] h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl"
                    />
                    <motion.div
                        style={parallax.enabled ? { x: parallax.foregroundX, y: parallax.foregroundY } : undefined}
                        className="absolute right-[-12rem] top-[24rem] h-[30rem] w-[30rem] rounded-full bg-cyan-300/15 blur-3xl"
                    />
                    <motion.div
                        style={{
                            ...(parallax.enabled ? { x: parallax.backgroundX, y: parallax.backgroundY } : {}),
                            transformPerspective: 1200,
                        }}
                        className="absolute left-1/2 top-[18%] h-[28rem] w-[42rem] -translate-x-1/2 [transform-style:preserve-3d]"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-[50%] border border-violet-200/20 shadow-[0_0_35px_rgba(167,139,250,0.12)] [transform:rotateX(68deg)]"
                        >
                            <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-violet-200 shadow-[0_0_18px_6px_rgba(196,181,253,0.55)]" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[2.4rem_-2.5rem] rounded-[50%] border border-cyan-200/15 [transform:rotateX(68deg)_rotateY(18deg)]"
                        >
                            <span className="absolute right-[14%] top-[-4px] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_5px_rgba(103,232,249,0.45)]" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 58, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute inset-[5.5rem_3rem] rounded-[50%] border border-amber-200/15 [transform:rotateX(68deg)_rotateY(-22deg)]"
                        >
                            <span className="absolute bottom-[-4px] left-[18%] h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_14px_4px_rgba(253,230,138,0.4)]" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.15, 0.3, 0.15] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/15 blur-2xl"
                        />
                    </motion.div>
                    {parallax.enabled && (
                        <motion.div
                            style={{ x: parallax.foregroundX, y: parallax.foregroundY }}
                            className="absolute left-[8%] top-[42%] h-24 w-24 rounded-full bg-violet-400/10 blur-2xl"
                        />
                    )}
                </div>

                <motion.nav
                    initial={{ y: -24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    style={parallax.enabled ? { x: parallax.backgroundX, y: parallax.backgroundY } : undefined}
                    className="relative z-20 flex h-[76px] w-full items-center justify-between px-5 text-white sm:px-8"
                >
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white shadow-[0_8px_24px_rgba(15,23,42,0.18)]"><GiArtificialHive size={19} /></span>
                        <span className="text-base font-extrabold tracking-tight">AI Interview</span>
                    </div>
                    <button type="button" onClick={user ? handleLogout : openLogin} className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/75 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-700">
                        {user ? "Log Out" : "Log In"}
                        {user ? <FiLogOut size={13} /> : <FaArrowRight size={11} />}
                    </button>
                </motion.nav>

                <main className="relative z-10">
                    <motion.section
                        style={parallax.enabled ? { x: parallax.foregroundX, y: parallax.foregroundY } : undefined}
                        className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24"
                    >
                        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.25 }} className="relative mb-7 inline-flex items-center text-sm font-semibold text-amber-200 drop-shadow-[0_1px_10px_rgba(251,191,36,0.35)]">
                            <span className="absolute -bottom-5 left-1/2 h-5 w-32 -translate-x-1/2 rounded-[50%] border-b-2 border-amber-200/70" />
                            <span className="mr-2 text-xl text-amber-300">↝</span>
                            From Resume to Dream Job
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.33 }} className="max-w-4xl text-[clamp(3rem,8vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
                            Practice Interviews#<br />
                            <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-amber-200 bg-clip-text text-transparent">Get Hired#</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.46 }} className="mt-7 max-w-xl text-sm leading-7 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-base">
                            AI-powered interviews and resume analysis to help you prepare better, build confidence, and land your dream job.
                        </motion.p>
                    </motion.section>

                    <HomepageFeatureCards
                        parallax={parallax}
                        onInterview={() => openFeature("/interview")}
                        onResume={() => openFeature("/scorer")}
                    />

                    {user && (
                        <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
                            <motion.div
                                style={parallax.enabled ? { rotateX: parallax.y, rotateY: parallax.x, transformPerspective: 1400 } : undefined}
                                className="relative overflow-hidden rounded-[28px] bg-[#0d0d16] p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-7"
                            >
                                <motion.div
                                    style={parallax.enabled ? { x: parallax.foregroundX, y: parallax.foregroundY } : undefined}
                                    className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
                                />
                                <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Your workspace</p>
                                        <div className="mt-3 flex items-center gap-3">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-300/20 bg-yellow-400/10">
                                                <GiTwoCoins className="text-yellow-300" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/45">Available interview coins</p>
                                                <p className="text-2xl font-bold">{user.interviewCoin ?? 0}</p>
                                            </div>
                                        </div>
                                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
                                            Use your coins for AI interviews and resume analysis. Your balance updates automatically after each feature.
                                        </p>
                                    </div>

                                    <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[470px]">
                                        <button type="button" onClick={() => openFeature("/interview")} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-3 text-left transition hover:border-violet-300/40 hover:bg-white/10">
                                            <span className="flex items-center gap-2"><FiMic className="text-violet-300" size={15} /><span><span className="block text-xs font-semibold">AI Interview</span><span className="block text-[10px] text-white/40">50 coins</span></span></span>
                                            <FiArrowUpRight className="text-white/35" size={15} />
                                        </button>
                                        <button type="button" onClick={() => openFeature("/scorer")} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-3 text-left transition hover:border-cyan-300/40 hover:bg-white/10">
                                            <span className="flex items-center gap-2"><FiStar className="text-cyan-300" size={15} /><span><span className="block text-xs font-semibold">Resume Scorer</span><span className="block text-[10px] text-white/40">10 coins</span></span></span>
                                            <FiArrowUpRight className="text-white/35" size={15} />
                                        </button>
                                        <button type="button" onClick={() => navigate("/billing")} className="flex items-center justify-between rounded-xl bg-white px-3.5 py-3 text-left text-slate-950 transition hover:bg-violet-100">
                                            <span className="flex items-center gap-2"><FiPlus size={15} /><span><span className="block text-xs font-semibold">Buy Coins</span><span className="block text-[10px] text-slate-500">Add more balance</span></span></span>
                                            <FiArrowUpRight size={15} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </section>
                    )}

                    <section className="mx-auto grid max-w-5xl gap-4 px-5 pb-20 sm:grid-cols-3 sm:px-8">
                        {[
                            { icon: FiMic, label: "Live interview practice", text: "Speak, answer, and improve with realistic AI feedback." },
                            { icon: FiFileText, label: "Resume intelligence", text: "Turn your existing resume into a clearer interview advantage." },
                            { icon: FiBarChart2, label: "Actionable feedback", text: "See what to strengthen before your next conversation." },
                        ].map(({ icon: Icon, label, text }, index) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                style={parallax.enabled ? {
                                    x: index === 1 ? parallax.backgroundX : parallax.foregroundX,
                                    y: index === 1 ? parallax.backgroundY : parallax.foregroundY,
                                } : undefined}
                                className="rounded-2xl border border-slate-900/8 bg-white/60 p-5 shadow-[0_12px_40px_rgba(30,41,59,0.05)]"
                            >
                                <Icon className="text-violet-600" size={18} />
                                <h3 className="mt-4 text-sm font-semibold text-slate-900">{label}</h3>
                                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                            </motion.div>
                        ))}
                    </section>
                </main>

                <footer className="relative z-10 border-t border-white/15 bg-slate-950/55 px-5 py-6 text-white/65 backdrop-blur-md sm:px-8">
                    <motion.div
                        style={parallax.enabled ? { x: parallax.backgroundX, y: parallax.backgroundY } : undefined}
                        className="flex w-full flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex items-center gap-2 font-semibold text-white/80"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-white"><GiArtificialHive size={13} /></span>AI Interview</div>
                        <span>© 2026 AI Interview. All rights reserved.</span>
                    </motion.div>
                </footer>

            </div>
        </>
    )
}

export default Home
