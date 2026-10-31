import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { GiArtificialHive } from "react-icons/gi"
import maleVideo from "../assets/male-ai.mp4"
import femaleVideo from "../assets/female-ai.mp4"

const TICKER_ITEMS = [
    { title: "AI Interview®", detail: "Practice with purpose", brand: true },
    { title: "Practice Interviews", detail: "Practice with purpose" },
    { title: "Resume intelligence", detail: "Turn experience into opportunity" },
    { title: "Personal feedback", detail: "Improve every answer" },
]

function Ticker() {
    return (
        <div className="relative z-20 flex min-w-max items-center !text-black [text-shadow:0_1px_2px_rgba(255,255,255,0.22)]">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
                <motion.div
                    key={`${item.title}-${index}`}
                    whileHover={{
                        y: [0, -5, 4, -3, 5, -2, 0],
                        scaleY: [1, 1.08, 0.94, 1.06, 0.96, 1.03, 1],
                        borderColor: ["transparent", "#111111", "#111111", "#111111", "#111111", "#111111", "transparent"],
                    }}
                    transition={{
                        y: { duration: 0.8, ease: "easeInOut" },
                        scaleY: { duration: 0.8, ease: "easeInOut" },
                        borderColor: { duration: 0.8, ease: "easeInOut" },
                    }}
                    className="relative z-10 flex items-center gap-8 rounded-[45%] border-y-2 border-transparent bg-[#ff432d] px-8 text-left sm:gap-12 sm:px-14"
                >
                    <motion.span
                        className="whitespace-nowrap text-[clamp(1.3rem,2.6vw,2.25rem)] font-bold tracking-[-0.035em]"
                    >
                        {item.title}
                    </motion.span>
                    <span className="max-w-40 text-[11px] font-semibold leading-4 opacity-100 sm:max-w-52 sm:text-[13px]">
                        {item.detail}
                    </span>
                    <span className="text-lg font-bold opacity-100">✳</span>
                </motion.div>
            ))}
        </div>
    )
}

function HomepageIntro() {
    const [visible, setVisible] = useState(() => (
        typeof window !== "undefined" && sessionStorage.getItem("freshai-intro-seen") !== "true"
    ))
    const [stage, setStage] = useState("logo")
    const [tickerMoving, setTickerMoving] = useState(false)
    const [exiting, setExiting] = useState(false)
    const [reducedMotion, setReducedMotion] = useState(() => (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ))

    useEffect(() => {
        if (!visible) return undefined

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        const shrinkTimer = window.setTimeout(() => setStage("shrink"), 1350)
        const tickerTimer = window.setTimeout(() => setStage("ticker"), 2150)
        const tickerMoveTimer = window.setTimeout(() => setTickerMoving(true), 3050)
        const sceneTimer = window.setTimeout(() => setStage("scene"), 3450)
        const handlePreferenceChange = (event) => setReducedMotion(event.matches)
        const enter = () => setExiting(true)

        if (mediaQuery.matches) {
            enter()
        } else {
            window.addEventListener("wheel", enter, { passive: true })
            window.addEventListener("touchmove", enter, { passive: true })
            window.addEventListener("keydown", enter)
        }

        mediaQuery.addEventListener?.("change", handlePreferenceChange)

        return () => {
            window.clearTimeout(shrinkTimer)
            window.clearTimeout(tickerTimer)
            window.clearTimeout(tickerMoveTimer)
            window.clearTimeout(sceneTimer)
            window.removeEventListener("wheel", enter)
            window.removeEventListener("touchmove", enter)
            window.removeEventListener("keydown", enter)
            mediaQuery.removeEventListener?.("change", handlePreferenceChange)
        }
    }, [visible])

    const finish = () => {
        sessionStorage.setItem("freshai-intro-seen", "true")
        setVisible(false)
    }

    if (!visible || reducedMotion) return null

    return (
        <motion.div
            initial={{ y: 0, opacity: 1, scale: 1 }}
            animate={{
                y: exiting ? "-100%" : 0,
                opacity: exiting ? 0 : 1,
                scale: exiting ? 0.98 : 1,
            }}
            transition={{
                y: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
                opacity: { duration: 0.85, ease: "easeInOut" },
                scale: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
            }}
            onClick={() => setExiting(true)}
            onAnimationComplete={() => {
                if (exiting) finish()
            }}
            className={`fixed inset-0 z-[100] cursor-pointer overflow-hidden ${
                stage === "scene" ? "bg-[#11151c]" : "bg-[#ff432d]"
            } py-3 sm:py-4`}
            role="presentation"
        >
            {stage === "scene" && (
                <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(244,181,96,0.3),transparent_25%),linear-gradient(135deg,#171b21_0%,#4b3529_48%,#11151c_100%)]" />
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(110deg,transparent_0%,rgba(255,214,155,0.25)_48%,transparent_52%)]" />
                    <div className="absolute left-1/2 top-[18%] h-56 w-[min(70vw,48rem)] -translate-x-1/2 rounded-[50%] bg-amber-200/20 blur-3xl" />
                </>
            )}

            <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex h-full items-center justify-center"
            >
                {stage === "scene" && (
                    <>
                        <motion.video
                            src={maleVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.42 }}
                            transition={{ duration: 1.2 }}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <motion.video
                            src={femaleVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 0.65, duration: 1.2 }}
                            className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
                        />
                        <div className="absolute inset-0 bg-[#11151c]/55" />
                    </>
                )}

                {(stage === "logo" || stage === "shrink") && (
                    <motion.div
                        animate={{ scale: stage === "logo" ? 1 : 0.42 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="relative z-[60] whitespace-nowrap text-[clamp(3.5rem,11vw,9rem)] font-bold tracking-[-0.09em] text-black"
                    >
                        AI Interview<span className="align-top text-[0.3em]">®</span>
                    </motion.div>
                )}

                {(stage === "ticker" || stage === "scene") && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`absolute left-1/2 top-1/2 z-50 w-[140%] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-y ${
                            "border-[#ff432d] bg-[#ff432d]"
                        }`}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                x: tickerMoving
                                    ? ["calc(50vw - 13rem)", "-25%"]
                                    : "calc(50vw - 13rem)",
                            }}
                            transition={{
                                opacity: { duration: 0.3, ease: "linear" },
                                x: tickerMoving
                                    ? { duration: 16, repeat: Infinity, ease: "linear" }
                                    : { duration: 1.05, ease: [0.76, 0, 0.24, 1] },
                            }}
                        >
                            <Ticker />
                        </motion.div>
                    </motion.div>
                )}

                {stage === "scene" && (
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                        className="absolute bottom-[18%] rounded-full border border-white/25 bg-black/20 px-4 py-2 text-xs text-white/80 backdrop-blur-md"
                    >
                        Click to enter
                    </motion.div>
                )}
            </motion.div>

            <div className={`absolute left-5 top-5 flex items-center gap-2 text-sm font-bold tracking-[-0.04em] sm:left-8 sm:top-7 ${
                stage === "scene" ? "text-white" : "text-black"
            }`}>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                    <GiArtificialHive size={17} />
                </span>
                AI Interview
            </div>

            <div className={`absolute bottom-5 left-5 text-[10px] font-medium uppercase tracking-[0.22em] opacity-60 sm:bottom-7 sm:left-8 ${
                stage === "scene" ? "text-white" : "text-black"
            }`}>
                Practice / Improve / Succeed
            </div>
            <div className={`absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.22em] opacity-60 sm:bottom-7 sm:right-8 ${
                stage === "scene" ? "text-white" : "text-black"
            }`}>
                2026
            </div>
        </motion.div>
    )
}

export default HomepageIntro
