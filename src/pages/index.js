import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { MainContent } from '../components/MainContent'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import styled, { keyframes } from 'styled-components'

const slideRight = keyframes`
from {
  margin-left: 100%;
  width: 300%;
}

to {
  margin-left: -100%;
  width: 100%;
}
`

const Text = styled.div`
  width: 100%;
  overflow: hidden;
  display: inline-block;
  animation: ${slideRight} 10s linear infinite;
  animation-delay: 2s;
  white-space: pre;

  p {
    font-family: Prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    -webkit-text-stroke: 0.2px black;

    text-align: center;
    letter-spacing: -0.015em;

    color: #e0b959;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0 !important;

    @media (max-width: 1025px) {
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
    }
  }
`

const TextBanner = styled.div`
  height: 45px;
  background: #9a0112;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  overflow: hidden;

  @media (max-width: 1025px) {
    margin: 0 60px;
  }
  @media (max-width: 767px) {
    height: 18px;
    margin: 0 3px;
  }
`

const Homepage = ({ data }) => {
  const doc = data.prismicHomepage.data
  const [load, setLoad] = useState(true)

 

  useEffect(() => {
    if (!data) return null
    setTimeout(() => {
      setLoad(false)
    }, 300)
  })

  return (
    <Layout isHomepage>
      <Seo title="Thong Ruay Thong lotto หวยออนไบน์อันดับ 1" />
      <main className="container">
        {!load && (
          <>
            <TextBanner>
              <Text>{RichText.render(doc?.text_banner?.raw)}</Text>
            </TextBanner>
            <HomepageBanner doc={doc} />
            <MainContent doc={doc} />
          </>
        )}
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
                fluid(maxWidth: 1232) {
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
