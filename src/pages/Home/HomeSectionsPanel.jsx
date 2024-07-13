import HomeSectionsPanelsTexts from "./HomeSectionsPanelsTexts";
import { HomeSectionsPanelsDots } from "./HomeSectionsPanelsDots";
import { HomeSectionsPanelsTitles } from "./HomeSectionsPanelsTitles";
import { HomeSectionPanelPlanet } from "./HomeSectionPanelPlanet";

export default function HomeSectionsPanel(prop) {
    const language = prop.language;
    return (
        <div className = "home-sections-panels-divs">
            <div className = "home-sections-panels" data-language = {language.language}>
                <HomeSectionPanelPlanet language = {language.language}></HomeSectionPanelPlanet>
                <header className = "home-sections-panels-headers display-flex-row">
                    <div className = "home-sections-panels-dots-divs display-flex-row">
                        <HomeSectionsPanelsDots data-color = "red"></HomeSectionsPanelsDots>
                        <HomeSectionsPanelsDots data-color = "yellow"></HomeSectionsPanelsDots>
                        <HomeSectionsPanelsDots data-color = "green"></HomeSectionsPanelsDots>
                    </div>
                    <div className = "home-sections-panels-titles-divs">
                        <HomeSectionsPanelsTitles>Exemplo de {language.title}:</HomeSectionsPanelsTitles>
                    </div>
                </header>
                <article className = "home-sections-panels-articles">
                    <HomeSectionsPanelsTexts language = {language.language}></HomeSectionsPanelsTexts>
                </article>
            </div>
        </div>
    );
};