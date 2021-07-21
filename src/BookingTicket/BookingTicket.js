import React, { Component } from 'react';
import './BookingTicket.css';
import ThongTinDatVe from './ThongTinDatVe';
import danhSachGheData from '../Data/danhSachGhe.json';
import Hangghe from './Hangghe';

export default class BookingTicket extends Component {

    renderHangGhe=()=>{
        return danhSachGheData.map((hangGhe,index)=>{
            return <div key={index}>
                <Hangghe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }
    render() {
        return (
        <div>
            <div className="bookingMovie" style={{position:"fixed",width:'100%',height:'100%',backgroundImage:"url('./img/BookingTicket/bgmovie.jpg')",backgroundSize:'100%'}}>
                <div style={{position:"fixed",width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="text-warning" style={{fontSize:'45px'}}> ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                                <div className="mt-3 text-light" style={{fontSize:'25px'}}>Màn Hình</div>
                                <div className="" style={{display:"flex",flexDirection:'column',justifyContent:'center'}}>
                                    
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            <div className="col-4">
                                <div className="text-light mt-2" style={{fontSize:'35px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinDatVe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            aaaaaaaa
        </div>
        )
    }
}
