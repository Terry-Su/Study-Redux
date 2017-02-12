import GV from './global'
import { getLocalStore, setLocalStore } from './localStore'

/**
 * console the dispatching and state info
 */
export const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

/**
 * Sync the localStorage
 */
export const setStateToLocalStore = store => next => action => {
  let result = next(action)
  const { renderProject } = GV
  // save state to localStorage
  setLocalStore(renderProject, store.getState())

  // Console
  // console.log('before localStorage state: ', store.getState())
  console.log('localStorage: ', getLocalStore(renderProject))
  return result
}