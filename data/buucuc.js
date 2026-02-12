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


const danhSachBuuCuc = [
    new BuuCuc(24, 'HN01', 'Bưu cục Hà Nội 1', 1),
    new BuuCuc(28, 'HCM01', 'Bưu cục Hồ Chí Minh 1', 1)
];