import * as React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"
import { RichText } from 'prismic-reactjs';

const TestStyled = styled.div`
width: 100%;
`

export const CardRule = ({ data }) => {
    return (
        <TestStyled>
            {/* {RichText.asText(data.data.text_title.raw)} */}
        </TestStyled>
    )
}
