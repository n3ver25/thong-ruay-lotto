import * as React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"
import { RichText } from 'prismic-reactjs';

const TestStyled = styled.div`
width: 100%;
display:flex;
margin: auto;
`

const ImageStyled = styled.div`
width: 100%;
max-width: 1000px;
height: 300px;
background-color: red;
`

const ImageOptimize = styled(Img)`
width: 100%;
height: 100%;
`

export const CardUserManual = ({ data }) => {

    return (
        <TestStyled>
            <ImageStyled>
                <ImageOptimize fluid={data?.manual_user_image?.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%" />
            </ImageStyled>
            <div>
                {RichText.render(data.manual_user_title.raw)}
                {RichText.render(data.manual_user_detail.raw)}
            </div>
        </TestStyled>
    )
}
