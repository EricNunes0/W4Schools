export default function NavigationMenuClose() {
    const languagesSection = document.querySelector("#navigation-languages-section");
    const menu = document.querySelector("#navigation-menu");

    languagesSection.dataset.closed = "false";
    menu.dataset.closed = "true";
};