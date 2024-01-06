export default function NavigationMenuMainOpen(name) {
    const menuMains = document.querySelectorAll(`.navigation-menus-mains`);
    console.log(menuMains);
    for(const main of menuMains) {
        main.dataset.closed = main.id == name ? "false" : "true";
    };
};