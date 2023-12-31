import React, { useState } from 'react';
import './login.scss';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    const formData = new FormData();
    e.preventDefault();
    formData.append('email', username);
    formData.append('password', password);

    setLoading(true);
    try {
      await axios
        .post('http://127.0.0.1:80/the_mentor/public/api/login', formData) //
        .then((res) => {
          setLoading(false);
          localStorage.setItem('user', res?.data.user);
          window.location.reload();
          // console.log(res?.data.user);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loading && <h1>Loadiing.....</h1>}
      <div className="login_wrapper">
        <div className="login_container">
          <h1>Login</h1>
          <form className="form">
            <input
              type="text"
              placeholder="username"
              className="input_login"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="input_login"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn_login" onClick={(e) => handleLogin(e)}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
