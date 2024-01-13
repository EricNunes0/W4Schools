import styled from "styled-components";

const TutorialMoveButtonHover = 5;

export const TutorialMoveButton = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 45px;
    background-color: #5075d0;
    color: #ffffff;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;

    & > p {
        transform: translateX(0px);
        transition: all 0.3s ease;
    }

    &::after {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        background-color: #ffffff;
        clip-path: polygon(100% 0, 55% 50%, 100% 100%, 60% 100%, 15% 50%, 60% 0);
        opacity: 0;
        transform: translateX(5px);
        transition: all 0.3s ease;
    }
    &[data-move="prev"]::after {
        left: ${TutorialMoveButtonHover + (TutorialMoveButtonHover / 2)}px;
    }
    &[data-move="next"]::after {
        right: ${TutorialMoveButtonHover + (TutorialMoveButtonHover / 2)}px;
        rotate: 180deg;
    }

    &:hover {
        transform: scale(1.1);
    }
    &[data-move="prev"]:hover > p {
        transform: translateX(${TutorialMoveButtonHover}px);
    }
    &[data-move="next"]:hover > p {
        transform: translateX(-${TutorialMoveButtonHover}px);
    }
    &:hover::after {
        opacity: 1;
        transform: translateX(0px);
    }
`;