import HomeSectionsPanel from "./HomeSectionsPanel";
import { HomeSectionsLearnButton } from "./HomeSectionsLearnButton";
import { HomeSectionsSubtitles } from "./HomeSectionsSubtitles";
import { HomeSectionsTitles } from "./HomeSectionsTitles";

export default function HomeSection(prop) {
    return (
        <div className = "home-sections" id = {prop.language} data-lang = {prop.language}>
            <main className = "home-sections-mains">
                <article className = "home-sections-articles">
                    <section className = "home-sections-articles-infos">
                        <HomeSectionsTitles>{prop.language}</HomeSectionsTitles>
                        <HomeSectionsSubtitles data-lang = {prop.language.toLocaleLowerCase()}></HomeSectionsSubtitles>
                        <div className = "home-sections-buttons-divs display-flex-column">
                            <HomeSectionsLearnButton className = "learn display-flex" href = {`/learn-${prop.language.toLocaleLowerCase()}`}>Aprenda {prop.language}</HomeSectionsLearnButton>
                            <HomeSectionsLearnButton className = "reference display-flex" href = {`/reference-${prop.language.toLocaleLowerCase()}`}>Referências</HomeSectionsLearnButton>
                            <HomeSectionsLearnButton className = "certification display-flex" href = {`/certification-${prop.language.toLocaleLowerCase()}`}>Certificados</HomeSectionsLearnButton>
                        </div>
                    </section>
                </article>
                <aside className = "home-sections-asides">
                    <HomeSectionsPanel language = {prop.language}></HomeSectionsPanel>
                </aside>
            </main>
        </div>
    );
};