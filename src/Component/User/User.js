// @flow strict

import * as React from 'react';
import './User.css';
import { useState} from 'react';
import { Link } from 'react-router-dom';

function User(props) {
    const {id,title,body,userId} = props.users;
   const[postId,setpostId]=useState();

  const show =()=>{
 setpostId(userId);
  }
    return (
        <div className='first'>
            <h2>Id:{id}</h2>
            <h3>PostId:{postId}</h3>
            <h4>Title:{title}</h4>
            <p>Body:{body}</p>
            <div className='second'>
 <button onClick={show}>Show id</button>
 <button><Link to={`/about/${id}`}>Select Id </Link></button>
            </div>
        </div>
    );
};

export default User;