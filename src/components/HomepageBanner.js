import * as React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styled from 'styled-components';


const ImageSize = styled.div`
width: 1232px; 
margin:  50px auto;
`

export const HomepageBanner = ({doc}) => {
  const slider = (
    <AwesomeSlider>
      <div data-src={doc?.body[0]?.items[0]?.banner_image?.fluid?.src} />
      <div data-src={doc?.body[0]?.items[0]?.banner_image?.fluid?.src} />
    </AwesomeSlider>
  )
  return (
    <ImageSize >
      {slider}
    </ImageSize >
  )
}
