const divThongBao = document.createElement('div');
divThongBao.className = 'thong-bao';
divThongBao.innerHTML = `<center>
    <div style="position:relative;margin-top:100px;background:white;width:300px;padding:20px;border-radius:5px;">
        <div id="noiDungThongBao"></div>
        <span class="close-btn" onclick="divThongBao.style.display='none'">&times;</span>
    </div></center>
`;
document.body.appendChild(divThongBao);

function showThongBao(message) {
    document.getElementById('noiDungThongBao').innerHTML = message;
    divThongBao.style.display = 'block';
}
