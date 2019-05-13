import React from "react"

import { FooterContainer, PoweredBy } from "./styles"
import query from "./query"

const Footer = () => {
  const { footer, logos } = query()
  const { copyright, thanks, sourceNote, poweredBy } = footer
  return (
    <FooterContainer>
      <span css="grid-area: copyright;">
        © {new Date().getFullYear()} - {copyright}
        © Thanks to [Janosh Riebesell](https://github.com/janosh)
      </span>
      <span
        css="grid-area: source;"
        dangerouslySetInnerHTML={{ __html: sourceNote }}
      />
      <PoweredBy>
        Powered by
        {poweredBy.map(({ url, title }, index) => (
          <a key={title} href={url}>
            <img src={logos.edges[index].node.src} alt={title} />
          </a>
        ))}
      </PoweredBy>
    </FooterContainer>
  )
}

export default Footer
