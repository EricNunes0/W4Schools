import { TutorialSectionsColorName } from "./TutorialSectionsColorName";

export default function TutorialSectionsColorNames(prop) {
    const content = prop.content;
    let id = Math.floor(Math.random() * (10000 * 10000));
    let colorNamesDivId = `tutorials-sections-color-names-div-${id}`;
    let colorNames = [];
    if(content.colors) {
        for(const color of content.colors) {
            let nameId = Math.floor(Math.random() * (10000 * 10000));
            let colorNameId = `tutorials-sections-color-names-${nameId}`;
            colorNames.push(
                <TutorialSectionsColorName className="tutorials-sections-color-names" id = {colorNameId} style = {{backgroundColor: color.backgroundColor, color: color.color}}>
                    <a href={`/colors/color_tryit?color=${color.name}`}>{color.name}</a>
                    <a href={`/colors/color_tryit?hex=${color.backgroundColor}`}>{color.backgroundColor}</a>
                    <div className="tutorials-sections-color-names-menus">
                        <a href={`/colors/colors_mixer?colorbottom=${color.backgroundColor}&colortop=${color.backgroundColor}`}>Color Mixer</a>
                        <a href={`/colors/colors_picker?colorhex=${color.backgroundColor}`}>Color Picker</a>
                    </div>
                </TutorialSectionsColorName>);
        };
    }
    return (
        <div className = "tutorials-sections-color-names-divs" id = {colorNamesDivId} key = {colorNamesDivId}>
            {colorNames}
        </div>
    )
};