import { TutorialSectionsWarning } from "./TutorialSectionsWarning";
import TutorialSectionsWarningPart from "./TutorialSectionsWarningPart";

export default function TutorialSectionsWarnings(prop) {
    const content = prop.content;
    const items = content.items;
    if(items) {
        let noteParts = [];
        for(let i = 0; i <= items.length - 1; i++) {
            const item = items[i];
            let part;
            if(item.type === "multiple") {
                part = TutorialSectionsWarningPart(item.codes);
            } else {
                part = (<p>{item.text}</p>);
            };
            noteParts.push(
                <div className = "tutorial-sections-warnings-parts">{part}</div>
            );
        };
        return (
            <TutorialSectionsWarning className = "tutorial-sections-warnings">
                {noteParts}
            </TutorialSectionsWarning>
        )
    } else {
        return (
            <TutorialSectionsWarning className = "tutorial-sections-warnings"><p>{content}</p></TutorialSectionsWarning>
        );
    }
};