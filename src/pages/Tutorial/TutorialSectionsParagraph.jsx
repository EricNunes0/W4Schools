import { TutorialSectionsP } from "./TutorialSectionsP";

export default function TutorialSectionsParagraph(prop) {
    const content = prop.content;
    const bold = prop.bold || false;

    let text;
    let style;
    if(typeof content === "object") {
        text = content.text || "";
        style = content.style || {};
    } else if(typeof content === "string") {
        text = content || "";
    };

    /* Spans */
    if(typeof content === "object" && content.spans) {
        let spans = [];
        let textSplit = text.trim().split(" ");
        let paragraph = [];
        textSplit.forEach((text) => {
            paragraph.push({"type": "p", "text": " " + text});
        });
        content.spans.forEach((span) => {
            paragraph.splice(span.index, 0, {"type": "span", "text": span.text, "style": span.style || null});
        });
        console.log(paragraph)

        let result = [];
        for(const part of paragraph) {
            switch(part.type) {
                case "p":
                    result.push(<>{part.text}</>);
                    break;
                case "span":
                    result.push(<span style = {part.style}>{part.text}</span>);
                    break;
                default:
                    break;
            };
        };
        text = (
            <>
                {result}
            </>
        );
    };

    return (
        <TutorialSectionsP data-bold = {bold} style = {style}>{text}</TutorialSectionsP>
    );
};