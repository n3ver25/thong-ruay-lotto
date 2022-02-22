import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'
import Modal from 'react-modal/lib/components/Modal'

const TestStyled = styled.div`
  width: 100%;
  background: white;
  margin: auto;
  cursor: pointer;
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

const ButtonClose = styled.div`
  text-align: end;
`
const ButtonCss = styled.button`
  width: 88px;
  height: 37px;
  background: #bf0015;
  border: none;
  color: white;
`
const TextTitleModel = styled.div`
h1 {
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;

  color: #9a0112;
}
`

const TextTitle = styled.div`
  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #9a0112;
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
const TextDetail = styled.div`
  p {
    margin-bottom: 0;
  }
`
const CustomizeCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    height: 400px;
    overflow-y: scroll;
  }
`
const TextPosition = styled.div`
  align-self: center;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export const CardPromotionMain = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CustomizeCard>
          <ImageStyled>
            <ImageOptimize
              fluid={data?.promotion_image?.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </ImageStyled>
          <TextPosition>
            <TextTitleModel>{RichText.render(data.promiotion_title.raw)}</TextTitleModel>
            <TextDetail>
              {RichText.render(data.promotion_main_detail.raw)}
            </TextDetail>
            <ButtonClose>
              <ButtonCss onClick={closeModal}>ปิด</ButtonCss>
            </ButtonClose>
          </TextPosition>
        </CustomizeCard>
      </Modal>
      <TestStyled
        onClick={() => {
          openModal()
        }}
      >
        <ImageStyled>
          <ImageOptimize
            fluid={data?.promotion_image?.fluid}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </ImageStyled>
        <TextPromotionSup>
          <TextTitle>{RichText.render(data.promiotion_title.raw)}</TextTitle>
          <DetailFont>
            {' '}
            {RichText.render(data.promotion_main_detail.raw)}
          </DetailFont>
        </TextPromotionSup>
      </TestStyled>
    </>
  )
}
