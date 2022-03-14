import * as React from 'react'

const iconStyle = {
  cursor: 'pointer'
}

export const ExternalLinkIcon = React.memo(({ width, height, style }) => {
  const computedStyle = React.useMemo(() => ({ ...iconStyle, ...style }), [style])

  return (
    <svg width={width ?? '24px'} height={height ?? '24px'} viewBox="0 0 24 24" style={computedStyle}>
      <g strokeWidth="2.1" stroke="#666" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline>
        <path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path>
      </g>
    </svg>
  )
})
