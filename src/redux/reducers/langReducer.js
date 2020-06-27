import Type from '../types'

const initialState = {
  currentLang: 'en',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.CHANGE_LANG:
      return {
        ...state,
        currentLang: action.payload,
      }
    default:
      return state
  }
}
export default reducer
