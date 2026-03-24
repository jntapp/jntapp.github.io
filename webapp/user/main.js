var status = {userHoVaTen: '', status: 'notOk', userKey: '0', message:''};
function checkUser()
{
  let key = localStorage.getItem("userKey");
  //console.log(key);
  if (key)
  {
    google.script.run.withSuccessHandler(function(user) 
    {
      user = JSON.parse(user);
      localStorage.setItem('loginStatus', user.status);
      localStorage.setItem("userHoVaTen", status.userHoVaTen);
      document.getElementById('menuUser_hoVaTen').value = status.userHoVaTen;
      //console.log(user);
      status = user;
      if (user.status !== 'ok')
      {
        showLogin();
      }
    }).getUserStatus(key);
  }
  else
  {
    //console.log('key khong ton tai');
    localStorage.setItem('loginStatus', 'notOk');
    showLogin();
  }
}

checkUser();


function logout()
{
  var status = {userHoVaTen : '', userKey: '', status: 'notOk', massage: ''};
  localStorage.setItem("userKey", '');
  localStorage.setItem('loginStatus', 'notOk');
  localStorage.setItem("userHoVaTen", '');
  document.getElementById('userMenu_hoVaTen').innerText = '-';
}
