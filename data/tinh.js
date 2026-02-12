class Tinh
{
    constructor(id, name)
    {
        this.id = id;
        this.name = name;
    }
}

class BuuCuc
{
    constructor(tinhid, ma='', ten = '',stt = 0)
    {
        this.stt = stt;
        this.ten = ten;
        this.ma = ma;
        this.tinhid = tinhid;
    }
}


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


const danhSachTinh = [
    new Tinh(24, 'Hà Nội'),
    new Tinh(28, 'Hồ Chí Minh'),
    new Tinh(32, 'Nam Định'),
    new Tinh(36, 'Ninh Bình'),
    new Tinh(40, 'Hà Nam'),
    new Tinh(44, 'Hải Phòng'),
    new Tinh(48, 'Quảng Ninh')
];


const danhSachBuuCuc = [
    new BuuCuc(24, 'HN01', 'Bưu cục Hà Nội 1', 1),
    new BuuCuc(28, 'HCM01', 'Bưu cục Hồ Chí Minh 1', 1)
];

const danhSachTrungTamTrungChuyen = [
    new TrungTamTrungChuyen(24, 'TTTC01', 'Trung tâm trung chuyển Hà Nội 1', 1),
    new TrungTamTrungChuyen(28, 'TTTC02', 'Trung tâm trung chuyển Hồ Chí Minh 1', 1)
];