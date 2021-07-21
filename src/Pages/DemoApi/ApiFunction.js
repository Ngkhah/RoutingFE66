//import axios from 'axios';

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction';


export default function ApiFunction() {
    const {arrPhim} = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        /*
        dispatch(action);
        + action1: apject{type:'tenAction', payload:data}
        + action2: function => thực thi xong mới có kết quả đi dispatch
        */
       //gọi 1 hàm kết quả trả về là 1 hàm chưa gọi (callback function)
       const action = layDanhSachPhimAction('GP01');

        dispatch(action);
    }, []);


    
    
    const renderPhim = () => {
        return arrPhim.map((phim, index) => {
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} alt="..." />
                    <div className="card-body bg-dark text-white">
                        <h3>{phim.tenPhim}</h3>
                        <p>{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="container mt-2">
            <h3>Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}


