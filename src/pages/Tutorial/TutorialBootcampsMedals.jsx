import styled, { keyframes } from "styled-components";

const medalAnimation = keyframes`
    0%, 100% {
        transform: rotate(-2deg);
    }
    50% {
        transform: rotate(2deg);
    }
`;

export const TutorialBootcampsMedals = styled.a`
    position: absolute;
    top: calc(100% - 180px);
    right: 30px;
    width: 180px;
    height: 248px;
    background-image: url("../images/bootcamp.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${medalAnimation} 2s ease-in-out infinite;
    transform-origin: top;

    &::before {
        content: "";
        position: absolute;
        top: 48px;
        display: flex;
        width: 70px;
        height: 70px;
        background-image: url(${(prop) => `"/svgs/languages/${prop.language}.svg"`});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 110% 110%;
        border: 4px outset #2030d0;
        border-radius: 50%;
        filter: invert(0.1);
    }

    @media screen and (max-width: 480px) {
        width: 60px;
        height: 82.5px;
        top: -20px;
        right: 0px;

        &::before {
            width: 26px;
            height: 26px;
            top: 12px;
        }
    }
`;