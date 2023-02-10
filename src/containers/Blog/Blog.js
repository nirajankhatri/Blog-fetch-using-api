import React, { Component, lazy, Suspense } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import { Route, Routes, NavLink } from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';

// import asyncComponent from '../../hoc/asyncComponent';
// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });

const NewPost = lazy(() => import('./NewPost/NewPost'));


class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header style={{ textAlign: 'center' }}>
                    <nav>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<Posts />}>
                            <Route path='/:id' element={<FullPost />} />
                        </Route>
                        <Route path='/new-post' element={<NewPost />} />
                    </Routes>
                </Suspense>
            </div>
        );
    }
}

export default Blog;