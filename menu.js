fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        const menuElement = document.getElementById('menu');
        data.menuItems.forEach(item => {  // Cambia 'data' a 'data.menuItems'
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = item.url;  // Cambia 'link' a 'url' para coincidir con tu estructura JSON
            link.textContent = item.text;
            listItem.appendChild(link);

            if (item.subMenu) {  // Cambia 'submenu' a 'subMenu' para coincidir con tu estructura JSON
                const subMenu = document.createElement('ul');
                item.subMenu.forEach(subItem => {  // Cambia 'submenu' a 'subMenu' para coincidir con tu estructura JSON
                    const subListItem = document.createElement('li');
                    const subLink = document.createElement('a');
                    subLink.href = subItem.url;  // Cambia 'link' a 'url' para coincidir con tu estructura JSON
                    subLink.textContent = subItem.text;
                    subListItem.appendChild(subLink);
                    subMenu.appendChild(subListItem);
                });
                listItem.appendChild(subMenu);
            }

            menuElement.appendChild(listItem);
        });
    });
