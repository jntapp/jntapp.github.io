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
                            const tinhDiv = document.createElement('span');
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
                                loadChiTietXeDiTheoTinh(this.id, tinhId);
                                const tatCaDiemXeDen = document.querySelectorAll('.diem-xe-den');
                                tatCaDiemXeDen.forEach(span => {
                                        span.classList.remove('diem-xe-den__selected');
                                });
                                tinhDiv.classList.add('diem-xe-den__selected');
                                
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
    new ThoiGian(1, '21:40', [64,15]),
    new ThoiGian(1, '22:40', [90]),
    new ThoiGian(1, '00:10', [99]),
    new ThoiGian(1, '00:40', [41]),
    new ThoiGian(1, '01:40', [36,37]),
    new ThoiGian(1, '02:10', [56]),
    new ThoiGian(1, '03:40', [41,24]),
    new ThoiGian(1, '08:00', [24, 28]),
    new ThoiGian(2, '10:00', [32, 36]),
    new ThoiGian(3, '06:30', [36, 28, 74]),
    new ThoiGian(4, '14:00', [40, 44, 48])
];

danhSachThoiGian.forEach(thoiGian => {
    thoiGian.render();
});