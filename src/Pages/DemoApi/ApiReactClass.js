import React, { Component } from 'react';
import { connect } from 'react-redux';

import { layDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction';
class ApiReactClass extends Component {



    getApi =  () => {
        const action = layDanhSachPhimAction();
        this.props.dispatch(action)
    }


    renderPhim = () => {
        return this.props.arrPhim.arrPhim.map((phim,index) => {
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


    render() {
        return (
            <div className="container mt-2">
                <button className="btn btn-success" onClick={()=>{
                    this.getApi()
                }}>Get api phim</button>
                <h3>Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }


    componentDidMount() {
        this.getApi();
    }
}
const mapStateToProps = (state)=> ({
    arrPhim: state.QuanLyPhimReducer
})
export default connect(mapStateToProps)(ApiReactClass);
