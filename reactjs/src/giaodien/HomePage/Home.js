import React, { useState, useEffect } from "react";
import '../../App.css'
import { HiShoppingCart } from 'react-icons/hi'
import { BsFillAlarmFill } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import { AiOutlineComment } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import video from './Homevideo.mp4'

import axios from 'axios';
export default function Home() {
  const [position, setPosition] = useState(0);
  const [vaydamcs, setVaydamcs] = useState([]);
  const [sominu, setSominu] = useState([]);
  const [chanvay, setChanvay] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


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
    axios.get(`${process.env.REACT_APP_BASEURL}/api/index`)
      .then((response) => {
        console.log(response.data); // Kiểm tra có trả về dữ liệu hay không

        setVaydamcs(response.data.vaydamcs);
        setSominu(response.data.sominu);
        setChanvay(response.data.chanvay);
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);


  return (
    <div>
      <Navbar />
      <div>
      <video src = {video}  height="697" autoPlay muted loop="true" type="video/mp4"></video>
      </div>
      <div>
        <div className="nd">
          <div className="nd1">
            <div className="icon">
              <HiShoppingCart />
            </div>
            <div className="chi">
              <h3>Miễn phí vận chuyển</h3>
              <p>Miễn phí vận chuyển toàn quốc với đơn hàng giá trị trên 599K</p>
            </div>
          </div>

          <div className="nd1">
            <div className="icon">
              <BsFillAlarmFill />
            </div>
            <div className="chi">
              <h3>7 ngày đổi size đổi kiểu</h3>
              <p>Áp dụng theo chính sách đổi trả hàng của thời trang Citi Mode</p>
            </div>
          </div>

          <div className="nd1">
            <div className="icon">
              <FaLock />
            </div>
            <div className="chi">
              <h3>Thanh toán bảo mật</h3>
              <p>Citi Mode cam kết bảo mật 100% với thông tin thanh toán của khách hàng</p>
            </div>
          </div>

          <div className="nd1">
            <div className="icon">
              <AiOutlineComment />
            </div>
            <div className="chi">
              <h3>Hỗ trợ 24/7</h3>
              <p>Bộ phận hỗ trợ thường trực giải đáp thắc mắc cho khách hàng</p>
            </div>
          </div>
        </div>

        <div className="nd2">
          <h3>Váy đầm công sở</h3>
        </div>


        <div className="vay">
          {
            vaydamcs.map(vdcs => {
              return (
                <div className="vay1" key={vdcs.id}>
                  <img className="img-fluid" src={`${process.env.REACT_APP_BASEURL}/upload/${vdcs.hinhanh}`} alt="" />

                  <p className="ahoandz"><Link to={`/Detail/${vdcs.title}/${vdcs.id}`}>{vdcs.title}</Link></p><br></br><br></br><br></br>
                  <p>{vdcs.gia}</p>

                </div>
              );
            })
          }



        </div>



        <div className="nd2">
          <h3>Sơ mi nữ</h3>
        </div>
        <div className="vay">
          {
            sominu.map(sominu => {
              return (

                <div className="vay1" key={sominu.id}>
                  <img className="img-fluid" src={`${process.env.REACT_APP_BASEURL}/upload/${sominu.hinhanh}`} alt="" />

                  <p className="ahoandz"><Link to={`/Detail/${sominu.title}/${sominu.id}`}>{sominu.title}</Link></p><br></br><br></br><br></br>
                  <h6>{sominu.gia}</h6>
                </div>

              );
            })
          }


        </div>



        <div className="nd2">
          <h3>Chân váy</h3>
        </div>
        <div className="vay">

          {
            chanvay.map(chanvay => {
              return (
                <div className="vay1" key={chanvay.id}>
                  <img className="img-fluid" src={`${process.env.REACT_APP_BASEURL}/upload/${chanvay.hinhanh}`} alt="" />
                  <p className="ahoandz"><Link to={`/Detail/${chanvay.title}/${chanvay.id}`}>{chanvay.title}</Link></p><br></br><br></br><br></br>
                  <h6>{chanvay.gia}</h6>
                </div>
              );
            })
          }


        </div><br></br>

        <div class="ykien">
          <h3>Khách hàng nói gì về chúng tôi</h3>
          <div class="container">
          <div className="slidechung">
            <div className="slidecc">
            <div class="blkh">
              <div class="hand" style={{ transform: `translateX(${-position}px)` }}>
                <img class="img-fluid" src="https://cdn.pancake.vn/1/s240x240/fwebp/3e/fe/96/b3/d7501da0d2bf5258b467f9257921c4d31d78f11b1c5e18383f504222.jpg" alt="" />
                <p>Tiền nào của nấy, rất ngại mua đồ chợ, mua sản phẩm của Citi Mode rồi thấy rất ưng và yên tâm!</p>
                <strong>Kim Nguyên</strong>
              </div>
              <div class="hand" style={{ transform: `translateX(${-position}px)` }}>
                <img class="img-fluid" src="https://cdn.pancake.vn/1/s240x240/fwebp/99/77/4e/23/335968d36937efc117420e80a1ea9b288be0e26df7641ee03feebed1.jpg" alt="" />
                <p>Citi Mode giao hàng rất nhanh mà đảm bảo. Hãng uy tín, mình mua nhiều lần rồi nên rất yên tâm chuyển khoản trước!</p>
                <strong>Dương Thúy</strong>
              </div>
              <div class="hand" style={{ transform: `translateX(${-position}px)` }}>
                <img class="img-fluid" src="https://cdn.pancake.vn/1/s240x240/fwebp/6a/d9/d8/f0/a4f3ae039380c5c3c9b13f78306aed9ae58b4bd8e4fa08768509d708.jpg" alt="" />
                <p>Mặc đầm của Citi Mode rất hợp, có bộ sưu tập mới ra là lại sốt xình sịch!</p>
                <strong>Tạ Thị Hiệp</strong>
              </div>
              <div class="hand" style={{ transform: `translateX(${-position}px)` }}>
                <img class="img-fluid" src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien-002.jpg" alt="" />
                <p>sản phẩm đẹp và đăng mua nha mn</p>
                <strong>Tạ Thị Hiệp</strong>
              </div>
              <div class="hand" style={{ transform: `translateX(${-position}px)` }}>
                <img class="img-fluid" src="data:image/jpeg;base64,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" alt="" />
                <p>Mình đã mua và rất ưng với chất liệu ,kiểu dáng sản phẩm</p>
                <strong>Nguyễn Thị Mai</strong>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        

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
     <p style={{background:'brown'}}>24/5/2024</p>
     <h5><Link to="/MatchingDress"> HIỂU RÕ CƠ THỂ MÌNH ĐỂ ĐẸP HƠN MỖI NGÀY </Link> </h5>
     <div style={{color: 'black'}}><BsFillPersonFill/> Thời trang hot</div>
     <p className='slidea'>Đừng mãi chỉ chạy theo xu hướng, hiểu rõ cơ thể mình mới là điều quan trọng nhất để mặc đẹp mỗi ngày. Hy vọng những chia sẻ của Citi Mode sẽ phần nàng tự tin hơn trong khoảng lựa chọn trang phục để luôn tỏa sáng nhất nàng nhé.</p>
     <h6><Link to="/MatchingDress">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/5e/ab/18/df/6416d367b0945924e5f8bcd24547c2e73f41e87a225bf90955fed4da.png" alt="" /><br></br>
     <p style={{background:'brown'}}>24/5/2024</p>
     <h5><Link to="/DressDesign">  NỔI BẬT VÀ ẤN TƯỢNG VỚI ĐẦM DÁNG XÒE !!!</Link> </h5>
     <div style={{color: 'black'}}><BsFillPersonFill/> Thời trang hot</div>
     <p className='slidea'>Nếu những thiết kế đầm suông mang đến sự thoải mái, trẻ trung hay những kiểu dáng bodycon ấn tượng cho vẻ ngoài cuốn hút thì những thiết kế đầm xòe lại không làm cho các Quý cô thất vọng với sự nhẹ nhàng và vô cùng nữ tính.</p>

 <h6><Link to="/DressDesign">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>

  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/1a/4b/67/5e/514d87737939c2677f376420463b67867af83ce140ae07511969bcd5.png" alt="" /><br></br>
     <p style={{background:'brown'}}>24/5/2024</p>
     <h5><Link to="/MatchingSkirts">  10 cách diện chân váy bút chì thanh lịch</Link> </h5>
     <div style={{color: 'black'}}><BsFillPersonFill/> Thời trang hot</div>
     <p className='slidea'>Chân váy bút chì là 1 trong những item kinh điển của phụ nữ công sở. Item này vừa đơn giản, tôn dáng lại mang cảm giác thanh lịch, chỉn chu cho người mặc. Phụ nữ Hàn cũng thường xuyên chọn diện chân váy bút chì khi đến sở làm. Thậm chí, họ còn biến tấu, mix&match chân váy bút chì với nhiều item khác biệt để có được những bộ cánh mới mẻ mỗi ngày.</p>

 <h6><Link to="/MatchingSkirts">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>

  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/b0/37/62/c3/86831d6accfa0b3b96e0715a687b007403ae0f550d617e91b26cb288.png" alt="" /><br></br>
     <p style={{background:'brown'}}>24/5/2024</p>
     <h5><Link to="/RedFashion">  SẮC ĐỎ TRONG THỜI TRANG</Link> </h5>
     <div style={{color: 'black'}}><BsFillPersonFill/> Thời trang hot</div>
     <p className='slidea'>Kể từ thời cổ đại, màu đỏ đại diện cho cuộc sống sung túc, cho nguồn sức mạnh dồi dào và niềm đam mê cháy bỏng. Trong thời trang, không ít những món đồ màu đỏ đã trở thành biểu tượng thương hiệu riêng cũng như đại diện thương hiệu chung. Trang phục màu đỏ có sức mê hoặc khó cưỡng, tạo hiệu ứng thị giác mạnh mẽ, là cách các nàng thể hiện bản lĩnh tự tin và khả năng làm chủ tình huống.</p>
 <h6><Link to="/RedFashion">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/51/02/84/b0/b674ce1842630a4d6da83c96fa6397a4dcb6b39f50658312d66aa088.png" alt="" /><br></br>
     <p style={{background:'brown'}}>24/5/2024</p>
     <h5><Link to="/MatchingShirt"> Các công thức phối sơ mi + chân váy cả tuần cho nàng công sở</Link> </h5>
     <div style={{color: 'black'}}><BsFillPersonFill/> Thời trang hot</div>
     <p className='slidea'>Trong trường hợp quá lười chọn đồ hoặc bí ý tưởng, nàng cứ diện một set đồ an toàn mà chuẩn nhất cho chốn công sở, chính là nguyên set đồ vest. Áo vest đi cùng chân váy luôn là outfit đạt điểm 10 về độ lịch sự, mang đậm hơi thở quý cô công sở và gần như không có điểm trừ. Outfit này chỉ có đôi chút bất tiện nếu diện trong thời tiết nóng bức. Bởi vì thế nàng hãy ưu tiên chọn set đồ này cho những ngày khí hậu mát mẻ, đặc biệt trong những ngày có sự kiện quan trọng như họp hành, gặp mặt khách hàng để đảm bảo nét thanh lịch, kín đáo cho chính mình nàng nha!</p>
 <h6><Link to="/MatchingShirt">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    </div>
  </div>
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/15/63/2d/28/3a1a46e4647e452146fa35e04913214f6f53efc6e382b9958d9f96db.png" alt="" /><br></br>
     <p style={{background:'brown'}}>24/5/2024</p>
     <h5 style={{textAlign:'center'}}><Link to="/MatchingWork"> ĐI LÀM MẶC GÌ?</Link> </h5>
     <br></br>
      <div style={{color: 'black'}}><BsFillPersonFill/> Thời trang hot</div>
     <p className='slidea'>Thời trang không chỉ là lĩnh vực liên quan đến phạm trù thẩm mỹ mà ở trong đó còn ẩn chứa những bí mật hết sức thú vị. Có thể nàng chưa biết, mỗi màu sắc trong thời trang đều nói lên một tính cách ẩn sâu trong con người nàng. Và dưới đây là ý nghĩa màu sắc thời trang và cách phối màu quần áo phù hợp cho mỗi ngày đi làm nàng nha!</p>
      <h6><Link to="/MatchingWork">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    
    </div>
  </div>
  <div className="slidecc">
    <div className="slidefake" style={{ transform: `translateX(${-position}px)` }}>
     <img src="https://statics.pancake.vn/web-media/9c/f3/f1/c4/78ce99cfcdcb73ec53861b00181ab03cc792fe0d34cd255b48067862.png" alt="" /><br></br>
     <p style={{background:'brown'}}>24/5/2024</p>
     <h5><Link to="/OfficeDress">VÁY ĐẦM CÔNG SỞ CAO CẤP: CỰC SANG TRỌNG VÀ TINH TẾ</Link> </h5>
     <div style={{color: 'black'}}><BsFillPersonFill/> Thời trang hot</div>
     <p className='slidea'>Không xa hoa lộng lẫy, không cần quá nổi bật giữa đám đông, những mẫu đầm hàng hiệu luôn sở hữu vẻ đẹp lung linh đến diệu kỳ, khiến chị em không thể nào rời mắt. </p>
      <h6><Link to="/OfficeDress">  Đọc tiếp <AiOutlineArrowRight/></Link></h6> 
    
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
