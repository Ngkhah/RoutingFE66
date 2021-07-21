import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cuocOanTuTi } from '../redux/action/OanTuTiAction';

class Player extends Component {
    render() {
        console.log('mang dat cuoc', this.props.arrDatCuoc);
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{transform:'rotate(-90deg)'}} src={this.props.arrDatCuoc.find(item=>item.datCuoc===true).hinhAnh}  width={80} height={80} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:200,height:200}} src="./img/OanTuTi/Player.png" alt="./img/OanTuTi/Player.png" />
            <div className="row">
                {this.props.arrDatCuoc.map((item,index)=>{

                    //xét giá trị đạt cược thêm viền cho item
                    let border = {}
                    if(item.datCuoc){
                        border = {border:'3px solid orange'}
                    }
                    return <div className="col-4">
                    <button onClick={()=>{
                        this.props.datCuoc(item.ma)
                    }} style={border} className="btnItem">
                    <img  src={item.hinhAnh} width={50} height={50} alt={item.hinhAnh} />
                    </button>
                </div>
                })}
                
                
            </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        arrDatCuoc: state.OanTuTiReducer.arrDatCuoc
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        datCuoc: (maCuoc)=>{
            dispatch(cuocOanTuTi(maCuoc))
        }
    }

}
export default connect (mapStateToProps,mapDispatchToProps)(Player)