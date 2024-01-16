import { NavigationButton } from "./NavigationButton";
import { NavigationButtonsArrows } from "./NavigationButtonsArrows";
import { NavigationMoveButton } from "./NavigationMoveButton";
import navButtons from "./NavigationLanguageButtons.json";
import NavigationMoveLanguages from "./NavigationMoveLanguages"

export default function NavLanguageButtons() {
    let navigationButtons = [];

    function NavLanguageButtonCreate(language, link) {
        return (
            <NavigationButton href = {link}>
                <p className = "navigation-buttons-texts">{language}</p>
                <NavigationButtonsArrows></NavigationButtonsArrows>
            </NavigationButton>
        )
    };

    for(const button of navButtons.buttons) {
        navigationButtons.push(NavLanguageButtonCreate(button.language, button.link));
    };
    let key = `navigation-languages-main-${parseInt(Math.floor(Math.random(10000 * 10000)))}`;
    return (
        <main className = "navigation-languages-mains" id = "navigation-languages-main" key = {key}>
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