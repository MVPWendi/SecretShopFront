import React, {useState} from 'react';
import api from '../Api';
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // отправка данных на сервер для регистрации
  }

  return (
    <div>
      <button onClick={getSecretData}>getSecretData</button>
    <h1>{data}</h1>
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Зарегистрироваться</button>
    </form>
    </div>
  );
}

export default Register;