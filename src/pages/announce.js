import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import { CardAnnounce } from '../components/CardAnnounce';
import { CardRecomen } from '../components/CardRecomen';

const Display = styled.div`
display:flex;
justify-content: space-between;
`
const AllAnnounce = styled.div`
width: 30%;
`

const AllAnnounceContent = styled.div`
width: 100%;
`

const Announce = ({ data }) => {
  if (!data) return null
  const doc = data.allPrismicAnnouncepage.nodes
  return (
    <Layout>
      <Seo
        title="More Info"
        description="Want to learn more? Get the answer to all your questions here."
      />

      <main className="container">
        <Display>
          <AllAnnounceContent>
            {doc.map(data =>
              <>
                <CardAnnounce data={data} />
              </>
            )}
          </AllAnnounceContent>
          <AllAnnounce>
            <div>
              บทความแนะนำ
            </div>
            <div>
              {doc.map(data => <>
                <>
                  <CardRecomen data={data} />
                </>
              </>)}
            </div>
          </AllAnnounce>
        </Display>
      </main>
    </Layout>
  )
}

export const query = graphql`
query MyQueryAnn {
  allPrismicAnnouncepage {
    nodes {
      data {
        image_announce {
          fluid(maxWidth: 800, maxHeight: 1200) {
            src
          }
        }
        text_detail {
          raw
        }
        text_title {
          raw
        }
      }
      id
      lang
      type
    }
  }
}
`

export default Announce
