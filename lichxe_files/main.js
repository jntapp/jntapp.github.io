class ThoiGian
{
    constructor(gioPhut, danhSachDiemXeDen)
    {
        this.gioPhut = gioPhut;
        this.danhSachDiemXeDen = danhSachDiemXeDen;
    }

    render()
    {
        const tbl = document.createElement('table');
        tbl.style.border = '0px';
            const tr = document.createElement('tr');
                const tdTime = document.createElement('td');            
                    const container = document.createElement('div');
                    container.className = 'line';
                        container.innerHTML = this.gioPhut;
                        const thoiGianDiv = document.createElement('div');
                        thoiGianDiv.className = 'thoi-gian';
                        thoiGianDiv.innerHTML = this.gioPhut;
                    container.appendChild(thoiGianDiv);
                tdTime.appendChild(container);
            tr.appendChild(tdTime);

            const tdDiemXeDen = document.createElement('td');
                    this.danhSachDiemXeDen.forEach(diem => {
                        const diemDiv = document.createElement('span');
                        diemDiv.className = 'diem-xe-den';
                        diemDiv.innerHTML = diem;
                    });

            return container;
    }
}

class DiemXeDen
{
    constructor(stt)
    {
        this.stt = stt;
    }

    render()
    {
        const diemDiv = document.createElement('span');
        diemDiv.className = 'diem-xe-den';
        diemDiv.innerHTML = this.stt;
        return diemDiv;
    }
}

class ChiTiet
{
    constructor(noiDung = '')
    {
        this.noiDung = noiDung;
    }
}

<a href="">
    <div class="line">
    <table style="border:0px;">
        <tr>
        <td>
            <div class="thoi-gian">
            06:15
            </div>
        </td>
        <td>
            <span class="diem-xe-den">
            Long An
            </span>
            <span class="diem-xe-den">
            Hải Phòng
            </span>
        </td>
        </tr>          
    </table>  
    </div>

    <div class="chi-tiet">
        Long An: 270 - 170 - 220 - 440
    </div>
</a>