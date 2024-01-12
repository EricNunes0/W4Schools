import scrollScreenTo from "../../functions/scrollScreenTo";

export default function HomeMoonClick(language) {
    console.log(language);
    const homeSection = document.querySelector(`.home-sections#${language}`);
    scrollScreenTo(homeSection);
};