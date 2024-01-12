import HomeSectionsPanelsTexts from "./HomeSectionsPanelsTexts";
import { HomeSectionsPanelsDots } from "./HomeSectionsPanelsDots";
import { HomeSectionsPanelsTitles } from "./HomeSectionsPanelsTitles";
import { HomeSectionPanelPlanet } from "./HomeSectionPanelPlanet";

export default function HomeSectionsPanel(prop) {
    return (
        <div className = "home-sections-panels-divs">
            <div className = "home-sections-panels" data-language = {prop.language}>
                <HomeSectionPanelPlanet language = {prop.language.toLocaleLowerCase()}></HomeSectionPanelPlanet>
                <header className = "home-sections-panels-headers display-flex-row">
                    <div className = "home-sections-panels-dots-divs display-flex-row">
                        <HomeSectionsPanelsDots data-color = "red"></HomeSectionsPanelsDots>
                        <HomeSectionsPanelsDots data-color = "yellow"></HomeSectionsPanelsDots>
                        <HomeSectionsPanelsDots data-color = "green"></HomeSectionsPanelsDots>
                    </div>
                    <div className = "home-sections-panels-titles-divs">
                        <HomeSectionsPanelsTitles>Exemplo de {prop.language}:</HomeSectionsPanelsTitles>
                    </div>
                </header>
                <article className = "home-sections-panels-articles">
                    <HomeSectionsPanelsTexts language = {prop.language}></HomeSectionsPanelsTexts>
                </article>
            </div>
        </div>
    );
};