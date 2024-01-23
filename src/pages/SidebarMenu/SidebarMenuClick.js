import SidebarMenuClose from "./SidebarMenuClose";
import SidebarMenuOpen from "./SidebarMenuOpen";

export default function SidebarMenuClick() {
    const sidebarMenu = document.querySelector(".sidebar-menus");
    sidebarMenu.dataset.closed === "true" ? SidebarMenuOpen() : SidebarMenuClose();
};