import React, { useState, useEffect } from "react";
import '../../App.css'
import {FaTrashAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';

export default function Cart() {
  const [slsptgh,setslsptgh] = useState(0);
  const [cart,setcart] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/slsptgh`)
      .then((response) => {
        setslsptgh(response.data); 
  
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);
  const [tongcart,settongcart] = useState(0);
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData).user : null;const userId = user ? user.id : null;

  const handleLogout = ()=>{
   
    localStorage.removeItem('userData');
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/homecart`)
      .then((response) => {
        setcart(response.data); 
        const total = response.data.reduce((acc, product) => acc + product.tong, 0);
      settongcart(total);

      console.log(tongcart);
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);
  
  const handleDelete = (id) => {
    console.log(id); // log the id to the console
    
    axios.delete(`${process.env.REACT_APP_BASEURL}/api/deletecart/${id}`)
      .then((response) => {
        window.location.reload(); 
         alert('đã xóa sản phẩm khỏi giỏ hàng');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
       <div>
        <Navbar/>
<div className="container">
    <div className="leftcc" style={{width:'55%',float:'left'}}>
<table className="table">
  <thead>
    <tr>
      <th></th>
      <th scope="col">SẢN PHẨM</th>
      <th>THÔNG TIN SẢN PHẨM</th>
      <th scope="col">GIÁ</th>
      <th scope="col">SỐ LƯỢNG</th>
      <th scope="col">TỔNG</th>
    </tr>
  </thead>
  <tbody>
    {
  cart.map(giohang=>{
    return(
    <tr>
      <th> <button onClick={() => handleDelete(giohang.id)}>
    <FaTrashAlt />
  </button></th>
      <th >
  <img 
    style={{ width: 50, height: 50 }} 
    src={`${process.env.REACT_APP_BASEURL}/upload/${giohang.product?.hinhanh}`}
    alt="vay dep vcl ra" 
  />
  </th>
  <th><span style={{ marginTop: 10 }}>{giohang.title}</span><br></br>
  <span style={{ marginTop: 10 }}>size: {giohang.size}</span></th>
  

      <td>{giohang.gia}.000</td>
      <td>{giohang.soluong}</td>
      <td>{giohang.tong} đ</td>
    </tr>
    );
})
}
  </tbody>
</table>
</div>

<div className="rightcc" style={{width:'42%',float:'right'}}>
<p>CỘNG GIỎ HÀNG</p><hr></hr>
<table class="table">
  
  <tbody>
    {/* <tr>
      <td  style={{float:'left'}}>Tạm tính</td>
      <td style={{float:'right'}}>299.000 đ</td>
      
    </tr> */}
    <tr>
      <td style={{float:'left'}}>Giảm giá đơn hàng</td>
      <td style={{float:'right'}}>-0 đ</td>
    </tr>
    <tr>
      <td style={{float:'left'}}>Tổng</td>
      <td style={{float:'right'}}>{tongcart} đ</td>
    </tr>
  
  </tbody>
</table>
<Link to="/Thanhtoan">
<button style={{width:'70%',background: 'gray',   lineHeight: 2,
    textAlign: 'center', fontFamily: 'Roboto, sans-serif',color:'white',fontWeight:550, borderRadius:'10px'}}>  TIẾN HÀNH THANH TOÁN </button> </Link>
</div>
      </div>
    </div>
  )
}