import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  display: flex;
  margin: 10px auto;
  @media (max-width: 1025px) {
    margin: 10px 60px;
  }
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 1000px;
  max-height: 300px;
`

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const OptimizeFont = styled.div`
  background: white;
  padding: 32px;
  width: 30%;
  overflow-wrap: break-word;
  h1 {
    margin-bottom: 0;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #9a0112;

    @media (max-width: 1025px) {
      font-size: 18px;
    }
  }
  p {
    margin-bottom: 0;
    font-size: 18px;

    @media (max-width: 1025px) {
      font-size: 12px;
    }
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

const DetailBox = styled.div`
  max-height: 93px;
  overflow: hidden;
`

export const CardUserManual = ({ data }) => {
  return (
    <TestStyled>
      <ImageStyled>
        <ImageOptimize
          fluid={data?.manual_user_image?.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </ImageStyled>
      <OptimizeFont>
        {RichText.render(data.manual_user_title.raw)}
        <DetailBox>{RichText.asText(data.manual_user_detail.raw)}</DetailBox>
        <PositionButton>
          <OptimizeButton>ข้อมูลเพิ่มเติม</OptimizeButton>
        </PositionButton>
      </OptimizeFont>
    </TestStyled>
  )
}
