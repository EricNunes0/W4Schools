export default function NavigationHide() {
    const navigationHideButton = document.querySelector("#navigation-hide-button");
    if(navigationHideButton) {

        function NavigationOpen() {
            navigationHideButton.dataset.closed = "false";
        };
        function NavigationClose() {
            navigationHideButton.dataset.closed = "true";
        };


        navigationHideButton.dataset.closed === "true" ? NavigationOpen() : NavigationClose();
        console.log(navigationHideButton.dataset.closed);
    };
};