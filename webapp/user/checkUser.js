var status = {status: 'notOk', userKey: '0', message:''};
function checkUser()
{
  let key = localStorage.getItem("userKey");
  console.log(key);
  if (key)
  {
    google.script.run.withSuccessHandler(function(user) 
    {
      user = JSON.parse(user);
      status = user;
      if (user.status !== 'ok')
      {
        showLogin();
      }
    }).getUserStatus(key);
  }
  else
  {
    console.log('key khong ton tai');
    showLogin();
  }
}

checkUser();
