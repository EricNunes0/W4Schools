import "./Tutorials.css";
import "./TutorialBootcamps.css";
import "./TutorialExamples.css";
import "./TutorialKickstarts.css";
import "./TutorialStructures.css";
import "./TutorialSectionsCanvas.css";
import "./TutorialSectionsIframe.css";
import "./TutorialSectionsImgFlex.css";
import "./TutorialSectionsNote.css";
import "./TutorialSectionsPicture.css";
import "./TutorialSectionsRow.css";
import "./TutorialSectionsSearch.css";
import "./TutorialSectionsTagsFlex.css";
import "./TutorialSectionsTip.css";
import "./TutorialSectionsMaps.css";
import "./TutorialSectionsWarning.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import TutorialHeader from "./TutorialHeader";
import TutorialSectionMain from "./TutorialSectionMain";
import TutorialFooter from "./TutorialFooter";
import pageTitle from "../../functions/pageTitle";
import Sidebar from "../SidebarMenu/Sidebar";

export default function TutorialMain(prop) {
    const json = prop.json;
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    const subtitle = prop.subtitle || null;
    const pageTitleText = prop.pageTitle || null;
    pageTitle(pageTitleText || title);
    
    return (
        <div className = "tutorials">
            <Sidebar json = {json} language = {language} title = {title} subtitle = {subtitle}></Sidebar>
            <main className = "tutorials-mains">
                <TutorialHeader json = {json} language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialHeader>
                <TutorialSectionMain json = {json} language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialSectionMain>
                <TutorialFooter json = {json} language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialFooter>
            </main>
        </div>
    );
};