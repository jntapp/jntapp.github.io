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
    new TrungTamTrungChuyen(24, '024GW0', 'TTKT Hà Nội 1', 470),
    new TrungTamTrungChuyen(24, '024GW1', 'TTKT Hà Nội 2', 473),
    new TrungTamTrungChuyen(24, '024GW2', 'TTKT Hà Nội 3', 475),
    new TrungTamTrungChuyen(24, '024GW3', 'TTKT Hà Nội 4', 741),

    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 1', 800),
    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 2', 803),
    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 3', 804),
    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 4', 805),
    new TrungTamTrungChuyen(28, 'TTTC03', 'TTKT Long An', 900),

    new TrungTamTrungChuyen(36, 'TTTC03', 'TTKT Thanh Hóa', 530),

    new TrungTamTrungChuyen(74, 'TTTC03', 'ĐGP Bình Dương 1', 740),
    new TrungTamTrungChuyen(74, 'TTTC03', 'ĐGP Bình Dương 2', 741),
    new TrungTamTrungChuyen(74, 'TTTC03', 'ĐGP Bình Dương 3', 760),

    new TrungTamTrungChuyen(18, 'TTTC03', 'TTKT Nam Định', 300),
    new TrungTamTrungChuyen(35, 'TTTC04', 'TTKT Ninh Bình', 200)
];