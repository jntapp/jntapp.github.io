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
                        container.appendChild(thoiGianDiv);
                    tdTime.appendChild(container);
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
    for (let i = 0; i < danhSachTrungTamTrungChuyen.length; i++)
    {
        let tenTinh = '';
        for (let j = 0; j < danhSachTinh.length; j++)
        {
            if (danhSachTinh[j].id === tinhId)
            {
                tenTinh = danhSachTinh[j].name;
                break;
            }
        }

        let html = tenTinh + ': ';
        if (danhSachTrungTamTrungChuyen[i].tinhid === tinhId)
        {
            html += danhSachTrungTamTrungChuyen[i].stt + ' - ';
        }
    }
    chiTietDiv.style.display = 'block';
}


const danhSachThoiGian = [
    new ThoiGian(1, '08:00', [24, 28]),
    new ThoiGian(2, '10:00', [32, 36]),
    new ThoiGian(3, '14:00', [40, 44, 48])
];

danhSachThoiGian.forEach(thoiGian => {
    thoiGian.render();
});