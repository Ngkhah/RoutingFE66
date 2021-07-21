import { CHON_KBB, END_GAME, RAN_DOM } from "../action/type/OanTuTiType";

const stateDefault = {
    arrDatCuoc: [
        { ma: 'keo', hinhAnh: './img/OanTuTi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/OanTuTi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/OanTuTi/bao.png', datCuoc: false },
    ],
    ketQua: "I'm Iron Man, I love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/OanTuTi/keo.png' },
}

const OanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case CHON_KBB: {
                //reset mảng cuoc
                let arrDatCuocUpdate = [...state.arrDatCuoc];

                // tạo ra mãng cược mới từ mảng cược cũ và action.maCuoc mà nguoi2 dùng truyền lên
                arrDatCuocUpdate = arrDatCuocUpdate.map((item, index) => {
                    if (item.ma === action.maCuoc) {
                        return {...item, datCuoc:true }
                    }
                    return {...item, datCuoc:false }
                })
                state.arrDatCuoc = arrDatCuocUpdate;
                return {...state }
        }
        case RAN_DOM:{
            let soNgauNhien= Math.floor(Math.random()*3);
            let quanCuocNgauNhien = state.arrDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return {...state}

        }
        case END_GAME:
            let player = state.arrDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            console.log("player", player);
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Hòa nhau!!!';
                    }else if (computer.ma ==='bua'){
                        state.ketQua = 'Thua rồi nhé !!';
                    }else{
                        state.soBanThang +=1;
                        state.ketQua = "I'm Iron Man, I love you 3000 !!!";
                    }break;

                case 'bua':
                    if(computer.ma === 'keo'){
                        state.soBanThang +=1;
                        state.ketQua = "I'm Iron Man, I love you 3000 !!!";
                    }else if (computer.ma ==='bua'){
                        state.ketQua = 'Hòa nhau!!!';
                    }else{
                        state.ketQua = 'Thua rồi nhé !!';
                    }break;

                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Thua rồi nhé !!';
                    }else if (computer.ma ==='bua'){
                        state.soBanThang +=1;
                        state.ketQua = "I'm Iron Man, I love you 3000 !!!";
                    }else{
                        state.ketQua = 'Hòa nhau!!!';
                    }break;

                default: 
                state.soBanThang +=1;
                state.ketQua = "I'm Iron Man, I love you 3000 !!!";
            }
            state.soBanChoi +=1;
            return {...state}
        default: return {...state }
    }
}
export default OanTuTiReducer;