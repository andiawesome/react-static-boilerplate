import { connect } from 'react-redux';
import BlogRoll from './BlogRoll';

const mapState = (state) => {
  const {
    posts: postsState,
  } = state;

  return {
    posts: postsState.posts,
  };
};

const BlogRollContainer = connect(mapState)(BlogRoll);

export default BlogRollContainer;
