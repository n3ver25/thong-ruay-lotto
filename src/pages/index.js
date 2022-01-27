import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { MainContent } from '../components/MainContent'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

const Text = styled.div`
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    -webkit-text-stroke: 0.8px black;

    text-align: center;
    letter-spacing: -0.015em;

    color: #e0b959;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0 !important;
  }
`

const TextBanner = styled.div`
  height: 45px;
  background: #9a0112;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Homepage = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage>
      <Seo title="Home" />
      <main className="container">
        <TextBanner>
          <Text>{RichText.render(doc?.text_banner?.raw)}</Text>
        </TextBanner>
        <HomepageBanner doc={doc} />
        <MainContent doc={doc} />
      </main>
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
                fluid(maxWidth: 78, maxHeight: 78) {
                  src
                }
              }
            }
          }
          ... on PrismicHomepageDataBodyImageBanner {
            id
            items {
              banner_image {
                fluid  {
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
          fluid  {
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
