import React from "react"
import {Header} from "../app";

const horizontalLayoutStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '4em',
  margin: '4em',
  justifyContent: 'center'
}

const pricingCardStyle = {
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '360px',
  padding: '2em',
  maxWidth: '400px'
}
const pricingHeaderStyle = {
  marginTop: 0
}
const pricingContentStyle = {
  flexGrow: 1
}
const pricingDividerStyle = {
  margin: 0,
  maxWidth: '1em'
}

const PricingCard = ({
  name,
  description,
  amount,
  license,
}) => {
  return (
    <div style={pricingCardStyle}>
      <h2 style={pricingHeaderStyle}>{name}</h2>
      <section style={pricingContentStyle}>
        <h3>{amount}</h3>
        <hr />
        <p>
          {description}
        </p>
      </section>
      <a href={license}>License</a>
    </div>
  )
}

const PricingPage = () => {
  React.useLayoutEffect(() => {
    document.body.classList.add("full-width")
  }, []);

  return (
    <div className="root">
      <Header />
      <title>webdoc - Pricing</title>
      <main className="full-width">
        <div style={horizontalLayoutStyle}>
          <PricingCard
            name="Noncommercial"
            amount="Free, Forever!"
            description="Free forever for nonprofit open-source projects!"
            license="/legal/license/license-noncommercial"
          />
          <hr style={pricingDividerStyle} />
          <PricingCard
            name="Commercial"
            amount="Flat-rate subscription"
            description={(
              <p>
                Contact <a href="mailto:shukant@webdoclabs.com">shukant@webdoclabs.com</a> for pricing
              </p>
            )}
            license="/legal/license/license-commercial"
          />
        </div>
      </main>
    </div>
  )
}

export default PricingPage
