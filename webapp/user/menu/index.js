const menuUserButton = document.createElement('a');
menuUserButton.id = "menuUserButton";
menuUserButton.innerHTML = `<img src="https://jntapp.github.io/webapp/user/menu/user.svg" style="height:30px;" class="menu__icon-menu">`;

const menuUser = document.createElement('div');
menuUser.className = "user__menu";
menuUser.innerHTML = `
            <div id="menuUser_name"  class="menu__button" style="font-weight:bold; margin-top:10px;">
                  Trần Văn Hùng
            </div>
            <div>
                  <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                        Đổi mật khẩu
                  </a>
            </div>
            <div>
                  <a style="margin-botton:20px;" target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                        Đăng xuất
                  </a>
            </div>`;
