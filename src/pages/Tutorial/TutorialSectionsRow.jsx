import TutorialSectionsRowPart from "./TutorialSectionsRowPart";

export default function TutorialSectionsRow(prop) {
    const items = prop.items;
    let rowParts = [];
    for(let i = 0; i <= items.length - 1; i++) {
        const item = items[i];
        let part;
        if(item.type === "multiple") {
            part = TutorialSectionsRowPart(item.codes);
        } else {
            part = (<p>{item.text}</p>);
        };
        rowParts.push(
            <div className = "tutorial-sections-rows-parts">{part}</div>
        );
    };


    return (
        <div className = "tutorial-sections-rows">
            {rowParts}
        </div>
    )
};