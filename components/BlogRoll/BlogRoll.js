import React, { PropTypes } from 'react';

class BlogRoll extends React.Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })),
  };

  static defaultProps = {
    posts: [],
  };

  render() {
    const { posts } = this.props;
    return (
      <div className="blogroll">
        {posts.length > 0 && posts.map(post => <div>{ post.title }</div>)}
      </div>
    );
  }
}

export default BlogRoll;
