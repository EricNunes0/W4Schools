import styled, { keyframes } from "styled-components";

const noteAnimation = keyframes`
    0%, 100% {
        transform: rotate(-2deg);
    }
    50% {
        transform: rotate(2deg);
    }
`;

export const TutorialSectionsNote = styled.div`
    position: relative;
    width: 90%;
    background-color: #ffffa0!important;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    font-size: 14px;
    border-radius: 10px;
    margin: 25px 0;
    padding: 2% 5%;

    &::before {
        content: "Nota: ";
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
        background-image: url("/images/note.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        filter: invert(0.1);
        transform-origin: top;
        animation: ${noteAnimation} 1.5s ease-in-out infinite;
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