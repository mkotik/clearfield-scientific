// Recurring "locating dot" motif — a small blue dot inside a thin ring.
export function LocatingDot({ size = 11, ring = 1, ringColor = '#1E6FD8', dotColor = '#1E6FD8', ringOpacity = 0.5, pulse = false }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: size, height: size }}>
      <span style={{ position: 'absolute', inset: 0, border: `${ring}px solid ${ringColor}`, borderRadius: '50%', opacity: ringOpacity }} />
      <span
        className={pulse ? 'cp-pulse' : undefined}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 5,
          height: 5,
          margin: '-2.5px 0 0 -2.5px',
          background: dotColor,
          borderRadius: '50%',
          animation: pulse ? 'cpPulse 2.6s ease-in-out infinite' : undefined,
        }}
      />
    </span>
  )
}

// Crosshair registration mark ("+"), like a technical drawing.
export function Crosshair({ top, right, bottom, left, size = 16, color = '#1E6FD8' }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        top,
        right,
        bottom,
        left,
        fontFamily: 'var(--font-mono)',
        fontSize: size,
        color,
        pointerEvents: 'none',
        lineHeight: 1,
      }}
    >
      +
    </span>
  )
}

// Faint graph-paper grid overlay.
export function GridOverlay({ dark = false }) {
  const line = dark ? 'rgba(255,255,255,0.04)' : 'rgba(11,37,69,0.045)'
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
        pointerEvents: 'none',
      }}
    />
  )
}

// Logo lockup: locating dot + CLEAR/POINT wordmark + SCIENTIFIC.
export function LogoLockup({ dark = false, dotSize = 13, dotRing = 1.5, dotRingOpacity = 0.55, wordSize = 21, scientificSize = 9 }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
      <LocatingDot
        size={dotSize}
        ring={dotRing}
        ringColor={dark ? '#6FA8EE' : '#1E6FD8'}
        dotColor={dark ? '#6FA8EE' : '#1E6FD8'}
        ringOpacity={dotRingOpacity}
      />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 3 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: wordSize, letterSpacing: '1.2px' }}>
          <span style={{ color: dark ? '#fff' : '#0B2545' }}>CLEAR</span>
          <span style={{ color: dark ? '#6FA8EE' : '#1E6FD8' }}>POINT</span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            fontSize: scientificSize,
            letterSpacing: '4.5px',
            color: dark ? '#7F8EA3' : '#8593A4',
            paddingLeft: 1,
          }}
        >
          SCIENTIFIC
        </span>
      </span>
    </span>
  )
}
