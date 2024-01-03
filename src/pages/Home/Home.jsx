import "./Home.css";
import HomeBackgroundStars from "./HomeBackgroundStars";
import HomeHTML from "./HomeHTML";
import { HomeSearchBar } from "./HomeSearchBar";
import { HomeSearchButton } from "./HomeSearchButton";
import { HomeSubtitle } from "./HomeSubtitle";
import { HomeTitle } from "./HomeTitle";
import { HomeBegin } from "./HomeBegin";
import { HomeFox } from "./HomeFox";

export default function Home() {
    return (
        <div id = "home">
            <main id = "home-main">
                <div id = "home-background">
                    <i id = "home-background-fox"></i>
                    <HomeFox></HomeFox>
                    <HomeBackgroundStars count = "30"></HomeBackgroundStars>
                </div>
                <article id = "home-article">
                    <HomeTitle>Aprenda a programar</HomeTitle>
                    <HomeSubtitle backgroundColor = "#a0c0f0">Com o maior site para desenvolvedores web</HomeSubtitle>
                    <div id = "home-search-div">
                        <HomeSearchBar width = "300" height = "45"></HomeSearchBar>
                        <HomeSearchButton width = "100" height = "45"></HomeSearchButton>
                    </div>
                    <div id = "home-begin-div">
                        <HomeBegin>Não sabe por onde começar?</HomeBegin>
                    </div>
                </article>
            </main>
            <HomeHTML></HomeHTML>
        </div>
    );
};