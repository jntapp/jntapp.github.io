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
            const menuTable = document.createElement('table');
                const menuTable_tr = document.createElement('tr');
                    this.danhSachButton.forEach(button => 
                    {
                        var menuTable_tr_td = document.createElement('td');
                            const buttonElement = button.render();
                            menuTable_tr_td.appendChild(buttonElement);
                        menuTable_tr.appendChild(menuTable_tr_td);
                    });

                    var menuTable_tr_td = document.createElement('td');
                    menuTable_tr.appendChild(menuTable_tr_td);
                            
                    var menuTable_tr_td = document.createElement('td');
                    menuTable_tr_td.style.width = "50px";
                        menuTable_tr_td.appendChild(menuUserButton);
                        menuTable_tr_td.appendChild(menuUser);
                    menuTable_tr.appendChild(menuTable_tr_td);
        
                menuTable.appendChild(menuTable_tr);
            menuContainer.appendChild(menuTable);
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
