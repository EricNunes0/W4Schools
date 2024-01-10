import MenuJSON from "./NavigationMenu.json";
import { NavigationMobileMenuLink } from "./NavigationMobileMenuLink";
import NavigationMobileMenuSection from "./NavigationMobileMenuSection";

export default function NavigationMobileMenu() {
    let sections = [];
    Object.keys(MenuJSON).forEach((menu) => {
        sections.push(NavigationMobileMenuSection(menu));
    });
    
    return (
        <div id = "navigation-mobile-menu" data-closed = "true">
            {sections}
            <NavigationMobileMenuLink href = "/spaces">Espaços</NavigationMobileMenuLink>
            <NavigationMobileMenuLink href = "/certificates">Certificados</NavigationMobileMenuLink>
            <NavigationMobileMenuLink href = "/jobs">Trabalhos</NavigationMobileMenuLink>
        </div>
    )
};