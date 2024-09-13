import { TutorialSectionsListParagraph } from "./TutorialSectionsListParagraph";
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
        let ulChild;
        if(item.type === "multiple") {
            liContent = TutorialListItemMultiple(item.codes);
        } else if(item.type === "text") {
            liContent = (<TutorialSectionsListParagraph fontweight = {item.fontWeight || ""}>{item.text}</TutorialSectionsListParagraph>);
            if(item.ul) {
                ulChild = (
                    <ul style={{paddingInlineStart: "40px"}}>
                        {item.ul.items ? (
                            <>
                                {item.ul.items.map((li) => (
                                    <>
                                        {li.type === "text" ? (<>
                                            <li><TutorialSectionsListParagraph fontweight = {li.fontWeight || ""}>{li.text}</TutorialSectionsListParagraph></li>
                                        </>) : (<></>)}
                                        {li.type === "multiple" ? (<>
                                            <li>{TutorialListItemMultiple(li.codes)}</li>
                                        </>) : (<></>)}
                                    </>
                                ))}
                            </>
                        ) : (<></>)}
                    </ul>
                );
            }
        };
        items.push(<li className = "tutorial-sections-lists-items">
            {liContent}
            {ulChild}
        </li>);
    };

    /* Imagem lateral */
    let image;
    if(content.image) {
        const img = content.image;
        image = (<img src = {img.src || ""} alt = {img.alt || ""} style = {img.style || {}}></img>);
    };

    let listTag;
    if(tag === "ol") {
        listTag = (<TutorialSectionsOl type = {content.type || "1"}>{items}</TutorialSectionsOl>);
    } else if(tag === "ul") {
        listTag = (<TutorialSectionsUl liststyle = {content["list-style-type"] || "disc"} style = {content.style || {}}>{items}</TutorialSectionsUl>);
    };

    return (
        <div style={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap"}}>
            {image}
            {listTag}
        </div>
    );
};