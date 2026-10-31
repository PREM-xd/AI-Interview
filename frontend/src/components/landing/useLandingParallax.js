import { useEffect, useState } from "react"
import { useMotionValue, useSpring, useTransform } from "motion/react"

const SPRING_CONFIG = { damping: 24, stiffness: 150, mass: 0.35 }

export function useLandingParallax() {
    const [enabled, setEnabled] = useState(false)
    const pointerX = useMotionValue(0)
    const pointerY = useMotionValue(0)
    const smoothX = useSpring(pointerX, SPRING_CONFIG)
    const smoothY = useSpring(pointerY, SPRING_CONFIG)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
        const updateEnabled = () => setEnabled(mediaQuery.matches)
        const handlePointerMove = (event) => {
            pointerX.set((event.clientX / window.innerWidth - 0.5) * 2)
            pointerY.set((event.clientY / window.innerHeight - 0.5) * 2)
        }

        updateEnabled()
        if (!mediaQuery.matches) return () => {}

        window.addEventListener("pointermove", handlePointerMove, { passive: true })
        mediaQuery.addEventListener?.("change", updateEnabled)

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
            mediaQuery.removeEventListener?.("change", updateEnabled)
        }
    }, [pointerX, pointerY])

    return {
        enabled,
        x: smoothX,
        y: smoothY,
        backgroundX: useTransform(smoothX, [-1, 1], ["-2%", "2%"]),
        backgroundY: useTransform(smoothY, [-1, 1], ["-2%", "2%"]),
        foregroundX: useTransform(smoothX, [-1, 1], ["-5%", "5%"]),
        foregroundY: useTransform(smoothY, [-1, 1], ["-5%", "5%"]),
    }
}
