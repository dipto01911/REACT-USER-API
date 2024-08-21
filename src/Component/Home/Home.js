// @flow strict

import * as React from 'react';
import { useState,useEffect } from 'react';
import './Home.css';
import User from '../User/User';

function Home() {
const[user,setuser]=useState([]);
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => setuser(data.slice(0,20)))
})

    return (
        <div className='user'>
           {
            user.map(x => <User users={x}></User>)
           }
        </div>
    );
};

export default Home;