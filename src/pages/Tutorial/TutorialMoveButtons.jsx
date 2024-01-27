import TutorialManagePages from "./TutorialManagePages";
import { TutorialMoveButton } from "./TutorialMoveButton";

export default function TutorialMoveButtons(prop) {
    const language = prop.language;
    const topic = prop.topic;
    const title = prop.title;
    const subtitle = prop.subtitle || null;
    let previousLink = new TutorialManagePages().getPreviousLink(language, topic, title, subtitle);
    let nextLink = new TutorialManagePages().getNextLink(language, topic, title, subtitle);
    return (
        <div id = "tutorial-move-buttons-div">
            <TutorialMoveButton className = "tutorial-move-buttons" data-move = "prev" href = {previousLink}><p>Anterior</p></TutorialMoveButton>
            <TutorialMoveButton className = "tutorial-move-buttons" data-move = "next" href = {nextLink}><p>Próximo</p></TutorialMoveButton>
        </div>
    )
}