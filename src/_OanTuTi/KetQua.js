import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success">Số bàn thắng: <span className="display-4 text-warning">{this.props.soBanChoi}</span></div>
                <div className="display-4 text-success">Số bàn đã chơi: <span className="display-4 text-warning"> {this.props.soBanChoi}</span></div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ketQua: state.OanTuTiReducer.ketQua,
        soBanThang: state.OanTuTiReducer.soBanThang,
        soBanChoi: state.OanTuTiReducer.soBanChoi
    }
    
}
export default connect(mapStateToProps)(KetQua)