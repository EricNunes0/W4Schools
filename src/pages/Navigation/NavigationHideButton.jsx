import styled, { keyframes } from "styled-components";

const navigationHideButtonWidth = 40;

const NavigationHideButtonArrowAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-2px);
    }
`;

export const NavigationHideButton = styled.button`
    position: relative;
    background-color: #202020;
    width: ${navigationHideButtonWidth}px;
    height: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    top: -8px;
    left: calc(50% - ${navigationHideButtonWidth / 2}px);
    transition: all 0.3s ease;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("svgs/arrow.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 20px;
        animation-name: ${NavigationHideButtonArrowAnimation};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    &[data-closed="true"]::before {
        rotate: 180deg;
    }
`;