const divThongBao = document.createElement('div');
divThongBao.className = 'thong-bao';
divThongBao.innerHTML = `<center>
    <div style="position:relative;text-align:left;margin-top:100px;background:white;width:220px;padding:20px;border-radius:5px;">
        <div id="noiDungThongBao"></div>
        <center><div style="border-radius:5px;border:1px solid rgba(0,0,0,0.3);width:100px;padding:8px;" onclick="divThongBao.style.display='none'">OK</div></center>
    </div></center>
`;
document.body.appendChild(divThongBao);

function showThongBao(message) {
    document.getElementById('noiDungThongBao').innerHTML = message;
    divThongBao.style.display = 'block';
}
