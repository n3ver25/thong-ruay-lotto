import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { RichText } from 'prismic-reactjs'
import Modal from 'react-modal/lib/components/Modal'

const TestStyled = styled.div`
  width: 100%;
  background: white;
  max-width: 372px;
  @media (max-width: 1025px) {
    max-height: 372px;
  }
`

const ImageStyled = styled.div`
  width: 100%;
  max-width: 372px;
  height: 510px;
  @media(max-width: 1025px){
    height: 385px;
  }

  @media(max-width: 1025px){
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
        <>
        <ImageStyled>
          <ImageOptimize
            fluid={data?.promotion_title_sup?.fluid}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </ImageStyled>
          <TextTitle>{RichText.render(data.promotion_sup_title.raw)}</TextTitle>
          <div>{RichText.render(data.promotion_sup_detail.raw)}</div>
          <ButtonClose>
          <button onClick={closeModal}>close</button>
          </ButtonClose>
        </>
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
