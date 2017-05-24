import { Constants, receiveRegister, receiveItem, replaceRegister } from '../actions/main_actions';
import { fetchRegister, saveItem, removeItem } from '../util/main_api_util';

const MainMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case Constants.REQUEST_REGISTER:
      const success = data => dispatch(receiveRegister(data));
      fetchRegister(success);
      return next(action);
    case Constants.ADD_ITEM:
      const successAdd = data => dispatch(receiveItem(data));
      saveItem(action.item, successAdd);
      return next(action);
    case Constants.DELETE_ITEM:
      const successDel = data => dispatch(replaceRegister(data));
      removeItem(action.id, successDel);
      return next(action);
    default:
      return next(action);
  }
}

export default MainMiddleware;
