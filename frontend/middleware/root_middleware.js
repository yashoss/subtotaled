import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import MainMiddleware from '../middleware/main_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  MainMiddleware
);

export default RootMiddleware;
