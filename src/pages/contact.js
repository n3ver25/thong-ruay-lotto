import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const Contact = ({ data }) => {
  if (!data) return null
  const doc = data.prismicContact.data

  console.log('doc', doc)

  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />
      <main className="container">
        <div>{RichText.render(doc.contact_title.raw)}</div>
        <div>{RichText.render(doc.contact_detail.raw)}</div>
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
