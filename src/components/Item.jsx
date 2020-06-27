import React from 'react'
import styled from 'styled-components'
import Media from 'react-media';
import Button from './Button'

const Wrapper = styled.div`
    width: ${props => props.width};
    max-width:50rem;
    min-height:40rem;
    margin-top:1rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    :last-child{
        margin-bottom:1rem;
    }
`

const Image = styled.img`
    width:100%;
`
const Label = styled.h2`
    margin-top:1rem;
    font-size:${props => props.theme.accentFZ};
    font-weight:600;
`

const Price = styled.p`
    margin-top:1rem;
    font-size:${props => props.theme.mainFZ};
    color:${props => props.theme.lightBG};
`
const Description = styled(Price)`
    margin-bottom:1rem;
    color:${props => props.theme.secondaryBG};
`

const Item = ({hotDog, editItem}) =>(
    <Media queries={{
        mobile: "(max-width: 900px)",
      }}>
        {({mobile}) => (
        
        <Wrapper 
            width={mobile ? '90%' : '30%'}
        >

        <Image src={hotDog.img}/>
        <Label>{hotDog.label}</Label>
        <Price>{`${hotDog.price} $`}</Price>
        <Description>{hotDog.description}</Description>
        <Button label='edit' fnClick={editItem} />
        
    </Wrapper>
        )}
      </Media>
   
)

export default Item