import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import shortid from 'shortid'
import Media from 'react-media';

const Wrapper = styled.div`
    width: ${props => props.width};
    min-height:75vh;
    margin:0 auto;
    border:1px solid ${props => props.theme.lightBG};
    background-color:${props=>props.BG};
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;

`
const ContentList = () => {

    const data = ['1','2','3', '4', '5', '6', '7', '8']
    return (
        <Media queries={{
            mobile: "(max-width: 900px)",
          }}>
            {({mobile}) => (
             <Wrapper width={mobile ? '95%' : '80%'}>
             {data && data.map(obj => (
                  <Item key={shortid.generate()}/>
             ))}
          </Wrapper>
            )}
          </Media>
    )
}

export default ContentList