import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Register from './register';
import { requestRegister } from '../../actions/main_actions'


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  register: state.register
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    requestRegister: () => dispatch(requestRegister())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
