export default function SidebarMenuOpen() {
    const sidebarMenu = document.querySelector(".sidebar-menus");
    sidebarMenu.dataset.closed = sidebarMenu.dataset.closed === "true" ? "false" : "true";
};