import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homeadmin from './admin/Homeadmin';
import Home from '../src/giaodien/HomePage/Home';
import Detail from '../src/giaodien/ProductPage/Detail';

import Dangnhapadmin from './admin/Dangnhapadmin';

import Dk from '../src/giaodien/HomePage/Dangki';
import Dn from '../src/giaodien/HomePage/Dangnhap';

import Product from './admin/Product';
import Detail_product from './admin/Detail_product';
import Cart from '../src/giaodien/ThanhToan/Cart';
import Thanhtoan from '../src/giaodien/ThanhToan/Thanhtoan';
import Sominu from '../src/giaodien/ProductPage/Sominu';
import Chanvay from '../src/giaodien/ProductPage/Chanvay';
import Vaydamcongso from '../src/giaodien/ProductPage/Vaydamcongso';
import Bosuutapmoi from '../src/giaodien/ProductPage/Bosuutapmoi';
import Somichanvay from '../src/giaodien/ProductPage/Somichanvay';
import Sandouudai from '../src/giaodien/ProductPage/Sandouudai';
import Xahang from '../src/giaodien/ProductPage/Xahang';
import Dondathang from './admin/Dondathang';
import Thongtinkh from './admin/Thongtinkh';
import Hrctddhmn from './giaodien/thegioicuaphaidep/Hrctmddhmn';
import Cctpsm from './giaodien/thegioicuaphaidep/Cctpsm';
import Cdcvbc from './giaodien/thegioicuaphaidep/Cdcvbc';
import Dlmj from './giaodien/thegioicuaphaidep/Dlmj';
import Nbvanvddx from './giaodien/thegioicuaphaidep/Nbvanvddx';
import Sdttt from './giaodien/thegioicuaphaidep/Sdttt';
import Vdcscc from './giaodien/thegioicuaphaidep/Vdcscc';
import Kiemtradon from '../src/giaodien/ThanhToan/Kiemtradon';
import Checkout from './giaodien/ThanhToan/Checkout';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeadmin" element={<Homeadmin />} />
          <Route path="/dondathang" element={<Dondathang />} />
          <Route path="/Detail_product" element={<Detail_product />} />
          <Route path="/admin/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Thanhtoan" element={<Thanhtoan />} />
          <Route path="/kiemtradon" element={<Kiemtradon />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/sominu" element={<Sominu />} />
          <Route path="/category/chanvay" element={<Chanvay />} />
          <Route path="/category/vaydamcongso" element={<Vaydamcongso />} />
          <Route path="/category/bosuutapmoi" element={<Bosuutapmoi />} />
          <Route path="/category/somichanvay" element={<Somichanvay />} />
          <Route path="/category/sandouudai" element={<Sandouudai />} />
          <Route path="/category/xahang" element={<Xahang />} />
        
          <Route path="/cctpsm" element={<Cctpsm />} />
          <Route path="/cdcvbc" element={<Cdcvbc />} />
          <Route path="/dlmj" element={<Dlmj />} />
          <Route path="/nbvanvddx" element={<Nbvanvddx />} />
          <Route path="/sdttt" element={<Sdttt />} />
          <Route path="/vdcscc" element={<Vdcscc />} />
          <Route path="/hrctddhmn" element={<Hrctddhmn />} />
          <Route path="/thongtinkhachhang" element={<Thongtinkh />} />
        


          <Route path="/account/login" element={<Dn />} />
          <Route path="/account/register" element={<Dk />} />



     
          <Route path="/admin/dangnhap" element={<Dangnhapadmin />} />
          <Route path="/Detail/:title/:id" element={<Detail />} />
       
        </Routes>
      </Router>
     


    </div>
  );
}

export default App;