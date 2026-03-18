class ThoiGian
{
    constructor(id, gioPhut, danhSachTinhId)
    {
        this.id = id;
        this.gioPhut = gioPhut;
        this.danhSachTinhId = danhSachTinhId;
    }

    render()
    {
        const container = document.createElement('div');
        container.className = 'line';
            const tbl = document.createElement('table');
            tbl.style.border = '0px';
                const tr = document.createElement('tr');
                    const tdTime = document.createElement('td');  
                            const thoiGianDiv = document.createElement('div');
                            thoiGianDiv.className = 'thoi-gian';
                            thoiGianDiv.innerHTML = this.gioPhut;
                    tdTime.appendChild(thoiGianDiv);
                tr.appendChild(tdTime);
                    const tdDiemXeDen = document.createElement('td');
                        const diemXeDenContainer = document.createElement('div');
                        diemXeDenContainer.className = 'diem-xe-den__container';
                        
                            this.danhSachTinhId.forEach(tinhId => {
                                const tinhDiv = document.createElement('div');
                                tinhDiv.className = 'diem-xe-den';
                                tinhDiv.id = `diemXeDen-${tinhId}-${this.id}`;
                                for (let i = 0; i < danhSachTinh.length; i++) 
                                {
                                    if (danhSachTinh[i].id === tinhId) 
                                    {
                                        tinhDiv.innerHTML = danhSachTinh[i].name;
                                        break;
                                    }
                                }

                                tinhDiv.addEventListener('click', () => {
                                    
                                    const tatCaDiemXeDen = document.querySelectorAll('.diem-xe-den');
                                    tatCaDiemXeDen.forEach(span => {
                                            span.classList.remove('diem-xe-den__selected');
                                    });

                                    const tatCaThoiGian = document.querySelectorAll('.chi-tiet');
                                    tatCaThoiGian.forEach(tjan => {
                                            tjan.style.display = 'none';
                                    });

                                    tinhDiv.classList.add('diem-xe-den__selected');
                                    loadChiTietXeDiTheoTinh(this.id, tinhId);
                                    
                                });
                                
                                diemXeDenContainer.appendChild(tinhDiv);
                            });
                    tdDiemXeDen.appendChild(diemXeDenContainer);
                tr.appendChild(tdDiemXeDen);
            tbl.appendChild(tr);
        container.appendChild(tbl);
        document.body.appendChild(container);
        
        const chiTietDiv = document.createElement('div');
        chiTietDiv.className = 'chi-tiet';
        chiTietDiv.id = `chitiet-${this.id}`;
        chiTietDiv.style.display = 'none';
        document.body.appendChild(chiTietDiv);
    }
}

function loadChiTietXeDiTheoTinh(thoiGianId, tinhId)
{
    const chiTietDiv = document.getElementById(`chitiet-${thoiGianId}`);
    chiTietDiv.innerHTML = '';

    let tenTinh = '';
    for (let j = 0; j < danhSachTinh.length; j++)
    {
        if (danhSachTinh[j].id === tinhId)
        {
            tenTinh = danhSachTinh[j].name;
            break;
        }
    }
    chiTietDiv.innerHTML = tenTinh + ': ';
    let danhSachMaTrungTamTrungChuyen = [];
    for (let i = 0; i < danhSachTrungTamTrungChuyen.length; i++)
    {                
        if (danhSachTrungTamTrungChuyen[i].tinhid === tinhId)
        {
            danhSachMaTrungTamTrungChuyen.push(danhSachTrungTamTrungChuyen[i].stt); //+ ' (' + danhSachTrungTamTrungChuyen[i].ma + ')');
        }
    }

    for (let i = 0; i < danhSachMaTrungTamTrungChuyen.length; i++)
    {
        chiTietDiv.innerHTML += `<span onclick="showChiTietMaDoan(${danhSachMaTrungTamTrungChuyen[i]})">${danhSachMaTrungTamTrungChuyen[i]}</span>`;

        if (i < danhSachMaTrungTamTrungChuyen.length - 1)
        {
            chiTietDiv.innerHTML += ' - ';
        }
    }
    chiTietDiv.style.display = 'block';
}

function showChiTietMaDoan(maDoan)
{
    for (let i = 0; i < danhSachTrungTamTrungChuyen.length; i++)
    {
        if (danhSachTrungTamTrungChuyen[i].stt === maDoan)
        {
            showThongBao(`<span style="font-size:30px;font-weight:bold;">${maDoan}</span><br> 
            <center><span style="font-size:22px;font-weight:bold;">${danhSachTrungTamTrungChuyen[i].ma}</span><br>
            ${danhSachTrungTamTrungChuyen[i].ten}<br>
            <center>Tuyến: ${danhSachTinh.find(tinh => tinh.id === danhSachTrungTamTrungChuyen[i].tinhid).name}</center>`);
            break;
        }
    }
}



const danhSachThoiGian = [
    new ThoiGian(40, '20:30', [70]),
    new ThoiGian(41, '22:00', [64,15]),
    new ThoiGian(42, '23:00', [90]),
    

    new ThoiGian(0, '00:00', [24], 64),
    new ThoiGian(1, '00:30', [14, 99]),
    new ThoiGian(2, '01:00', [41,241]),
    new ThoiGian(3, '01:30', [74,99]),
    new ThoiGian(4, '02:00', [36,37]),
    new ThoiGian(5, '02:10', [56]),
    new ThoiGian(6, '03:00', [15]),
    new ThoiGian(7, '04:00', [41,24]),
    new ThoiGian(8, '05:00', [63, 241, 37]),
    new ThoiGian(9, '06:30', [36, 74,80,83,90]),
    new ThoiGian(10, '07:00', [28, 36, 56, 70,74, 80]),

    new ThoiGian(30, '14:00', [41])
];

danhSachThoiGian.forEach(thoiGian => {
    thoiGian.render();
});