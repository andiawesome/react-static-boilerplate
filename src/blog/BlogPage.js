import React, { PropTypes } from 'react';
import BlogRoll from '../../components/BlogRoll';
import Layout from '../../components/Layout';
import s from './styles.css';

class Blog extends React.Component {
  static propTypes = {
    fetchGraphQLData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchGraphQLData();
  }

  render() {
    return (
      <Layout className={s.content}>
        <BlogRoll />
      </Layout>
    );
  }
}

export default Blog;
