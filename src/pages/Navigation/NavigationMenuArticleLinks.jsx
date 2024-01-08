import MenuJSON from "./NavigationMenu.json";
import { NavigationMenuArticleButton } from "./NavigationMenuArticleButton";

export default function NavigationMenuArticleLinks(topics) {
    let buttons = [];

    function ArticleButton(data) {
        console.log(data);
        return (
            <NavigationMenuArticleButton href = {data.url} data-type = {data.type} data-hot = {data.hot} data-new = {data.new}>{data.text}</NavigationMenuArticleButton>
        )
    };

    if(topics) {
        console.log(typeof topics);
        for(let i = 0; i <= topics.length - 1; i++) {
            buttons.push(ArticleButton(topics[i]));
        };
    };

    return (
        <div className = "navigation-menu-article-buttons-divs">
            {buttons}
        </div>
    );
};