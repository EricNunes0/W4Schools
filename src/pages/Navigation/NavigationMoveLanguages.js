var scrollInterval;

export default function NavigationMoveLanguages(action, direction) {
    console.log(action, new Date())
    const navigationLanguagesSection = document.querySelector("#navigation-languages-section");

    function manageLeftButton() {
        document.querySelector(`.navigation-move-buttons#left`).style.display = navigationLanguagesSection.scrollLeft === 0 ? "none" : "block";
    };

    function scrollLeft(scrollSpeed) {
        navigationLanguagesSection.scrollLeft -= scrollSpeed;
        manageLeftButton();
    };

    function scrollRight(scrollSpeed) {
        navigationLanguagesSection.scrollLeft += scrollSpeed;
        manageLeftButton();
    };

    function scrollStop(interval) {
        window.clearInterval(interval);
    };

    if(action === "start") {
        let scrollSpeed = 1;

        switch(direction) {
            case "right":
                scrollInterval = window.setInterval(function() {
                    scrollSpeed = scrollSpeed * 1.1;
                    if(scrollSpeed > 10) {
                        scrollSpeed = 10;
                    }
                    scrollRight(scrollSpeed);
                }, 10);
                break;
            case "left":
                scrollInterval = window.setInterval(function() {
                    scrollSpeed = scrollSpeed * 1.1;
                    if(scrollSpeed > 10) {
                        scrollSpeed = 10;
                    }
                
                    scrollLeft(scrollSpeed);
                }, 10);
                break;
        }
    };

    if(action === "stop") {
        scrollStop(scrollInterval);
    }
};