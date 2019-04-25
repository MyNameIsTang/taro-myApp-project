import { 
  HOME_DATA
} from '../constants/home'

const DEFAULT_STATE = {
  homeList: {}
}

export default function counter (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case HOME_DATA:
      return {
        ...state,
        homeList: action.list
      }
     default:
       return state
  }
}
