import React, { useState, useEffect } from "react";
import '../../App.css'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

import { Link } from "react-router-dom";
import axios from 'axios';

export default function Navbar(){

    const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData).user : null;
  const userId = user ? user.id : null;
  
  
  const handleLogout = ()=>{
   
    localStorage.removeItem('userData');
  };
  
  const [slsptgh,setslsptgh] = useState(0);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/slsptgh`)
      .then((response) => {
        setslsptgh(response.data); 
  
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);
  
   
    return(
        <>
        <div id="">
        <div>
        <ul id="header">
          <li><Link to="/">Giới thiệu</Link></li>
          <li><Link to="/">Góc cửa hàng</Link></li>
          <li id="down1">
            <Link to="/">Sản phẩm <AiFillCaretDown /></Link>
            <ul id="dc1">
              <li><Link to="/category/sominu">Sơ mi nữ</Link></li>
              <li><Link to="/category/chanvay">Chân váy</Link></li>
              <li><Link to="/category/vaydamcongso">Váy đầm công sở</Link></li>
            </ul>
          </li>
          <li id="down2">
            <Link to="/">Sản phẩm bán chạy <AiFillCaretDown /></Link>
            <ul id="dc2">
              <li><Link to="/category/bosuutapmoi">Bộ sưu tập mới</Link></li>
              <li><Link to="/category/somichanvay">Sơ mi chân váy</Link></li>
              <li><Link to="/category/sandouudai">Săn đồ ưu đãi</Link></li>
              <li><Link to="/category/xahang">Xả hàng</Link></li>
            </ul>
          </li>
         
          <li>
            <Link to="/kiemtradon">CheckOut</Link>
           </li>

          <li> 
            <Link to="/Cart">Giỏ hàng <BsFillCartFill/></Link>
            <div className="cart-count">{slsptgh}</div>
           </li>

        </ul>
      </div>
      
      <div id="login-register">
            <ul>
              {user ? (
                <>
                  <li>Xin chào: {user.name}</li>
                  <li>
                    <button onClick={handleLogout} class="button-38">
                      <Link to="/account/login">Đăng xuất</Link>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/account/login">Đăng nhập</Link>/
                  </li>
                  <li>
                    <Link to="/account/register">Đăng ký</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
      
      
      </div>

      </>
    );
}