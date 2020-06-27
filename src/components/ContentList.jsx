import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import Media from 'react-media';
import data from '../lib/testData'

const Wrapper = styled.div`
    width: ${props => props.width};
    min-height:75vh;
    margin:0 auto;
    box-shadow:${props =>props.theme.HeaderSHDW};
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;

`
const ContentList = () => {

    const editItem = () => { 
        alert('edit Item')
    }

    return (
        <Media queries={{
            mobile: "(max-width: 900px)",
          }}>
            {({mobile}) => (
             <Wrapper width={mobile ? '95%' : '80%'}>
             {data && data.map(obj => (
                  <Item key={obj.id} hotDog={obj} editItem={editItem} />
             ))}
          </Wrapper>
            )}
          </Media>
    )
}

export default ContentList