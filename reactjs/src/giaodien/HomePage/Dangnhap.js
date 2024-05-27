import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import axios from 'axios';
import Navbar from "./Navbar";
import Footer from "./Footer";
import loginimg from './loginimg.jpg';
import { Link } from "react-router-dom/dist";

export default function Dangnhap() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData).user : null;
  const userId = user ? user.id : null;
  
  console.log(email);
 // Lưu thông tin người dùng vào localStorage
 const handleLogin = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/login`, { email, password });
    if (response.status === 200) {
      const { token, user } = response.data;

      const userData = { token, user }; // Tạo đối tượng chứa thông tin người dùng
      const userDataJSON = JSON.stringify(userData); // Chuyển đối tượng thành chuỗi JSON
  
      localStorage.setItem('userData', userDataJSON); // Lưu chuỗi JSON vào localStorage
      alert("Đăng Nhập Thành Công");
     navigate('/');
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  

  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      alert('Tài khoản,mật khẩu không chính xác');
    }
  }
};

  

   

  return (
    <div>
      <Navbar/>
<div class="container py-4">
<div class="row g-0 align-items-center">
<div class="col-lg-6 mb-5 mb-lg-0">
<div class="panel panel-primary">
    <div class="panel-heading">
        <h2 class="text-center" style={{marginLeft:'50px'}}>Đăng Nhập</h2>
    </div>
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
      <button type="submit" className="loginbutton" style={{marginTop:'7px', marginBottom:'7px'}}>Đăng Nhập</button>
      <Link style={{textDecoration:'none'}} to="/admin/dangnhap">Admin</Link>
    </form>
  </div>
</div>
</div>

<div class="col-lg-6 mb-5 mb-lg-0">
<img src={loginimg} className="loginimage" alt="login" />
</div>
</div>
</div>
    <Footer/>
    </div>
  )
}