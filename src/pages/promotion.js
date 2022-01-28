import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardPromotionSup } from '../components/CardPromotionSup'
import { CardPromotionMain } from '../components/CardPromotionMain'
import styled from 'styled-components'

const PositionPromotion = styled.div`
  display: flex;
  place-content: center;
`
const HeaderPage = styled.div`
  height: 96px;
  background: #c4c4c4;
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
`

const PromotionMain = ({ data }) => {
  const docPromotionMain = data.allPrismicPromotionMain.nodes
  const docPromotionSup = data.allPrismicPromotionSup.nodes

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
        <HeaderPage>โปรโมชั่นเสริม THONG LOTTO</HeaderPage>
        <PositionPromotion>
          {docPromotionSup.map((data) => (
            <>
              <CardPromotionSup data={data.data} />
            </>
          ))}
        </PositionPromotion>
        <HeaderPage>โปรโมชั่นหลัก THONG LOTTO</HeaderPage>

        <PositionPromotion>
          {docPromotionMain.map((data) => (
            <>
              <CardPromotionMain data={data.data} />
            </>
          ))}
        </PositionPromotion>
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
