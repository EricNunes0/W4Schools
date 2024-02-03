import styled, { keyframes } from "styled-components";

const warningAnimation = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(2px);
    }
`;

export const TutorialSectionsWarning = styled.div`
    position: relative;
    width: 90%;
    background-color: #ffa0a0!important;
    font-size: 14px;
    border-radius: 10px;
    margin: 25px 0;
    padding: 2% 5%;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #ff8080!important;
    }

    &::before {
        content: "Atenção:";
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
        width: 40px;
        height: 40px;
        background-image: url("/images/warning.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        filter: invert(0.1);
        transform-origin: center;
        animation: ${warningAnimation} 1.5s ease-in-out infinite;
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