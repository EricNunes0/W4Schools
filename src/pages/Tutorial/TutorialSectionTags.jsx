import { TutorialSectionsA } from "./TutorialSectionsA";
import { TutorialSectionsH1 } from "./TutorialSectionsH1";
import { TutorialSectionsH2 } from "./TutorialSectionsH2";
import { TutorialSectionsH3 } from "./TutorialSectionsH3";
import { TutorialSectionsP } from "./TutorialSectionsP";
import { TutorialSectionsButton } from "./TutorialSectionsButton";
import { TutorialSectionsImg } from "./TutorialSectionsImg";
import { TutorialSectionsList } from "./TutorialSectionsList";
import TutorialManagePages from "./TutorialManagePages";
import TutorialSectionsExample from "./TutorialSectionsExample";
import TutorialSectionsExercise from "./TutorialSectionsExercise";
import TutorialKickstart from "./TutorialKickstart";
import TutorialSectionTableRow from "./TutorialSectionTableRow";
import { TutorialSectionsNote } from "./TutorialSectionsNote";

export default function TutorialSectionTags(tag, content) {
    switch(tag) {
        case "a":
            if(content.type === "redirect" && content.wrap === true) {
                function LinkFlex(title) {
                    let link = new TutorialManagePages().getLink(title);
                    return (<TutorialSectionsA href = {link} data-type = {content.type} data-wrap = {content.wrap}>{title}</TutorialSectionsA>);
                };

                let links = content.links;
                let sectionsLinks = [];
                for(let i = 0; i <= links.length - 1; i++) {
                    let selectedLink = links[i];
                    if(selectedLink) {
                        sectionsLinks.push(LinkFlex(selectedLink));
                    };
                };

                return (
                    <div className = "tutorial-sections-links-flex">
                        {sectionsLinks}
                    </div>
                );
            };
        case "h1":
            return (<TutorialSectionsH1>{content}</TutorialSectionsH1>);
        case "h2":
            return (<TutorialSectionsH2>{content}</TutorialSectionsH2>);
        case "h3":
            return (<TutorialSectionsH3>{content}</TutorialSectionsH3>)
        case "p":
            return (<TutorialSectionsP>{content}</TutorialSectionsP>);
        case "b":
            return (<TutorialSectionsP data-bold = "true">{content}</TutorialSectionsP>);
        case "button":
            return (<TutorialSectionsButton data-type = {content.type}>{content.text}</TutorialSectionsButton>);
        case "img":
            return (<TutorialSectionsImg alt = {content.alt} src = {content.src}></TutorialSectionsImg>);
        case "ol": case "ul":
            let items = [];
            for(let i = 0; i <= content.items.length - 1; i++) {
                const item = content.items[i];
                items.push(
                    <li>{item.text}</li>
                );
            };
            return (<TutorialSectionsList data-list = {tag}>{items}</TutorialSectionsList>);
        case "table":
            let tableRows = [];
            for(let i = 0; i <= content.rows.length - 1; i++) {
                const row = content.rows[i];
                tableRows.push(TutorialSectionTableRow(row));
            };
            return (
                <table className = "tutorial-sections-tables">
                    <tbody className = "tutorial-sections-tbodies">{tableRows}</tbody>
                </table>
            )
        case "example":
            return (<TutorialSectionsExample content = {content}></TutorialSectionsExample>);
        case "exercise":
            return (<TutorialSectionsExercise content = {content}></TutorialSectionsExercise>);
        case "kickstart":
            return (<TutorialKickstart link = {content.link} language = {content.language}></TutorialKickstart>);
        case "note":
            return (<TutorialSectionsNote>
                <p>{content}</p>
            </TutorialSectionsNote>);
        default:
            return (
                <div>
                </div>
            );
    };
};