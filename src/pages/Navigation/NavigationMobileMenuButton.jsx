import styled from "styled-components";

export const NavigationMobileMenuButton = styled.button`
    position: relative;
    width: 100%;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 5% 10%;
    text-align: left;

    &:hover {
        background-color: #ffffff;
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: calc(50% - calc(20px / 2));
        right: 10%;
        background-color: #f0f0f0;
        clip-path: polygon(50% 70%, 12% 35%, 87% 35%);
        width: 20px;
        height: 20px;
    }
    &:hover {
        color: #101015;
    }
    &:hover::after {
        filter: invert(1);
    }
    &[data-closed="false"] {
        background-color: #ffffff;
        color: #101015;
    }
    &[data-closed="false"]::after {
        background-color: #101015;
        rotate: 180deg;
    }
    &[data-closed="false"]:hover::after {
        filter: unset;
    }
`;