function doLogin()
{
  let userName = document.getElementById("userName");
  let pass = document.getElementById("passWord");
  let loginInfor = {userName: userName; passWord: pass};
  google.script.run.withSuccessHandler(function(status) 
  {
    status = JSON.parse(status);
    if (status.status == 'ok')
    {
      localStorage.setItem("userKey", status.userKey);
      window.location.href = "#?page=index";
    }
  }).doLogin(JSON.stringify(loginInfor));   
}
