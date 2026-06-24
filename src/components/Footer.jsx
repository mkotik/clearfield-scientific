import { LogoLockup } from './primitives.jsx'

const headingStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#647488',
  margin: '0 0 16px',
}

const linkStyle = { textDecoration: 'none', color: '#B9C6D6', fontSize: 15 }

const exploreLinks = [
  { href: '#top', label: 'Home' },
  { href: '#why', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#081A2E', color: '#B9C6D6', padding: '70px var(--pad-x) 40px' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 48,
            justifyContent: 'space-between',
            paddingBottom: 44,
            borderBottom: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          <div style={{ maxWidth: 320 }}>
            <div style={{ marginBottom: 18 }}>
              <LogoLockup dark dotSize={12} dotRing={1.5} dotRingOpacity={0.6} wordSize={20} scientificSize={8.5} />
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#8A9AAE', margin: 0 }}>
              Scientific supplies, sourced smarter — responsive service, competitive pricing, and sourcing built around
              your lab.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
            <div>
              <h4 style={headingStyle}>Explore</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {exploreLinks.map((l) => (
                  <a key={l.label} href={l.href} className="cp-footlink" style={linkStyle}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={headingStyle}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a href="mailto:info@clearpointscientific.com" className="cp-footlink" style={linkStyle}>
                  info@clearpointscientific.com
                </a>
<a href="#contact" className="cp-footlink" style={{ ...linkStyle, color: '#6FA8EE', fontWeight: 600 }}>
                  Get a quote →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: 26,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.4px',
            color: '#647488',
          }}
        >
          <span>© 2026 ClearPoint Scientific — All rights reserved.</span>
          <span>For researchers &amp; laboratory professionals.</span>
        </div>
      </div>
    </footer>
  )
}
