import React, { useState } from "react";
import axios from 'axios';



function Register() 
{
    const [data, setData] = useState(null);
    var name;
    var password;
    var mail;
    async function RegisterFunc()
    {
    const response = await axios.post('https://localhost:7289/Profile/Register', null, {
        method: 'post',
        headers:{
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'text/plain; charset=utf-8'
        },
        params: {
            mail: mail,
            name: name,
            password:password
    }});
    if(response)
    {
        setData(response.data)
    }
    }

    function SetValue(Event, field)
    {
        if(field=="name")
            name = Event
        if(field=="password")
            password = Event
        if(field=="mail")
            mail = Event
    }


    return (
        <div>
          <input type="text" onChange={event=>SetValue(event.target.value, "name")}></input> 
          <input type="text" onChange={event=>SetValue(event.target.value, "password")}></input>
          <input type="text" onChange={event=>SetValue(event.target.value, "mail")}></input>
          <button onClick={RegisterFunc}>Регистрация</button>
          <p>{data}</p>
        </div>
      );
    }
    
    export default Register;