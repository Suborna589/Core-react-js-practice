import './Friends.css' 
import Friend from  './Friend'

import { useEffect, useState } from "react"


export default function Friends(){ 

    const [friends, setFriends] = useState([]) 

    useEffect(()=>{ 

        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(res=> res.json()) 
        .then(data  => setFriends(data))

    },[])
    





  return (
    <div>
        <h2>Friends:{friends.length}</h2> 
        {
            friends.map(friend=> <Friend></Friend>)
        }
    </div>
  )

// 1. dclear state data to hold 
//2.use effect with call back  function and depndency array  
//3.Fetch to load data 