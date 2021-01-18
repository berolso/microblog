import {ADD_POST} from './actions/types'

const reducer = (state = {}, action) =>{
  switch(action.type){
    case ADD_POST:
      return {...state, [action.post.id]: action.post}
  }
  return state
}

export default reducer