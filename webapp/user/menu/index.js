const menuUserButton = document.createElement('a');
menuUserButton.id = "menuUserButton";
menuUserButton.innerHTML = `<img src="https://jntapp.github.io/webapp/user/menu/user.svg" style="height:25px;" class="menu__icon-menu" onclick="menuUser_toggle();">`;

const menuUser = document.createElement('div');
menuUser.className = "user__menu";
menuUser.id = "menuUser";
menuUser.innerHTML = `
            <div id="menuUser_name"  class="menu__button" style="font-weight:bold; margin-top:10px;">
                  Trần Văn Hùng
            </div>
            <div>
                  <a target="_top" href="javascript:void(0);"  onclick="changePassword();" class="menu__button">
                        Đổi mật khẩu
                  </a>
            </div>
            <div>
                  <a style="margin-botton:20px;" onclick="logout();" target="_top" href="javascript:void(0);" class="menu__button">
                        Đăng xuất
                  </a>
            </div>`;

var menuUserShown = false;
function menuUser_toggle()
{
      let menuUser = document.getElementById("menuUser");
      if (menuUserShown)
      {
            menuUser.style.display = "none";
            menuUserShown = false;
      }
      else
      {
            menuUser.style.display = "flex";
            menuUserShown = true;
      }
}
