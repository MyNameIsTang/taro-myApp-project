import {
  HOME_DATA
} from '../constants/home'

import fetch from '../utils/fetch-data'


export const setHomeDateSync = list => {
  return {
    type: HOME_DATA,
    homeData: list
  }
}

// 异步的action
export function getHomeDataAsync () {
  return async dispatch => {
    let result = await fetch({
      url: `http://localhost:9000/homedata`
    })
    dispatch(setHomeDateSync(result.data))
  }
}
