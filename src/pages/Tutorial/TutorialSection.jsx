import TutorialSectionTags from "./TutorialSectionTags";

export default function TutorialSection(json, section) {
    let sectionTags = [];
    for(let i = 0; i <= section.length - 1; i++) {
        let selectedSection = section[i];
        if(selectedSection) {
            sectionTags.push(TutorialSectionTags(json, selectedSection.tag, selectedSection.content));
        };
    };

    return (
        <section className = "tutorials-sections">
            {sectionTags}
        </section>
    );
};