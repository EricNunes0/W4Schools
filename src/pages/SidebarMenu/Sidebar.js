import SidebarMenu from "./SidebarMenu";
import SidebarOutside from "./SidebarOutside";

export default function Sidebar(prop) {
    let language = prop.language;
    let title = prop.title;
    return (
        <div className = "sidebars">
            <SidebarMenu language = {language} title = {title}></SidebarMenu>
            <SidebarOutside></SidebarOutside>
        </div>
    );
};