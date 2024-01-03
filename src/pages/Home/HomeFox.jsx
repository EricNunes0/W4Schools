import styled, { keyframes } from "styled-components";

const homeFoxAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
`;

export const HomeFox = styled.span`
    position: absolute;
    top: 35%;
    left: 75%;
    width: 200px;
    height: 200px;
    background-image: url("images/fox.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation-name: ${homeFoxAnimation};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;