import * as React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

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
      <div data-src={doc?.body[0]?.items[0]?.banner_image?.fluid?.src} />
      <div data-src={doc?.body[0]?.items[1]?.banner_image?.fluid?.src} />
    </AwesomeSlider>
  )
  return <ImageSize>{slider}</ImageSize>
}
