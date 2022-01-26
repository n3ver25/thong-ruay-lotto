import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { MainContent } from '../components/MainContent'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const Homepage = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage>
      <Seo title="Home" />
      {RichText.render(doc?.text_banner?.raw)}
      <HomepageBanner doc={doc} />
      <MainContent doc={doc} />
    </Layout>

  )

}

export const query = graphql`
query MyQueryHome {
  prismicHomepage {
    id
    data {
      body {
        ... on PrismicHomepageDataBodyImageBank {
          id
          items {
            image_banker {
              fluid {
                src
              }
            }
          }
        }
        ... on PrismicHomepageDataBodyImageBanner {
          id
          items {
            banner_image {
              fluid {
                src
              }
            }
          }
        }
      }
      detail_banner {
        raw
      }
      image_ssl {
        fluid {
          src
        }
      }
      text_banner {
        raw
      }
      text_title {
        raw
      }
    }
  }
}
`

export default Homepage
