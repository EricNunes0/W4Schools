import styled, { keyframes } from "styled-components";


const HomeMoonAnimation = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-5px);
    }
`;

export const HomeMoon = styled.button`
    position: relative;
    width: 100px;
    height: 100px;
    background-image: url("svgs/moon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    opacity: 1;
    transition: all 0.3s ease;
    animation: 
        ${HomeMoonAnimation} 1s ease-in-out infinite ${(prop) => prop.revealdelay}s;
    animation-play-state: running;
    
    &[data-closed="true"] {
        animation-play-state: paused;
        transform: translateY(200px);
        opacity: 0;
    }

    &:hover {
        filter: drop-shadow(0px 0px 2px #ffffff);
        transform: scale(1.1);
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        width: 60%;
        height: 60%;
        background-image: url("svgs/languages/${(prop) => prop.language}.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        filter: invert(0.2);
        margin: 20%;
    }

    &:hover > div {
        opacity: 1;
        transform: scale(1);
    }
`;