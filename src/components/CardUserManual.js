import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  display: flex;
  margin: 10px auto;
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 300px;
  background-color: red;
`

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const OptimizeFont = styled.div`
  background: white;
  padding: 32px;
  width: 30%;
  h1 {
    margin-bottom: 0;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #9a0112;
  }
  p {
    margin-bottom: 0;
    font-size: 18px;
  }
`

const PositionButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 26px;
`

const OptimizeButton = styled.button`
  width: 209px;
  height: 37px;

  background: #bf0015;
  color: white;
  border: solid;
`

export const CardUserManual = ({ data }) => {
  return (
    <TestStyled>
      <ImageStyled>
        <ImageOptimize
          fluid={data?.manual_user_image?.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </ImageStyled>
      <OptimizeFont>
        {RichText.render(data.manual_user_title.raw)}
        {RichText.render(data.manual_user_detail.raw)}
        <PositionButton>
          <OptimizeButton>ข้อมูลเพิ่มเติม</OptimizeButton>
        </PositionButton>
      </OptimizeFont>
    </TestStyled>
  )
}
