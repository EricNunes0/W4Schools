import styled from "styled-components";

export const TutorialExerciseInput = styled.input`
    width: ${(prop) => prop.width};
    font-family: "Hack";
    font-size: 16px;
    margin-left: calc(${(prop) => prop.spacesbefore} * 8px);
    margin-right: calc(${(prop) => prop.spacesafter} * 8px);
`;