import TutorialManagePages from "./TutorialManagePages";
import TutorialSection from "./TutorialSection";

export default function TutorialSectionMain(prop) {
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    const sections =  new TutorialManagePages().getSections(language, topic, title);
    let tutorialSections = [];
    if(sections) {
        for(let i = 0; i <= sections.length - 1; i++) {
            let selectedSection = sections[i];
            if(selectedSection) {
                tutorialSections.push(TutorialSection(selectedSection));
            };
        };
    };

    return (
        <main className = "tutorial-section-mains">
            {tutorialSections}
        </main>
    );
};