import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollReveal - Animates children when they scroll into view
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' | 'none'
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} y - Y offset for 'up'/'down' (default 60)
 * @param {number} x - X offset for 'left'/'right' (default 60)
 * @param {boolean} stagger - Stagger child animations
 * @param {number} staggerDelay - Delay between staggered children
 * @param {boolean} once - Animate only once (default true)
 * @param {string} className - Additional CSS classes
 */
function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  y = 60,
  x = 60,
  stagger = false,
  staggerDelay = 0.1,
  once = true,
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const getVars = () => {
      const base = { opacity: 0 }
      if (direction === 'up') base.y = y
      else if (direction === 'down') base.y = -y
      else if (direction === 'left') base.x = x
      else if (direction === 'right') base.x = -x
      return base
    }

    const fromVars = getVars()
    const toVars = { opacity: 1, y: 0, x: 0 }

    if (stagger) {
      const items = el.children.length ? el.children : null
      if (items && items.length) {
        gsap.fromTo(items, fromVars, {
          ...toVars,
          duration,
          delay,
          stagger: staggerDelay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        })
      } else {
        gsap.fromTo(el, fromVars, {
          ...toVars,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        })
      }
    } else {
      gsap.fromTo(el, fromVars, {
        ...toVars,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      })
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [direction, delay, duration, y, x, stagger, staggerDelay, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal
