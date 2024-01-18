import styled, { keyframes } from "styled-components";

const NotFoundTitleAnimation = keyframes`
    0%, 50% {
        transform: translateY(-20px);
        opacity: 0;
    }
`;

export const NotFoundTitle = styled.h1`
    color: #000020;
    font-size: 28px;
    font-family: "Hack";
    opacity: 1;
    animation: ${NotFoundTitleAnimation} 2s ease-out;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;