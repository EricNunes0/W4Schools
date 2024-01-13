export default function NavigationHide() {
    const navigationMain = document.querySelector("#navigation-main");
    const navigationHideButton = document.querySelector("#navigation-hide-button");
    const sidebarMenu = document.querySelector(".sidebar-menus");
    if(navigationMain && navigationHideButton) {
        function NavigationOpen() {
            navigationMain.dataset.closed = "false";
            navigationHideButton.dataset.closed = "false";
            if(sidebarMenu) {
                sidebarMenu.dataset.nav = "true";
            };
        };
        function NavigationClose() {
            navigationMain.dataset.closed = "true";
            navigationHideButton.dataset.closed = "true";
            if(sidebarMenu) {
                sidebarMenu.dataset.nav = "false";
            };
        };


        navigationHideButton.dataset.closed === "true" ? NavigationOpen() : NavigationClose();
        console.log(navigationHideButton.dataset.closed);
    };
};