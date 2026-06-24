import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import SpecBar from './components/SpecBar.jsx'
import Why from './components/Why.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Authoring toggles from the design handoff (defaults on).
const showGrid = true
const showFigures = true

export default function App() {
  return (
    <div id="top">
      <Nav />
      <Hero showGrid={showGrid} showFigures={showFigures} />
      <SpecBar />
      <Why />
      <Process showGrid={showGrid} />
      <Contact showGrid={showGrid} />
      <Footer />
    </div>
  )
}
