import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: white;
  max-width: 553px;
  padding: 20px;
  @media (max-width: 1025px) {
    padding: 10px;
  }
`

const Behind = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  padding-top: 5%;
  overflow-y: scroll;
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
  a {
    overflow: hidden;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 0;
    @media (max-width: 767px) {
      font-size: 9px;
      line-height: 11px;
      letter-spacing: -0.015em;
    }
  }
  overflow: hidden;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    font-size: 9px;
    line-height: 11px;
    letter-spacing: -0.015em;
    max-height: 220px;
  }
  p {
    margin-bottom: 3px;
  }
`
const ImageStyled = styled.div`
  width: 100%;
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
  overflow: hidden;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    font-size: 9px;
    line-height: 11px;
    letter-spacing: -0.015em;
    height: 90px;
  }
  height: 150px;
`

const Card = styled.div`
  position: relative;

  &:hover {
    ${Behind} {
      display: block;
    }
    ${ImageStyled} {
      opacity: 0;
    }
    ${OptimizeFont} {
      opacity: 0;
    }
  }
`
const DetailFont = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const CardRule = ({ data }) => {
  return (
    <TestStyled>
      <Card>
        <ImageStyled>
          <ImageOptimize
            fluid={data?.rules_image?.fluid}
            objectFit="contain"
            objectPosition="50% 50%"
            alt="
            ฝาก ถอน เร็ว
            จัดการทุกทรานแซคชันฝาก ถอน ด้วยระบบอัตโนมัติ ทุกขั้นตอน ทุนหนา จ่ายจริง 100%
            "
          />
        </ImageStyled>
        <OptimizeFont>
          {RichText.render(data.rules_title.raw)}
          <DetailFont>{RichText.render(data.rules_detail.raw)}</DetailFont>
        </OptimizeFont>
        <Behind>
          <div>
            {RichText.render(data.rules_title.raw)}
            {RichText.render(data.rules_detail.raw)}
          </div>
        </Behind>
      </Card>
    </TestStyled>
  )
}
