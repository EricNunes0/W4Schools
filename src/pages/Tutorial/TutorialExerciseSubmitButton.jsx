import styled, { keyframes } from "styled-components";

const wrongAnimation = keyframes`
    0%, 100% {
        rotate: -2deg;
    }
    50% {
        rotate: 2deg;
    }
`;

const beforeAnimation = keyframes`
    0%, 100% {
        background-position-x: 100%;
    }
    20%, 80% {
        color: #ffffff;
    }
    20%, 80% {
        background-position-x: 0%;
    }
`;

const afterAnimation = keyframes`
    0%, 100% {
        opacity: 0;
    }
    20%, 80% {
        opacity: 1;
    }
`;

export const TutorialExerciseSubmitButton = styled.button`
    position: relative;
    width: 100px;
    height: 40px;
    background-color: #5075d0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 100;
    border-radius: 3px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1) translateX(5px);
    }

    &::before {
        position: absolute;
        inset: 0;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: 200% 200%;
        color: transparent;
        border-radius: 3px;
    }
    &::after {
        content: "";
        position: absolute;
        top: 14px;
        right: 12px;
        width: 12px;
        height: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Resposta errada */
    &[data-wrong="true"] {
        pointer-events: none;
        animation: ${wrongAnimation} 200ms ease-in-out infinite;
        transition: all 0s ease;
    }
    &[data-wrong="true"]::before {
        content: "Errado!";
        background-image: linear-gradient(90deg, #f04040 50%, transparent 51%);
        padding-left: 20%;
        padding-right: 30%;
        filter: drop-shadow(0px 0px 5px #f04040);
        animation: ${beforeAnimation} ${(prop) => prop.wrongduration}s ease-out;
    }
    &[data-wrong="true"]::after {
        background-color: #ffffff;
        clip-path: polygon(10% 0, 0 10%, 40% 50%, 0 90%, 10% 100%, 50% 60%, 90% 100%, 100% 90%, 60% 50%, 100% 10%, 90% 0, 50% 40%);
        transition: all 0.3s ease;
        animation: ${afterAnimation} ${(prop) => prop.wrongduration}s ease-out;
    }

    /* Resposta correta */
    &[data-right="true"] {
        pointer-events: none;
        animation: ${wrongAnimation} 200ms ease-in-out infinite;
        transition: all 0s ease;
    }
    &[data-right="true"]::before {
        content: "Correto!";
        background-image: linear-gradient(90deg, #40f040 50%, transparent 51%);
        padding-left: 10%;
        padding-right: 40%;
        filter: drop-shadow(0px 0px 5px #40f040);
        animation: ${beforeAnimation} ${(prop) => prop.wrongduration}s ease-out;
    }
    &[data-right="true"]::after {
        background-color: #ffffff;
        clip-path: polygon(43% 78%, 100% 0, 100% 25%, 45% 100%, 45% 100%, 0 60%, 10% 50%);
        transition: all 0.3s ease;
        animation: ${afterAnimation} ${(prop) => prop.wrongduration}s ease-out;
    }

    &[data-wrong="true"]:hover , &[data-right="true"]:hover {
        transform: unset;
    }
`;