import { Crosshair, GridOverlay } from './primitives.jsx'

const steps = [
  {
    num: '01',
    title: 'Tell us what you need',
    desc: 'Send a list, a catalog number, or just a description. No account or minimum order required.',
  },
  {
    num: '02',
    title: 'We source & quote fast',
    desc: 'We confirm availability, find the best pricing, and send a clear quote — usually within hours.',
  },
  {
    num: '03',
    title: 'Get it delivered',
    desc: 'Approve and we handle the rest — tracked, on time, with a real person on call if anything changes.',
  },
]

export default function Process({ showGrid = true }) {
  return (
    <section
      id="process"
      style={{ position: 'relative', background: '#0B2545', padding: '100px var(--pad-x)', color: '#fff', overflow: 'hidden' }}
    >
      {showGrid && <GridOverlay dark />}
      <Crosshair top={28} left={30} size={18} color="rgba(111,168,238,0.5)" />
      <Crosshair bottom={28} right={30} size={18} color="rgba(111,168,238,0.5)" />

      <div style={{ position: 'relative', maxWidth: 'var(--maxw)', margin: '0 auto' }}>
        <div style={{ maxWidth: 660, marginBottom: 64 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#6FA8EE',
              marginBottom: 20,
            }}
          >
            § 02 — How It Works
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 50px)',
              lineHeight: 1.06,
              letterSpacing: '-1.4px',
              color: '#fff',
              margin: 0,
            }}
          >
            From request to bench
            <br />
            in three steps.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 0 }}>
          {steps.map((s, i) => {
            const isLast = i === steps.length - 1
            const padding = i === 0 ? '30px 32px 0 0' : isLast ? '30px 0 0 32px' : '30px 32px 0'
            return (
              <div key={s.num} style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.18)', padding }}>
                <span
                  style={{
                    position: 'absolute',
                    top: -6.5,
                    left: isLast ? 32 : 0,
                    width: 12,
                    height: 12,
                    background: '#1E6FD8',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 4px #0B2545',
                  }}
                />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: '#6FA8EE', marginBottom: 14 }}>
                  {s.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 23,
                    color: '#fff',
                    margin: '0 0 12px',
                    letterSpacing: '-0.4px',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#AFC0D4', margin: 0 }}>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
