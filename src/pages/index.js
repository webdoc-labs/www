import * as React from "react"
import pixijsLogo from '../images/pixijs.png'
import teamflowLogo from '../images/teamflow.png'
import { Icon } from '../app'
import '../styles/index.scss'
import githubIcon from '../images/github.png'
import twitterIcon from '../images/twitter.png'

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

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}
const socialLinksStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '32px',
  gap: '16px'
}

// data

// markup
const IndexPage = () => {
  return (
    <div className="root">
      <header>
        <title>Home Page</title>
        <h1>
          Documentation <br />
          Generator
        </h1>
        <h3>
          webdoc is a platform for documenting JavaScript and
          TypeScript code, guides & tutorials, monorepos, ecosystems, and much more.
        </h3>
        <section style={socialLinksStyle}>
          <a href="https://twitter.com/webdoc11" target="_blank">
            <Icon src={twitterIcon} width={32} />
          </a>
          <a href="https://github.com/webdoc-labs/webdoc" target="_blank">
            <Icon src={githubIcon} width={32} />
          </a>
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
            <a href="https://app.teamflowhq.com/signup?referrer=shukant-pal" target="_blank">
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
    </div>
  )
}

export default IndexPage
