import { connect } from 'react-redux';
import AddItem from './add_item';
import { addItem } from '../../actions/main_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
