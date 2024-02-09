import { TutorialSectionsOl } from "./TutorialSectionsOl";
import { TutorialSectionsUl } from "./TutorialSectionsUl";
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
    switch(tag) {
        case "ol":
            return (<TutorialSectionsOl type = {content.type || "1"}>{items}</TutorialSectionsOl>);
        case "ul":
            return (<TutorialSectionsUl liststyle = {content["list-style-type"] || "disc"}>{items}</TutorialSectionsUl>);
    };
};