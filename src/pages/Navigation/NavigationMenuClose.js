import NavigationMenuMainsClose from "./NavigationMenuMainsClose";

export default function NavigationMenuClose() {
    const languagesSection = document.querySelector("#navigation-languages-section");
    const menu = document.querySelector("#navigation-menu");
    const navHideButton = document.querySelector("#navigation-hide-button").style.display = "flex";

    languagesSection.dataset.closed = "false";
    menu.dataset.closed = "true";
    NavigationMenuMainsClose();
    
};