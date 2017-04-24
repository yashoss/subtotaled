import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import MainReducer from './main_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  register: MainReducer
});

export default RootReducer;
