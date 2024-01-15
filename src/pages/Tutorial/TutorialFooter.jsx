import TutorialMoveButtons from "./TutorialMoveButtons";
import { TutorialTitle } from "./TutorialTitle";

export default function TutorialFooter(prop) {
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;

    return (
        <footer id = "tutorial-footer">
            <TutorialMoveButtons language = {language} topic = {topic} title = {title}></TutorialMoveButtons>
        </footer>
    )
};