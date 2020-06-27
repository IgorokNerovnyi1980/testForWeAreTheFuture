import React from 'react'
import styled from 'styled-components'
import {
    useDispatch
} from 'react-redux'
import Button from './Button'


const Wrapper =  styled.form`
    width:30rem;
    min-height:30rem;
    padding:${props => props.theme.mainPad};
    background-color:${props =>props.theme.mainBG};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const Title = styled.h3`
    font-size:${props =>props.theme.accentFZ};
    font-weight:600;
`

const BtnWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Input = styled.input`
    max-width:90%;
    padding:${props => props.theme.secondaryPad};
    border:1px solid ${props => props.theme.lightBG};
`

const CreateNew = () => {
const dispatch = useDispatch()
    const onCancel = () => {
        dispatch({type:'CLOSE_MODAL'})
       console.log('CLOSE_MODAL')
    }

    const onSave = () => {
      alert('not Ready')  
    }
     return(
         <Wrapper>
             <Title>add new Position</Title>
             <Input/>
             <Input/>
             <Input/>
             <Input/>
             <BtnWrap>
             <Button
                width='45%'
                label='cancel'
                dark 
                fnClick={onCancel}
             />
              <Button
                width='45%'
                label='save'
                dark 
                fnClick={onSave}
             />
             </BtnWrap>
         </Wrapper>
     )
}
export default CreateNew