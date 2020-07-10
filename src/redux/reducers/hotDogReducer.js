import Type from '../types'

const initialState = {
  data: null,
  isEdit: null,
  isUpdate: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_DATA:
      return {
        ...state,
        data: action.payload,
        isUpdate: false,
      }
    case Type.EDIT_ID:
      return {
        ...state,
        isEdit: action.id,
        isUpdate: action.bool,
      }
    case Type.DELETE:
      return {
        ...state,
        data: state.data.filter(obj => obj.id !== action.id),
        isEdit: null,
        isUpdate: true,
      }
    case Type.EDIT:
      return {
        ...state,
        data: state.data.map((obj) => {
          if (obj.id === action.id) {
            return action.newObj
          }
          return obj
        }),
      }
    case Type.CREATE:
      return {
        ...state,
        data: [action.newObj, ...state.data],
        isUpdate: true,
      }
    case Type.STOP_UPDATE_DATA:
      return {
        ...state,
        isUpdate: false,
      }

    default:
      return state
  }
}
export default reducer
