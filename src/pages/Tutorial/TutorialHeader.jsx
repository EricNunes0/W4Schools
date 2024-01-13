import TutorialMoveButtons from "./TutorialMoveButtons";
import { TutorialTitle } from "./TutorialTitle";

export default function TutorialHeader(prop) {
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;

    return (
        <header id = "tutorial-header">
            <div id = "tutorial-title-div">
                <TutorialTitle>{title}</TutorialTitle>
            </div>
            <TutorialMoveButtons language = {language} topic = {topic} title = {title}></TutorialMoveButtons>
        </header>
    )
};