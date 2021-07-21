import axios from "axios";

export const layDanhSachPhimAction = (maNhom='GP01') => {
    return async (dispatch)=>{
        try {
            // async awiat thường dùng cho các nghiệp vụ thực hiện các promise tuàn tự
        const result = await axios({
            url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            method: 'GET'
        });
        dispatch({
            type: 'SET_DATA_FILMS',
            arrPhim: result.data.content
        })
    }catch (errors){
        console.log('errors', errors.response?.data);
    }
    
    }
}


export const layChiTietPhimAction = (maPhim) => {

    return async (dispatch,getState) => {

        try {
            const result = await axios({
                url:`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method:'GET'
            });

            //Sau khi có dữ liệu dispatch lên reducer

            dispatch({
                type:'SET_CHI_TIET_PHIM',
                chiTietPhim:result.data.content
            })

        }catch(errors) {
            console.log(errors.response?.data);
        }

    }

}
// return (dispatch)=>{
//     const result = await axios({
//             url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
//             method: 'GET'
//     });
    
    
//     //dùng gọi cac12 api ko liên quan nhau
//         let promise = axios({
//         url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
//         method: 'GET'
//     });
//     //Xử lý thành công
//     promise.then((result) => {
//         console.log('result', result.data);
//         //Sau khi lấy dữ liệu từ api trả về => đưa vào state thông qua hàm setState
//         dispatch({
//             type: 'SET_DATA_FILMS',
//             arrPhim: result.data.content
//         })
//     });
//     //Xử lý thất bại
//     promise.catch((errors) => {
//         console.log('errors', errors.response?.data);
//     })
// }
