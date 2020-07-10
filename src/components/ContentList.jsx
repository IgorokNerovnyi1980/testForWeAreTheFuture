import React, {
  useEffect,
} from 'react'
import styled from 'styled-components'
import {
  useSelector, useDispatch,
} from 'react-redux'
import Media from 'react-media'

// import testData from '../lib/testData'
import {
  API,
} from '../lib/api'

import Item from './Item'

const Wrapper = styled.div`
  width: ${props => props.width};
  min-height: 75vh;
  margin: 0 auto;
  padding: ${props => props.theme.sidePad};
  box-shadow: ${props => props.theme.HeaderSHDW};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.position};
  align-items: flex-start;
`

const ContentList = () => {
  const data = useSelector(store => store.hotDog.data)
  const isEdit = useSelector(store => store.hotDog.isEdit)
  const isUpdate = useSelector(store => store.hotDog.isUpdate)
  const dispatch = useDispatch()

  const onButtonClick = (id, type) => {
    switch (type) {
      case 'startEdit':
        dispatch({
          type: 'EDIT_ID',
          id,
          bool: false,
        })
        console.log("start edit"); //eslint-disable-line
        break
      case 'save':
        dispatch({
          type: 'EDIT_ID',
          id: null,
          bool: true,
        })
        console.log("finish edit"); //eslint-disable-line
        break
      case 'delete':
        dispatch({
          type: 'DELETE',
          id,
        })
        console.log("delete"); //eslint-disable-line
        break
      default:
    }
    // if(type === 'delete') update server data
  }

  const onChangeInput = (e, id) => {
    const findEl = data.find(obj => id === obj.id)
    const newObj = {
      ...findEl,
      [e.target.name]: e.target.value,
    }

    dispatch({
      type: 'EDIT',
      id,
      newObj,
    })
    console.log("update state"); //eslint-disable-line
  }

  useEffect(() => {
    // this async wrapper for Api request
    const asyncFunction = async () => {
      try {
        // API
        const { data, status } = await API.get("/getAllData"); //eslint-disable-line
        if (status === 200) {
          dispatch({
            type: 'GET_DATA',
            payload: data,
          })
          console.log("GET_DATA from api"); //eslint-disable-line
        }
      } catch (err) {
        console.log("failed request", err); //eslint-disable-line
      }
    }
    asyncFunction()
  }, []); //eslint-disable-line

  useEffect(() => {
    // update server data
    if (isUpdate) {
      console.log("update server data"); //eslint-disable-line
      dispatch({
        type: 'STOP_UPDATE_DATA',
      })
    }
  }, [isUpdate]); //eslint-disable-line

  return (
    <Media
      queries={{
        mobile: '(max-width: 900px)',
      }}
    >
      {({
        mobile,
      }) => (
        <Wrapper
          width={mobile ? '100%' : '80%'}
          position={mobile ? 'space-around' : 'flex-start'}
        >
          {data
            && data.map(obj => (
              <Item
                key={obj.id}
                element={obj}
                isEdit={isEdit}
                onButtonClick={onButtonClick}
                fnChange={onChangeInput}
              />
            ))}
        </Wrapper>
      )}
    </Media>
  )
}

export default ContentList
