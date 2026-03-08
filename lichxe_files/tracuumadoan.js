const divTraCuu =  document.createElement("div");
divTraCuu.className = "divTraCuu";
const inputTimKiem = document.createElement("input");
inputTimKiem.type = "text";
inputTimKiem.id = "inputTimKiem";
inputTimKiem.addEventListener("keyup",function(){
traCuuMaDoan();
});

divTraCuu.appendChild(inputTimKiem);
document.body.appendChild(divTraCuu);

function traCuuMaDoan()
{
  let noiDungTimKiem = document.getElementById("inputTimKiem").value;
for (let i =0; i< danhSachTrungTamTrungChuyen.length; i++)
{
   if (danhSachTrungTamTrungChuyen[i] == noiDungTimKiem)
{

 break;
}
}
}