import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/friends');
    }

    useEffect( ()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then( data => setFriend(data));
    },[])
    return (
        <div>
            <h2>Friend detail of { friendId } </h2>
            <h3> Name: {friend.name}</h3>
            <h4>Email: { friend.email }</h4>
            <p>company: { friend.company?.name }</p>
            <button onClick = { handleClick }>See All </button>
        </div>
    );
};

export default FriendDetail;