import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id , name, email, address, phone, website } = props.friend;
    const friendStyle = {
        border: "3px solid goldenRod",
        borderRadius: "10px",
        backgroundColor: "#F0FFFF",
        padding: "10px"
    }
    const url = `/friend/${id}`;
    let navigate = useNavigate();
    const  handleButton = () =>  {
        navigate(url);
    }
    return (
        <div style = { friendStyle }>
            <h2>Hello, My name is { name } { id } </h2>
            <h4>My email id is <small> { email } </small></h4>
            <h6>I am from { address.city } </h6>
            <p>Call me { phone } </p>
            <p>Visit my website{ website }</p>
            <Link to = { url } >Visit Me</Link>
            <br />
           <button onClick = { handleButton } >Click Me</button>
        </div>
    );
};

export default Friend;