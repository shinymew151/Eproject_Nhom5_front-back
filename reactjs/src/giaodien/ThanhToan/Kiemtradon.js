import React, { useState, useEffect } from "react";
import '../../App.css'
import {RiUserSearchFill} from 'react-icons/ri'
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";


export default function Kiemtradon() {
  return (
    <div>  
      <Navbar/>
          <div className="containerkiemtradon" style={{display:'flex'}}>
             <div className="leftkiemtradon" style={{width:'30%',background:'red',height:250,marginTop:-55,marginLeft:60,fontSize:200}}>
                 <RiUserSearchFill/>
             </div>
             <div className="rightkiemtradon" style={{ width: '60%', background: 'yellow', marginLeft: 15 }}>
  <div style={{ float: 'left' }}>
    <h3>TRA CỨU THEO MÃ ĐƠN HÀNG</h3>
    <p>Để theo dõi đơn hàng của bạn, xin vui lòng nhập số điện thoại đơn hàng của bạn vào ô dưới đây và nhấn nút "Theo dõi".</p>
    <div style={{ float: 'left' }}>
  <label htmlFor="phoneNumber" style={{ fontWeight: 550 }}>Số điện thoại</label>
  <input style={{marginLeft:15}} type="text" id="phoneNumber" />
  <button style={{background:'blue' ,color:'white'}}>THEO DÕI</button>
</div><br></br><br></br>

<div className="donhangcuaban">
  <h4>ĐƠN HÀNG CỦA BẠN</h4>
  <p>tình trang đơn hàng</p>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Đơn hàng</th>
      <th scope="col">Ngày tháng</th>
      <th scope="col">Trạng thái</th>
      <th scope="col">Tổng</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>


  </div>
</div>         
        </div>
      <Footer/>
  </div>
  )
}
