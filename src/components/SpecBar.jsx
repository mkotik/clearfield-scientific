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

export default function SpecBar() {
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #E1E8F0' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 var(--pad-x)' }}>
        <div className="cp-spec-grid">
          {specs.map((s) => (
            <div key={s.label} className="cp-spec-cell">
              <div style={labelStyle}>{s.label}</div>
              <div style={valueStyle}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '18px 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11.5,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#1E6FD8',
            }}
          >
            We source —
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: '#6B7787', lineHeight: 1.7 }}>
            Labware&nbsp;· Reagents&nbsp;· PPE&nbsp;· Instruments&nbsp;· Filtration&nbsp;· Cryogenics
          </span>
        </div>
      </div>
    </section>
  )
}
