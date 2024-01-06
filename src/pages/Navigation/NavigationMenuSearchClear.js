export default function NavigationMenuSearchClear() {
    const searchBars = document.querySelectorAll(".navigation-menu-search-bars");
    searchBars.forEach((search) => {
        search.value = "";
    });
};