import styled from "styled-components";

export const TutorialSectionsColorBlock = styled.div`
    position: relative;
    background-color: transparent;
    color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 80px;
    border: 2px outset #aaa;
    border-radius: 5px;
    margin: 10px 0;

    &::before, &::after {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        background-image: url("/svgs/rectangle.svg");
        background-position: center;
        background-size: 100% 100%;
        filter: invert(1);
        opacity: 0;
        transition: all 0.3s ease;
    }
    &::before {
        top: 10px;
        right: 10px;
        transform: translate(-3px, 3px);
    }
    &::after {
        top: 7.5px;
        right: 7.5px;
        transform: translate(3px, -3px);
    }

    &:hover::before, &:hover::after {
        opacity: 1;
        transform: translate(0px);
    }

    &:active {
        border: 2px inset #aaa;
    }

    @media screen and (max-width: 768px) {
        width: 45%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;