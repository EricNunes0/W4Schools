import styled from "styled-components";

export const TutorialExerciseMessage = styled.span`
    position: absolute;
    right: 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 100;
    border-radius: 3px;
    transition: all 0.3s ease;

    &[data-color="green"] {
        color: #20f020;
    }
    &[data-color="red"] {
        color: #f02020;
    }
`;