import styled from "styled-components";

let circleSize = 20;
export const TutorialSectionsMapsMarksCircle = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(${(prop) => prop.y}px - ${circleSize / 2}px);
    left: calc(${(prop) => prop.x}px - ${circleSize / 2}px);
    width: ${circleSize}px;
    height: ${circleSize}px;
    background-color: transparent;
    border: #3060ff 2px solid;
    border-radius: 50%;

    &::before, &::after {
        position: absolute;
        content: "";
        display: block;
        width: 200px;
        height: 2px;
        background-color: ${(prop) => prop.color || "#f02020"};
    }
    &::after {
        rotate: 90deg;
    }

    & > p {
        transform: translate(35px, -20px);
        white-space: nowrap;
    }
`;