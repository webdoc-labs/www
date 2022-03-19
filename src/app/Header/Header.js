import * as React from 'react'
import { Icon } from "../Icon/Icon";
import twitterIcon from "../../images/twitter.png";
import githubIcon from "../../images/github.png";

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
  marginRight: 32,
  lineHeight: 33
}

const titleBarStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
}

const contentStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  gap: 16,
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
    <section style={titleBarStyle}>
      <span style={titleStyle}>{'{ '}<i>webdoc</i>{' }'}</span>
      <a href="/guides" style={textLinkStyle}>
        <span>Guides</span>
      </a>
    </section>
    <section style={contentStyle}>
      <a href="https://twitter.com/webdoc11" target="_blank">
        <Icon src={twitterIcon} width={24} />
      </a>
      <a href="https://github.com/webdoc-labs/webdoc" target="_blank">
        <Icon src={githubIcon} width={24} />
      </a>
    </section>
  </nav>
)
