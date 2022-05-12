import React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardPromotionSup } from '../components/CardPromotionSup'
import { CardPromotionMain } from '../components/CardPromotionMain'
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const HeaderPage = styled.div`
  height: 96px;
  background: #ffc300;
  margin: 20px 0;
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;

  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1025px) {
    height: 56px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #000000;
  }
`

const PromotionMain = ({ data }) => {
  const docPromotionMain = data.allPrismicPromotionMain.nodes
  const docPromotionSup = data.allPrismicPromotionSup.nodes

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
        <HeaderPage>โปรโมชั่นหลัก THONG LOTTO</HeaderPage>
        <Carousel responsive={responsive}>
          {docPromotionSup.map((data, i) => (
            <div className="thumb">
              <CardPromotionSup data={data.data} />
            </div>
          ))}
        </Carousel>
        <Carousel responsive={responsive}>
          {docPromotionMain.map((data, i) => (
            <div>
              <CardPromotionMain data={data.data} />
            </div>
          ))}
        </Carousel>
      </main>
    </Layout>
  )
}

export default PromotionMain

export const query = graphql`
  query MyQueryPromotion {
    allPrismicPromotionMain {
      nodes {
        type
        id
        data {
          promiotion_title {
            raw
          }
          promotion_image {
            fluid(maxWidth: 600) {
              src
            }
          }
          promotion_main_detail {
            raw
          }
        }
      }
    }
    allPrismicPromotionSup {
      nodes {
        id
        data {
          promotion_sup_detail {
            raw
          }
          promotion_sup_title {
            raw
          }
          promotion_title_sup {
            fluid(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`
