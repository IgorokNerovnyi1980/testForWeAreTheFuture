import React, { 
    useEffect
} from 'react'
import styled from 'styled-components'
import {
    useSelector, useDispatch
} from 'react-redux'
import Item from './Item'
import Media from 'react-media';
import testData from '../lib/testData'

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
    const data = useSelector(store => store.hotDog.data)
    const isEdit = useSelector(store => store.hotDog.isEdit)
    const dispatch = useDispatch()

    const onButtonClick = (id, type) => { 
        switch(type){
            case 'startEdit':
                dispatch({type:'START_EDIT', id })
                break
            case 'save':
                console.log('save changes')
                break
            case 'delete':
                dispatch({type:'DELETE', id })
                console.log('DELETE')
                break
            default: return
        }
    }

    useEffect(()=>{
        dispatch({type:'GET_DATA', payload: testData})
    },[])//eslint-disable-line

    return (
        <Media queries={{
            mobile: "(max-width: 900px)",
          }}>
            {({mobile}) => (
             <Wrapper width={mobile ? '95%' : '80%'}>
             {data && data.map(obj => (
                  <Item 
                    key={obj.id} 
                    element={obj} 
                    isEdit={isEdit} 
                    onButtonClick={onButtonClick}
                  />
             ))}
          </Wrapper>
            )}
          </Media>
    )
}

export default ContentList