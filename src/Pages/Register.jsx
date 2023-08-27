import React, {useState} from 'react';
import api from '../Api';
import '../css/App.css'


function OnRegister()
{
  window.location.href = '/Login';
}
function Register() {
  const [data, setData] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function getSecretData()
  {
     const resp = await api.get('https://localhost:7289/api/token/data')
     if(resp)
     {
     setData(resp.data);
     }
     else
     {
      setData("ВЫ не вошли")
     }
  };

  async function register()
  {
      const resp = await api.post('https://localhost:7289/api/api/register', {
        Headers: {
            'Content-Type': 'application/json'
        },
        name: name,
        mail: email,
        password: password     
    });
  if(resp)
  {
  localStorage.setItem("token", resp.data.token)
  localStorage.setItem("refreshToken", resp.data.refreshToken);
  localStorage.setItem("name", resp.data.name)
  console.log("Reg norm");
  }
  };


  const handleSubmit = async (e) => {
    
    register()
    e.preventDefault();
    // отправка данных на сервер для аутентификации
  }

  return (
    <div className='login-form'>
      <button onClick={getSecretData}>getSecretData</button>
    <h1>{data}</h1>
    <form  onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
      <button onClick={OnRegister}>войти</button>
      <button type="submit">зарегистрироваться</button>
    </div>
        
    </form>
    </div>
  );
}

export default Register;