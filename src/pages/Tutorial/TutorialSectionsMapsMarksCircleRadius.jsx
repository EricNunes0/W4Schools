import styled from "styled-components";

export const TutorialSectionsMapsMarksCircleRadius = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(prop) => prop.radius * 2}px;
    height: ${(prop) => prop.radius * 2}px;
    background-color: transparent;
    border: #3060ff 2px solid;
    border-radius: 50%;

    & > p {
        transform: translate(calc(${(prop) => prop.radius}px / 1.25), calc(${(prop) => prop.radius * -1}px / 1.25));
    }
`;