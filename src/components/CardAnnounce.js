import * as React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"
import { RichText } from 'prismic-reactjs';

const TestStyled = styled.div`
display:flex;
background-color:white;
margin: 0px 23px 20px 23px;
align-items: center;
gap: 12px;
padding: 20px;
`

const ImageStyled = styled.div`
width: 100%;
max-width: 417px;
height: 300px;
`

const ImageOptimize = styled(Img)`
width: 100%;
height: 100%;
`

const PositionFont = styled.div`
margin: 20px 0;

h1{
    color: #9A0112;
}
p{
    margin-bottom: 0px;
}
`

export const CardAnnounce = ({ data }) => {
    return (
        <TestStyled>
            <ImageStyled>
                <ImageOptimize fluid={data?.data?.image_announce?.fluid}
                    objectFit="contain"
                    objectPosition="50% 50%" />
            </ImageStyled>
            <PositionFont>
                {RichText.render(data.data.text_title.raw)}
                {RichText.render(data.data.text_detail.raw)}
            </PositionFont>
        </TestStyled>
    )
}
