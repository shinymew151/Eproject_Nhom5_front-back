import React, { useState, useEffect } from "react";
import '../../App.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import { useLocation } from 'react-router-dom';


export default function Checkout() {
    const [check,setcheck] = useState([]);
  
    const [madonhang,setmadonhang] = useState(0);
   
    useEffect(() => {
      generateRandomNumber();
    }, []);
  
    const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 10000); // Thay đổi 1000 thành phạm vi số bạn muốn
      setmadonhang(randomNumber);
    };
  
    // const [inputValues, setInputValues] = useState([]);
    const checkString = JSON.stringify(check);
   const objectArray = JSON.parse(checkString);

// Lấy chỉ giá trị của thuộc tính "title" vào một mảng mới
const titles = objectArray.map(obj => obj.title);
console.log(titles.join(', '));
const danhsachnganhang = [
  'chọn ngân hàng',
  'Vietcombank',
      'BIDV',
      'NCB',
      
      'VietinBank',
      'Eximbank',
      'Sacombank',
      'ACB',
      'SeABank',
      'TPBank',
      'MBBank',
      'Kienlongbank',
      'PVcomBank',
      'BacABank',
      'OCB',
      'DongA Bank',
      'NamABank',
      'PGBank',
      'SCB',
      'VIB',
      'Techcombank',
      'IVB',
      'Maritime Bank',
      'Saigonbank'
]


  
   const [nganhangclient,setnganhangclient] = useState("");
   console.log(nganhangclient);
   const savedTongcart = localStorage.getItem('tongcart');
const initialTongcart = savedTongcart ? JSON.parse(savedTongcart) : 0;

// Set the initial value of tongcart using the value retrieved from localStorage
const [tongcart, settongcart] = useState(initialTongcart);
  
    const userData = localStorage.getItem('userData');
    const user = userData ? JSON.parse(userData).user : null;
    const userId = user ? user.id : null;

    const handleLogout = ()=>{
        localStorage.removeItem('userData');
      };     
      const [slsptgh,setslsptgh] = useState(0);
    
   useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASEURL}/api/check/${userId}`)
        .then((response)=>{
          
            setcheck(response.data);
            // const newInputValues = response.data.map((sanpham) => `${sanpham.title} - (size: ${sanpham.size})`);
            // setInputValues(newInputValues);
           
        })
        .catch((error) => {
            console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
          });
    },[]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/slsptgh`)
          .then((response) => {
          
            setslsptgh(response.data); 
      
          })
          .catch((error) => {
            console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
          });
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append('tenspclient', titles.join(', '));
          formData.append('tongtienclient', tongcart);
          formData.append('nganhangclient', nganhangclient);
          formData.append('madonhangclient', madonhang);
          formData.append('dkdn_id', userId);
      
          await axios.post(`${process.env.REACT_APP_BASEURL}/api/checkclient`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          const checkoutResponse = await axios.post(`${process.env.REACT_APP_BASEURL}/api/checkout/${userId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            data: {
              redirect: true,
            },
          });
      
          alert('Chuyển đến trang thanh toán');
      
          window.location.href = checkoutResponse.data.data;
        } catch (err) {
          console.log(err);
          alert('Vui lòng điền đầy đủ thông tin!');
        }
      };
      
      const location = useLocation();
      const [emailSent, setEmailSent] = useState(false);
      
      useEffect(() => {
        const handlePaymentCompletion = async () => {
          const queryParams = new URLSearchParams(location.search);
          const vnpAmount = queryParams.get('vnp_Amount');
      
          if (vnpAmount && !emailSent) {
            try {
              const data = JSON.parse(localStorage.getItem('formData'));
              const formData = new FormData();
              formData.append('hovaten', data.hovaten);
              formData.append('diachi', data.diachi);
              formData.append('tinh', data.tinhtp);
              formData.append('quanhuyen', data.quanhuyen);
              formData.append('phuongxa', data.phuongxa);
              formData.append('sdt', data.sdt);
              formData.append('thongtinbosung', data.thongtinbosung);
              formData.append('pttt', data.pttt);
              formData.append('sanpham', data.sanpham);
              formData.append('dkdn_id', data.dkdn_id);
              formData.append('thanhtien', data.thanhtien);
              formData.append('tinhtrangdon', data.tinhtrangdon);
      
              await axios.post(`${process.env.REACT_APP_BASEURL}/api/dondathang`, formData, {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              });
      
              await axios.post(`${process.env.REACT_APP_BASEURL}/api/send-mail/${userId}`);
              await axios.delete(`${process.env.REACT_APP_BASEURL}/api/giohang/${userId}/delete-all`);
      
              setEmailSent(true); // Move the setEmailSent inside the try block to avoid setting it if an error occurs
      
              alert('Bạn đã đặt hàng thành công');
              window.location.href = 'http://localhost:3000';
            } catch (err) {
              console.log(err);
            }
          }
        };
      
        handlePaymentCompletion();
      }, [location.search, emailSent]);
      
      
      
      
    
     



  return (
    <div >
      <Navbar/>
<div className="containercheckout">
<h2>Thanh toán qua VNPAY</h2>
<form onSubmit={handleSubmit}>
         <div className="tensanphamcheckout">
      <label>Sản phẩm đặt mua</label>
      {check.map((sanpham) => {
  const { title, size } = sanpham;
  return (
    <input
      className="sotienchek"
      type="text"
      value={`${title} - (size: ${size})`}
      key={sanpham.id} // Don't forget to add a unique key prop when rendering a list of elements
    />
  );
})}

   
         </div>

         <div className="tensanphamcheckout">
            <label>Số tiền</label>
            <input className="sotienchek" value={tongcart} type="text" />
         </div>

         <div className="tensanphamcheckout" style={{marginTop:10}}>
         <label>Ngôn ngữ</label>
  <select name="" id="">
    <option value="">Ngôn ngữ</option>
    <option value="tiengviet">Tiếng Việt</option>
    <option value="tienganh">Tiếng Anh</option>
  </select>
</div>


         <div className="tensanphamcheckout">
            <label style={{fontSize:18,fontWeight:550,color:'red'}}>Vui lòng chọn ngân hàng thanh toán</label>
            <select value={nganhangclient} onChange={(e)=>setnganhangclient(e.target.value)} name="" id="">
              {
              danhsachnganhang.map(dsnh=>{
                return(
                <option value={dsnh}>{dsnh}</option>
              );
            })
              
              }
                </select>
           
         </div>

         <div className="tensanphamcheckout">
            <label>Mã đơn hàng</label>
            <input className="sotienchek" value={madonhang} type="text" />
         </div>


         <button type="submit" className="btn btn-primary">Chuyển đến Thanh toán VNPAY</button>

      </form>
</div>
      <Footer/>
    </div>
  )
}
