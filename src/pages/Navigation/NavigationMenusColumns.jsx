import { NavigationMenuTitle } from "./NavigationMenuTitle";
import { NavigationMenuSearchBar } from "./NavigationMenuSearchBar";
import { NavigationMenuSearchButton } from "./NavigationMenuSearchButton";
import NavigationMenuSearchClear from "./NavigationMenuSearchClear";
import MenuJSON from "./NavigationMenu.json";
import NavigationMenusArticlesDivs from "./NavigationMenusArticlesDivs";

export default function NavigationMenusColumns(menu, column) {
    let articleDivs = [];
    Object.keys(column.categories).forEach((categorie) => {
        articleDivs.push(NavigationMenusArticlesDivs(column, categorie));
    });
    let columnId = Math.floor(Math.random() * (1000 * 1000));
    return (
        <main className = "navigation-menus-columns-divs" id = {`${menu}-${columnId}`} key = {`${menu}-${columnId}`}>
            <article className = "navigation-menus-articles" id = {`${menu}-${columnId}`} key = {`${menu}-${columnId}`}>
                {articleDivs}
            </article>
        </main>
    )
};