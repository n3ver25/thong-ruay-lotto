import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  background: white;
  max-width: fit-content;
  padding: 10px;
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 417px;
  height: 330px;
  background-color: red;
`

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const OptimizeFont = styled.div`
h1{
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;

  color: #9a0112;

}
p{
  font-size: 18px;
  line-height: 28px;
}
  `

export const CardRule = ({ data }) => {
  return (
    <TestStyled>
      <ImageStyled>
        <ImageOptimize
          fluid={data?.rules_image?.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </ImageStyled>
      <OptimizeFont>
        {RichText.render(data.rules_title.raw)}
        {RichText.render(data.rules_detail.raw)}
      </OptimizeFont>
    </TestStyled>
  )
}
