import React, { useState, useEffect } from "react";
import '../App.css'
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from "./Footer";


export default function ProductCategory(props) {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/categoryproduct`)
      .then((response) => {
        setcategory(response.data[props.brand]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.brand]);

  return (
    <div>
      <Navbar />
      <div className="tieudecategory" style={{ display: 'flex', height: 35, marginLeft: 200 }}>
        <p style={{ color: 'grey' }}><Link to="/"> Trang chủ / </Link></p> <p style={{ color: 'black', fontSize: 18, fontWeight: 550 }}> Bộ sưu tập mới</p>
      </div>
      <div className="containercategory" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="leftcategory" style={{ width: '23%' }}>

          <div className="damhmuccategory" style={{ position: "absolute", top: 35, marginTop: 50.5 }}>
            <div className="categorynho" style={{ width: 310 }}>
              <ul class="list-group my-4">
                <li class="list-group-item"><Link to="/category/sominu"> Sơ mi nữ </Link></li>
                <li class="list-group-item"><Link to="/category/chanvay"> Chân váy </Link></li>
                <li class="list-group-item"><Link to="/category/vaydamcongso"> Váy đầm công sở </Link></li>
                <li class="list-group-item"><Link to="/category/bosuutapmoi"> Bộ sưu tập mới </Link></li>
                <li class="list-group-item"><Link to="/category/somichanvay"> Sơ mi chân váy </Link></li>
                <li class="list-group-item"><Link to="/category/sandouudai"> Săn đồ ưu đãi </Link></li>
                <li class="list-group-item"><Link to="/category/xahang"> Xả hàng </Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rightcategory" style={{ width: '53.5%', marginLeft: 20 }}>
          <img src="https://cdn.pancake.vn/1/s1440x1024/fwebp/2d/d4/5e/42/7bb34b4e57c87cd3a70611bdd5767704c9c267beb36a9ac787e09a2f.png" style={{ width: '100%', height: 320 }} alt="" />
          <div className="categoryproduct">

            {
              category.map(cate => {
                return (
                  <div className="vaycategory">
                    <div className="vay1category">
                      <img className="img-fluid" style={{ width: 187, height: 300 }} src={`${process.env.REACT_APP_BASEURL}/upload/${cate.hinhanh}`} alt="" />
                      <p className="ahoandzcategory"><Link to={`/Detail/${cate.title}/${cate.id}`}>{cate.title}</Link></p>
                      <p>{cate.gia}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    <Footer/>

    </div>

  )
}
