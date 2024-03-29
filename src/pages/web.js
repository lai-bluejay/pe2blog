import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import { PageBody, Grid } from '../components/styles'
import Projects from '../views/Projects'

const techLinkCss = `transition: 0.4s; :hover {transform: scale(1.05);}`

const WebPage = ({ data, location }) => {
  const { intro, projects, tech } = data
  const { title, cover } = intro.frontmatter
  return (
    <Global title={title} path={location.pathname}>
      <PageTitle img={cover && cover.img && cover.img.sharp}>
        <h1>{title}</h1>
      </PageTitle>
      <PageBody>
        <div dangerouslySetInnerHTML={{ __html: intro.html }} />
        <h2>Recent Projects</h2>
        <Projects {...projects} />
        <h2>My Stack</h2>
        <Grid minWidth="5em" align="center">
          {tech.edges.map(({ node: { title, url, logo } }) => (
            <a key={title} href={url} css={techLinkCss}>
              <span css="font-size: 0.85em;">{title}</span>
              <img src={logo.src} alt={title} />
            </a>
          ))}
        </Grid>
      </PageBody>
    </Global>
  )
}

export default WebPage

export const query = graphql`
  {
    intro: markdownRemark(frontmatter: { purpose: { eq: "web intro" } }) {
      frontmatter {
        title
        ...cover
      }
      html
    }
    ...projects
    tech: allTechYaml {
      edges {
        node {
          title
          url
          logo {
            src: publicURL
          }
        }
      }
    }
  }
`
