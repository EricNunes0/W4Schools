import { TutorialSectionsA } from "./TutorialSectionsA";
import { TutorialSectionsH1 } from "./TutorialSectionsH1";
import { TutorialSectionsH2 } from "./TutorialSectionsH2";
import { TutorialSectionsH3 } from "./TutorialSectionsH3";
import { TutorialSectionsH4 } from "./TutorialSectionsH4";
import { TutorialSectionsH5 } from "./TutorialSectionsH5";
import { TutorialSectionsH6 } from "./TutorialSectionsH6";
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
import TutorialSectionsStructure from "./TutorialSectionsStructure";
import TutorialListItemMultiple from "./TutorialListItemMultiple";
import TutorialSectionsRow from "./TutorialSectionsRow";
import { TutorialSectionsWarning } from "./TutorialSectionsWarning";

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
            const h1 = content.text ? (<TutorialSectionsH1 data-css = {content.css}>{content.text}</TutorialSectionsH1>) : (<TutorialSectionsH1>{content}</TutorialSectionsH1>);
            return h1;
        case "h2":
            const h2 = content.text ? (<TutorialSectionsH2 data-css = {content.css}>{content.text}</TutorialSectionsH2>) : (<TutorialSectionsH2>{content}</TutorialSectionsH2>);
            return h2;
        case "h3":
            const h3 = content.text ? (<TutorialSectionsH3 data-css = {content.css}>{content.text}</TutorialSectionsH3>) : (<TutorialSectionsH3>{content}</TutorialSectionsH3>);
            return h3;
        case "h4":
            const h4 = content.text ? (<TutorialSectionsH4 data-css = {content.css}>{content.text}</TutorialSectionsH4>) : (<TutorialSectionsH4>{content}</TutorialSectionsH4>);
            return h4;
        case "h5":
            const h5 = content.text ? (<TutorialSectionsH5 data-css = {content.css}>{content.text}</TutorialSectionsH5>) : (<TutorialSectionsH5>{content}</TutorialSectionsH5>);
            return h5;
        case "h6":
            const h6 = content.text ? (<TutorialSectionsH6 data-css = {content.css}>{content.text}</TutorialSectionsH6>) : (<TutorialSectionsH6>{content}</TutorialSectionsH6>);
            return h6;
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
            return (<TutorialSectionsNote><p>{content}</p></TutorialSectionsNote>);
        case "row":
            return (<TutorialSectionsRow items = {content.items}></TutorialSectionsRow>);
        case "structure":
            return (<TutorialSectionsStructure content = {content}></TutorialSectionsStructure>);
        case "warning":
            return (<TutorialSectionsWarning><p>{content}</p></TutorialSectionsWarning>);
        default:
            return (
                <div>
                </div>
            );
    };
};