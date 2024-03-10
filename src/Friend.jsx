export  default function Friend({friend}){

    const {name,email,username,website} =friend;


    return (
        <div className='box'>
            <h2>Name:{name}</h2> 
            <p>Email:{email}</p>
            <p>Username:{username}</p>
       
            <p>Website:{website}</p> 
            </div>
    )
}