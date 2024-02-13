import "./Tutorials.css";
import "./TutorialExamples.css";
import "./TutorialKickstarts.css";
import "./TutorialStructures.css";
import "./TutorialSectionsIframe.css";
import "./TutorialSectionsNote.css";
import "./TutorialSectionsRow.css";
import "./TutorialSectionsTagsFlex.css";
import "./TutorialSectionsMaps.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import TutorialHeader from "./TutorialHeader";
import TutorialSectionMain from "./TutorialSectionMain";
import TutorialFooter from "./TutorialFooter";
import pageTitle from "../../functions/pageTitle";
import Sidebar from "../SidebarMenu/Sidebar";

export default function TutorialMain(prop) {
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    const subtitle = prop.subtitle || null;
    pageTitle(title);
    
    return (
        <div className = "tutorials">
            <Sidebar language = {language} title = {title} subtitle = {subtitle}></Sidebar>
            <main className = "tutorials-mains">
                <TutorialHeader language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialHeader>
                <TutorialSectionMain language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialSectionMain>
                <TutorialFooter language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialFooter>
            </main>
        </div>
    );
};