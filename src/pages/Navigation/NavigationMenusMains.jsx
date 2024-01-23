import { NavigationMenuTitle } from "./NavigationMenuTitle";
import { NavigationMenuSearchBar } from "./NavigationMenuSearchBar";
import { NavigationMenuSearchButton } from "./NavigationMenuSearchButton";
import NavigationMenuSearchClear from "./NavigationMenuSearchClear";
import MenuJSON from "./NavigationMenu.json";
import NavigationMenusArticlesDivs from "./NavigationMenusArticlesDivs";
import NavigationMenusColumns from "./NavigationMenusColumns";

export default function NavigationMenusMains(menu) {
    let columns = [];

    MenuJSON[menu].columns.forEach((column) => {
        columns.push(NavigationMenusColumns(menu, column));
    })
    let title = MenuJSON[menu].title;
    let menuMainId = `navigation-menu-main-${Math.floor(Math.random() * (1000 * 1000))}`;
    return (
        <main className = "navigation-menus-mains" id = {menu} key = {menuMainId} data-closed = "true">
            <header className = "navigation-menus-headers">
                <div className = "navigation-menus-headers-columns">
                    <header className = "navigation-menus-columns-headers">
                        <NavigationMenuTitle>{title}</NavigationMenuTitle>
                    </header>
                </div>
                <div className = "navigation-menus-headers-columns">
                    <header className = "navigation-menus-search-divs">
                        <NavigationMenuSearchBar className = "navigation-menu-search-bars" placeholder = "Filtrar..."></NavigationMenuSearchBar>
                        <NavigationMenuSearchButton className = "navigation-menu-search-buttons" onClick = {NavigationMenuSearchClear}></NavigationMenuSearchButton>
                    </header>
                </div>
            </header>
            <article className = "navigation-menus-articles-columns">
                {columns}
            </article>
        </main>
    )
};