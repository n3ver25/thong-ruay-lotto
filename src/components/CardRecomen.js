import * as React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

const TestStyled = styled.div`
  width: 100%;
  cursor: pointer;
`

export const CardRecomen = ({ data }) => {
  return <TestStyled>{RichText.asText(data.data.text_title.raw)}</TestStyled>
}
