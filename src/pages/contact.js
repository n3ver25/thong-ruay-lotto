import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import IconLine from '../images/line.png'

const LayoutPage = styled.div`
  text-align: center;
  background: #bf0015;
  padding: 62px;
  h1 {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #ffffff;
  }

  p {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.015em;

    color: #ffffff;
  }
`

const ButtonConnect = styled.div`
  max-width: fit-content;
  padding: 0 38px;
  height: 118px;
  background: #bf0015;
  border-radius: 50px;
  margin: 73px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;

  color: #ffffff;
`
const ClickPosition = styled.div`
  width: 99px;
  height: 95px;
  border-radius: 50px;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;
  background: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`

const OptimizeIcon = styled.img`
  width: 62px;
  height: 62px;
`

const LinePosition = styled.a`
  display: flex;
  text-align: start;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;
  align-items: center;

  color: #ffffff;
  justify-content: center;
`

const Contact = ({ data }) => {
  if (!data) return null
  const doc = data.prismicContact.data

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />
      <main className="container">
        <LayoutPage>
          <div>{RichText.render(doc.contact_title.raw)}</div>
          <div>{RichText.render(doc.contact_detail.raw)}</div>
          <LinePosition href={'http://lin.ee/pjj3X3H'}>
            <OptimizeIcon src={IconLine} />
            LINE: @thongruay
          </LinePosition>
        </LayoutPage>
        <a href={'http://lin.ee/pjj3X3H'}>
          <ButtonConnect>
            ติดต่อสอบถาม
            <ClickPosition>คลิก</ClickPosition>
          </ButtonConnect>
        </a>
      </main>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query MyQueryContact {
    prismicContact {
      type
      id
      data {
        contact_detail {
          raw
        }
        contact_title {
          raw
        }
        link_contact {
          raw
        }
      }
    }
  }
`
