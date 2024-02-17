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

    /* Imagem lateral */
    let image;
    if(content.image) {
        const img = content.image;
        image = (<img src = {img.src || ""} alt = {img.alt || ""} style = {img.style || {}}></img>);
    };

    switch(tag) {
        case "ol":
            return (
                <div style={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap"}}>
                    {image}
                    <TutorialSectionsOl type = {content.type || "1"}>{items}</TutorialSectionsOl>
                </div>
            );
        case "ul":
            return (
                <div style={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap"}}>
                    {image}
                    <TutorialSectionsUl liststyle = {content["list-style-type"] || "disc"}>{items}</TutorialSectionsUl>
                </div>
            );
    };
};