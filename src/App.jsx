import { useEffect } from 'react'
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

export default function App() {
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
