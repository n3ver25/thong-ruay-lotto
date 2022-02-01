import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { CardAnnounce } from '../components/CardAnnounce'
import { CardRecomen } from '../components/CardRecomen'

const Display = styled.div`
  display: flex;
  justify-content: space-between;
`
const AllAnnounce = styled.div`
  width: 30%;
  background: #bf0015;
  padding: 20px;
  @media (max-width: 1025px) {
    display: none;
  }
`

const AllAnnounceContent = styled.div`
  width: 100%;
`

const Recomend = styled.div`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.015em;
  margin-top: 20px;
  margin-bottom: 40px;
  color: white;
`

const TableData = styled.div`
  color: white;
  background: black;
  margin: 10px;
  padding: 20px;
  max-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
        <>
          <HeaderPage>ประกาศ Lotto</HeaderPage>
          <Display>
            <AllAnnounceContent>
              {doc.map((data) => (
                <>
                  <CardAnnounce data={data} />
                </>
              ))}
            </AllAnnounceContent>
            <AllAnnounce>
              <Recomend>บทความแนะนำ</Recomend>
              <div>
                {doc.map((data) => (
                  <>
                    <TableData>
                      <CardRecomen data={data} />
                    </TableData>
                  </>
                ))}
              </div>
            </AllAnnounce>
          </Display>
        </>
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
