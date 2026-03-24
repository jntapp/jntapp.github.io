function logout()
{
  var status = {userHoVaTen : '', userKey: '', status: 'notOk', massage: ''};
  localStorage.setItem("userKey", '');
  localStorage.setItem('loginStatus', 'notOk');
  localStorage.setItem("userHoVaTen", '');
  document.getElementById('userMenu_hoVaTen').innerText = '-';
}
