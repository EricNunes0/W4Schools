import SidebarMenu from "./SidebarMenu";
import SidebarOutside from "./SidebarOutside";

export default function Sidebar(prop) {
    const language = prop.language;
    const title = prop.title;
    const subtitle = prop.subtitle || null;
    return (
        <div className = "sidebars">
            <SidebarMenu language = {language} title = {title} subtitle = {subtitle}></SidebarMenu>
            <SidebarOutside></SidebarOutside>
        </div>
    );
};