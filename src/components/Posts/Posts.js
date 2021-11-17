import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Post from '../Post/Post';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
    return (
        <div>
           {
               posts.map(post => <Post post = { post } key = { post.id }></Post>)
           }
        </div>
    );
};

export default Posts;