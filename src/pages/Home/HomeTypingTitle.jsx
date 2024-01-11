import HomeTypingLetter from "./HomeTypingLetter";


export default function HomeTypingTitle(prop) {
    let text = prop.text;
    let animationduration = prop.animationduration;
    let stepduration = parseFloat(prop.stepduration);
    let stepdurationOld = stepduration;
    let letters = [];

    let texts = text.trim().split("");
    for(let letter of texts) {
        letters.push(HomeTypingLetter(letter, animationduration, stepduration));
        stepduration += stepdurationOld;
    };

    return (
        <div className = "display-flex-row" id = "home-typing-div">
            {letters}
        </div>
    )
};