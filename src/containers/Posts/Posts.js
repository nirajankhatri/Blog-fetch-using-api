import React, { Component } from 'react'
import Post from '../../components/Post/Post';
import axios from '../../axios';
import './Posts.css';
import { Outlet } from 'react-router-dom';
import withRouter from '../../hoc/withRouter/withRouter';
import Aux from '../../hoc/Aux/Aux';

class Posts extends Component {

  state = {
    posts: [],
    selectedPost: null,
  }

  componentDidMount() {

    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            auther: 'Nirajan'
          }
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        // this.setState({ error: true });
        console.log(error);
      });
  }

  readPostHandler = (id) => {
    const navigate = this.props.navigate;
    navigate(`/${id}`);
  }


  render() {
    let posts = <p style={{ textAlign: 'center' }}>Somthing went wrong.</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => (
        // <Link style={{color: 'black', textDecoration: 'none'}} to={`/${post.id}`} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          auther={post.auther}
          clicked={() => this.readPostHandler(post.id)} />
        // </Link>
      ));
    }
    return (
      <Aux>
        <section className="Posts">
          {posts}
        </section>
        <Outlet />
      </Aux>
    )
  }
}

export default withRouter(Posts);