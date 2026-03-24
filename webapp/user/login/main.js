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
        document.getElementById('userMenu_hoVaTen').innerText = status.userHoVaTen;
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
