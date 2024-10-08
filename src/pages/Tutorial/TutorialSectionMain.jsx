import TutorialManagePages from "./TutorialManagePages";
import TutorialSection from "./TutorialSection";

export default function TutorialSectionMain(prop) {
    const json = prop.json;
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    const subtitle = prop.subtitle || null;
    const sections =  new TutorialManagePages().getSections(json, language, topic, title, subtitle);
    let tutorialSections = [];
    if(sections) {
        for(let i = 0; i <= sections.length - 1; i++) {
            let selectedSection = sections[i];
            if(selectedSection) {
                tutorialSections.push(TutorialSection(json, selectedSection));
            };
        };
    };

    return (
        <main className = "tutorial-section-mains">
            {tutorialSections}
        </main>
    );
};