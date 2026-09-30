import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { GiArtificialHive } from "react-icons/gi"

const INTRO_STEPS = [
    { at: 950, step: 1 },
    { at: 2150, step: 2 },
]

function HomepageIntro() {
    const [step, setStep] = useState(0)
    const [visible, setVisible] = useState(true)
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        setReducedMotion(mediaQuery.matches)

        const handlePreferenceChange = (event) => setReducedMotion(event.matches)
        mediaQuery.addEventListener?.("change", handlePreferenceChange)

        if (mediaQuery.matches) {
            setStep(4)
            setVisible(false)
        } else {
            const timers = INTRO_STEPS.map(({ at, step: nextStep }) => (
                window.setTimeout(() => setStep(nextStep), at)
            ))
            const exitTimer = window.setTimeout(() => setVisible(false), 3950)

            return () => {
                timers.forEach((timer) => window.clearTimeout(timer))
                window.clearTimeout(exitTimer)
                mediaQuery.removeEventListener?.("change", handlePreferenceChange)
            }
        }

        return () => mediaQuery.removeEventListener?.("change", handlePreferenceChange)
    }, [])

    if (!visible || reducedMotion) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] overflow-hidden bg-[#070709] text-white"
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.09),transparent_36%),linear-gradient(135deg,#070709_0%,#111116_52%,#070709_100%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />

            <div className="relative flex min-h-full items-center justify-center px-5 py-10">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="brand"
                            initial={{ opacity: 0, scale: 0.82, filter: "blur(14px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.12, filter: "blur(12px)" }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                            className="flex items-center gap-3"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-[0_0_42px_rgba(255,255,255,0.18)]">
                                <GiArtificialHive size={26} />
                            </span>
                            <span className="text-2xl font-extrabold tracking-[-0.04em]">FreshAI</span>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.h1
                            key="practice"
                            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className="text-center text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.06em]"
                        >
                            Practice Interviews<span className="text-white/35">.</span>
                        </motion.h1>
                    )}

                    {step === 2 && (
                        <motion.h1
                            key="hired"
                            initial={{ opacity: 0, y: 24, scale: 0.94, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-4xl text-center text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]"
                        >
                            Get Better<span className="text-white/35">.</span> Get Hired<span className="text-white/35">.</span>
                        </motion.h1>
                    )}

                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default HomepageIntro
