function doLogin()
{
  let userName = document.getElementById("userName").value;
  let pass = document.getElementById("passWord").value;
  let loginInfor = {userName: userName, passWord: pass};
  google.script.run.withSuccessHandler(function(status) 
  {
    status = JSON.parse(status);
    if (status.status == 'ok')
    {
      localStorage.setItem("userKey", status.userKey);
      showLoginSuccessfull();
      //window.location.href = "#?page=index";
    }
    else
    {
      alert(status.message);
    }
  }).doLogin(JSON.stringify(loginInfor));
}

function showLoginSuccessfull()
{
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  setTimeout(function(){
    document.getElementById('loginSuccessfull').style.display = 'block';
  },200);
  setTimeout(function(){
    document.getElementById('loginContainer').style.display = 'none';
  },1200);
  
}
