import MenuJSON from "./NavigationMenu.json";
import { NavigationMobileMenuButton } from "./NavigationMobileMenuButton";
import NavigationMobileMenuButtonClick from "./NavigationMobileMenuButtonClick";
import NavigationMobileMenuList from "./NavigationMobileMenuList";

export default function NavigationMobileMenuSection(menu) {
    let title = MenuJSON[menu].title;
    let mobileMenuSectionId = `navigation-mobile-menu-section-${Math.floor(Math.random() * (1000 * 1000))}`;

    return (
        <div className = "navigation-mobile-menu-sections" id = {mobileMenuSectionId} key = {mobileMenuSectionId} data-closed = "true">
            <NavigationMobileMenuButton className = "navigation-mobile-menu-buttons" id = {menu} data-closed = "true" onClick = {() => NavigationMobileMenuButtonClick(menu)}>{title}</NavigationMobileMenuButton>
            <NavigationMobileMenuList menu = {menu}></NavigationMobileMenuList>
        </div>
    )
};