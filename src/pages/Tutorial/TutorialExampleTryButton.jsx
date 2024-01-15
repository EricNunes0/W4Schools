import styled from "styled-components";

export const TutorialExampleTryButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: #5075d0;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1) translateX(5px);
    }
`;