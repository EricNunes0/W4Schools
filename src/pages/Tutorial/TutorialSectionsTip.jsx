import styled, { keyframes } from "styled-components";

const tipAnimation = keyframes`
    0%, 100% {
        transform: translateY(-1px);
    }
    50% {
        transform: translateY(1px);
    }
`;

export const TutorialSectionsTip = styled.div`
    position: relative;
    width: 90%;
    background-color: #a0ffa0!important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    font-size: 14px;
    border-radius: 10px;
    margin: 25px 0;
    padding: 2% 5%;

    &::before {
        content: "Dica: ";
        font-weight: bold;
    }

    &::after {
        content: "";
        position: absolute;
        top: 5px;
        right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-image: url("/images/tip.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        filter: invert(0.1);
        transform-origin: top;
        animation: ${tipAnimation} 1.5s ease-in-out infinite;
    }

    & > a {
        color: #000
    }

    @media screen and (max-width: 480px) {
        & {
            font-size: 12px;
        }
        
        &::after {
            width: 30px;
            height: 30px;
        }
    }
`;