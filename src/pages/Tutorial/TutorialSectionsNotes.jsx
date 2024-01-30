import { TutorialSectionsNote } from "./TutorialSectionsNote";
import TutorialSectionsNotePart from "./TutorialSectionsNotePart";

export default function TutorialSectionsNotes(prop) {
    const content = prop.content;
    const items = content.items;
    if(items) {
        let noteParts = [];
        for(let i = 0; i <= items.length - 1; i++) {
            const item = items[i];
            let part;
            if(item.type === "multiple") {
                part = TutorialSectionsNotePart(item.codes);
            } else {
                part = (<p>{item.text}</p>);
            };
            noteParts.push(
                <div className = "tutorial-sections-notes-parts">{part}</div>
            );
        };
        return (
            <TutorialSectionsNote className = "tutorial-sections-notes">
                {noteParts}
            </TutorialSectionsNote>
        )
    } else {
        return (
            <TutorialSectionsNote className = "tutorial-sections-notes"><p>{content}</p></TutorialSectionsNote>
        );
    }
};