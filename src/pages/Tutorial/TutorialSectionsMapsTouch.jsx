import styled, { keyframes } from "styled-components";

let size = 40;
let touchAnimation = keyframes`
    0% {
        left: 75%;
        opacity: 0;
        transform: scale(1.1);
    }
    20% {
        left: 75%;
        opacity: 1;
        transform: scale(1);
    }
    100% {
        left: 25%;
        opacity: 0;
    }
`;

export const TutorialSectionsMapsTouch = styled.i`
    position: absolute;
    top: calc(50% - calc(${size}px / 2));
    left: 75%;
    width: ${size}px;
    height: ${size}px;
    background-image: url("/svgs/touch.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: ${touchAnimation} 2s ease-in-out infinite;
`;