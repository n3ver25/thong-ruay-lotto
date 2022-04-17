import * as React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

const Position = styled.div`
  border: solid 2px;
  padding: 15px;
  margin: 15px;
  border-radius: 15px;
  border-color: #e0b959 !important;
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

    @media (max-width: 1025px) {
      font-size: 24px;
      line-height: 21px;
    }
  }
`
const DetailText = styled.div`
  p {
    color: #ffffff;

    font-weight: normal;
    font-size: 30px;
    margin-bottom: 5px;
    text-align: center;
    letter-spacing: -0.015em;
    @media (max-width: 1441px) {
      font-size: 25px;
    }
    @media (max-width: 1025px) {
      font-size: 15px;
      line-height: 21px;
      width: fit-content;
      margin: auto;
    }
    @media (max-width: 767px) {
      font-style: normal;
      font-weight: normal;
      font-size: 8px;
      line-height: 12px;
      text-align: center;
      letter-spacing: -0.015em;
    }
  }
`

const SupTitle = styled.div`
  text-align-last: center;
  font-weight: normal;

  @media (max-width: 767px) {
    font-size: 8px;
    line-height: 9px;
    text-align: center;
  }

  letter-spacing: -0.015em;

  color: #ffffff;
`
const ImageSSL = styled.div`
  width: 264px;
  height: 118px;
  margin: auto;
  @media (max-width: 767px) {
    width: 89px;
    height: 39px;
  }
`

const PositionBanker = styled.div``

const BankerTitle = styled.div`
  text-align-last: center;
  @media (max-width: 767px) {
    font-size: 7px;
    line-height: 9px;
    text-align: center;
  }

  letter-spacing: -0.015em;

  color: #ffffff;
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
  width: 76px;
  height: 76px;
  @media (max-width: 554px) {
    width: 26px !important;
    height: 26px !important;
  }
`
const BorderLotto = styled.div`
  margin: 15px;
  max-height: 300px;
  border: solid 2px;
  border-color: #e0b959;
  border-radius: 20px;
  .menu-container {
    display: none;
  }
  a {
    display: none;
  }
`
const TitleLotto = styled.div`
  margin: 15px;
`

const Lotto = styled.div`
  margin: 15px;
`

const FlexLotto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const TableLotto = styled.div`
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
`

const TextTitleLotto = styled.div`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.015em;
  font-style: normal;
  font-weight: normal;
  margin: 5px 0;

  color: #e0b959;
`

const TextDetailLotto = styled.div`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-style: normal;
  font-weight: normal;

  color: white;
`

export const MainContent = ({ doc }) => {
  const image_bank = doc?.body[1].items
  return (
    <main className="container">
      <Position>
        <TitleText>{RichText.render(doc?.text_title?.raw)}</TitleText>
        <DetailText>{RichText.render(doc?.detail_banner?.raw)}</DetailText>
      </Position>
      <BorderLotto>
        <Lotto>
          <TextTitleLotto>หวยรัฐบาล 1 เมษายน 2565</TextTitleLotto>
          <TableLotto>
            <div>
              <TextTitleLotto>รางวัลที่ 1</TextTitleLotto>
              <TextDetailLotto>395919</TextDetailLotto>
            </div>
            <FlexLotto>
              <div>
                <TextTitleLotto>สามตัวหน้า</TextTitleLotto>
                <TextDetailLotto>289 859</TextDetailLotto>
              </div>
              <div>
                <TextTitleLotto>สามตัวหลัง</TextTitleLotto>
                <TextDetailLotto>508 413</TextDetailLotto>
              </div>
              <div>
                <TextTitleLotto>สองตัวล่าง</TextTitleLotto>
                <TextDetailLotto>58</TextDetailLotto>
              </div>
            </FlexLotto>
          </TableLotto>
        </Lotto>
      </BorderLotto>
      <SupTitle>
        เว็บหวยออนไลน์ ทองลอตโต้ (thong lotto) มีการเข้ารหัสข้อมูล 256 บิต
        ข้อมูลของท่านมีความปลอดภัย 100%
      </SupTitle>
      <ImageSSL>
        <img src={doc?.image_ssl?.fluid.src} />
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
