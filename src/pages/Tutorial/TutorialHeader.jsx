import TutorialMoveButtons from "./TutorialMoveButtons";
import { TutorialSubtitle } from "./TutorialSubtitle";
import { TutorialTitle } from "./TutorialTitle";

export default function TutorialHeader(prop) {
    const json = prop.json;
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    const subtitle = prop.subtitle || null;

    return (
        <header id = "tutorial-header">
            <div id = "tutorial-title-div">
                <TutorialTitle>{title}</TutorialTitle>
                <TutorialSubtitle>{subtitle}</TutorialSubtitle>
            </div>
            <TutorialMoveButtons json = {json} language = {language} topic = {topic} title = {title} subtitle = {subtitle}></TutorialMoveButtons>
        </header>
    )
};