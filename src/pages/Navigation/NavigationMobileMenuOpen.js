import NavigationMenuClose from "./NavigationMenuClose";
import NavigationMenuOpen from "./NavigationMenuOpen";

export default function NavigationMobileMenuOpen() {
    const menu = document.querySelector("#navigation-menu");
    const mobileMenu = document.querySelector("#navigation-mobile-menu");
    menu.dataset.closed === "true" ? NavigationMenuOpen() : NavigationMenuClose();
    mobileMenu.dataset.closed = "false";
};