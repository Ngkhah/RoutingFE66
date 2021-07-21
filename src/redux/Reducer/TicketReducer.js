import { DAT_GHE, HUY_GHE } from "../action/type/BookingTicketType";

const stateDefault = {
    danhSachGheDangDat: [

    ]
}

export const TicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE:
            {
                let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
                let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
                if (index !== -1) {
                    //khi người dùng click ghế đang chọn đã có trong mảng và => sẽ xóa nó đi
                    danhSachGheDangDatUpdate.splice(index, 1);
                } else {
                    //khi người dùng cick vào ghế chưa dc đặt sẽ dc push vào mảng
                    danhSachGheDangDatUpdate.push(action.ghe)
                }
                //Cập nhật state => giao diện render lại
                state.danhSachGheDangDat = danhSachGheDangDatUpdate;
                return {...state }
            }
        case HUY_GHE:
            {
                let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
                let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
                if (index !== -1) {
                    //khi người dùng click ghế đang chọn đã có trong mảng và => sẽ xóa nó đi
                    danhSachGheDangDatUpdate.splice(index, 1);
                }
                state.danhSachGheDangDat = danhSachGheDangDatUpdate;
                return {...state };
            }
        default:
            return {...state }
    }
}