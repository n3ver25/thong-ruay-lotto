import * as React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

const Position = styled.div`
  margin-top: 55px;
  text-align-last: center;
`

const TitleText = styled.div`
  h1 {
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #e0b959 !important;
  }
`
const DetailText = styled.div`
  font-size: 30px;
`

const SupTitle = styled.div`
  text-align-last: center;
`
const ImageSSL = styled.div`
  width: 264px;
  height: 118px;
  margin: auto;
`

const PositionBanker = styled.div``

const BankerTitle = styled.div`
  text-align-last: center;
`

const ImageBanker = styled.div`
  text-align-last: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  padding: 18px;
  max-width: fit-content;
  grid-gap: 10px;
  margin: auto;
`
const ImageOptimize = styled(Img)`
  width: 100%;
  height: 100%;
`

const SizeImage = styled.div`
  width: 78px;
  height: 78px;
`

export const MainContent = ({ doc }) => {
  const image_bank = doc?.body[1].items
  return (
    <main className="container">
      <Position>
        <TitleText>{RichText.render(doc?.text_title?.raw)}</TitleText>
        <DetailText>{RichText.render(doc?.detail_banner?.raw)}</DetailText>
      </Position>
      <SupTitle>
        เว็บหวยออนไลน์ ทองลอตโต้ (thong lotto) มีการเข้ารหัสข้อมูล 256 บิต
        ข้อมูลของท่านมีความปลอดภัย 100%
      </SupTitle>
      <ImageSSL>
        <img src={doc?.image_ssl?.fluid?.src} />
      </ImageSSL>
      <PositionBanker>
        <BankerTitle>
          ฝาก ถอน รวดเร็ว ผ่านระบบอัตโนมัติ ปรับเครดิตภายใน 5 นาที
          รองรับรายการได้จาก 6 ธนาคาร
        </BankerTitle>
        <ImageBanker>
          {image_bank.map((a) => (
            <SizeImage>
              <ImageOptimize fluid={a.image_banker?.fluid} />
            </SizeImage>
          ))}
        </ImageBanker>
      </PositionBanker>
    </main>
  )
}
