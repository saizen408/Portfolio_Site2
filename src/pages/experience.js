import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import LayoutContactMe from "../components/layout/layout-contact-me"
import Experience from "../components/experience"

export default ({ data, transitionStatus }) => {
  return (
    <LayoutContactMe bgClassName="experience">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Experience
        jobs={data.allMarkdownRemark.edges}
        transitionStatus={transitionStatus}
        title="Projects"
        description="Here you can find information about my most recent projects, these are some
      apps in which I have had a blast working on!  😎"
      />
    </LayoutContactMe>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          slug: { regex: "/experience/" }
          hideOnExperience: { eq: false }
        }
      }
      sort: { fields: [frontmatter___dateFrom], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            company
            logo {
              childImageSharp {
                fluid(maxWidth: 481) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            jobTitle
            dateFrom(formatString: "YYYY")
            dateTo(formatString: "YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
