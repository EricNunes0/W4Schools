import styled, { keyframes } from "styled-components";

const homeBackgroundStarAnimation = keyframes`
    0%, 100% {
        transform: scale(0.2);
    }
    50% {
        transform: scale(1);
        filter: drop-shadow(0px 0px 2px #ffffff);
    }
`;

export const HomeBackgroundStar = styled.span`
    position: absolute;
    top: ${(prop) => prop.top}%;
    left: ${(prop) => prop.left}%;
    background-color: #f7f7f7;
    width: ${(prop) => prop.width}px;
    height: ${(prop) => prop.height}px;
    clip-path: polygon(50% 0%, 40% 40%, 0 50%, 40% 60%, 50% 100%, 60% 60%, 100% 50%, 60% 40%);
    animation-name: ${homeBackgroundStarAnimation};
    animation-duration: 2s;
    animation-delay: ${(prop) => prop.animationDelay}s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    transform: scale(0);

    &[data-gold="true"] {
        background-color: gold;
    }
`;