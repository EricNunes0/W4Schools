export default function NavigationMenuMainsClose() {
    const menuMains = document.querySelectorAll(".navigation-menus-mains");
    for(const menuMain of menuMains) {
        menuMain.dataset.closed = "true";
    };
};