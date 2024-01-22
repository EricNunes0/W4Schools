import { NavigationButton } from "./NavigationButton";
import { NavigationButtonsArrows } from "./NavigationButtonsArrows";
import { NavigationMoveButton } from "./NavigationMoveButton";
import navButtons from "./NavigationLanguageButtons.json";
import NavigationMoveLanguages from "./NavigationMoveLanguages"

export default function NavLanguageButtons() {
    let navigationButtons = [];

    function NavLanguageButtonCreate(language, link) {
        return (
            <NavigationButton href = {link} key={language}>
                <p className = "navigation-buttons-texts">{language}</p>
                <NavigationButtonsArrows></NavigationButtonsArrows>
            </NavigationButton>
        )
    };

    for(const button of navButtons.buttons) {
        navigationButtons.push(NavLanguageButtonCreate(button.language, button.link));
    };
    return (
        <main id = "navigation-languages-main">
            <section id = "navigation-languages-section">
            {navigationButtons}
            </section>
            <NavigationMoveButton className = "navigation-move-buttons" id = "left"
                onMouseDown = {() => NavigationMoveLanguages("start", "left")}
                onMouseUp = {() => NavigationMoveLanguages("stop")}
                onMouseOut = {() => NavigationMoveLanguages("stop")}
                style = {{display: "none"}}
            ></NavigationMoveButton>
            <NavigationMoveButton className = "navigation-move-buttons" id = "right"
                onMouseDown = {() => NavigationMoveLanguages("start", "right")}
                onMouseUp = {() => NavigationMoveLanguages("stop")}
                onMouseOut = {() => NavigationMoveLanguages("stop")}
            ></NavigationMoveButton>
        </main>
    );
};