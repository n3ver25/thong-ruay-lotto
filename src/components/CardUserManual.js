import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  display: flex;
  margin: 10px auto;
  width: fit-content;
  @media (max-width: 1025px) {
    margin: 10px 60px;
  }
  @media (max-width: 767px) {
    margin: 13px;
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
  @media (max-width: 1025px) {
    padding: 20px;
  }
  @media (max-width: 767px) {
    padding: 12px;
  }
  h1 {
    margin-bottom: 0;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #9a0112;

    @media (max-width: 1025px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 10px;
      line-height: 10px;
    }
  }
  p {
    margin-bottom: 0;
    font-size: 18px;

    @media (max-width: 1025px) {
      font-size: 12px;
    }
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
`

const PositionButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 26px;
  @media (max-width: 767px) {
    margin-top: 7px;
  }
`

const OptimizeButton = styled.button`
  width: 209px;
  height: 37px;

  background: #bf0015;
  color: white;
  border: solid;
  @media (max-width: 767px) {
    width: 64px;
    height: 10px;
    border: none;
    font-size: 7px;
  }
`

const DetailBox = styled.div`
  max-height: 93px;
  overflow: hidden;
  @media (max-width: 1025px) {
    max-height: 27px;
  }
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
        <DetailBox>
          <p>{RichText.asText(data.manual_user_detail.raw)}</p>
        </DetailBox>
        <PositionButton>
          <OptimizeButton>ข้อมูลเพิ่มเติม</OptimizeButton>
        </PositionButton>
      </OptimizeFont>
    </TestStyled>
  )
}
