import { LogoLockup } from './primitives.jsx'

const navLinkStyle = {
  textDecoration: 'none',
  color: '#4B5868',
  fontFamily: 'var(--font-mono)',
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: '0.5px',
}

const links = [
  { href: '#top', label: 'Home' },
  { href: '#why', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(251,252,253,0.82)',
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: '1px solid #E1E8F0',
      }}
    >
      <nav
        style={{
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          padding: '0 var(--pad-x)',
          height: 76,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <LogoLockup />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="cp-navlink" style={navLinkStyle}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="cp-btn-ink"
            style={{
              textDecoration: 'none',
              background: '#0B2545',
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              padding: '11px 20px',
              borderRadius: 4,
            }}
          >
            Get a Quote
          </a>
        </div>
      </nav>
    </header>
  )
}
