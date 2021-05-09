import * as actionTypes from './constants'

const defaultReducer = {
  topBanners: [],
}

function reducer(state = defaultReducer, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: [] }
    default:
      return state
  }
}

export default reducer
