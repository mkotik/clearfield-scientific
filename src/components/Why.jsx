const rows = [
  {
    num: '01',
    title: 'Responsive Service',
    desc: 'Real people who answer fast and follow through. Quotes, substitutions, and order updates measured in hours — not buried in a ticket queue.',
  },
  {
    num: '02',
    title: 'Competitive Pricing',
    desc: 'Transparent, sharpened pricing on the consumables and equipment you reorder most — so your budget stretches further every quarter.',
  },
  {
    num: '03',
    title: 'Customized Sourcing',
    desc: "Hard-to-find or specialty items? We track them down and source to your exact specs and protocols — the requests big distributors won't take.",
  },
]

export default function Why() {
  return (
    <section id="why" style={{ background: '#FBFCFD', padding: '100px var(--pad-x)' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
        <div className="cp-reveal" style={{ maxWidth: 720, marginBottom: 64 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#1E6FD8',
              marginBottom: 20,
            }}
          >
            § 01 — Why ClearPoint
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 50px)',
              lineHeight: 1.06,
              letterSpacing: '-0.5px',
              color: '#0B2545',
              margin: '0 0 20px',
            }}
          >
            The clarity of a partner.
            <br />
            The speed of a specialist.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.62, color: '#4A5666', margin: 0 }}>
            We help researchers and laboratory professionals find the products they need — without the delays and
            complexity of larger distributors.
          </p>
        </div>

        {rows.map((r, i) => (
          <div key={r.num} className="cp-reveal" style={{ transitionDelay: `${i * 90}ms` }}>
          <div
            className="cp-ledger-row"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px 40px',
              padding: '38px 24px 38px 16px',
              marginLeft: -16,
              marginRight: -24,
              borderTop: '1px solid #DDE5EF',
              borderBottom: i === rows.length - 1 ? '1px solid #DDE5EF' : undefined,
            }}
          >
            <div
              className="cp-ledger-num"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 15,
                fontWeight: 500,
                color: '#1E6FD8',
                width: 48,
                flex: 'none',
                paddingTop: 4,
              }}
            >
              {r.num}
            </div>
            <h3
              className="cp-ledger-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 26,
                color: '#0B2545',
                margin: 0,
                flex: '1 1 240px',
                letterSpacing: '-0.5px',
              }}
            >
              {r.title}
            </h3>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#51606F', margin: 0, flex: '1.6 1 320px' }}>{r.desc}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  )
}
