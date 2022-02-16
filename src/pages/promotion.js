import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardPromotionSup } from '../components/CardPromotionSup'
import { CardPromotionMain } from '../components/CardPromotionMain'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

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
  .alice-carousel__stage-item {
    width: 100% !important;
  }
`

const CssThumb = styled.div`
  display: flex;
  width: 80vw;
`

const PrevButton = styled.div`
  align-self: center;
  font-size: 165px;
  cursor: pointer;
  margin-right: 15px;
  @media (max-width: 1025px) {
    font-size: 55px;
  }
  @media (max-width: 767px) {
    font-size: 35px;
  }
`

const NextButton = styled.div`
  align-self: center;
  font-size: 165px;
  cursor: pointer;
  @media (max-width: 1025px) {
    font-size: 55px;
  }
  @media (max-width: 767px) {
    font-size: 35px;
  }
`

const PromotionMain = ({ data }) => {
  const docPromotionMain = data.allPrismicPromotionMain.nodes
  const docPromotionSup = data.allPrismicPromotionSup.nodes

  const [promotionSup, setPromotionSup] = useState([])
  const [, setMainIndexSup] = useState(0)
  const [mainAnimationSup] = useState(false)
  const [thumbIndexSup, setThumbIndexSup] = useState(0)
  const [thumbAnimationSup, setThumbAnimationSup] = useState(false)

  const [promotionMain, setPromotionMain] = useState([])
  const [, setMainIndexMain] = useState(0)
  const [mainAnimationMain] = useState(false)
  const [thumbIndexMain, setThumbIndexMain] = useState(0)
  const [thumbAnimationMain, setThumbAnimationMain] = useState(false)

  const slideNextSup = () => {
    if (!thumbAnimationSup && thumbIndexSup < promotionSup.length - 1) {
      setThumbAnimationSup(true)
      setThumbIndexSup(thumbIndexSup + 1)
    }
  }

  const slidePrevSup = () => {
    if (!thumbAnimationSup && thumbIndexSup > 0) {
      setThumbAnimationSup(true)
      setThumbIndexSup(thumbIndexSup - 1)
    }
  }

  const syncThumbsSup = (e) => {
    setThumbIndexSup(e.item)
    setThumbAnimationSup(false)

    if (!mainAnimationSup) {
      setMainIndexSup(e.item)
    }
  }

  const slideNextMain = () => {
    if (!thumbAnimationMain && thumbIndexMain < promotionMain.length - 1) {
      setThumbAnimationMain(true)
      setThumbIndexMain(thumbIndexMain + 1)
    }
  }

  const slidePrevMain = () => {
    if (!thumbAnimationMain && thumbIndexMain > 0) {
      setThumbAnimationMain(true)
      setThumbIndexMain(thumbIndexMain - 1)
    }
  }

  const syncThumbsMain = (e) => {
    setThumbIndexMain(e.item)
    setThumbAnimationMain(false)

    if (!mainAnimationMain) {
      setMainIndexMain(e.item)
    }
  }

  useEffect(() => {
    const sup = docPromotionSup.map((data) => (
      <>
        <CardPromotionSup data={data.data} />
      </>
    ))
    const thumbFuncSup = thumbItemsSup(sup, [
      setThumbIndexSup,
      setThumbAnimationSup,
    ])
    setPromotionSup(thumbFuncSup)
    const main = docPromotionMain.map((data) => (
      <>
        <CardPromotionMain data={data.data} />
      </>
    ))
    const thumbFuncMain = thumbItemsMain(main, [
      setThumbIndexSup,
      setThumbAnimationSup,
    ])
    setPromotionMain(thumbFuncMain)
  }, [])

  const thumbItemsSup = (items, [setThumbIndexSup, setThumbAnimationSup]) => {
    return docPromotionSup.map((data, i) => (
      <div
        className="thumb"
        onClick={() => (setThumbIndexSup(i), setThumbAnimationSup(true))}
      >
        <CardPromotionSup data={data.data} />
      </div>
    ))
  }
  const thumbItemsMain = (items, [setThumbIndexSup, setThumbAnimationSup]) => {
    return docPromotionMain.map((data, i) => (
      <div
        className="thumb"
        onClick={() => (setThumbIndexSup(i), setThumbAnimationSup(true))}
      >
        <CardPromotionMain data={data.data} />
      </div>
    ))
  }

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
        <HeaderPage>โปรโมชั่นเสริม THONG LOTTO</HeaderPage>

        <CssThumb className="thumbs">
          <PrevButton className="btn-prev" onClick={slidePrevSup}>
            &lang;
          </PrevButton>

          <OptimizeAliceCarousel
            activeIndex={thumbIndexSup}
            autoHeight
            disableDotsControls
            disableButtonsControls
            items={promotionSup}
            mouseTracking={false}
            onSlideChanged={syncThumbsSup}
            touchTracking={!mainAnimationSup}
            responsive={responsive}
          />

          <NextButton className="btn-next" onClick={slideNextSup}>
            &rang;
          </NextButton>
        </CssThumb>
        <HeaderPage>โปรโมชั่นหลัก THONG LOTTO</HeaderPage>
        <CssThumb className="thumbs">
          <PrevButton className="btn-prev" onClick={slidePrevMain}>
            &lang;
          </PrevButton>

          <OptimizeAliceCarousel
            activeIndex={thumbIndexMain}
            autoHeight
            disableDotsControls
            disableButtonsControls
            items={promotionMain}
            mouseTracking={false}
            onSlideChanged={syncThumbsMain}
            touchTracking={!mainAnimationMain}
            responsive={responsive}
          />

          <NextButton className="btn-next" onClick={slideNextMain}>
            &rang;
          </NextButton>
        </CssThumb>
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
