import "./Home.css";
import "./HomePanel.css";
import HomeBackgroundStars from "./HomeBackgroundStars";
import HomeSection from "./HomeSection";
import { HomeSearchBar } from "./HomeSearchBar";
import { HomeSearchButton } from "./HomeSearchButton";
import { HomeSubtitle } from "./HomeSubtitle";
import { HomeTitle } from "./HomeTitle";
import { HomeBegin } from "./HomeBegin";
import { HomeFox } from "./HomeFox";
import HomeTypingTitle from "./HomeTypingTitle";

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
                    <HomeTitle></HomeTitle>
                    <HomeTypingTitle text = "W4Schools" animationduration = "0.15" stepduration = "0.15"></HomeTypingTitle>
                    <HomeSubtitle backgroundColor = "#a0c0f0">Com o maior site para desenvolvedores web</HomeSubtitle>
                    <div id = "home-search-div">
                        <HomeSearchBar width = "300" height = "45" placeholder = "Pesquise por tutoriais"></HomeSearchBar>
                        <HomeSearchButton width = "100" height = "45"></HomeSearchButton>
                    </div>
                    <div id = "home-begin-div">
                        <HomeBegin>Não sabe por onde começar?</HomeBegin>
                    </div>
                </article>
            </main>
            <HomeSection language = "HTML"></HomeSection>
            <HomeSection language = "CSS"></HomeSection>
            <HomeSection language = "JavaScript"></HomeSection>
        </div>
    );
};