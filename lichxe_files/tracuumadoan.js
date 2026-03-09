const divTraCuu =  document.createElement("div");
divTraCuu.className = "divTraCuu";
  const titleTraCuu = document.createElement("div");
  titleTraCuu.innerHTML = "<span style='font-size:18px;font-weight:bold;'>Tra cứu</span><br>";
divTraCuu.appendChild(titleTraCuu);
  const inputTimKiem = document.createElement("input");
  inputTimKiem.type = "text";
inputTimKiem.placeHolder = "Mã đoạn";
  inputTimKiem.style.padding = "8px";
  inputTimKiem.style.marginBottom = "10px";
  inputTimKiem.style.width = "45%";
  inputTimKiem.id = "inputTimKiem";
  inputTimKiem.addEventListener("keyup",function(){
  traCuuMaDoan();
  });

const inputTimKiemMa = document.createElement("input");
  inputTimKiemMa.type = "text";
inputTimKiemMa.placeHolder = "Mã TT";
  inputTimKiemMa.style.padding = "8px";
  inputTimKiemMa.style.marginBottom = "10px";
inputTimKiemMa.style.marginLeft = "10px";
  inputTimKiemMa.style.width = "45%";
  inputTimKiemMa.id = "inputTimKiemMa";
  inputTimKiemMa.addEventListener("keyup",function(){
  traCuuMaTuyen();
  });

divTraCuu.appendChild(inputTimKiem);
divTraCuu.appendChild(inputTimKiemMa);
  
document.body.appendChild(divTraCuu);
const divTraCuu_ketQua = document.createElement("div");
  divTraCuu_ketQua.id = "divTraCuu_ketQua";
document.body.appendChild(divTraCuu_ketQua);
function traCuuMaDoan()
{
document.getElementById("inputTimKiemMa").value = '';
  let noiDungTimKiem = document.getElementById("inputTimKiem").value;
  divTraCuu_ketQua.innerHTML = '';
  for (let i =0; i< danhSachTrungTamTrungChuyen.length; i++)
  {
    if (danhSachTrungTamTrungChuyen[i].stt == noiDungTimKiem)
    {
      divTraCuu_ketQua.innerHTML = `<span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].ma}</span><br><span style="font-size:14px;">
            ${danhSachTrungTamTrungChuyen[i].ten}<br>
            <i>Tuyến: ${danhSachTinh.find(tinh => tinh.id === danhSachTrungTamTrungChuyen[i].tinhid).name}</i></span>`;
        break;
    }
  }
}



function traCuuMaTuyen()
{
document.getElementById("inputTimKiem").value = '';
  let noiDungTimKiem = document.getElementById("inputTimKiemMa").value;
if (noiDungTimKiem.length > 2)
{
  divTraCuu_ketQua.innerHTML = '';
  for (let i =0; i< danhSachTrungTamTrungChuyen.length; i++)
  {
    if (danhSachTrungTamTrungChuyen[i].ma.indexOf(noiDungTimKiem) !==-1)
    {
      divTraCuu_ketQua.innerHTML += `<span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].stt}</span><br><span style="font-size:14px;"><span style="font-weight:bold;">${danhSachTrungTamTrungChuyen[i].ma}</span><br>
            ${danhSachTrungTamTrungChuyen[i].ten}<br>
            <i>Tuyến: ${danhSachTinh.find(tinh => tinh.id === danhSachTrungTamTrungChuyen[i].tinhid).name}</i></span><br>`;
        
    }
  }
}
else
{
  divTraCuu_ketQua.innerHTML = '';
}

}