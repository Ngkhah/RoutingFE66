import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyVeAction } from '../redux/action/BookingTicketAction'

class ThongTinDatVe extends Component {
    render() {
        return (
            <div>
                <div className="mt-0">
                    <button className="gheDuocChon"></button><span className="text-light" style={{fontSize:'30px'}}>Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon"></button><span className="text-light" style={{fontSize:'30px'}}>Ghế đang đặt</span>
                    <br />
                    <button className="gheChuaChon"></button><span className="text-light" style={{fontSize:'30px'}}>Ghế chưa đặt</span>
                </div>

                <div className="mt-5">
                    <table className="table text-center" border="2">
                        <thead>
                            <tr className="text-light" style={{fontSize:'30'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()} VNĐ</td>
                                    <td><button className="btnHuy" onClick={()=>{
                                        this.props.dispatch(huyVeAction(gheDangDat.soGhe))
                                    }}><i class="far fa-trash-alt"></i></button></td>
                                </tr>
                            })}
                            
                        </tbody>
                        <tfoot>
                            <tr className="text-light">
                                <td></td>
                                <td>Tổng Tiền: </td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien+= gheDangDat.gia;
                                },0).toLocaleString()} VNĐ</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = state=>{
        return {
            danhSachGheDangDat: state.TicketReducer.danhSachGheDangDat
        }
    
}
export default connect(mapStateToProps) (ThongTinDatVe)
