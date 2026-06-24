import { LocatingDot, Crosshair, GridOverlay } from './primitives.jsx'

// Swap in a real modern-laboratory photo (~1000×800px landscape).
// Set to a URL or imported asset to replace the datasheet placeholder.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&h=800&q=80'

export default function Hero({ showGrid = true, showFigures = true }) {
  return (
    <section style={{ position: 'relative', borderBottom: '1px solid #E1E8F0', overflow: 'hidden' }}>
      {showGrid && <GridOverlay />}
      <Crosshair top={28} left={30} size={18} color="rgba(30,111,216,0.40)" />
      <Crosshair top={28} right={30} size={18} color="rgba(30,111,216,0.40)" />

      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          padding: '92px var(--pad-x) 84px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 64,
        }}
      >
        <div className="cp-fade-up" style={{ flex: '1.25 1 440px', minWidth: 320, animation: 'cpFadeUp 0.7s ease both' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 26 }}>
            <LocatingDot pulse />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12.5,
                fontWeight: 500,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: '#1E6FD8',
              }}
            >
              Scientific Supply Partner
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(44px, 6.4vw, 84px)',
              lineHeight: 0.98,
              letterSpacing: '-2.5px',
              color: '#0B2545',
              margin: '0 0 26px',
            }}
          >
            Scientific Supplies.
            <br />
            <span style={{ color: '#1E6FD8' }}>Sourced Smarter.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.62, color: '#4A5666', maxWidth: 520, margin: '0 0 36px' }}>
            Fast, reliable access to the products your lab runs on — backed by responsive service, competitive
            pricing, and sourcing built around your bench, not a giant catalog.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center' }}>
            <a
              href="#contact"
              className="cp-btn-blue"
              style={{
                textDecoration: 'none',
                background: '#1E6FD8',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '16px 30px',
                borderRadius: 5,
              }}
            >
              Get a Quote
            </a>
            <a
              href="mailto:info@clearpointscientific.com"
              className="cp-email-inline"
              style={{
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                color: '#0B2545',
                fontWeight: 500,
                fontSize: 14.5,
                letterSpacing: '0.3px',
                borderBottom: '1px solid #C2CEDC',
                paddingBottom: 3,
              }}
            >
              info@clearpointscientific.com →
            </a>
          </div>
        </div>

        <div className="cp-fade-up" style={{ flex: '1 1 380px', minWidth: 300, animation: 'cpFadeUp 0.7s ease 0.1s both' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '5 / 4',
              border: '1px solid #C9D5E3',
              background: HERO_IMAGE
                ? '#E9EFF6'
                : 'repeating-linear-gradient(135deg, #E9EFF6 0 15px, #F4F8FC 15px 30px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Crosshair top={-7} left={-7} size={16} />
            <Crosshair top={-7} right={-7} size={16} />
            <Crosshair bottom={-8} left={-7} size={16} />
            <Crosshair bottom={-8} right={-7} size={16} />
            {HERO_IMAGE ? (
              <img
                src={HERO_IMAGE}
                alt="Modern laboratory"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.5px',
                  color: '#5C6B7E',
                  background: 'rgba(255,255,255,0.9)',
                  padding: '8px 13px',
                  border: '1px solid #D2DCE8',
                }}
              >
                IMG · 1000 × 800px
              </span>
            )}
            {showFigures && (
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: -30,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11.5,
                  letterSpacing: '0.5px',
                  color: '#8593A4',
                }}
              >
                FIG.01 — Modern laboratory · landscape
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
