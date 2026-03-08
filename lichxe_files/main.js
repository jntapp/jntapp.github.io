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
                            
                            tdDiemXeDen.appendChild(tinhDiv);
                        });
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
    chiTietDiv.innerHTML += danhSachMaTrungTamTrungChuyen.join(' - ');
    chiTietDiv.style.display = 'block';
}


const danhSachThoiGian = [
    new ThoiGian(41, '21:40', [64,15]),
    new ThoiGian(42, '22:40', [90]),
    new ThoiGian(43, '22:45', [74]),

    new ThoiGian(0, '00:00', [24,241]),
    new ThoiGian(1, '00:10', [99]),
    new ThoiGian(2, '00:40', [41]),
    new ThoiGian(3, '01:15', [70]),
    new ThoiGian(4, '01:40', [36,37]),
    new ThoiGian(5, '02:10', [56]),
    new ThoiGian(6, '02:30', [15]),
    new ThoiGian(7, '03:40', [41,24]),
    new ThoiGian(8, '05:00', [241]),
    new ThoiGian(9, '06:30', [36, 28, 74]),
    new ThoiGian(10, '06:45', [70]),

    new ThoiGian(20, '08:00', [24, 28]),

    new ThoiGian(30, '14:00', [40, 44, 48])
];

danhSachThoiGian.forEach(thoiGian => {
    thoiGian.render();
});