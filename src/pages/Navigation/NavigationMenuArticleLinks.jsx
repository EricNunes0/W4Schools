import MenuJSON from "./NavigationMenu.json";
import { NavigationMenuArticleButton } from "./NavigationMenuArticleButton";

export default function NavigationMenuArticleLinks(topics) {
    let buttons = [];

    function ArticleButton(data) {
        return (
            <NavigationMenuArticleButton key = {`${data.url}-${data.type}-${data.hot}-${data.new}-${data.sparkles}`} href = {data.url} data-type = {data.type} data-hot = {data.hot} data-new = {data.new} data-sparkles = {data.sparkles}>{data.text}</NavigationMenuArticleButton>
        )
    };

    if(topics) {
        for(let i = 0; i <= topics.length - 1; i++) {
            buttons.push(ArticleButton(topics[i]));
        };
    };

    return (
        <div className = "navigation-menu-article-buttons-divs" key = {Math.floor(Math.random() * (1000 * 1000))}>
            {buttons}
        </div>
    );
};