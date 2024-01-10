import NavigationMenusArticlesDivs from "./NavigationMenusArticlesDivs";
import NavigationMobileMenusArticlesDivs from "./NavigationMobileMenusArticlesDivs";

export default function NavigationMobileMenuColumns(menu, column) {
    let articleDivs = [];


    Object.keys(column.categories).forEach((categorie) => {
        articleDivs.push(NavigationMobileMenusArticlesDivs(column, categorie));
    });

    return (
        <main className = "navigation-mobile-menu-columns-divs">
            <article className = "navigation-mobile-menu-articles">
                {articleDivs}
            </article>
        </main>
    )
};