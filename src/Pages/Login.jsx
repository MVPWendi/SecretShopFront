import React, {useState} from 'react';
import api from '../Api';
import { Route } from 'react-router-dom';



function Login() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState('test@mail.ru');
  const [password, setPassword] = useState('123456');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await api.post('https://localhost:7289/api/api/login', {
        Headers: {
            'Content-Type': 'application/json'
        },
        mail: email,
        password: password     
    });
   if(resp)
   {
   localStorage.setItem("token", resp.data.token)
   localStorage.setItem("refreshToken", resp.data.refreshToken);
   }
    // отправка данных на сервер для аутентификации
  }

  return (
    <div>  
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  
      />

      <button type="submit">Войти</button>
    </form>
    </div>
  );
}


export default Login;