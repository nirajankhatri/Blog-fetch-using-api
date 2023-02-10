import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Nirajan',
        submitted: false
    }

    createPostHandler = () => {
        const data = {
            ...this.state
        };
        axios.post('/posts', data)
            .then(response => {
                // console.log(response);
                this.setState({submitted: true});
            });
    };


    render() {
        return (
            <div className="NewPost">
                {this.state.submitted && <Navigate to='/' replace />} 
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Nirajan">Nirajan</option>
                    <option value="Uday">Uday</option>
                </select>
                <button onClick={this.createPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;