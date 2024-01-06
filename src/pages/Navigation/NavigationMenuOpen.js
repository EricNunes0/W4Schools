export default function NavigationMenuOpen() {
    const languagesSection = document.querySelector("#navigation-languages-section");
    const menu = document.querySelector("#navigation-menu");
    
    languagesSection.dataset.closed = "true";
    menu.dataset.closed = "false";
};