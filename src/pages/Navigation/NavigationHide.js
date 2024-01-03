export default function NavigationHide() {
    const navigationMain = document.querySelector("#navigation-main");
    const navigationHideButton = document.querySelector("#navigation-hide-button");
    if(navigationMain && navigationHideButton) {
        function NavigationOpen() {
            navigationMain.dataset.closed = "false";
            navigationHideButton.dataset.closed = "false";
        };
        function NavigationClose() {
            navigationMain.dataset.closed = "true";
            navigationHideButton.dataset.closed = "true";
        };


        navigationHideButton.dataset.closed === "true" ? NavigationOpen() : NavigationClose();
        console.log(navigationHideButton.dataset.closed);
    };
};