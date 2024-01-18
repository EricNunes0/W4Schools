import TutorialStructure from "./TutorialStructure";

export default function TutorialSectionsStructure(prop) {
    const content = prop.content;
    let structures = [];
    if(content) {
        for(let i = 0; i <= content.divs.length - 1; i++) {
            const div = content.divs[i];
            structures.push(TutorialStructure(div));
        };
    };

    return (
        <div className = "tutorial-sections-structures-divs">
            {structures}
        </div>
    );
};