import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css"
import {TiMinus} from 'react-icons/ti'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";

export default function Detail() {
const [detailtitle,setdetailtitle] = useState("");
const [selectedSize, setSelectedSize] = useState('');
const [detailgia,setdetailgia] = useState(0);
const [slsp, setslsp] = useState(1);
const [message, setMessage] = useState('');
const [detailtong,setdetailtong] = useState(0);

  const [position, setPosition] = useState(0);
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const [detail, setdetail] = useState();
  const { id } = useParams();

  
  
    const userData = localStorage.getItem('userData');
    const user = userData ? JSON.parse(userData).user : null;
    const userId = user ? user.id : null;


  const handleSizeClick = (size) => {
    setSelectedSize(size, () => {
      console.log(selectedSize);
    });
  };

  const buttons = document.querySelectorAll('.size-button');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Ngăn chặn hành động mặc định của button (tải lại trang)
      buttons.forEach((button) => {
        button.classList.remove('selected'); // Loại bỏ class selected của tất cả các button
      });
      button.classList.add('selected'); // Thêm class selected cho button được nhấn
    });
  });

  const up = (event) => {
    event.preventDefault(); // Ngăn chặn mặc định hành động của button
    setslsp(slsp + 1);
    return false;
  };
  
  const down = (event) => {
    event.preventDefault(); // Ngăn chặn mặc định hành động của button
    if (slsp > 1) {
      setslsp(slsp - 1);
    } 
    return false;
  };

  const toggleVisibility = () => {
    const element = document.getElementById("element-to-toggle");
    element.classList.toggle("hidden");
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => {
        const newPosition = position + 0.25;
        if (newPosition > windowWidth) {
          setTimeout(() => {
            setPosition(0);
          }, 1000); // wait for 1 seond before resetting the position and starting over
        }
        return newPosition;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [windowWidth]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setPosition(0);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/detail/${id}`);
    setdetail(response.data);
  
   
  };

  fetchData();
}, [id]);

useEffect(() => {
  if (detail?.product) {
    setdetailgia(detail.product.gia);
  }
}, [detail]);



useEffect(() => {
  const tongValue = slsp * calculateParent(detailgia)*1000;
  setdetailtong(tongValue);
}, [slsp, detailgia]);

const calculateParent = (detailgia) => {
  // your calculation logic here
  return detailgia;
};

useEffect(() => {
  if (detail && detail.product) { // kiểm tra detail có tồn tại và có thuộc tính product không
    setdetailtitle(detail.product.title);
  }
}, [detail]);


async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', detailtitle);
      formData.append('size', selectedSize);
      formData.append('gia', detailgia);
      formData.append('soluong', slsp);
      formData.append('tong', detailtong);
      formData.append('product_id', id);
      formData.append('dkdn_id', user.id);
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/cart/${userId}`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });

      if (response.data.message) {
        setMessage(response.data.message);
        alert("sản phẩm đã có trong giỏ hàng");
      } else {
        alert("Đã thêm sản phẩm vào giỏ hàng thành công");window.location.reload(); 
       
      }

    } catch (err) {
    if(!userId){
      alert('bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng');
    }
else{
      alert("Vui lòng chọn size sản phẩm");
    }
  }
  }


if (!detail) {
  return <div>Loading...</div>;
}



  return (
    <div style={{backgroundColor:"#fef6f5"}}>
      <Navbar/>
<div className="container">
<p className='kasflak'><Link>Trang chủ</Link>/ <Link>Váy đầm công sở</Link>/ <Link>Đầm xoè hoa nhí xanh cam phối cổ nơ cách điệu</Link></p>
    <div className="titlechung">
    
    <hr></hr>
        <div className="left">
         <h4>SẢN PHẨM MỚI</h4>
           <div className="nd1">
            <div className="nd1fake">
            <img src="https://cdn.pancake.vn/1/s80x80/fwebp/7a/70/b8/8a/fc581b19cedd026409247c32fcbe4a16787110879767e6be804e710c.jpg" alt="" />
            <div className="thep">
            <p><Link>Đầm ôm đỏ nơ eo DH2767</Link></p>
            <p className='price'>299.000₫ </p>
           </div>
           </div>
           </div>
<hr />

           <div className="nd1">
            <div className="nd1fake">
            <img src="https://cdn.pancake.vn/1/s80x80/fwebp/c5/9b/4c/34/d89865daf47c1611181a50e8f03ca60c7c8c4f5005c4b164c7cb4723.jpg" alt="" />
            <div className="thep">
            <p><Link>Đầm ôm xanh đá nơ eo cổ thuyền</Link></p>
            <p className='price'>299.000₫ </p>
           </div>
           </div>
           </div>

<hr />

           <div className="nd1">
            <div className="nd1fake">
            <img src="https://cdn.pancake.vn/1/s1600x1600/fwebp/7e/4a/aa/9f/c1253fa3c03eed39cc83ea12137228dd429230504431be4e63ce607b.jpg" alt="" />
            <div className="thep">
            <p><Link>Đầm xòe hoa phối chân xanh tím than</Link></p>
            <p className='price'>299.000₫ </p>
           </div>
           </div>
           </div>

<hr />

           <div className="nd1">
            <div className="nd1fake">
            <img src="http://127.0.0.1:8000/upload/75306ee4e849922d7afdcff62eb3857c44f82d2121088ea3600ce944.webp" alt="" />
            <div className="thep">
            <p><Link>Đầm hoa xanh sát nách phối cổ vuông</Link></p>
            <p className='price'>299.000₫ </p>
           </div>
           </div>
           </div>

<hr />

           <div className="nd1">
            <div className="nd1fake">
            <img src="https://cdn.pancake.vn/1/s1600x1600/fwebp/e0/2a/e9/3f/2a5a3ccdc309b6752e77a0760fe46f8cdde0866814a64654d8b59c71.jpg" alt="" />
            <div className="thep">
            <p><Link>Đầm xoè hồng cổ tròn phối nơ</Link></p>
            <p className='price'>299.000₫ </p>
           </div>
           </div>
           </div>
        </div>


        <div className="center"> 
              <img className='img-fluid' src={`${process.env.REACT_APP_BASEURL}/upload/${detail.product.hinhanh}`} alt="" />
        </div>

        <div className="right">
        <form onSubmit={save}>
  <h2 name="detailtitle" >{detail.product.title}</h2>
  <span className='tinhtrang'>Tình trạng: {detail.tinhtrang}</span>
  
  <div className='price-container'>
    <span name="" style={{fontSize:21,color:'red',marginTop:0,fontWeight:500}} className='price'>giá: {detail.product.gia} đ</span><br></br>
      
    <div className="size-container">
    <b style={{fontSize:20}} className='buttonsize'>Size:</b>
    <button
      onClick={() => handleSizeClick("S")}
      className={`size-button ${selectedSize === 'S' ? 'selected' : ''}`}
      style={{fontSize:16,border: '1px solid gainsboro',marginLeft:5,width:45,height:40}}
    >
      S
    </button>
    <button
      onClick={() => handleSizeClick("M")}
      className={`size-button ${selectedSize === 'M' ? 'selected' : ''}`}
      style={{fontSize:16,border: '1px solid gainsboro',marginLeft:5,width:45,height:40}}
    >
      M
    </button>
    <button
      onClick={() => handleSizeClick("L")}
      className={`size-button ${selectedSize === 'L' ? 'selected' : ''}`}
      style={{fontSize:16,border: '1px solid gainsboro',marginLeft:5,width:45,height:40}}
    >
      L
    </button>
    <button
      onClick={() => handleSizeClick("XL")}
      className={`size-button ${selectedSize === 'XL' ? 'selected' : ''}`}
      style={{fontSize:16,border: '1px solid gainsboro',marginLeft:5,width:45,height:40}}
    >
      XL
    </button>
    <button
      onClick={() => handleSizeClick("XXL")}
      className={`size-button ${selectedSize === 'XXL' ? 'selected' : ''}`}
      style={{fontSize:16,border: '1px solid gainsboro',marginLeft:5,width:45,height:40}}
    >
      XXL
    </button>
  </div>



    <div className="quantity-container">
      <b className='quantity'>
        <button onClick={down} style={{fontSize:20,width:20,height:40,textAlign:'center',alignItems:'center',justifyContent:'center',background:'#f9f9f9',border: '1px solid gray'}}>-</button>
        <input style={{width:50,height:40,fontSize:20,alignItems:'center',textAlign:'center',border: '1px solid gray'}}  type="text" value={slsp} />
        <button onClick={up} style={{fontSize:20,width:20,height:40,textAlign:'center',alignItems:'center',justifyContent:'center',background:'#f9f9f9',border: '1px solid gray'}}>+</button>
      </b>
      <button style={{border: '1px solid #dd9c3f',fontWeight: 500,color:'white',width:210,height:40,borderRadius:35,fontSize:20,background:'#dd9c3f'}}>Thêm vào giỏ hàng</button>
    
      
    </div>
<div style={{float:'left'}}>
    <p style={{fontSize:19,float:'left'}}>thông tin sản phẩm: </p>
    <p style={{fontSize:19,float:'left'}}><TiMinus/>Miễn phí vận chuyển với đơn hàng có giá trị trên 599K<br></br>
<TiMinus/>Giao hàng toàn quốc từ 2-4 ngày làm việc<br></br>
<TiMinus/>Đổi trả sản phẩm trong 7 ngày, từ ngày nhận được sản phẩm<br></br>
<TiMinus/>Hotline & Zalo hỗ trợ KH: 0372454024</p>
 
</div>


 </div>
 </form>
</div>
    
   

    </div>
    <br></br>

    <div className="motasp">
      <div className="tieude">
      <p style={{fontSize: 16,textTransform: 'uppercase',fontWeight:500,float:'left',padding:'10px'}}>MÔ TẢ / <span> ĐÁNH GIÁ</span></p>
      <br></br><br></br>
      <div className="chitietsp">
        <div className="chitietsp1">
      <h2>Chất liệu</h2><br/><br/>
      <p><TiMinus/>{detail.chatlieu}</p>
   
</div>



<div id="element-to-toggle" className={isVisible ? "" : "hidden"}>
<div className="chitietsp2">
      <h2>Thế mạnh sản phẩm</h2><br/>
      <p><TiMinus/>{detail.themanhsp}</p><br/>
      <br/>
      </div>

      <div className="chitietsp3">
      <h2>Thông số sản phẩm</h2><br/>
      <p>(Vai)*(Ngực)*(Eo) cm</p>
      <p><TiMinus/>Size S: 37*85*66</p><br/>
      <p><TiMinus/>Size M: 38*88*71</p><br/><br/>
      <p><TiMinus/>Size L: 39*92*76</p><br/>
      <p><TiMinus/>Size XL: 40*96*80</p><br/><br/>
</div>
<div className="chitietsp4">
      <h2>Thông số người mẫu</h2><br/>
    
      <p><TiMinus/>Chiều cao 1m65</p><br/>
      <p><TiMinus/>Cân nặng: 48kg</p><br/>
      <p><TiMinus/>Vòng 1: 85 cm</p><br/>
      <p><TiMinus/>Vòng 2: 61 cm</p><br/>
      <p><TiMinus/>Vòng 3: 89 cm</p><br/>
      <p><TiMinus/>Mặc size S</p><br/><br/>
</div>

<div className="chitietsp5">
      <h2>Hướng dẫn giặt là</h2><br/>
    
      <p><TiMinus/>Giặt tay hoặc giặt máy ở chế độ giặt nhẹ</p><br/>
      <p><TiMinus/>Giặt nước lạnh</p><br/>
      <p><TiMinus/>Giặt với sản phẩm cùng màu</p><br/>
      <p><TiMinus/>Lộn trái khi giặt</p><br/>
      <p><TiMinus/>Không tẩy</p><br/>
      <p><TiMinus/>Phơi trong bóng mát</p><br/>   
      
      </div>
    </div>
    <button style={{background:'gray',float:'left', border:'1px solid #cc9c69', borderRadius:15, height:40}} onClick={() => {
        setIsVisible(!isVisible);
        toggleVisibility();
      }}>
        {isVisible ? "Ẩn" : "Hiện"} chi tiết sản phẩm
      </button>
      </div>
    </div>
   
   
</div>

<div className="splq">

      <div className="thegioiphaidep" style={{backgroundColor:'white'}}>
  <div className="tgpd1">
  <span className='tgpd'>THẾ GIỚI CỦA PHÁI ĐẸP</span>
  <p className='eqeqr'>Tổng hợp những kiến thức về thời trang, làm đẹp và những sự kiện thời trang khác</p>
  </div>
<div className="tgpd2">
  <div className="slidechung">
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /><br></br>
     <p style={{background:'brown'}}>23 Tháng 8 2022</p>
     <h5><Link to="/hrctddhmn"> HIỂU RÕ CƠ THỂ MÌNH ĐỂ ĐẸP HƠN MỖI NGÀY </Link> </h5>
     <BsFillPersonFill/> Thời trang hot
     <p className='slidea'>Đừng mãi chỉ chạy theo xu hướng, hiểu rõ cơ thể mình mới là điều quan trọng nhất để mặc đẹp mỗi ngày. Hy vọng những chia sẻ của Citi Mode sẽ phần nàng tự tin hơn trong khoảng lựa chọn trang phục để luôn tỏa sáng nhất nàng nhé.</p>
     <h6><Link to="/hrctddhmn">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/5e/ab/18/df/6416d367b0945924e5f8bcd24547c2e73f41e87a225bf90955fed4da.png" alt="" /><br></br>
     <p style={{background:'brown'}}>23 Tháng 8 2022</p>
     <h5><Link to="/nbvanvddx">  NỔI BẬT VÀ ẤN TƯỢNG VỚI ĐẦM DÁNG XÒE !!!</Link> </h5>
     <BsFillPersonFill/> Thời trang hot
     <p className='slidea'>Nếu những thiết kế đầm suông mang đến sự thoải mái, trẻ trung hay những kiểu dáng bodycon ấn tượng cho vẻ ngoài cuốn hút thì những thiết kế đầm xòe lại không làm cho các Quý cô thất vọng với sự nhẹ nhàng và vô cùng nữ tính.</p>

 <h6><Link to="/nbvanvddx">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>

  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/1a/4b/67/5e/514d87737939c2677f376420463b67867af83ce140ae07511969bcd5.png" alt="" /><br></br>
     <p style={{background:'brown'}}>23 Tháng 8 2022</p>
     <h5><Link to="/cdcvbc">  10 cách diện chân váy bút chì thanh lịch</Link> </h5>
     <BsFillPersonFill/> Thời trang hot
     <p className='slidea'>Chân váy bút chì là 1 trong những item kinh điển của phụ nữ công sở. Item này vừa đơn giản, tôn dáng lại mang cảm giác thanh lịch, chỉn chu cho người mặc. Phụ nữ Hàn cũng thường xuyên chọn diện chân váy bút chì khi đến sở làm. Thậm chí, họ còn biến tấu, mix&match chân váy bút chì với nhiều item khác biệt để có được những bộ cánh mới mẻ mỗi ngày.</p>

 <h6><Link to="/cdcvbc">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>

  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/b0/37/62/c3/86831d6accfa0b3b96e0715a687b007403ae0f550d617e91b26cb288.png" alt="" /><br></br>
     <p style={{background:'brown'}}>23 Tháng 8 2022</p>
     <h5><Link to="/sdttt">  SẮC ĐỎ TRONG THỜI TRANG</Link> </h5>
     <BsFillPersonFill/> Thời trang hot
     <p className='slidea'>Kể từ thời cổ đại, màu đỏ đại diện cho cuộc sống sung túc, cho nguồn sức mạnh dồi dào và niềm đam mê cháy bỏng. Trong thời trang, không ít những món đồ màu đỏ đã trở thành biểu tượng thương hiệu riêng cũng như đại diện thương hiệu chung. Trang phục màu đỏ có sức mê hoặc khó cưỡng, tạo hiệu ứng thị giác mạnh mẽ, là cách các nàng thể hiện bản lĩnh tự tin và khả năng làm chủ tình huống.</p>
 <h6><Link to="/sdttt">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/51/02/84/b0/b674ce1842630a4d6da83c96fa6397a4dcb6b39f50658312d66aa088.png" alt="" /><br></br>
     <p style={{background:'brown'}}>23 Tháng 8 2022</p>
     <h5><Link to="/cctpsm"> Các công thức phối sơ mi + chân váy cả tuần cho nàng công sở</Link> </h5>
     <BsFillPersonFill/> Thời trang hot
     <p className='slidea'>Trong trường hợp quá lười chọn đồ hoặc bí ý tưởng, nàng cứ diện một set đồ an toàn mà chuẩn nhất cho chốn công sở, chính là nguyên set đồ vest. Áo vest đi cùng chân váy luôn là outfit đạt điểm 10 về độ lịch sự, mang đậm hơi thở quý cô công sở và gần như không có điểm trừ. Outfit này chỉ có đôi chút bất tiện nếu diện trong thời tiết nóng bức. Bởi vì thế nàng hãy ưu tiên chọn set đồ này cho những ngày khí hậu mát mẻ, đặc biệt trong những ngày có sự kiện quan trọng như họp hành, gặp mặt khách hàng để đảm bảo nét thanh lịch, kín đáo cho chính mình nàng nha!</p>
 <h6><Link to="/cctpsm">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/15/63/2d/28/3a1a46e4647e452146fa35e04913214f6f53efc6e382b9958d9f96db.png" alt="" /><br></br>
     <p style={{background:'brown'}}>23 Tháng 8 2022</p>
     <h5 style={{textAlign:'center'}}><Link to="/dlmj"> ĐI LÀM MẶC GÌ?</Link> </h5>
     <br></br>
     <br></br>
     <BsFillPersonFill/> Thời trang hot
     <p className='slidea'>Thời trang không chỉ là lĩnh vực liên quan đến phạm trù thẩm mỹ mà ở trong đó còn ẩn chứa những bí mật hết sức thú vị. Có thể nàng chưa biết, mỗi màu sắc trong thời trang đều nói lên một tính cách ẩn sâu trong con người nàng. Và dưới đây là ý nghĩa màu sắc thời trang và cách phối màu quần áo phù hợp cho mỗi ngày đi làm nàng nha!</p>
      <h6><Link to="/dlmj">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    
    </div>
  </div>






  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/9c/f3/f1/c4/78ce99cfcdcb73ec53861b00181ab03cc792fe0d34cd255b48067862.png" alt="" /><br></br>
     <p style={{background:'brown'}}>23 Tháng 8 2022</p>
     <h5><Link to="/vdcscc">VÁY ĐẦM CÔNG SỞ CAO CẤP: CỰC SANG TRỌNG VÀ TINH TẾ</Link> </h5>
     <BsFillPersonFill/> Thời trang hot
     <p className='yasuo'>Không xa hoa lộng lẫy, không cần quá nổi bật giữa đám đông, những mẫu đầm hàng hiệu luôn sở hữu vẻ đẹp lung linh đến diệu kỳ, khiến chị em không thể nào rời mắt. </p>
      <h6><Link to="/vdcscc">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    
    </div>
  </div>
</div>
</div>
</div>



</div>
    </div>
    <Footer/>
      </div>

  )
}