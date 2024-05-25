import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dangnhapadmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/accountlogin`, { email, password });
      if (response.status === 200) {
        alert("Login successful");
       navigate('/homeadmin');
      } else {
        alert("Đăng nhập thất bại");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        alert('Tài khoản,mật khẩu không chính xác');
      }
    }
  };
  
  return (
    <div className="login-form">
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
  );
}