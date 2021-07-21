const stateDefault = {
    arrPhim: [
        { maPhim: 1, tenPhim: 'Thiên cổ quyết trần', hinhAnh: 'https://picsum.photos/id/20/200/200' },
        { maPhim: 2, tenPhim: 'Nỗi vương vấn của Hạ tiên sinh', hinhAnh: 'https://picsum.photos/id/30/200/200' }
    ],
    chiTietPhim: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_DATA_FILMS':
            {
                state.arrPhim = action.arrPhim;
                return {...state };
            }
        case 'SET_CHI_TIET_PHIM':
            {
                state.chiTietPhim = action.chiTietPhim;
                return {...state };
            }
        default:
            return state;

    }
}