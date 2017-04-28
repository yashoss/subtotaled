import { Constants, receiveRegister, receiveItem} from '../actions/main_actions';
import { fetchRegister, saveItem } from '../util/main_api_util';

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
    default:
      return next(action);
  }
}

export default MainMiddleware;
