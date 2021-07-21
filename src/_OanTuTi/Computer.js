import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {


        let keyframe =`@keyframes randomItem${Date.now()}{
            0%{top: -50px;}
            25%{top: 100px;}
            50%{top: -50px;}
            75%{top: 100px;}
            100%{top: 0;}
        }`

        return (
                <div className="text-center playerGame">
                    <style>
                        {keyframe}
                    </style>
                    <div className="theThink">
                        <img className="imgRandom" style={{
                            animation:`randomItem${Date.now()} 0.1s`,
                            left:'30%', 
                            transform:'rotate(120deg)'
                        }} src={this.props.computer.hinhAnh} width={80} height={80} alt="" />
                    </div>
                    <div className="speech-bubble"></div>
                    <img style={{width:200,height:200}} src="./img/OanTuTi/PlayerComputer.png" alt="./img/OanTuTi/PlayerComputer.png" />
                </div>
            
        )
    }
}
const mapStateToProps = state =>{
    return {
        computer: state.OanTuTiReducer.computer,
        
    }
    
}
export default connect(mapStateToProps)(Computer)
