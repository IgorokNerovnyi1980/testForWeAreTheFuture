import Type from '../types'

const initialState = {
 data:null,
 isEdit:null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_DATA:
      return {
        ...state,
        data: action.payload,
      }
      case Type.START_EDIT:
        return {
          ...state,
          isEdit: action.id,
        }
    default:
      return state
  }
}
export default reducer
