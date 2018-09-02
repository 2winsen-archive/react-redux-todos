import { connect } from 'react-redux';

import Link from './Link';
import { setVisibilityFilter } from '../actions';

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export default connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);