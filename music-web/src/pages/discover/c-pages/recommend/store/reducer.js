import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultReducer = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
})

function reducer(state = defaultReducer, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums)
    default:
      return state
  }
}

export default reducer
