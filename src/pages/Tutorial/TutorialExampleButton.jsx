import styled, { keyframes } from "styled-components";

export const TutorialExampleButton = styled.button`
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
        filter: brightness(1.1);
    }

    &::before {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        opacity: 0;
        transition: all 0.3s ease;
    }
    &[data-copy="true"]::before {
        content: "Copiado!";
        background-color: #2045a0;
        opacity: 1;
    }
`;