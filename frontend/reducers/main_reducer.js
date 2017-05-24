import { Constants } from './../actions/main_actions';
import merge from 'lodash/merge';

const MainReducer = function(state = {}, action){
  switch(action.type){
    case Constants.RECEIVE_REGISTER:
      return merge({}, state, action.register)
    case Constants.RECEIVE_ITEM:
      return merge({}, state, action.item);
    case Constants.REPLACE_REGISTER:
      return action.register;
    default:
      return state;
  }
};



export default MainReducer;
