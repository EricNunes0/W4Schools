import NavigationMenuClose from "./NavigationMenuClose";
import NavigationMenuMainOpen from "./NavigationMenuMainOpen";
import NavigationMenuOpen from "./NavigationMenuOpen";

export default function NavigationListTutorials() {
    const menu = document.querySelector("#navigation-menu");
    menu.dataset.closed == "true" ? NavigationMenuOpen() : NavigationMenuClose();

    NavigationMenuMainOpen("tutorials");
};