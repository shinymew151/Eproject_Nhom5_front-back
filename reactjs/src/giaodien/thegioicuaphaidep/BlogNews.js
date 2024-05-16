import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";

function BlogNews(props){
    return(
        <div>
            <Navbar/>
        <div className="cointainerhrct" style={{display:'flex',margin:'0 auto',justifyContent:'center'}}>
        <div className="lefthrct" style={{width:'25%'}}>
            <h4>BÀI VIẾT MỚI</h4>
            <table style={{border: '1px solid gray'}}>
               
                <tr style={{height:70,border: '1px solid black'}}>
                    <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                    <th><Link to="/hrctddhmn">hiểu rõ cơ thể để đẹp hơn mỗi ngày</Link></th>
                </tr>
                <tr style={{height:70,border: '1px solid black'}}>
                    <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                    <th><Link to="/nbvanvddx">NỔI BẬT VÀ ẤN TƯỢNG VỚI ĐẦM DÁNG XÒE !!!</Link></th>
                </tr>
                <tr style={{height:70,border: '1px solid black'}}>
                    <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                    <th><Link to="/cdcvbc">10 cách diện chân váy bút chì thanh lịch</Link></th>
                </tr>
                <tr style={{height:70,border: '1px solid black'}}>
                    <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                    <th><Link to="/sdttt">SẮC ĐỎ TRONG THỜI TRANG</Link></th>
                </tr>
                <tr style={{height:70,border: '1px solid black'}}>
                    <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                    <th><Link to="/cctpsm">Các công thức phối sơ mi + chân váy cả tuần cho nàng công sở</Link></th>
                </tr>
                <tr style={{height:70,border: '1px solid black'}}>
                    <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                    <th><Link to="/dlmj">ĐI LÀM MẶC GÌ?</Link></th>
                </tr>
                <tr style={{height:70,border: '1px solid black'}}>
                    <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                    <th><Link to="/vdcscc">VÁY ĐẦM CÔNG SỞ CAO CẤP: CỰC SANG TRỌNG VÀ TINH TẾ</Link></th>
                </tr>
    
              </table>
        </div>
        <div className="righthrct" style={{width:'55%',border:'1px solid gray',borderRadius:22,marginLeft:25}}>
         <span style={{textAlign: 'center', color:'Red', fontSize: 'xx-large'}}>Tin tức & Sự kiện</span><br></br>
         <h1 style={{fontWeight: 600,
    fontSize: '26px',textAlign:'center', marginBottom:'-20px'}}>{props.span1}</h1><br></br><br></br>
    <span style={{float:'left'}}>{props.span2}</span>

    <img style={{width:'100%',height:310}} src={props.img1} alt="" />

    <span style={{float:'left'}}>{props.span3} 
    </span>
    <br></br>
    <span style={{float:'left'}}>{props.span4} 
    </span>
    <br></br>
    <span style={{textAlign:'center'}}>{props.span5} 
    </span>
    <br></br>

    <img style={{width:'100%'}} src={props.img2} alt="" />

    <span style={{float:'left'}}>{props.span6} 
    </span>
    <br></br>
    <span style={{float:'left'}}>{props.span7} 
    </span>
    <br></br>
    <img style={{width:'100%'}} src={props.img3} alt="" />
    <br></br>
    <span style={{textAlign:'center'}}>{props.span8} 
    </span>
    <br></br>
    
    <img style={{width:'100%'}} src={props.img4} alt="" />
    <br></br>
    <span style={{float:'left'}}>{props.span9}
    </span>
    <br></br>
    <span style={{float:'left'}}>{props.span10} 
    </span>
    <br></br>

    <span style={{textAlign:'center'}}>{props.span11} 
    </span>
    <br></br>
    <img style={{width:'100%'}} src={props.img5} alt="" />
    <br></br>
    <span style={{float:'left'}}>{props.span12}
    </span>
    <br></br>
    <span style={{float:'left'}}>{props.span13}
    </span>

    <span style={{textAlign:'center'}}>{props.span14} 
    </span>
    <br></br>
    <img style={{width:'100%'}} src={props.img6} alt="" />
    <br></br>
    <span style={{float:'left'}}>{props.span15}
    </span>
    <br></br>
    <span style={{float:'left'}}>{props.span16}
    </span>

    <span style={{textAlign:'center'}}>{props.span17} 
    </span>
    <br></br>
    <img style={{width:'100%'}} src={props.img7} alt="" />
    <br></br>
    <span style={{float:'left'}}>{props.span18}
    </span>
    <br></br>
    <span style={{float:'left'}}>{props.span19}
    </span>
    <br></br>
    <span style={{float:'left'}}>{props.span20}
    </span>

        </div>
        </div>
        <Footer/>
        </div>
    );
}

export default BlogNews;
