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
    new TrungTamTrungChuyen(14, '203GW0', 'TTTC Quảng Ninh', 180),
    new TrungTamTrungChuyen(15, '225GW0', 'TTKT Hải Phòng', 170),
    new TrungTamTrungChuyen(15, '225GW0', 'Hàng phát Hải Phòng', 225),

    new TrungTamTrungChuyen(24, '205GW0', 'TTKT Lạng Sơn', 150),
    new TrungTamTrungChuyen(24, '212GW0', 'TTTC Sơn La', 160),
    new TrungTamTrungChuyen(24, '215GW0', 'TTTC Điện Biên', 350),
    new TrungTamTrungChuyen(24, '218GW0', 'TTKT Hòa Bình', 360),

    new TrungTamTrungChuyen(24, '024GW0', 'TTKT Hà Nội', 470),
    new TrungTamTrungChuyen(24, '024GW3', 'TTTC Hà Đông', 473),
    new TrungTamTrungChuyen(24, '024GW5', 'TTTC Sơn Tây', 475),

    new TrungTamTrungChuyen(241, '024GW7', 'ĐGP Thanh Trì', 477),
    new TrungTamTrungChuyen(241, '024GW8', 'ĐGP Long Biên', 478),

    new TrungTamTrungChuyen(28, '252GW0', 'TTKT Bình Thuận', 730),

    new TrungTamTrungChuyen(28, '028GW0', 'TTKT Hồ Chí Minh', 800),
    new TrungTamTrungChuyen(28, '028GW3', 'ĐGP Bình Tân', 803),
    new TrungTamTrungChuyen(28, '028GW4', 'ĐGP Củ Chi', 804),
    new TrungTamTrungChuyen(28, '028GW5', 'ĐGP Bình Chánh', 805),
    new TrungTamTrungChuyen(28, '272GW1', 'ĐGP Long An 1', 900),

    new TrungTamTrungChuyen(36, '237GW0', 'TTKT Thanh Hóa', 530),

    new TrungTamTrungChuyen(37, '238GW0', 'TTKT Nghệ An', 500),
    new TrungTamTrungChuyen(37, '232GW0', 'TTKT Quảng Bình', 540),
    new TrungTamTrungChuyen(37, '239GW0', 'ĐGP Hà Tĩnh', 550),

    new TrungTamTrungChuyen(41, '208GW0', 'TTKT Thái Nguyên', 100),
    new TrungTamTrungChuyen(41, '209GW0', 'TTTC Bắc Kạn', 130),
    new TrungTamTrungChuyen(41, '206GW0', 'TTTC Cao Bằng', 140),
    new TrungTamTrungChuyen(41, '219GW0', 'TTKT Hà Giang', 190),
    new TrungTamTrungChuyen(41, 'gggg', 'ggg TTKT Hưng Yên', 213),
    new TrungTamTrungChuyen(41, '210GW0', 'TTKT Phú Thọ', 300),
    new TrungTamTrungChuyen(41, '207GW0', 'TTTC Tuyên Quang', 310),
    new TrungTamTrungChuyen(41, '214GW0', 'TTKT Lào Cai', 330),
    new TrungTamTrungChuyen(41, '213GW0', 'TTTC Lai Châu', 340),

    new TrungTamTrungChuyen(41, '221GW0', 'TTKT Hưng Yên', 410),

    new TrungTamTrungChuyen(41, '258GW0', 'TTKT Nha Trang', 600),
    new TrungTamTrungChuyen(41, '256GW0', 'TTKT Bình Định', 620),
    new TrungTamTrungChuyen(41, '269GW0', 'TTKT Gia Lai', 660),

    new TrungTamTrungChuyen(56, '236GW0', 'TTKT Đà Nẵng', 560),

    new TrungTamTrungChuyen(63, '255GW0', 'TTKT Quảng Ngãi', 630),

    new TrungTamTrungChuyen(64, '262GW0', 'TTKT Tây Nguyên', 640),
    new TrungTamTrungChuyen(64, '263GW1', 'TTKT Đức Trọng (LĐ)', 680),
    new TrungTamTrungChuyen(64, '263GW0', 'TTKT Bảo Lộc', 690),

    new TrungTamTrungChuyen(70, '251GW0', 'TTKT Đồng Nai', 700),
    new TrungTamTrungChuyen(70, '254GW0', 'ĐGP Vũng Tàu', 720),

    new TrungTamTrungChuyen(74, '274GW0', 'ĐGP Bình Dương', 740),
    new TrungTamTrungChuyen(74, '274GW0', 'ĐGP Bình Dương', 741),
    new TrungTamTrungChuyen(74, '271GW0', 'ĐGP Bình Phước', 760),

    new TrungTamTrungChuyen(80, '028GW6', 'ĐGP Long Hậu', 806),
    new TrungTamTrungChuyen(80, '028GW6', 'ĐGP Long Hậu', 816),

    new TrungTamTrungChuyen(83, '292GW0', 'TTKT Cần Thơ', 830),
    new TrungTamTrungChuyen(83, '296GW0', 'TTKT An Giang', 840),
    new TrungTamTrungChuyen(83, '297GW0', 'TTKT Kiên Giang', 850),
    new TrungTamTrungChuyen(83, '297GW1', 'TTKT Kiên Giang 2', 851),

    new TrungTamTrungChuyen(83, '277GW0', 'TTKT Đồng Tháp', 880),
    new TrungTamTrungChuyen(83, '291GW0', 'TTKT Bạc Liêu', 930),
    new TrungTamTrungChuyen(83, '291GW0', 'TTKT Bạc Liêu ', 931),

    new TrungTamTrungChuyen(15, '226GW0', 'Hàng phát Hà Nam', 226),
    new TrungTamTrungChuyen(15, '227GW0', 'Hàng phát Thái Bình', 227),

    new TrungTamTrungChuyen(18, '228GW0', 'TTKT Nam Định', 420),
    new TrungTamTrungChuyen(15, '228GW0', 'Hàng phát Nam Định', 228),
    new TrungTamTrungChuyen(35, '229GW0', 'TTKT Ninh Bình', 229),

    new TrungTamTrungChuyen(90, '272GW0', 'TTKT Long An', 870),
    new TrungTamTrungChuyen(90, '272GW1', 'ĐGP Long An 1', 900),

    new TrungTamTrungChuyen(99, '222GW0', 'TTKT Bắc Ninh', 440)
];