import NavigationMobileMenusArticlesDivs from "./NavigationMobileMenusArticlesDivs";

export default function NavigationMobileMenuColumns(menu, column) {
    let articleDivs = [];
    const id = `navigation-mobile-menu-column-${Math.floor(Math.random() * (1000 * 1000))}`;    
    Object.keys(column.categories).forEach((categorie) => {
        articleDivs.push(NavigationMobileMenusArticlesDivs(column, categorie));
    });

    return (
        <main className = "navigation-mobile-menu-columns-divs" key = {id}>
            <article className = "navigation-mobile-menu-articles" key = {id}>
                {articleDivs}
            </article>
        </main>
    )
};