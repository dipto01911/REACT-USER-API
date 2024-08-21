// @flow strict

import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Comment from '../Comment/Comment';
import'./UserDetails.css';
function UserDetails() {
 const{id}=useParams();  
 const[person,setperson]=useState([]);
 const[comment,setcomment]=useState([]);
 const[click,setclick]=useState(false);
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setperson(data))
})

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(data => setcomment(data))
})

    return (
        <div className='person'>
            <div className='section1'>
           <h3>Id :{person.id}</h3>
           <h4>PostId:{person.userId}</h4>
           <h5>title:{person.title}</h5>
           <button onClick={()=>setclick(!click)}>See comment</button>
           </div>

           <div className='section2'>
       {
        click? comment.map(x => <Comment y={x}></Comment>)
               :<p></p>
       }
           </div>
        </div>
    );
};

export default UserDetails;