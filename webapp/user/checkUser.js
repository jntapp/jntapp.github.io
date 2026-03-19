function checkUser()
{
  let key = localStorage.getItem("userKey");
  if (key)
  {
    google.script.run.withSuccessHandler(function(user) 
    {
      user = JSON.parse(user);
      if (user.status == 'ok')
      {
        
      }
      else
      {
        window.location.href = "#?page=login";
      }
    }).getUserStatus(key);
  }
  else
  {
    window.location.href = "#?page=login";
  }
}
