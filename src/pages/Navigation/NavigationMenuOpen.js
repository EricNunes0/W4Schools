export default function NavigationMenuOpen() {
    const languagesSection = document.querySelector("#navigation-languages-section");
    const menu = document.querySelector("#navigation-menu");
    const navHideButton = document.querySelector("#navigation-hide-button").style.display = "none";
    
    languagesSection.dataset.closed = "true";
    menu.dataset.closed = "false";
};