import React, {useState} from 'react';
import api from '../Api';
import '../css/App.css'

function OnRegister()
{
  window.location.href = '/Register';
}
function Login() {
  const [result, setResult] = useState('');
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
    if(resp.status == 200) {
      console.log(resp.data)
   localStorage.setItem("token", resp.data.token)
   localStorage.setItem("refreshToken", resp.data.refreshToken);
   localStorage.setItem("name", resp.data.name)
   setResult('Вы вошли');
   //return window.location.href = '/';
    }
    else{
      console.log(resp.status);
      
    }
   } else{
    console.log("EROR");
    setResult('Неверный пароль')
   }
    // отправка данных на сервер для аутентификации
  }

  return (
    <div className='login-form'>  
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
      <div>
        <button type="submit">войти</button>
        <button onClick={OnRegister}>регистрация</button>
      </div>
      <p>{result}</p>
    </form>
      
    </div>
  );
}


export default Login;