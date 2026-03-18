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
    new MenuButton('Home', 'https://script.google.com/macros/s/AKfycbwyJMGL0BT8gQuhiN4jNCwaJYIfYx43RiMx7B1uYQffgv-KH55tv3xLTRedENm6k1Ob/exec'),
    new MenuButton('Lịch xe', 'https://script.google.com/macros/s/AKfycbwyJMGL0BT8gQuhiN4jNCwaJYIfYx43RiMx7B1uYQffgv-KH55tv3xLTRedENm6k1Ob/exec?page=lichxe'),
    new MenuButton('Tự động', '/dong-bao-tu-dong/yeucau.html'),
]);

menu.render();
