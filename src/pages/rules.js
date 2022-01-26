import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardRule } from '../components/CardRule'

const Rules = ({ data }) => {
  if (!data) return null
  const doc = data.allPrismicRules.nodes

  console.log('doc', doc)

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
        <div
          css={`
            display: grid;
          `}
        >
          {doc.map((data) => (
            <>
              <CardRule data={data} />
            </>
          ))}
        </div>
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
