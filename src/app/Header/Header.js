import { ExternalLinkIcon } from '../Icon/ExternalLinkIcon'
import * as React from 'react'

const headerStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: '76.5px',
  width: '100%'
}

const titleStyle = {
  fontFamily: 'Roboto, Lato, Helvetica, sans serif',
  fontSize: 28,
  fontWeight: 700,
  marginLeft: 90,
  lineHeight: 33
}

const contentStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  height: '100%',
  justifyContent: 'flex-end',
  padding: '0 100px'
}

const textLinkStyle = {
  fontSize: 16,
  marginRight: 2
}

const iconStyle = {
  display: 'block',
  marginBottom: '8px'
}


export const Header = () => (
  <nav style={headerStyle}>
    <section style={titleStyle}>
      <span>{'{ '}<i>webdoc</i>{' }'}</span>
    </section>
    <section style={contentStyle}>
      <a href="/guides" style={textLinkStyle}>
        <span>Guides</span>
      </a>
      <a href="/guides">
        <ExternalLinkIcon width={16} height={16} style={iconStyle} />
      </a>
    </section>
  </nav>
)
