import styled, { keyframes } from "styled-components";

const NotFound404Animation = keyframes`
    0% {
        transform: translateY(-20px);
        opacity: 0;
    }
`;

export const NotFound404 = styled.h1`
    color: #000020;
    font-size: 140px;
    font-family: "Hack";
    opacity: 1;
    animation: ${NotFound404Animation} 1s ease-out;

    @media screen and (max-width: 480px) {
        font-size: 100px;
    }
`;