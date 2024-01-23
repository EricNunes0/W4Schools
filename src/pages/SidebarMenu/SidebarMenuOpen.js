export default function SidebarMenuOpen() {
    const sidebarMenu = document.querySelector(".sidebar-menus");
    const outside = document.querySelector(".sidebars-outside");
    sidebarMenu.dataset.closed = "false";
    outside.dataset.closed = "false";
};