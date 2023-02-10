import axios from 'axios';
import React, { Component } from 'react';
import './FullPost.css';
import withRouter from '../../../hoc/withRouter/withRouter';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount() {
        this.loadPost();
    }

    componentDidUpdate() {
        this.loadPost();
    }

    loadPost = () => {
        // console.log(this.props.params.id);
        if (this.props.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.params.id)) {
                axios.get(`/posts/${this.props.params.id}`)
                    .then(response => {
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    deletePosstHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
            .then(response => {
                console.log(response);
            });
    };

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePosstHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default withRouter(FullPost);