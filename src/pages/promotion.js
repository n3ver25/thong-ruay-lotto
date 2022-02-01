import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardPromotionSup } from '../components/CardPromotionSup'
import { CardPromotionMain } from '../components/CardPromotionMain'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

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

const OptimizeAliceCarousel = styled(AliceCarousel)`
  .alice-carousel__wrapper {
    text-align-last: center;
  }
  .alice-carousel__stage-item {
    margin: 15px !important;
  }
  .alice-carousel__stage-item __active __target {
    width: fit-content !important;
  }
`

const CssThumb = styled.div`
  display: flex;
  .thumbs {
    width: fit-content;
  }
`

const PromotionMain = ({ data }) => {
  const docPromotionMain = data.allPrismicPromotionMain.nodes
  const docPromotionSup = data.allPrismicPromotionSup.nodes

  const [promotionSup, setPromotionSup] = useState([])
  const [mainIndex, setMainIndex] = useState(0)
  const [mainAnimation, setMainAnimation] = useState(false)
  const [thumbIndex, setThumbIndex] = useState(0)
  const [thumbAnimation, setThumbAnimation] = useState(false)

  const [prepare, setPrepare] = useState([])

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < prepare.length - 1) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex - 1)
    }
  }

  const syncThumbs = (e) => {
    setThumbIndex(e.item)
    setThumbAnimation(false)

    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }

  useEffect(() => {
    const test = docPromotionSup.map((data) => (
      <>
        <CardPromotionSup data={data.data} />
      </>
    ))
    setPromotionSup(test)
    const thumbFunc = thumbItems(test, [setThumbIndex, setThumbAnimation])
    setPrepare(thumbFunc)
  }, [])

  const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return docPromotionSup.map((data, i) => (
      <div
        className="thumb"
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
      >
        <CardPromotionSup data={data.data} />
      </div>
    ))
  }

  const responsive = {
    0: { items: 1 },
    568: { items: 5 },
    1024: { items: 5 },
  }

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
        <HeaderPage>โปรโมชั่นเสริม THONG LOTTO</HeaderPage>
        {/* <PositionPromotion>
          {docPromotionSup.map((data) => (
            <>
              <CardPromotionSup data={data.data} />
            </>
          ))}
        </PositionPromotion> */}
        {/* <OptimizeAliceCarousel
          mouseTracking
          autoWidth={true}
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          paddingLeft={160}
          swipeDelta={40}
        /> */}
        <CssThumb className="thumbs">
          <div className="btn-prev" onClick={slidePrev}>
            &lang;
          </div>

          <OptimizeAliceCarousel
            activeIndex={thumbIndex}
            autoWidth
            disableDotsControls
            disableButtonsControls
            items={prepare}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnimation}
            responsive={responsive}
          />

          <div className="btn-next" onClick={slideNext}>
            &rang;
          </div>
        </CssThumb>
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
