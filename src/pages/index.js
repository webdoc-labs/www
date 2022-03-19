import * as React from "react"
import pixijsLogo from '../images/pixijs.png'
import teamflowLogo from '../images/teamflow.png'
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
  fontFamily: 'Consolas',
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

// data

// markup
const IndexPage = () => {
  React.useLayoutEffect(() => {
    hljs.highlightAll()
  }, []);

  return (
    <div className="root">
      <Header />
      <title>webdoc - Home</title>
      <header className="dual-header">
        <section className="dual-header-title">
          <h1>
            Documentation <br />
            Generator
          </h1>
          <h3>
            webdoc is a platform for documenting JavaScript and
            TypeScript code, guides & tutorials, monorepos, ecosystems, and much more.
          </h3>
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
          <h2>See who's using webdoc</h2>
          <br />
          <section>
            <a href="https://api.pixijs.io" target="_blank">
              <img src={pixijsLogo} alt="pixijs logo" height="96px" />
            </a>
            <a href="https://www.teamflowhq.com" target="_blank">
              <img src={teamflowLogo} alt="teamflow logo" height="96px" />
            </a>
          </section>
        </div>
      </main>
      <footer>
        <p>
          Made with ❤️ by <a href="https://twitter.com/ShukantP" target="_blank">Shukant Pal</a>
        </p>
      </footer>
      <link rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/default.min.css" />
    </div>
  )
}

export default IndexPage
