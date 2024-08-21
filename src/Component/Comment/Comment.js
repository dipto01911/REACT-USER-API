// @flow strict

import * as React from 'react';
import './Comment.css';
function Comment(props) {
    const data=props.y;
 
    return (
        <div className='portion'>
           <h3> From Id :{data.id}</h3>
           <p>Name:{data.name}</p>
           <p>Email:{data.email}</p>
        </div>
    );
};

export default Comment;