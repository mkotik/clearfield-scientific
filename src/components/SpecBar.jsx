const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#95A2B2',
  marginBottom: 9,
}

const valueStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 19,
  color: '#0B2545',
}

const specs = [
  { label: 'Response Time', value: 'Hours, not days' },
  { label: 'Minimum Order', value: 'None required' },
  { label: 'Sourcing', value: 'Custom & specialty' },
]

const SOURCES = ['Labware', 'Reagents', 'PPE', 'Instruments', 'Filtration', 'Cryogenics']

export default function SpecBar() {
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #E1E8F0' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 var(--pad-x)' }}>
        <div className="cp-spec-grid cp-reveal">
          {specs.map((s) => (
            <div key={s.label} className="cp-spec-cell">
              <div style={labelStyle}>{s.label}</div>
              <div style={valueStyle}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '18px 0', display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: 14 }}>
          <span
            style={{
              flex: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: 11.5,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#1E6FD8',
            }}
          >
            We source —
          </span>
          <div className="cp-marquee" style={{ flex: '1 1 0', minWidth: 0 }}>
            <div className="cp-marquee-track">
              {[0, 1].map((k) => (
                <span
                  key={k}
                  aria-hidden={k === 1}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: '#6B7787', paddingRight: 28 }}
                >
                  {SOURCES.map((item) => (
                    <span key={item}>
                      {item}
                      <span style={{ color: '#C2CEDC' }}>&nbsp;·&nbsp;</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
