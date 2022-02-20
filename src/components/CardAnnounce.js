import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  display: ${(props) => (props.showMore ? `` : `flex`)};
  background-color: white;
  margin: 0px 23px 20px 23px;
  align-items: center;
  gap: 12px;
  padding: 20px;
  ${(props) =>
    props.showMore
      ? ``
      : `
  @media (max-width: 767px) {
    max-height: 155px;
    overflow: hidden;
    padding: 6px;
  
  
}`};
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 417px;
  height: 300px;
`

const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const PositionFont = styled.div`
  margin: 20px 0;
  width: fit-content;
  ${(props) =>
    props.showMore
      ? `width: 100%;`
      : `@media (max-width: 1025px) {
    width: 50%;
  }`}

  h1 {
    color: #9a0112;
    line-height: 51px;
    @media (max-width: 767px) {
      font-size: 12px;
      margin-bottom: 5px;
      line-height: 15px;
    }
  }
  p {
    margin-bottom: 0px;
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
`
const DetailText = styled.div`
  word-wrap: break-word;

  ${(props) =>
    props.showMore
      ? `
     `
      : `
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
@media (max-width: 767px) {
  max-height: 50px;
  overflow: hidden;
  max-width: 186px;
}`}
`

const ShowMoreButton = styled.p`
  color: #9a0112;
  cursor: pointer;
  margin-bottom: 0px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`

export const CardAnnounce = ({ data }) => {
  const [showMore, setShowMore] = useState(false)

  const showMoreFunc = () => setShowMore(!showMore)
  return (
    <TestStyled showMore={showMore}>
      <ImageStyled>
        <ImageOptimize
          fluid={data?.data?.image_announce?.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </ImageStyled>
      <PositionFont showMore={showMore}>
        {RichText.render(data.data.text_title.raw)}
        <DetailText showMore={showMore}>
          {RichText.render(data.data.text_detail.raw)}
        </DetailText>
        {showMore ? (
          <ShowMoreButton onClick={() => showMoreFunc()}>
            {' '}
            แสดงน้อยลง...{' '}
          </ShowMoreButton>
        ) : (
          <ShowMoreButton onClick={() => showMoreFunc()}>
            {' '}
            อ่านเพิ่มเติม...{' '}
          </ShowMoreButton>
        )}
      </PositionFont>
    </TestStyled>
  )
}
