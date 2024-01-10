import MenuJSON from "./NavigationMenu.json";
import { NavigationMobileMenuButton } from "./NavigationMobileMenuButton";

export default function NavigationMobileMenuButtonClick(title) {
    const mobileButton = document.querySelector(`.navigation-mobile-menu-buttons#${title}`);
    const mobileMenuList = document.querySelector(`.navigation-mobile-menu-lists#${title}`);
    if(mobileButton) {
        mobileButton.dataset.closed = mobileButton.dataset.closed === "true" ? "false" : "true";
        mobileMenuList.dataset.closed = mobileMenuList.dataset.closed === "true" ? "false" : "true";
    };
};