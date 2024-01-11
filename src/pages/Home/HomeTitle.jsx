import styled, { keyframes } from "styled-components";

export const HomeTitle = styled.h1`
    display: none;
    color: #ffffff;
    font-family: "Hack";
    font-size: 70px;
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;

    &[data-closed="false"] {
        display: block;
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;