import MenuJSON from "./NavigationMenu.json";
import NavigationMenusMains from "./NavigationMenusMains";

export default function NavigationMenus() {
    let menus = [];
    Object.keys(MenuJSON).forEach((menu) => {
        menus.push(NavigationMenusMains(menu));
    });


    return (
        <div id = "navigation-menus-div">
            {menus}
        </div>
    )
};