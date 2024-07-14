import TutorialMoveButtons from "./TutorialMoveButtons";
import { TutorialTitle } from "./TutorialTitle";

export default function TutorialFooter(prop) {
    const json = prop.json;
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    const subtitle = prop.subtitle || null;

    return (
        <footer id = "tutorial-footer">
            <TutorialMoveButtons json = {json} language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialMoveButtons>
        </footer>
    )
};