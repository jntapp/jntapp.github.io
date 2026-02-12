class Tinh
{
    constructor(name, danhSachTrungTamTrungChuyen, danhSachBuuCuc = [])
    {
        this.name = name;
        this.danhSachTrungTamTrungChuyen = danhSachTrungTamTrungChuyen;
        this.danhSachBuuCuc = danhSachBuuCuc;
    }
}

class BuuCuc
{
    constructor(stt, ma='', ten = '')
    {
        this.stt = stt;
        this.ten = ten;
        this.ma = ma;
    }
}


class TrungTamTrungChuyen
{
    constructor(stt, ma='', ten='')
    {
        this.stt = stt;
        this.ten = ten;
        this.ma = ma;
    }
}


const danhSachTinh = [
    new Tinh('Hà Nội', ['HN01', 'HN02', 'HN03']),
    new Tinh('Hồ Chí Minh', ['HCM01', 'HCM02', 'HCM03']),
    new Tinh('Đà Nẵng', ['DN01', 'DN02']),
    new Tinh('Hải Phòng', ['HP01', 'HP02']),
    new Tinh('Cần Thơ', ['CT01']),
];