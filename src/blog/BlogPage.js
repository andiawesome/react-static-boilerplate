import React from 'react';
import BlogRoll from '../../components/BlogRoll';
import Layout from '../../components/Layout';
import s from './styles.css';

class Blog extends React.Component {
  render() {
    return (
      <Layout className={s.content}>
        <BlogRoll />
      </Layout>
    );
  }
}

export default Blog;
