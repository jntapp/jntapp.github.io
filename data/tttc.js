class TrungTamTrungChuyen
{
    constructor(tinhid, ma='', ten='', stt=0)
    {
        this.stt = stt;
        this.ten = ten;
        this.ma = ma;
        this.tinhid = tinhid;
    }
}


const danhSachTrungTamTrungChuyen = [
    new TrungTamTrungChuyen(24, '024GW0', 'TTTC Hà Nội 1', 470),
    new TrungTamTrungChuyen(24, '024GW1', 'TTTC Hà Nội 2', 741),
    new TrungTamTrungChuyen(28, 'TTTC02', 'Trung tâm trung chuyển Hồ Chí Minh 1', 800),
    new TrungTamTrungChuyen(28, 'TTTC03', 'Trung tâm trung chuyển Hồ Chí Minh 2', 900),
    
    new TrungTamTrungChuyen(36, 'TTTC03', 'TTTC Thanh Hóa', 530),

    new TrungTamTrungChuyen(74, 'TTTC03', 'TTTC Bình Dương 1', 740),
    new TrungTamTrungChuyen(74, 'TTTC03', 'TTTC Bình Dương 2', 741),
    new TrungTamTrungChuyen(74, 'TTTC03', 'TTTC Bình Dương 3', 760),

    new TrungTamTrungChuyen(18, 'TTTC03', 'Trung tâm trung chuyển Nam Định', 300),
    new TrungTamTrungChuyen(35, 'TTTC04', 'Trung tâm trung chuyển Ninh Bình', 200)
];