import { NavigationMenuArticleTitle } from "./NavigationMenuArticleTitle";
import NavigationMenuArticleLinks from "./NavigationMenuArticleLinks";
import MenuJSON from "./NavigationMenu.json";

export default function NavigationMenusArticlesDivs(column, categorie) {
    let links = [];
    Object.keys(column.categories[categorie]).forEach((language) => {
        links.push(NavigationMenuArticleLinks(column.categories[categorie][language]));
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