/*
  logger shows us anytime a new action is dispatched, as well as what the new state is goint to be after it is dispatched.
*/
const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The action is: ', action)
    /* 
      get return value invoking next which will be dispatched passing in action.
      This updates the state
    */
    const returnValue = next(action)
    console.log('The new state is: ', store.getState())
  console.groupEnd()
  return returnValue
}
export default logger