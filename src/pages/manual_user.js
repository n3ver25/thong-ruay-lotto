import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardUserManual } from '../components/CardUserManual'
import styled from 'styled-components'

const HeaderPage = styled.div`
  height: 96px;
  background: #ffc300;
  margin: 20px 0;
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.015em;

  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1025px) {
    height: 56px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.015em;

    color: #000000;
  }
`

const ManualUser = ({ data }) => {
  const doc = data.allPrismicManualUser.nodes

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
      <HeaderPage>คู่มือการใช้งาน THONG LOTTO</HeaderPage>
        <div>
          {doc.map((data) => (
            <>
              <CardUserManual data={data.data} />
            </>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default ManualUser

export const query = graphql`
  query MyQueryManual {
    allPrismicManualUser {
      nodes {
        type
        id
        data {
          manual_user_detail {
            raw
          }
          manual_user_image {
            fluid(maxWidth: 1200) {
              src
            }
          }
          manual_user_title {
            raw
          }
        }
      }
    }
  }
`
