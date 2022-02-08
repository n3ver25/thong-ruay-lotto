import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { CardUserManual } from '../components/CardUserManual'

const ManualUser = ({ data }) => {
  const doc = data.allPrismicManualUser.nodes

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
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
