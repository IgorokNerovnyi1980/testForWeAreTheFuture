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
        margin-bottom:2rem;
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
const Item = ({element, isEdit, onButtonClick}) => {
    return (
        <Media queries={{
            mobile: "(max-width: 900px)",
          }}>
            {({mobile}) => (
            
            <Wrapper 
                width={mobile ? '90%' : '30%'}
            >
                
            <Image src={element.img}/>
            <Label>{element.label}</Label>
            <Price>{`${element.price} $`}</Price>
            <Description>{element.description}</Description>
            {(isEdit === element.id) 
                && <Button 
                    dark 
                    label='delete' 
                    fnClick={() => onButtonClick(element.id, 'delete')} 
                />
            }
            <Button 
                label={(isEdit === element.id) ? 'save': 'edit'} 
                fnClick={() => onButtonClick(element.id, (isEdit === element.id) ? 'save': 'startEdit' )} 
            />

            
            
        </Wrapper>
            )}
          </Media>
       
    )
}

export default Item