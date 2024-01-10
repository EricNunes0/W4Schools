import MenuJSON from "./NavigationMenu.json";
import NavigationMenusMains from "./NavigationMenusMains";
import NavigationMobileMenu from "./NavigationMobileMenu";

export default function NavigationMenus() {
    let menus = [];
    Object.keys(MenuJSON).forEach((menu) => {
        menus.push(NavigationMenusMains(menu));
    });


    return (
        <div id = "navigation-menus-div">
            {menus}
            <NavigationMobileMenu></NavigationMobileMenu>
        </div>
    )
};