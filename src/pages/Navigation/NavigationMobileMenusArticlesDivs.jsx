import { NavigationMenuArticleTitle } from "./NavigationMenuArticleTitle";
import NavigationMenuArticleLinks from "./NavigationMenuArticleLinks";
import MenuJSON from "./NavigationMenu.json";
import NavigationMobileMenuArticleLinks from "./NavigationMobileMenuArticleLinks";

export default function NavigationMobileMenusArticlesDivs(column, categorie) {
    let links = [];
    Object.keys(column.categories[categorie]).forEach((language) => {
        links.push(NavigationMobileMenuArticleLinks(column.categories[categorie][language]));
    });

    return (
        <div className = "navigation-menus-articles-divs">
            <div className = "navigation-menus-articles-titles-divs">
                <NavigationMenuArticleTitle>{categorie}</NavigationMenuArticleTitle>
            </div>
            <div className = "navigation-menus-articles-buttons-divs">
                {links}
                <NavigationMenuArticleLinks></NavigationMenuArticleLinks>
            </div>
        </div>
    )
};