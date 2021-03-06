import * as React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import styled from 'styled-components'

const ImageSize = styled.div`
  max-width: 1232px;
  margin: 50px auto;
  .awssld__content > img, .awssld__content > video {
    object-fit: contain !important;
  }
  @media (max-width: 767px) {
    margin: 8px auto;
  }
`

export const HomepageBanner = ({ doc }) => {
  const slider = (
    <AwesomeSlider>
      <div data-src={doc?.body[0]?.items[0]?.banner_image?.fluid?.src} alt="รางวัลกับ `ทองรวย`"/>
      <div data-src={doc?.body[0]?.items[1]?.banner_image?.fluid?.src} alt="Thong ruay แทงหวยออนไลน์ ✓ หวยรัฐบาล ครบทุกหวย หวยรัฐบาล หวยหุ้น หวยลาว หวยฮานอย และหวยยี่กี ยอดนิยม ฝาก-ถอนเร็ว สะสมแต้ม รับฟรีเครดิต VIP."/>
    </AwesomeSlider>
  )
  return <ImageSize>{slider}</ImageSize>
}
