import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const IconPosition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const ImagePosition = styled.div`
  width: 100%;
  height: 423px;
`

const CardIcon = styled.div`
  width: 208px;
  height: 208px;
  margin: 20px auto;
  @media (max-width: 1025px) {
    width: 120px;
    height: 120px;
  }
`

const TitlePage = styled.div`
  background: #bf0015;
  text-align: center;
  padding: 53px;
  @media (max-width: 1025px) {
    padding: 15px;
  }
  h1 {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #ffffff;
    @media (max-width: 1025px) {
      font-size: 20px;
    }
  }
  p {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #ffffff;
    margin-bottom: 0;
    @media (max-width: 1025px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
`
const Service = styled.div`
  background: #ffffff;
  padding: 40px;
`

const ServiceFont = styled.div`
  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #000000;
    @media (max-width: 1025px) {
      font-size: 18px;
    }
  }
  p {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #000000;
    @media (max-width: 1025px) {
      font-size: 18px;
    }
  }
`

const IconTask = styled.div`
  h1 {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.015em;
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: 1025px) {
      font-size: 14px;
    }
  }
  p {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.015em;
    margin-bottom: 0;

    @media (max-width: 1025px) {
      font-size: 14px;
    }
  }
`

const About = ({ data }) => {
  const doc = data.prismicAbout.data
  const icon = doc?.body[0].items
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn more about us who we are and what we do."
      />

      <main className="container">
        <TitlePage>
          <div>{RichText.render(doc.about_title.raw)}</div>
          <div>{RichText.render(doc.about_detail.raw)}</div>
        </TitlePage>

        <Service>
          <ServiceFont>
            <div> {RichText.render(doc.service_title.raw)} </div>
            <div> {RichText.render(doc.service_detail.raw)}</div>
          </ServiceFont>
          <IconPosition>
            {icon.map((data) => (
              <>
                <IconTask>
                  <CardIcon>
                    <ImageOptimize fluid={data?.service_image?.fluid} />
                  </CardIcon>
                  {RichText.render(data.service_title1.raw)}
                  {RichText.render(data.service_detail1.raw)}
                </IconTask>
              </>
            ))}
          </IconPosition>
        </Service>
      </main>
    </Layout>
  )
}

export default About

export const query = graphql`
  query MyQuery {
    prismicAbout {
      data {
        about_detail {
          raw
        }
        about_footer {
          raw
        }
        about_image {
          fluid(maxWidth: 1200) {
            src
          }
        }
        about_title {
          raw
        }
        service_detail {
          raw
        }
        service_title {
          raw
        }
        body {
          ... on PrismicAboutDataBodyService {
            id
            items {
              service_detail1 {
                raw
              }
              service_image {
                fluid(maxWidth: 208) {
                  src
                }
              }
              service_title1 {
                raw
              }
            }
          }
        }
      }
      type
      id
    }
  }
`
