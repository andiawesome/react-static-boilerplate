import { connect } from 'react-redux';
import BlogPage from './BlogPage';
import { creators } from '../actions';

const mapDispatch = dispatch => ({
  updateData: (data) => {
    dispatch(creators.updateData(data));
  },
});

const BlogPageContainer = connect(null, mapDispatch)(BlogPage);

export default BlogPageContainer;
