import NavigationMenuClose from "./NavigationMenuClose";
import NavigationMenuMainOpen from "./NavigationMenuMainOpen";
import NavigationMenuMainsClose from "./NavigationMenuMainsClose";
import NavigationMenuOpen from "./NavigationMenuOpen";

export default function NavigationListMenu(name) {
    const menu = document.querySelector("#navigation-menu");
    const menuMains = document.querySelectorAll(".navigation-menus-mains");

    
    for(let menuMain of menuMains) {
        if(menuMain.dataset.closed === "false") {
            if(menuMain.id === name) {
                NavigationMenuClose();
            } else {
                menuMain.dataset.closed = "true";
                NavigationMenuMainOpen(name);
            };
            return;
        };
    };
    menu.dataset.closed === "true" ? NavigationMenuOpen() : NavigationMenuClose();
    NavigationMenuMainOpen(name);
};