class DangNhap
{
  constructor(zIndex = "1000")
  {
    this.zIndex = zIndex;
  }

  render()
  {
    const login_container = document.createElement('div');
    login_container.className = "login__container";
    login_container.id = "loginContainer";
    login_container.style.zIndex = this.zIndex;
      const login_main = document.createElement('div');
      login_main.className = 'login__div';
      login_main.innerHTML = `
        <table class="login__header">
          <tr>
              <td style="position:relative;">
              <div style="width:100%;text-align:center;">
                  <img src="https://jntapp.github.io/webapp/user/login/contact_caption.svg" style="height:25px;opacity:0.75;">
              </div>
              
              <img src="https://jntapp.github.io/webapp/user/login/contact_book.svg" style="height:32px;position:absolute;right:30px;top:2px;opacity:0.35;">
              </td>
          </tr>
        </table>
        <div class="DivUnderHeader" style="height:70px;">loginContainer
        </div>
        
        <font color="white">
          <div class="login__error" id="loginSuccessfull" style="text-align:center;display:none;">
            <h1>Đăng nhập thành công!</h1>
          </div>
        </font>
        
        <font color="white">
          <div class="login__error" id="loginError" style="text-align:center;">
            Vui lòng đăng nhập để vào trang này <br> Please login to access this page
          </div>
        </font>
          
        <table style="width:100%;padding:8px;" border="0" id="loginForm" class="login__form">
          <tr>
            <td>
            </td>
          </tr>
          <tr>
            <td style="position:relative;">
                <input type="text" name="username" id="userName" placeholder="Tên đăng nhập" class="InputBox InputA" value="">
                <img src="https://jntapp.github.io/webapp/user/login/user_icon.png" style="position:absolute;left:5px;bottom:7px;width:18px;opacity:0.5;">
            </td>
          </tr>
    
          <tr>
            <td style="position:relative;">
                <input type="password" name="password" id="passWord" placeholder="Mật khẩu" class="InputBox InputA">
                <img src="https://jntapp.github.io/webapp/user/login/password_icon.png" style="position:absolute;left:5px;bottom:7px;width:18px;opacity:0.5;">
            </td>
          </tr>
          <tr>
            <td style="padding-top:35px;text-align:center;">
              <button name="login_user" 
              onclick = "doLogin();"
              style="background:#009933;color:white;padding:12px;width:200px;border-radius:5px;border:1px solid rgba(255,255,255,0.5);">Đăng nhập</button>
            </td>
          </tr>
        </table>
        <div style="height:20px;"></div>`;
      login_container.appendChild(login_main);
      document.body.appendChild(login_container);
  }
}

const dangNhap = new DangNhap();
dangNhap.render();
