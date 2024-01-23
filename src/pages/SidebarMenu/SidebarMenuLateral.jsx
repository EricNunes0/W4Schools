import { SidebarLateralButton } from "./SidebarLateralButton";
import SidebarMenuClick from "./SidebarMenuClick";

export default function SidebarMenuLateral() {
    return (
        <div id = "sidebar-menu-lateral">
            <div id = "sidebar-lateral-buttons-divs">
                <SidebarLateralButton action = "home" onClick = {() => SidebarMenuClick()}></SidebarLateralButton>
            </div>
        </div>
    );
};