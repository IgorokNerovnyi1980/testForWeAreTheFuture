import React from 'react'
import styled from 'styled-components'
import ContentList from './ContentList'

const Wrapper = styled.div`
    width:100vw;
    min-height:100vh;
    padding:${props => props.theme.mainPad};
    background-color:${props => props.theme.mainBG};
`

const Title = styled.h1`
    margin-top:7rem;
    margin-left:9%;
    font-weight:600;
    font-size:${props => props.theme.titleFZ};
`

const Content = ({title='Title'}) =>(
    <Wrapper>
        <Title>{title}</Title>
        <ContentList />
    </Wrapper>
)

export default Content