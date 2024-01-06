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

    return (
        <main className = "navigation-menus-columns-divs">
            <article className = "navigation-menus-articles">
                {articleDivs}
            </article>
        </main>
    )
};