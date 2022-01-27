import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  background: white;
  margin: 20px;
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 372px;
  height: 510px;
  margin: auto;
  margin-bottom: 20px;
`

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const TextPromotionSup = styled.div`
margin:20px;
p{
  margin-bottom: 0;
}
`

export const CardPromotionSup = ({ data }) => {
  return (
    <TestStyled>
      <ImageStyled>
        <ImageOptimize
          fluid={data?.promotion_title_sup?.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </ImageStyled>
      <TextPromotionSup>
        {RichText.render(data.promotion_sup_title.raw)}
        {RichText.render(data.promotion_sup_detail.raw)}
      </TextPromotionSup>
    </TestStyled>
  )
}
