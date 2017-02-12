import { combineReducers } from 'redux'
import { getLocalStore } from '../../util/localStore'


const localStore = getLocalStore('rudiment')

const rudiment = (state = {}, action) => {
  switch (action.type) {
    case 'SING': 
      return {
        doing: action.result
      }
    case 'DANCE': 
      return {
        doing: action.result
      }
  }
}

export default rudiment