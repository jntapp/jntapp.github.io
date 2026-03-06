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
    new TrungTamTrungChuyen(14, '024GW0', 'TTKT Quảng Ninh', 180),
    new TrungTamTrungChuyen(15, '024GW0', 'TTKT Hải Phòng', 170),
    new TrungTamTrungChuyen(15, '024GW1', 'Hàng phát Hải Phòng', 225),

    new TrungTamTrungChuyen(24, '024GW0', 'TTKT Hà Nội 1', 150),
    new TrungTamTrungChuyen(24, '024GW1', 'TTKT Hà Nội 2', 163),
    new TrungTamTrungChuyen(24, '024GW2', 'TTKT Điện Biên', 350),
    new TrungTamTrungChuyen(24, '024GW2', 'TTKT Điện Biên', 360),

    new TrungTamTrungChuyen(24, '024GW0', 'TTKT Hà Nội 1', 470),
    new TrungTamTrungChuyen(24, '024GW1', 'TTKT Hà Nội 2', 473),
    new TrungTamTrungChuyen(24, '024GW2', 'TTKT Hà Nội 3', 475),
    new TrungTamTrungChuyen(24, '024GW3', 'TTKT Hà Nội 4', 741),

    new TrungTamTrungChuyen(241, '024GW5', 'ĐGP Long Biên NC 1', 477),
    new TrungTamTrungChuyen(241, '024GW6', 'ĐGP Long Biên NC 2', 478),

    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 1', 730),

    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 1', 800),
    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 2', 803),
    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 3', 804),
    new TrungTamTrungChuyen(28, 'TTTC02', 'TTKT Hồ Chí Minh 4', 805),
    new TrungTamTrungChuyen(28, 'TTTC03', 'TTKT Long An', 900),

    new TrungTamTrungChuyen(36, 'TTTC03', 'TTKT Thanh Hóa', 530),

    new TrungTamTrungChuyen(37, 'TTTC03', 'TTKT Nghệ An', 500),
    new TrungTamTrungChuyen(37, 'TTTC03', 'TTKT Nghệ An', 540),
    new TrungTamTrungChuyen(37, 'TTTC03', 'TTKT Nghệ An', 550),

    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 100),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 130),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 140),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 190),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 213),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 300),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 310),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 330),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 340),

    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 410),

    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 600),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 620),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 630),
    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 660),

    new TrungTamTrungChuyen(56, '221GW0', 'TTKT Đà Nẵng', 560),

    new TrungTamTrungChuyen(64, '262GW0', 'TTKT Tây Nguyên', 640),
    new TrungTamTrungChuyen(64, '262GW1', 'TTKT Đức Trọng', 680),
    new TrungTamTrungChuyen(64, '262GW2', 'TTKT Bảo Lộc', 690),

    new TrungTamTrungChuyen(74, 'TTTC03', 'ĐGP Bình Dương 1', 740),
    new TrungTamTrungChuyen(74, 'TTTC03', 'ĐGP Bình Dương 2', 741),
    new TrungTamTrungChuyen(74, 'TTTC03', 'ĐGP Bình Dương 3', 760),

    new TrungTamTrungChuyen(83, 'TTTC03', 'TTKT Cần Thơ', 830),
    new TrungTamTrungChuyen(83, 'TTTC03', 'TTKT Cần Thơ', 840),
    new TrungTamTrungChuyen(83, 'TTTC03', 'TTKT Cần Thơ', 850),
    new TrungTamTrungChuyen(83, 'TTTC03', 'TTKT Cần Thơ', 880),
    new TrungTamTrungChuyen(83, 'TTTC03', 'TTKT Cần Thơ', 930),
    new TrungTamTrungChuyen(83, 'TTTC03', 'TTKT Cần Thơ', 931),

    new TrungTamTrungChuyen(18, 'TTTC03', 'TTKT Nam Định', 300),
    new TrungTamTrungChuyen(35, 'TTTC04', 'TTKT Ninh Bình', 200),

    new TrungTamTrungChuyen(90, '222GW0', 'TTKT Long An', 870),
    new TrungTamTrungChuyen(90, '222GW0', 'TTKT Long An', 900),

    new TrungTamTrungChuyen(99, '222GW0', 'TTKT Bắc Ninh', 440)
];