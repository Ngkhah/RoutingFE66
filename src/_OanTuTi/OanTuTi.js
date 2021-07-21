import React, { Component } from 'react'
import { connect } from 'react-redux'
import { endGame, randdom } from '../redux/action/OanTuTiAction'

import Computer from './Computer'
import './Game.css'
import KetQua from './KetQua'
import Player from './Player'


class OanTuTi extends Component {
    render() {
        return (
            <div className="GameOanTuTi text-center fontS text-light">
                <div className="row mt-4">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQua />
                        <button onClick={()=>{
                            this.props.playGame()
                        }} className="btn btn-success p-3 display-4 mt-5">Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: ()=>{
            let count = 0 ;
            //khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(()=>{
            dispatch(randdom())
            count ++;
            if(count >10){
                clearInterval(randomComputerItem);
                dispatch(endGame());
            }
            },100)
        }
    }
}
export default connect(null,mapDispatchToProps) (OanTuTi)
