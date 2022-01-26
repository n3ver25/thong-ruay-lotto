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
`

const ImagePosition = styled.div`
  width: 100%;
`

const CardIcon = styled.div`
  width: 100%;
`

const About = ({ data }) => {
  const doc = data.prismicAbout.data
  const icon = doc?.body[0].items
  console.log(doc)
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn more about us who we are and what we do."
      />

      <main className="container">
        <div>
          <div>{RichText.render(doc.about_title.raw)}</div>
          <div>{RichText.render(doc.about_detail.raw)}</div>
        </div>

        <div>
          <div>
            <div> {RichText.render(doc.service_title.raw)} </div>
            <div> {RichText.render(doc.service_detail.raw)}</div>
          </div>
          <IconPosition>
            {icon.map((data) => (
              <div>
                <CardIcon>
                  <ImageOptimize fluid={data?.service_image?.fluid} />
                </CardIcon>
                {RichText.render(data.service_title1.raw)}
                {RichText.render(data.service_detail1.raw)}
              </div>
            ))}
          </IconPosition>
        </div>

        <ImagePosition>
          <ImageOptimize fluid={doc?.about_image?.fluid} />
        </ImagePosition>
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
