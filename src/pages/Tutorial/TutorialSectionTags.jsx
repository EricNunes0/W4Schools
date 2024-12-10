import { TutorialSectionsA } from "./TutorialSectionsA";
import { TutorialSectionsH1 } from "./TutorialSectionsH1";
import { TutorialSectionsH2 } from "./TutorialSectionsH2";
import { TutorialSectionsH3 } from "./TutorialSectionsH3";
import { TutorialSectionsH4 } from "./TutorialSectionsH4";
import { TutorialSectionsH5 } from "./TutorialSectionsH5";
import { TutorialSectionsH6 } from "./TutorialSectionsH6";
import { TutorialSectionsSub } from "./TutorialSectionsSub";
import { TutorialSectionsSup } from "./TutorialSectionsSup";
import { TutorialSectionsButton } from "./TutorialSectionsButton";
import { TutorialSectionsImg } from "./TutorialSectionsImg";
import { TutorialSectionsWarning } from "./TutorialSectionsWarning";
import TutorialManagePages from "./TutorialManagePages";
import TutorialSectionsExample from "./TutorialSectionsExample";
import TutorialSectionsExercise from "./TutorialSectionsExercise";
import TutorialKickstart from "./TutorialKickstart";
import TutorialSectionsStructure from "./TutorialSectionsStructure";
import TutorialSectionsRow from "./TutorialSectionsRow";
import TutorialSectionsCanvas from "./TutorialSectionsCanvas";
import TutorialSectionsColorBlocks from "./TutorialSectionsColorBlocks";
import TutorialSectionsColorNames from "./TutorialSectionsColorNames";
import TutorialSectionsColorResults from "./TutorialSectionsColorResults";
import TutorialSectionsGlobalCompositeOperationExamples from "./TutorialSectionsGlobalCompositeOperationExamples";
import TutorialSectionsList from "./TutorialSectionsList";
import TutorialSectionsNotes from "./TutorialSectionsNotes";
import TutorialSectionsMaps from "./TutorialSectionsMaps";
import TutorialSectionsTables from "./TutorialSectionsTables";
import TutorialSectionsParagraph from "./TutorialSectionsParagraph";
import TutorialSectionsParagraphSpan from "./TutorialSectionsParagraphSpan";
import TutorialSectionsSvg from "./TutorialSectionsSvg";
import TutorialSectionsTagsFlex from "./TutorialSectionsTagsFlex";
import TutorialSectionsIframe from "./TutorialSectionsIframe";
import TutorialSectionsImgFlex from "./TutorialSectionsImgFlex";
import TutorialSectionsPicture from "./TutorialSectionsPicture";
import Section from "../Sections/Section";
import TutorialBootcamp from "./TutorialBootcamp";
import TutorialSectionsSearch from "./TutorialSectionsSearch";
import TutorialSectionsTips from "./TutorialSectionsTips";

export default function TutorialSectionTags(json, tag, content) {
    switch(tag) {
        case "a":
            if(content.type === "redirect" && content.wrap === true) {
                function LinkFlex(json, title) {
                    let link = new TutorialManagePages().getLink(json, title);
                    return (<TutorialSectionsA href = {link} data-type = {content.type} data-wrap = {content.wrap}>{title}</TutorialSectionsA>);
                };

                let links = content.links;
                let sectionsLinks = [];
                for(let i = 0; i <= links.length - 1; i++) {
                    let selectedLink = links[i];
                    if(selectedLink) {
                        sectionsLinks.push(LinkFlex(json, selectedLink));
                    };
                };

                return (
                    <div className = "tutorial-sections-links-flex">
                        {sectionsLinks}
                    </div>
                );
            } else if(content.type === "text") {
                return (<TutorialSectionsA data-type="text" href={content.href || content.link || ""} target={content.target || "_self"} style={content.style || {}}>{content.text}</TutorialSectionsA>);
            };
        case "br":
            return (<br></br>);
        case "div":
            const divStyle = content.style;
            return (<div style = {divStyle}>{content.text}</div>);
        case "h1":
            const h1 = content.text ? (<TutorialSectionsH1 data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null}>{content.text}</TutorialSectionsH1>) : (<TutorialSectionsH1>{content}</TutorialSectionsH1>);
            return h1;
        case "h2":
            const h2 = content.text ? (<TutorialSectionsH2 data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null}>{content.text}</TutorialSectionsH2>) : (<TutorialSectionsH2>{content}</TutorialSectionsH2>);
            return h2;
        case "h3":
            const h3 = content.text ? (<TutorialSectionsH3 data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null}>{content.text}</TutorialSectionsH3>) : (<TutorialSectionsH3>{content}</TutorialSectionsH3>);
            return h3;
        case "h4":
            const h4 = content.text ? (<TutorialSectionsH4 data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null}>{content.text}</TutorialSectionsH4>) : (<TutorialSectionsH4>{content}</TutorialSectionsH4>);
            return h4;
        case "h5":
            const h5 = content.text ? (<TutorialSectionsH5 data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null}>{content.text}</TutorialSectionsH5>) : (<TutorialSectionsH5>{content}</TutorialSectionsH5>);
            return h5;
        case "h6":
            const h6 = content.text ? (<TutorialSectionsH6 data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null} style = {{fontWeight: content.fontWeight || null, fontStyle: content.fontStyle || null}}>{content.text}</TutorialSectionsH6>) : (<TutorialSectionsH6>{content}</TutorialSectionsH6>);
            return h6;
        case "span":
            return (<TutorialSectionsParagraphSpan content = {content}></TutorialSectionsParagraphSpan>)
        case "sub":
            const sub = content.text ? (<TutorialSectionsSub data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null} style = {{fontWeight: content.fontWeight || null, fontStyle: content.fontStyle || null}}>{content.text}</TutorialSectionsSub>) : (<TutorialSectionsSub>{content}</TutorialSectionsSub>);
            return sub;
        case "sup":
            const sup = content.text ? (<TutorialSectionsSup data-css = {content.css} color = {content.color || null} fontsize = {content.fontSize || null} fontweight = {content.fontWeight || null} style = {{fontWeight: content.fontWeight || null, fontStyle: content.fontStyle || null}}>{content.text}</TutorialSectionsSup>) : (<TutorialSectionsSup>{content}</TutorialSectionsSup>);
            return sup;
        case "p":
            return (<TutorialSectionsParagraph content = {content}></TutorialSectionsParagraph>);
        case "b":
            return (<TutorialSectionsParagraph content = {content} bold = {true}></TutorialSectionsParagraph>);
        case "button":
            const button = (<TutorialSectionsButton data-type = {content.type} width = {content.width || null} height = {content.height || null} style={content.style || {}}>{content.text}</TutorialSectionsButton>);
            if(content.href || content.link) {
                return (<a href={content.href || content.link || ""} target={content.target || "_self"}>{button}</a>);
            } else {
                return (button);
            };
        case "canvas":
            return (<TutorialSectionsCanvas content = {content}></TutorialSectionsCanvas>);
        case "iframe":
            return (<TutorialSectionsIframe content = {content}></TutorialSectionsIframe>);
        case "img":
            return (<TutorialSectionsImg id = {content.id || null} alt = {content.alt} src = {content.src} width = {content.width || null} style = {content.style || {}}></TutorialSectionsImg>);
        case "map":
            return (<TutorialSectionsMaps content = {content}></TutorialSectionsMaps>)
        case "ol": case "ul":
            return (<TutorialSectionsList tag = {tag} content = {content}></TutorialSectionsList>);
        case "picture":
            return (<TutorialSectionsPicture content = {content}></TutorialSectionsPicture>);
        case "svg":
            return (<TutorialSectionsSvg content = {content}></TutorialSectionsSvg>);
        case "table":
            return (<TutorialSectionsTables content = {content}></TutorialSectionsTables>);
        case "bootcamp":
            return (<TutorialBootcamp content = {content}></TutorialBootcamp>);
        case "color-blocks":
            return (<TutorialSectionsColorBlocks content = {content}></TutorialSectionsColorBlocks>);
        case "color-names":
            return (<TutorialSectionsColorNames content = {content}></TutorialSectionsColorNames>);
        case "color-result":
            return (<TutorialSectionsColorResults content = {content}></TutorialSectionsColorResults>);
        case "example":
            return (<TutorialSectionsExample content = {content}></TutorialSectionsExample>);
        case "exercise":
            return (<TutorialSectionsExercise content = {content}></TutorialSectionsExercise>);
        case "globalCompositeOperationExamples":
            return (<TutorialSectionsGlobalCompositeOperationExamples></TutorialSectionsGlobalCompositeOperationExamples>);
        case "img-flex":
            return (<TutorialSectionsImgFlex content = {content}></TutorialSectionsImgFlex>);
        case "info":
            let items = [];
            for(const item of content.items) {
                switch(item.tag) {
                    case "p":
                        items.push(<TutorialSectionsParagraph content = {item.content}></TutorialSectionsParagraph>);
                        break;
                    case "button":
                        const button = (<TutorialSectionsButton data-type = {item.content.type} width = {item.content.width || null} height = {item.content.height || null} style={item.content.style || {}}>{item.content.text}</TutorialSectionsButton>);
                        if(item.content.href || item.content.link) {
                            items.push(<a href={item.content.href || item.content.link || ""} target={item.content.target || "_self"}>{button}</a>);
                        } else {
                            items.push(button);
                        };
                        break;
                    case "ol": case "ul":
                        items.push(<TutorialSectionsList tag = {item.tag} content = {item.content}></TutorialSectionsList>);
                        break;
                }
            }
            return (
                <div style={{backgroundColor: `#1a2a40`, padding: "32px"}}>
                    {items}
                </div>
            );
        case "kickstart":
            return (<TutorialKickstart link = {content.link} language = {content.language}></TutorialKickstart>);
        case "note":
            return (<TutorialSectionsNotes content = {content}></TutorialSectionsNotes>);
        case "row":
            return (<TutorialSectionsRow content = {content}></TutorialSectionsRow>);
        case "search":
            return (<TutorialSectionsSearch content = {content}></TutorialSectionsSearch>);
        case "sections":
            return (<Section content = {content}></Section>);
        case "structure":
            return (<TutorialSectionsStructure content = {content}></TutorialSectionsStructure>);
        case "tags-flex":
            return <TutorialSectionsTagsFlex content = {content}></TutorialSectionsTagsFlex>
        case "tip":
            return (<TutorialSectionsTips content = {content}></TutorialSectionsTips>);
        case "warning":
            return (<TutorialSectionsWarning><p>{content}</p></TutorialSectionsWarning>);
        default:
            return (
                <div>
                </div>
            );
    };
};