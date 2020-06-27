import React from 'react'
import styled from 'styled-components'
import Media from 'react-media';

const Wrapper = styled.div`
    width: ${props => props.width};
    min-height:10rem;
    margin-top:1rem;
    border:1px solid ${props => props.theme.lightBG};
    :last-child{
        margin-bottom:1rem;
    }
`
const Item = () =>(
    <Media queries={{
        mobile: "(max-width: 900px)",
      }}>
        {({mobile}) => (
        
        <Wrapper 
        width={mobile ? '90%' : '30%'}
    >
        <p>Img</p>
        <p>Name</p>
        <p>Price</p>
        <p>Description</p>
        <p>Button</p>
        
    </Wrapper>
        )}
      </Media>
   
)

export default Item