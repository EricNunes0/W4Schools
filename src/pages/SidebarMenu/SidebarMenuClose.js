export default function SidebarMenuClose() {
    console.log("click")
    const sidebarMenu = document.querySelector(".sidebar-menus");
    const outside = document.querySelector(".sidebars-outside");
    sidebarMenu.dataset.closed = "true";
    outside.dataset.closed = "true";
};