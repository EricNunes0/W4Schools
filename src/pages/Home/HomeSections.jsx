import HomeSection from "./HomeSection";

export default function HomeSections() {
    let sections = [];
    let languages = ["HTML", "CSS", "JavaScript", "Python"]

    for(const language of languages) {
        sections.push(HomeSection(language));
    }

    return (
        <div id = "home-sections-divs">
            {sections}
        </div>
    )
};