import "./Tutorials.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import TutorialHeader from "./TutorialHeader";

export default function TutorialMain(prop) {
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    
    return (
        <div className = "tutorials">
            <SidebarMenu language = "html"></SidebarMenu>
            <main className = "tutorials-mains">
                <TutorialHeader language = {language} topic = {topic} title = {title}></TutorialHeader>
                <section className = "tutorials-sections">
                    
                </section>
            </main>
        </div>
    );
};