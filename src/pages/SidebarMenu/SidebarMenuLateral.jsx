import { SidebarLateralButton } from "./SidebarLateralButton";
import SidebarMenuOpen from "./SidebarMenuOpen";

export default function SidebarMenuLateral() {
    return (
        <div id = "sidebar-menu-lateral">
            <div id = "sidebar-lateral-buttons-divs">
                <SidebarLateralButton action = "home" onClick = {() => SidebarMenuOpen()}></SidebarLateralButton>
            </div>
        </div>
    );
};