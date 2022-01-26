import * as React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"
import { RichText } from 'prismic-reactjs';

const TestStyled = styled.div`
width: 100%;
display:flex;
`

const ImageStyled = styled.div`
width: 100%;
max-width: 417px;
height: 300px;
background-color: red;
`

const ImageOptimize = styled(Img)`
width: 100%;
height: 100%;
`

export const CardAnnounce = ({ data }) => {
    return (
        <TestStyled>
            <ImageStyled>
                <ImageOptimize fluid={data?.data?.image_announce?.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%" />
            </ImageStyled>
            <div>
                {RichText.render(data.data.text_title.raw)}
                {RichText.render(data.data.text_detail.raw)}
            </div>
        </TestStyled>
    )
}
