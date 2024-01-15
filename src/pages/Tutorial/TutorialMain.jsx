import "./Tutorials.css";
import "./TutorialExamples.css";
import "./TutorialKickstarts.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import TutorialHeader from "./TutorialHeader";
import TutorialSectionMain from "./TutorialSectionMain";
import TutorialFooter from "./TutorialFooter";

export default function TutorialMain(prop) {
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    
    return (
        <div className = "tutorials">
            <SidebarMenu language = "html"></SidebarMenu>
            <main className = "tutorials-mains">
                <TutorialHeader language = {language} topic = {topic} title = {title}></TutorialHeader>
                <TutorialSectionMain language = {language} topic = {topic} title = {title}></TutorialSectionMain>
                <TutorialFooter language = {language} topic = {topic} title = {title}></TutorialFooter>
            </main>
        </div>
    );
};