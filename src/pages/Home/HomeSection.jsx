import HomeSectionsPanel from "./HomeSectionsPanel";
import { HomeSectionsLearnButton } from "./HomeSectionsLearnButton";
import { HomeSectionsSubtitles } from "./HomeSectionsSubtitles";
import { HomeSectionsTitles } from "./HomeSectionsTitles";

export default function HomeSection(language) {
    return (
        <div className = "home-sections" id = {language} data-lang = {language}>
            <main className = "home-sections-mains">
                <article className = "home-sections-articles">
                    <section className = "home-sections-articles-infos">
                        <HomeSectionsTitles>{language}</HomeSectionsTitles>
                        <HomeSectionsSubtitles data-lang = {language.toLocaleLowerCase()}></HomeSectionsSubtitles>
                        <div className = "home-sections-buttons-divs display-flex-column">
                            <HomeSectionsLearnButton className = "learn display-flex" href = {`/${language.toLocaleLowerCase()}/default`}>Aprenda {language}</HomeSectionsLearnButton>
                            <HomeSectionsLearnButton className = "reference display-flex" href = {`/reference-${language.toLocaleLowerCase()}/reference`}>Referências</HomeSectionsLearnButton>
                            <HomeSectionsLearnButton className = "certification display-flex" href = {`/certifications-${language.toLocaleLowerCase()}-certificate`}>Certificados</HomeSectionsLearnButton>
                        </div>
                    </section>
                </article>
                <aside className = "home-sections-asides">
                    <HomeSectionsPanel language = {language}></HomeSectionsPanel>
                </aside>
            </main>
        </div>
    );
};