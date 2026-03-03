import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight entrance and scroll animations.
 * Uses CSS + Intersection Observer only (no GSAP/ScrollTrigger) to avoid pointer-event issues.
 *
 * @param {React.ReactNode} children
 * @param {boolean} scroll - If true, animate when element scrolls into view
 * @param {boolean} entrance - If true, run a one-time entrance animation on mount
 * @param {number} delay - Delay in ms for entrance animation
 * @param {boolean} once - If true (default), scroll animation runs only once when in view
 * @param {string} className - Additional classes
 * @param {number} rootMargin - Intersection Observer rootMargin (e.g. "0px 0px -40px 0px" to trigger a bit early)
 */
function AnimateIn({
  children,
  scroll = false,
  entrance = false,
  delay = 0,
  once = true,
  className = '',
  rootMargin = '0px 0px -30px 0px',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [entranceDone, setEntranceDone] = useState(!entrance)

  useEffect(() => {
    if (!scroll || !ref.current) return

    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [scroll, once, rootMargin])

  useEffect(() => {
    if (!entrance || !ref.current) return
    const id = setTimeout(() => setEntranceDone(true), delay)
    return () => clearTimeout(id)
  }, [entrance, delay])

  const scrollClasses = scroll ? (inView ? 'animate-on-scroll in-view' : 'animate-on-scroll') : ''
  const entranceClasses = entrance && entranceDone ? 'animate-fade-in-up' : entrance ? 'opacity-0' : ''
  const style = undefined

  return (
    <div
      ref={ref}
      className={`${scrollClasses} ${entranceClasses} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}

export default AnimateIn
