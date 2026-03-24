var status = {userHoVaTen: '', status: 'notOk', userKey: '0', message:''};

function doLogin()
{
  let userName = document.getElementById("userName").value;
  let pass = document.getElementById("passWord").value;
  if (userName.length < 3)
  {
    alert('Vui lòng kiểm tra tên đăng nhập!');
  }
  else if (pass.length < 3)
  {
    alert('Vui lòng kiểm tra lại mật khẩu!');
  }
  else
  {
    let loginInfor = {userName: userName, passWord: pass};
    google.script.run.withSuccessHandler(function(status) 
    {
      status = JSON.parse(status);
      if (status.status == 'ok')
      {
        localStorage.setItem("userKey", status.userKey);
        localStorage.setItem("loginStatus", 'ok');
        localStorage.setItem("userHoVaTen", status.userHoVaTen);
        document.getElementById('menuUser_hoVaTen').innerText = status.userHoVaTen;
        showLoginSuccessfull();
      }
      else
      {
        alert(status.message);
      }
    }).doLogin(JSON.stringify(loginInfor));
  }  
}

function showLoginSuccessfull()
{
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('loginSuccessfull').style.display = 'block';
  
  setTimeout(function(){
    document.getElementById('loginContainer').style.display = 'none';
  },500);
}


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
