import { HomeMoon } from "./HomeMoon";
import HomeMoonClick from "./HomeMoonClick";
import { HomeTextsBox } from "./HomeTextsBox";
import { HomeMoonText } from "./HomeMoonText";

export default function HomeMoons() {
    let moons = [];
    let revealdelayskip = 0.25;
    let currentdelay = 0;
    let languages = [
        {
            language: "HTML",
            description: "Linguagem de marcação para construir páginas web"
        },
        {
            language: "CSS",
            description: "Linguagem para estilizar páginas da web"
        },
        {
            language: "JavaScript",
            description: "Linguagem para programar páginas da web"
        },
        {
            language: "Python",
            description: "Linguagem para programar back-ends"
        }
    ];

    function HomeMoonCreate(lang, revealdelay) {
        let language = lang.language;
        let description = lang.description;
        let id = `moon-${language}`;

        return (
            <HomeMoon id = {id} language = {language.toLocaleLowerCase()} revealdelay = {revealdelay} data-closed = "true"
                onLoad = {
                    setTimeout(function() {
                        document.querySelector(`#${id}`).dataset.closed = false;
                    }, (revealdelay + 0.2) * 1000)
                }
                onClick = {() => {HomeMoonClick(language)}}>
                    <HomeTextsBox id = {language}>
                        <HomeMoonText>{description}</HomeMoonText>
                    </HomeTextsBox>
                </HomeMoon>
        )
    };

    for(const language of languages) {
        moons.push(HomeMoonCreate(language, currentdelay));
        currentdelay += revealdelayskip;
    };


    return (
        <div className = "display-flex-row" id = "home-moons-div">
            {moons}
        </div>
    )
};