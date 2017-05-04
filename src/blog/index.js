import { connect } from 'react-redux';
import BlogPage from './BlogPage';
import { creators } from '../actions';
import query from './query.txt';

const mapDispatch = dispatch => ({
  fetchGraphQLData: () => {
    dispatch(creators.fetchGraphQLData(query));
  },
});

const BlogPageContainer = connect(null, mapDispatch)(BlogPage);

export default BlogPageContainer;
