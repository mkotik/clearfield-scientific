import { useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Showcase3D from './components/Showcase3D.jsx'
import SpecBar from './components/SpecBar.jsx'
import Why from './components/Why.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Authoring toggle from the design handoff (default on).
const showGrid = true

const NAV_OFFSET = 76 // sticky header height

// Thin blue progress bar tracking page scroll. Updates a transform via ref (no
// React re-render) so it stays smooth even during the video scrub.
function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 70,
        background: '#1E6FD8',
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        pointerEvents: 'none',
      }}
    />
  )
}

export default function App() {
  // Scroll-reveal: fade/slide elements in as they enter the viewport. Uses a plain
  // scroll + getBoundingClientRect check (not IntersectionObserver) so it fires
  // reliably even after instant anchor jumps and for tall sections at the page end.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.cp-reveal'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    let pending = els
    const check = () => {
      const vh = window.innerHeight
      pending = pending.filter((el) => {
        const r = el.getBoundingClientRect()
        const inView = r.top < vh - 60 && r.bottom > 0
        if (inView) el.classList.add('is-in')
        return !inView
      })
      if (!pending.length) {
        window.removeEventListener('scroll', check)
        window.removeEventListener('resize', check)
      }
    }
    check() // reveal whatever is already in view on load
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  // In-page anchor links jump instantly instead of smooth-scrolling. The scrub
  // section is 300vh tall, so a smooth scroll across it would play the whole video
  // forwards/backwards during the animation — jumping avoids that entirely.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const el = id ? document.getElementById(id) : null
      if (!el) return
      e.preventDefault()
      const isTop = id === 'top'
      const top = isTop ? 0 : el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
      window.scrollTo({ top, behavior: 'auto' })
      history.replaceState(null, '', `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div id="top">
      <ScrollProgress />
      <Nav />
      <Showcase3D />
      <SpecBar />
      <Why />
      <Process showGrid={showGrid} />
      <Contact showGrid={showGrid} />
      <Footer />
    </div>
  )
}
