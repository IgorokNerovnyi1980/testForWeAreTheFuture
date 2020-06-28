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
      case Type.EDIT_ID:
        return {
          ...state,
          isEdit: action.id,
        }
        case Type.DELETE:
            return {
              ...state,
              data: state.data.filter(obj => obj.id !== action.id),
              isEdit:null
            }
        case Type.EDIT:
            return {
                ...state,
                data: state.data.map(obj => {
                    if(obj.id === action.id){
                        return action.newObj
                    }else{
                        return obj
                    }
                }),
            }
            case Type.CREATE:
            return {
              ...state,
              data: [action.newObj, ...state.data],
            }
            
    default:
      return state
  }
}
export default reducer
