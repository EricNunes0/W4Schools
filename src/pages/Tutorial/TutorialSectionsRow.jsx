import TutorialSectionsRowPart from "./TutorialSectionsRowPart";
import { TutorialSectionsListParagraph } from "./TutorialSectionsListParagraph";

export default function     TutorialSectionsRow(prop) {
    const content = prop.content;
    if(content) {
        const items = content.items;
        let rowParts = [];
        for(let i = 0; i <= items.length - 1; i++) {
            const item = items[i];
            let part;
            if(item.type === "multiple") {
                part = TutorialSectionsRowPart(item.codes);
            } else if(item.type === "text") {
                part = (<TutorialSectionsListParagraph fontweight = {item.fontWeight || ""}>{item.text}</TutorialSectionsListParagraph>);
            };
            rowParts.push(
                <div className = "tutorial-sections-rows-parts">{part}</div>
            );
        };


        return (
            <div className = "tutorial-sections-rows" style={content.style || {}}>
                {rowParts}
            </div>
        );
    };
};