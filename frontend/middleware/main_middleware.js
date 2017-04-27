import { Constants, receiveRegister } from '../actions/main_actions';
import { fetchRegister } from '../util/main_api_util';

const MainMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case Constants.REQUEST_REGISTER:
      const success = data => dispatch(receiveRegister(data));
      fetchRegister(success);
      return next(action);
    case Constants.ADD_ITEM:
      const success = data => dispatch(receiveRegister(date));
      fetchRegister(success);
      return next(action);
    default:
      return next(action);
  }
}

export default MainMiddleware;
