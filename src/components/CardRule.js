import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  background: white;
  max-width: fit-content;
  padding: 10px;
  @media (max-width: 1025px) {
    height: 493px;
  }
  @media (max-width: 767px) {
    height: 216px;
  }
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 417px;
  height: 330px;

  @media (max-width: 1025px) {
    height: 316px;
  }
  @media (max-width: 767px) {
    height: 151px;
  }
`

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const OptimizeFont = styled.div`
@media (max-width: 767px) {
  max-width: 140px;
  overflow: hidden;
}
  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #9a0112;
    @media (max-width: 767px) {
      font-size: 9px;
      line-height: 11px;
      letter-spacing: -0.015em;

      color: #9a0112;
    }
  }
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    font-size: 9px;
    line-height: 11px;
    letter-spacing: -0.015em;
  }
`

export const CardRule = ({ data }) => {
  return (
    <TestStyled>
      <ImageStyled>
        <ImageOptimize
          fluid={data?.rules_image?.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </ImageStyled>
      <OptimizeFont>
        {RichText.render(data.rules_title.raw)}
        {RichText.asText(data.rules_detail.raw)}
      </OptimizeFont>
    </TestStyled>
  )
}
