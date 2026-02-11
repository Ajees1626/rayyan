import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { GoArrowUpRight } from 'react-icons/go'

const serviceSlugMap = {
  'UPVC Windows': 'upvc-windows',
  'UPVC Doors': 'upvc-doors',
  'UPVC Interior': 'upvc-interior',
  'Wooden Doors': 'wooden-doors',
  'Wooden Frames': 'wooden-frames',
  'Interior Room Doors': 'interior-room-doors',
  'WPC Doors': 'wpc-doors',
  'Screens & Blinds': 'screens-and-blinds',
}

const servicesItems = [
  { label: 'UPVC Windows', bgColor: '#0d9488', links: ['Sliding Windows', 'Casement Windows'] },
  { label: 'UPVC Doors', bgColor: '#f59e0b', links: ['Sliding Door', 'Folding Door'] },
  { label: 'UPVC Interior', bgColor: '#1f2937', links: ['Modern Kitchen', 'Loft covering'] },
  { label: 'Wooden Doors', bgColor: '#0d9488', links: ['Teak Wood Door', 'Vengai Wood Door'] },
  { label: 'Wooden Frames', bgColor: '#f59e0b', links: ['Teak Wood Frame', 'Vengai Wood Frame'] },
  { label: 'Interior Room Doors', bgColor: '#1f2937', links: ['Lamination Door', 'Steel Beading Door'] },
  { label: 'WPC Doors', bgColor: '#0d9488', links: ['Plain Door', 'Carving Doors'] },
  { label: 'Screens & Blinds', bgColor: '#f59e0b', links: ['Zebra Screen', 'Mosquito Window Screen'] },
]

function ServicesCardDropdown({ isOpen, onClose }) {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const cards = cardsRef.current.filter(Boolean)
    if (isOpen) {
      gsap.set(containerRef.current, { opacity: 1, visibility: 'visible' })
      gsap.set(cards, { y: 20, opacity: 0 })
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.04,
        ease: 'power3.out',
      })
    } else {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.set(containerRef.current, { visibility: 'hidden' })
        },
      })
    }
  }, [isOpen])

  const setCardRef = (i) => (el) => {
    // Important: React calls ref callbacks with `null` on unmount.
    // We must write the `null` back so we don't keep stale DOM refs around.
    cardsRef.current[i] = el
  }

  return (
    <div
      ref={containerRef}
      className="relative left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4 md:px-6 lg:px-6"
      style={{ visibility: isOpen ? 'visible' : 'hidden', opacity: isOpen ? 1 : 0 }}
    >
      <div
        className="p-4 md:p-5 lg:p-5 xl:p-6 2xl:p-7 bg-white rounded-xl shadow-lg border border-teal-200"
        onMouseLeave={onClose}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-6">
          {servicesItems.map((item, idx) => {
            const slug = serviceSlugMap[item.label]
            const detailPath = slug ? `/services/${slug}` : '/services'

            return (
              <div
                key={`${item.label}-${idx}`}
                ref={setCardRef(idx)}
                className="flex flex-col gap-2 p-3 sm:p-4 md:p-4 lg:p-4 xl:p-5 2xl:p-5 rounded-lg min-h-[120px] sm:min-h-[130px] md:min-h-[140px] lg:min-h-[140px] xl:min-h-[150px] 2xl:min-h-[160px]"
                style={{ backgroundColor: item.bgColor, color: '#fff' }}
              >
                <div className="font-semibold tracking-tight text-sm sm:text-base md:text-base xl:text-lg">
                  {item.label}
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  {item.links.map((lnk) => (
                    <Link
                      key={lnk}
                      to={detailPath}
                      className="inline-flex items-center gap-2 no-underline text-inherit hover:opacity-90 transition-opacity text-xs sm:text-sm py-0.5 touch-manipulation"
                      onClick={onClose}
                    >
                      <GoArrowUpRight className="shrink-0 text-sm" aria-hidden="true" />
                      {lnk}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 no-underline text-inherit hover:opacity-90 transition-opacity text-xs sm:text-sm py-0.5 touch-manipulation mt-auto"
                    onClick={onClose}
                  >
                    <GoArrowUpRight className="shrink-0 text-sm" aria-hidden="true" />
                    View All
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center mt-4 md:mt-5 xl:mt-6">
          <Link
            to="/services"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 transition-colors touch-manipulation"
          >
            View All Services
            <GoArrowUpRight className="shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesCardDropdown
