import { LocatingDot, Crosshair, GridOverlay } from './primitives.jsx'

export default function Contact({ showGrid = true }) {
  return (
    <section id="contact" style={{ position: 'relative', background: '#FBFCFD', padding: '104px var(--pad-x)', overflow: 'hidden' }}>
      {showGrid && <GridOverlay />}
      <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto' }}>
        <div
          style={{
            position: 'relative',
            background: '#fff',
            border: '1px solid #C9D5E3',
            padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px)',
            textAlign: 'center',
          }}
        >
          <Crosshair top={-8} left={-8} size={18} />
          <Crosshair top={-8} right={-8} size={18} />
          <Crosshair bottom={-9} left={-8} size={18} />
          <Crosshair bottom={-9} right={-8} size={18} />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
            <LocatingDot />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12.5,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#1E6FD8',
              }}
            >
              § 03 — Get in touch
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4vw, 46px)',
              lineHeight: 1.08,
              letterSpacing: '-1.2px',
              color: '#0B2545',
              margin: '0 0 16px',
            }}
          >
            Send us your list.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#4A5666', maxWidth: 480, margin: '0 auto 36px' }}>
            Email what you need and a ClearPoint specialist replies with availability and pricing — fast. No account,
            no minimum order.
          </p>
          <a
            href="mailto:info@clearpointscientific.com"
            className="cp-email-big"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(22px, 3.6vw, 40px)',
              letterSpacing: '-1px',
              color: '#0B2545',
              borderBottom: '2px solid #C9D5E3',
              paddingBottom: 6,
            }}
          >
            info@clearpointscientific.com
          </a>
          <div
            style={{
              marginTop: 34,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px 22px',
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              letterSpacing: '0.5px',
              color: '#6B7787',
            }}
          >
            <span>↳ Reply within hours</span>
            <span style={{ color: '#C2CEDC' }}>/</span>
            <span>(000) 000-0000</span>
            <span style={{ color: '#C2CEDC' }}>/</span>
            <span>Mon–Fri</span>
          </div>
        </div>
      </div>
    </section>
  )
}
