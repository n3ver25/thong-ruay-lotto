import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardRule } from '../components/CardRule'
import styled from 'styled-components'

const PositionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-inline-size: fit-content;
  margin: auto;
  margin-bottom: 10px;
`

const HeaderPage = styled.div`
  height: 96px;
  background: #c4c4c4;
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
`

const Rules = ({ data }) => {
  if (!data) return null
  const doc = data.allPrismicRules.nodes

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
      <HeaderPage>กติกา THONG LOTTO</HeaderPage>
        <PositionCard>
          {doc.map((data) => (
            <>
              <CardRule data={data.data} />
            </>
          ))}
        </PositionCard>
      </main>
    </Layout>
  )
}

export default Rules

export const query = graphql`
  query MyQueryRule {
    allPrismicRules {
      nodes {
        data {
          rules_detail {
            raw
          }
          rules_image {
            fluid(maxWidth: 600) {
              src
            }
          }
          rules_title {
            raw
          }
        }
        id
        type
      }
    }
  }
`
