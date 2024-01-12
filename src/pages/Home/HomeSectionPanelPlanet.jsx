import styled from "styled-components";

const planets = {
    "html": {
        planet: "mercury",
        size: 30
    },
    "css": {
        planet: "venus",
        size: 40,
        filter: "grayscale(0.3)"
    },
    "javascript": {
        planet: "earth",
        size: 60
    },
    "python": {
        planet: "mars",
        size: 50
    }
}

export const HomeSectionPanelPlanet = styled.span`
    position: absolute;
    top: 0;
    right: 0px;
    width: 80px;
    height: 80px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 5px #000;

    &[language="${(prop) => prop.language}"] {
        width: ${(prop) => planets[prop.language].size}px;
        height: ${(prop) => planets[prop.language].size}px;
        top: ${(prop) => planets[prop.language].size / 4 * -1}px;
        right: ${(prop) => planets[prop.language].size / 4 * -1}px;
        background-image: url(${(prop) => `"svgs/${planets[prop.language].planet}.svg"`});
        filter: ${(prop) => planets[prop.language].filter};
        rotate: -10deg;
    }
`;