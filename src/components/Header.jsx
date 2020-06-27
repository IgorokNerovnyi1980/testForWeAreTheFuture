import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.header`
    position: absolute;
    top:2rem;
    width:100vw;
    height:6rem;
    padding:1rem 2rem;
    box-shadow:${props =>props.theme.HeaderSHDW};
    background-color:${props => props.theme.mainBG};
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Header = () => (
    <Wrapper>
         <Button 
            width='10rem' 
            logo
            fnClick={() => alert('go to about brand')} 
         />
        <Button 
            width='10rem' 
            dark 
            label='edit' 
            fnClick={() => alert('create new')} 
        />
    </Wrapper>
)
export default Header