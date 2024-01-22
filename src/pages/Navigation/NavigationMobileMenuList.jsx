import MenuJSON from "./NavigationMenu.json";
import NavigationMenuSearchClear from "./NavigationMenuSearchClear";
import { NavigationMenuTitle } from "./NavigationMenuTitle";
import { NavigationMenuSearchBar } from "./NavigationMenuSearchBar";
import { NavigationMenuSearchButton } from "./NavigationMenuSearchButton";
import NavigationMobileMenuColumns from "./NavigationMobileMenusColumns";

export default function NavigationMobileMenuList(prop) {
    let menu = prop.menu;
    let columns = [];

    MenuJSON[menu].columns.forEach((column) => {
        columns.push(NavigationMobileMenuColumns(menu, column));
    })
    let title = MenuJSON[menu].title;
    const id = `navigation-mobile-menu-list-${Math.floor(Math.random() * (1000 * 1000))}`;
    return(
        <div className = "navigation-mobile-menu-lists" id = {id} key = {id} data-closed = "true">
            <header className = "navigation-mobile-menus-headers">
                <div className = "navigation-mobile-menus-columns">
                    <header className = "navigation-mobile-menus-search-divs">
                        <NavigationMenuSearchBar className = "navigation-mobile-menu-search-bars" placeholder = "Filtrar..."></NavigationMenuSearchBar>
                        <NavigationMenuSearchButton className = "navigation-mobile-menu-search-buttons" onClick = {NavigationMenuSearchClear}></NavigationMenuSearchButton>
                    </header>
                </div>
            </header>
            <article className = "navigation--mobile-menus-articles-columns">
                {columns}
            </article>
        </div>
    );
};