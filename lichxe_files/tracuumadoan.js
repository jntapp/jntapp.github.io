function boDau(str) 
{
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
	
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
	
	str = str.replace(/đ/g, "d");
	str = str.replace(/Đ/g, "D");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
	return str;
}

const divTraCuu_container = document.createElement("div");
divTraCuu_container.className = "divTraCuu_container";
  const divTraCuu =  document.createElement("div");
  divTraCuu.className = "divTraCuu";
    const titleTraCuu = document.createElement("div");
    const inputTimKiem = document.createElement("input");
    inputTimKiem.type = "text";
    inputTimKiem.placeholder = "Mã đoạn";
    inputTimKiem.style.padding = "8px";
    inputTimKiem.style.marginBottom = "10px";
    inputTimKiem.style.width = "45%";
    inputTimKiem.id = "inputTimKiem";
    inputTimKiem.addEventListener("keyup",function()
    {
      traCuuMaDoan();
    });

  const inputTimKiemMa = document.createElement("input");
    inputTimKiemMa.type = "text";
  inputTimKiemMa.placeholder = "Mã TT";
    inputTimKiemMa.style.padding = "8px";
    inputTimKiemMa.style.marginBottom = "10px";
  inputTimKiemMa.style.marginLeft = "10px";
    inputTimKiemMa.style.width = "45%";
    inputTimKiemMa.id = "inputTimKiemMa";
    inputTimKiemMa.addEventListener("keyup",function()
    {
      traCuuMaTuyen();
    });

  divTraCuu.appendChild(inputTimKiem);
  divTraCuu.appendChild(inputTimKiemMa);
divTraCuu_container.appendChild(divTraCuu);
  const divTraCuu_ketQua = document.createElement("div");
  divTraCuu_ketQua.id = "divTraCuu_ketQua";
divTraCuu_container.appendChild(divTraCuu_ketQua);


document.body.appendChild(divTraCuu_container);


function traCuuMaDoan()
{
  document.getElementById("inputTimKiemMa").value = '';
  let noiDungTimKiem = document.getElementById("inputTimKiem").value;
  divTraCuu_ketQua.innerHTML = '';
  let timThay = false;
  for (let i =0; i< danhSachTrungTamTrungChuyen.length; i++)
  {
    if (danhSachTrungTamTrungChuyen[i].stt == noiDungTimKiem)
    {
      divTraCuu_ketQua.innerHTML = `<span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].ma}</span><br><span style="font-size:14px;">
            ${danhSachTrungTamTrungChuyen[i].ten}<br>
            <i>Tuyến: ${danhSachTinh.find(tinh => tinh.id === danhSachTrungTamTrungChuyen[i].tinhid).name}</i></span>`;
      timThay = true;
      break;
    }
  }

  if (!timThay)  {
    traCuuTheoTen(noiDungTimKiem);
  } 
}



function traCuuMaTuyen()
{
  document.getElementById("inputTimKiem").value = '';
  let noiDungTimKiem = document.getElementById("inputTimKiemMa").value;
  divTraCuu_ketQua.innerHTML = '';
  let timThay = false;
  if (noiDungTimKiem.length > 2)
  {
    for (let i =0; i< danhSachTrungTamTrungChuyen.length; i++)
    {
      if (danhSachTrungTamTrungChuyen[i].ma.indexOf(noiDungTimKiem) !==-1)
      {
        divTraCuu_ketQua.innerHTML += `<hr style="width:60%;color:rgba(0,0,0,0.3);"><span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].stt}</span><br><span style="font-size:14px;"><span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].ma}</span><br>
              ${danhSachTrungTamTrungChuyen[i].ten}<br>
              <i>Tuyến: ${danhSachTinh.find(tinh => tinh.id === danhSachTrungTamTrungChuyen[i].tinhid).name}</i></span><br>`;
        timThay = true;  
      }
    }
  }

  if (!timThay)
  {
    traCuuTheoTen(noiDungTimKiem);
  }
}

function traCuuTheoTen(ten)
{  
  ten = boDau(ten.toLowerCase());
  divTraCuu_ketQua.innerHTML = '';
  if (ten.length > 1)
  {
    for (let i =0; i< danhSachTrungTamTrungChuyen.length; i++)
    {
      if (boDau(danhSachTrungTamTrungChuyen[i].ten.toLocaleLowerCase()).indexOf(ten) !==-1)
      {
        divTraCuu_ketQua.innerHTML += `<hr style="width:60%;color:rgba(0,0,0,0.3);"><span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].stt}</span><br><span style="font-size:14px;"><span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].ma}</span><br>
              ${danhSachTrungTamTrungChuyen[i].ten}<br>
              <i>Tuyến: ${danhSachTinh.find(tinh => tinh.id === danhSachTrungTamTrungChuyen[i].tinhid).name}</i></span><br>`;
          
      }
    }
  }
}