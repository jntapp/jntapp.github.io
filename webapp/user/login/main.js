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
      window.location.href = "#?page=index";
    }
    else
    {
      alert(status.message);
    }
  }).doLogin(JSON.stringify(loginInfor));
}
