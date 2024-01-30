import { TutorialSectionsOl } from "./TutorialSectionsOl";
import TutorialListItemMultiple from "./TutorialListItemMultiple"

export default function TutorialSectionsList(prop) {
    const tag = prop.tag;
    const content = prop.content;
    let items = [];
    for(let i = 0; i <= content.items.length - 1; i++) {
        const item = content.items[i];
        let liContent;
        if(item.type === "multiple") {
            liContent = TutorialListItemMultiple(item.codes);
        } else {
            liContent = item.text;
        };
        items.push(
            <li className = "tutorial-sections-lists-items">{liContent}</li>
        );
    };
    return (<TutorialSectionsOl data-list = {tag}>{items}</TutorialSectionsOl>);
};