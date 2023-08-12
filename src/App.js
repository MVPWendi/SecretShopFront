import React, { useState } from "react";
import axios from "axios";
import $api from "./Api";
import Register from "./Register"
function App() {


const [value, setValue] = useState(null);
const [data, setData] = useState("");





async function getSecretData()
{
   const resp = await $api.get('https://localhost:7289/api/token/data')
   if(resp)
   {
   if(resp)
   {
   setData(resp.data);
   }
  }
};
async function getJWT1()
{
   var AccessToken = localStorage.getItem("token");
        var RefreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("https://localhost:7289/api/token/refresh", {
            AccessToken,
            RefreshToken,
            withCredentials: true
        });
      };
async function login()
{
   const resp = await $api.post('https://localhost:7289/api/api/login?mail=test@mail.ru&password=123456')
   
   if(resp)
   {
    console.log(resp.status);
    console.log(resp.data);
   setData(resp.data);
   localStorage.setItem("token", resp.data.token)
   localStorage.setItem("refreshToken", resp.data.refreshToken);
   }
};


  return (
    <div>
      <button  onClick={getSecretData}>getSecretData</button>
      <button  onClick={login}>register</button>
      <button  onClick={getJWT1}>getJWT1</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;