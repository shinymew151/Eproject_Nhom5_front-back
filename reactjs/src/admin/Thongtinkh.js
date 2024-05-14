import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
import {FaTrashAlt} from 'react-icons/fa'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';


export default function Thongtinkh() {
    const [data,setdata] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASEURL}/api/thongtinkhachhang`)
        .then((response)=>{
            setdata(response.data);
        })
    },[])
const handledelete = (id)=>{
    axios.delete(`${process.env.REACT_APP_BASEURL}/api/thongtinkhachhang/${id}`)
    alert('Xóa thành công');
    window.location.reload();
}
   
  return (
    <div>
         <Navbar />
    <div class="container-fluid" id="main">
      <div class="row row-offcanvas row-offcanvas-left">
        <Sidebar />
        <div className='custom-margin-top'>
        <div className='custom-margin-top'>
        <h2>Danh sách đơn hàng đã đặt</h2>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Mật khẩu</th>
      <th scope="col">Họ tên</th>
      <th scope="col">Số điện thoại</th>
    
      <th scope="col">Xóa</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((donhang)=>{
            return(
                <tr>
                
                <td>{donhang.email}</td>
                <td>{donhang.password}</td>
                <td>{donhang.name}</td>
                <td>{donhang.sdt}</td>
                <td><button onClick={()=>handledelete(donhang.id)}><FaTrashAlt/></button></td>
              </tr>
            );
        })
    }
  
  
  </tbody>
</table>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
