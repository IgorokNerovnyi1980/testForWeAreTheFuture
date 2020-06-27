import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
    position: absolute;
    top:2rem;
    width:100vw;
    height:4rem;
    padding:1rem 2rem;
    box-shadow:${props =>props.theme.HeaderSHDW};
    /* border-top:1px solid ${props => props.theme.lightBG};
    border-bottom:1px solid ${props => props.theme.lightBG}; */
    background-color:${props => props.theme.mainBG};
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Header = () => (
    <Wrapper>
        <p>logo</p>
        <p>add new</p>
    </Wrapper>
)
export default Header