import styled from "styled-components";

export const TutorialSectionsColorResult = styled.div`
    position: relative;
    background-color: transparent;
    color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100px;
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

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;