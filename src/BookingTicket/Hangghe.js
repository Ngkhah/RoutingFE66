import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datVeAction } from '../redux/action/BookingTicketAction';

class Hangghe extends Component {
    renderGhe =()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
            
            let cssGheDaDat = '';
            let disabled = false;
            //trạng thái ghế đã dược dặt
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }
            //xét ghế đang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe);
            if(indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon'
            } 
            return <button onClick={()=>{
                this.props.datGhe(ghe)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>{ghe.soGhe}</button>
        })
    }
    renderSoHangGhe =()=>{
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button className="rowNumber">{hang.soGhe}</button>

        })
        
    }
    renderHangGhe= ()=>{
        if(this.props.soHangGhe===0){
                return <div className="ml-4">
                    {this.props.hangGhe.hang} {this.renderSoHangGhe()}
                </div>
        }else{
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }
    render() {
        return (
            <div className="text-light text-left ml-5" style={{fontSize:30}}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        danhSachGheDangDat: state.TicketReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        datGhe: (ghe)=>{
            dispatch(datVeAction(ghe))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hangghe)