import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

const PostDetail = () => {
    const {postId} = useParams();
    let navigate = useNavigate();
    const [post, setPost ] = useState({});
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])
    const handleClick = () => {
        navigate('/home/posts')
    }
    return (
        <div>
            <h2>Post Detail : {postId} </h2>
            <h4> {post.title} </h4>
            <h6> {post.body } </h6>
            
        </div>
    );
};

export default PostDetail;