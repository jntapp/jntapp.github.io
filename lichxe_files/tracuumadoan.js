const divTraCuu =  document.createElement("div");
divTraCuu.className = "divTraCuu";
  const titleTraCuu = document.createElement("div");
  titleTraCuu.innerHTML = "<center><span style='font-size:18px;font-weight:bold;'>Tra cứu mã đoạn</span></center><br>";
divTraCuu.appendChild(titleTraCuu);
  const inputTimKiem = document.createElement("input");
  inputTimKiem.type = "text";
  inputTimKiem.id = "inputTimKiem";
  inputTimKiem.addEventListener("keyup",function(){
  traCuuMaDoan();
  });

  const divTraCuu_ketQua = document.createElement("div");
  divTraCuu_ketQua.id = "divTraCuu_ketQua";
  divTraCuu.appendChild(divTraCuu_ketQua);

divTraCuu.appendChild(inputTimKiem);
document.body.appendChild(divTraCuu);

function traCuuMaDoan()
{
  console.log("Đang traCuuMaDoan");
  let noiDungTimKiem = document.getElementById("inputTimKiem").value;
  divTraCuu_ketQua.innerHTML = '';
  for (let i =0; i< danhSachTrungTamTrungChuyen.length; i++)
  {
    if (danhSachTrungTamTrungChuyen[i].stt == noiDungTimKiem)
    {
      divTraCuu_ketQua.innerHTML = `<center><span style="font-size:22px;font-weight:bold;">${danhSachTrungTamTrungChuyen[i].ma}</span><br>
            ${danhSachTrungTamTrungChuyen[i].ten}<br>
            <center>Tuyến: ${danhSachTinh.find(tinh => tinh.id === danhSachTrungTamTrungChuyen[i].tinhid).name}</center>`;
        break;
    }
  }
}