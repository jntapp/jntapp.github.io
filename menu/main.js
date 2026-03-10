class Menu
{
    constructor(danhSachButton = [])
    {
        this.danhSachButton = danhSachButton;
    }

    render()
    {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'menu';

        this.danhSachButton.forEach(button => 
        {
            const buttonElement = button.render(); 
            menuContainer.appendChild(buttonElement);
        });

        document.body.appendChild(menuContainer);
    }
}

class MenuButton
{
    constructor(caption, url)
    {
        this.caption = caption;
        this.url = url;
    }

    render()
    {
        const bt = document.createElement('div');
        bt.className = 'menu-button';
        bt.innerHTML = `<a href="${this.url}"><font color="white">${this.caption}</font></a>`;
        return bt;
    }
}


const menu = new Menu([
    new MenuButton('Home', '/index.html'),
    new MenuButton('Lịch xe', '/lichxe.html'),
    new MenuButton('Đóng gói', 'https://jtexpress.vn/vi/quy-cach-dong-goi-hang-hoa'),
    new MenuButton('Tự động', '/dong-bao-tu-dong/yeucau.html'),
]);

menu.render();