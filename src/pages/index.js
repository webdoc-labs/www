import * as React from "react"
import pixijsLogo from '../images/pixijs.png'
import teamflowLogo from '../images/teamflow.png'
import melonJsLogo from '../images/melonjs-logo.png'
import { Icon, Header } from '../app'
import '../styles/index.scss'
import githubIcon from '../images/github.png'
import twitterIcon from '../images/twitter.png'
import webdocConfig from '../../webdoc.conf.json'
import { hljs } from '../highlight.min'

// styles
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}
const codeStyle = {
  backgroundColor: '#f3f3f3',
  borderRadius: 8,
  fontFamily: 'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif',
  fontSize: 14,
  padding: 10
}
const preStyle = {
  backgroundColor: '#f3f3f3',
  borderRadius: 8,
  marginLeft: 8,
  padding: 0,
  height: 'fit-content'
}

const toolLayoutStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: 16
}
const toolStyle = {
  border: '1px solid rgba(0, 0, 0, .16)',
  borderRadius: 8,
  display: 'block',
  fontSize: 14,
  padding: '12px 16px',
  width: 200
}
const toolContentStyle = {
  color: '#333',
}

const bannerStyle = {
  textAlign: 'center'
}

const centerStyle = {
  textAlign: 'center'
}

// data
const tools = [
  {
    title: 'Analytics',
    content: 'Natively integrate with Google Analytics and Plausible',
    href: '/guides/getting-started/integrations.html'
  },
  {
    title: 'Guides',
    content: 'Out of the box support for writing documentation guides',
    href: '/guides/getting-started/tutorials.html'
  },
  {
    title: 'JSDoc tags',
    content: 'Nearly all of the JSDoc tags are supported',
    href: '/guides/tags/tags.html'
  }
]

// markup
const Tools = React.memo(() => {
  return (
    <div style={toolLayoutStyle}>
      {tools.map((tool) => (
        <a href={tool.href} style={toolStyle}>
          <h4>{tool.title}</h4>
          <p style={toolContentStyle}>{tool.content}</p>
        </a>
      ))}
    </div>
  )
})


const IndexPage = () => {
  React.useLayoutEffect(() => {
    hljs.highlightAll();
    document.body.classList.add("full-width");
  }, []);

  return (
    <div className="root">
      <Header />
      <title>webdoc - Home</title>
      <header className="dual-header">
        <section className="dual-header-title">
          <h2>
            Documentation <br />
            Generator
          </h2>
          <h4>
            webdoc is a platform for documenting JavaScript and
            TypeScript code, guides & tutorials, monorepos, ecosystems, and much more.
          </h4>
          <section className="flex-row">
            <a href="/guides/index.html" className="button button-primary">
              Get Started
            </a>
            <pre style={preStyle}>
              <code style={codeStyle}>
                npm i --save-dev @webdoc/cli
              </code>
            </pre>
          </section>
        </section>
        <section>
          <pre className="language-json">
            <code style={codeStyle}>
              {`// This site's webdoc.conf.json\n${JSON.stringify(webdocConfig, null, 4)}`}
            </code>
          </pre>
        </section>
      </header>
      <main>
        <div>
          <h3 style={centerStyle}>One tool to rule it all</h3>
          <section>
            <Tools />
          </section>
        </div>
        <br />
        <div style={bannerStyle}>
          <h3 style={centerStyle}>See who's using webdoc</h3>
          <section>
            <a href="https://api.pixijs.io" target="_blank">
              <img src={pixijsLogo} alt="pixijs logo" height="96px" />
            </a>
            <a href="https://www.melonjs.org" target="_blank">
              <img src={melonJsLogo} alt="melonjs logo" height="96px" />
            </a>
          </section>
        </div>
      </main>
      <footer>
        <p>
          Made with ?????? by <a href="https://twitter.com/ShukantP" target="_blank">Shukant Pal</a>
        </p>
      </footer>
      <link rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/default.min.css" />
    </div>
  )
}

export default IndexPage
