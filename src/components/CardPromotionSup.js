import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'
import Modal from 'react-modal/lib/components/Modal'

const TestStyled = styled.div`
  width: 100%;
  background: white;
  cursor: pointer;
  max-width: 372px;
  @media (max-width: 1025px) {
    max-height: 372px;
  }
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 372px;
  height: 510px;
  @media (max-width: 1025px) {
    height: 385px;
  }

  @media (max-width: 1025px) {
    height: 220px;
  }
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

const TextTitle = styled.div`
  h1 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #9a0112;
  }
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
  @media(max-width: 767px){
    grid-template-columns: 1fr;
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

export const CardPromotionSup = ({ data }) => {
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
              fluid={data?.promotion_title_sup?.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </ImageStyled>
          <TextPosition>
            <TextTitle>
              {RichText.render(data.promotion_sup_title.raw)}
            </TextTitle>
            <TextDetail>
              {RichText.render(data.promotion_sup_detail.raw)}
            </TextDetail>
            <ButtonClose>
              <button onClick={closeModal}>close</button>
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
            fluid={data?.promotion_title_sup?.fluid}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </ImageStyled>
        <TextPromotionSup>
          <TextTitle>{RichText.render(data.promotion_sup_title.raw)}</TextTitle>
          {RichText.render(data.promotion_sup_detail.raw)}
        </TextPromotionSup>
      </TestStyled>
    </>
  )
}
