import { TutorialSectionsTip } from "./TutorialSectionsTip";
import TutorialSectionsTipPart from "./TutorialSectionsTipPart";

export default function TutorialSectionsTips(prop) {
    const content = prop.content;
    const items = content.items;
    if(items) {
        let tipParts = [];
        for(let i = 0; i <= items.length - 1; i++) {
            const item = items[i];
            let part;
            if(item.type === "multiple") {
                part = TutorialSectionsTipPart(item.codes);
            } else {
                part = (<p>{item.text}</p>);
            };
            tipParts.push(
                <div className = "tutorial-sections-tips-parts">{part}</div>
            );
        };
        return (
            <TutorialSectionsTip className = "tutorial-sections-tips">
                {tipParts}
            </TutorialSectionsTip>
        )
    } else {
        return (
            <TutorialSectionsTip className = "tutorial-sections-tips"><p>{content}</p></TutorialSectionsTip>
        );
    }
};