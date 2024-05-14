import {useEffect,useState} from 'react';
import axios from 'axios';


export default function Dashboard() {
    const [record, setRecord] = useState([]);
    const [data,setdata] = useState([]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => setRecord(res));
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/homedashboard`)
    .then((response)=>{
        setdata(response.data)
    })
  },[]);
         
  return (
    <div class="col main pt-5 mt-3">
         
    <nav aria-label="breadcrumb">
    </nav>
    <p class="lead d-none d-sm-block">Add Employee Details and Records</p>

    <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
    </div>
    <div class="row mb-3">
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card bg-success text-white h-100">
                <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                    <div class="rotate">
                        <i class="fa fa-user fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Users</h6>
                    <h1 class="display-4">{data.songuoidung}</h1>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-danger h-100">
                <div class="card-body bg-danger">
                    <div class="rotate">
                        <i class="fa fa-list fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Sản phẩm bán</h6>
                    <h1 class="display-4">{data.sosanpham}</h1>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-info h-100">
                <div class="card-body bg-info">
                    <div class="rotate">
                      <i class="fab fa-twitter fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Số đơn hàng</h6>
                    <h1 class="display-4">{data.tongdonhang}</h1>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-warning h-100">
                <div class="card-body">
                    <div class="rotate">
                        <i class="fa fa-share fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Doanh thu</h6>
                    <h1 class="display-4">{data.doanhthu} vnđ</h1>
                </div>
            </div>
        </div>
    </div>
    <hr/>
</div>
  )
}
