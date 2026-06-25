import { useState } from 'react'
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
  { href: '#why', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        // fixed (not sticky) so it overlays instead of reserving 76px of layout
        // space at the top — that reserved space is what delayed the scrub start.
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
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
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => setOpen(false)}>
          <LogoLockup />
        </a>

        {/* Desktop links */}
        <div className="cp-nav-desktop">
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="cp-nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          className="cp-mobile-menu"
          style={{
            borderTop: '1px solid #E1E8F0',
            background: 'rgba(251,252,253,0.97)',
            backdropFilter: 'saturate(180%) blur(12px)',
            WebkitBackdropFilter: 'saturate(180%) blur(12px)',
          }}
        >
          <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '8px var(--pad-x) 20px', display: 'flex', flexDirection: 'column' }}>
            {links.map((l) => (
              <a key={l.label} href={l.href} className="cp-mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                textDecoration: 'none',
                background: '#0B2545',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 20px',
                borderRadius: 4,
                textAlign: 'center',
                marginTop: 16,
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
