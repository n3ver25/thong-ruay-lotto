import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  background: white;
  margin: 3px;
  max-width: 372px;
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 372px;
  height: 510px;
`

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const TextPromotionSup = styled.div`
  margin: 20px;
  p {
    margin-bottom: 0;
  }
`

const TextTitle = styled.div`
  h1 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #9a0112;
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
        <TextTitle>{RichText.render(data.promotion_sup_title.raw)}</TextTitle>
        {RichText.render(data.promotion_sup_detail.raw)}
      </TextPromotionSup>
    </TestStyled>
  )
}
