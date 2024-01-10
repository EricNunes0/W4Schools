import styled from "styled-components";

export const NavigationMobileMenuLink = styled.a`
    position: relative;
    display: block;
    width: 100%;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 5% 10%;
    text-align: left;
    text-decoration: none;

    &:hover {
        background-color: #ffffff;
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: calc(50% - calc(20px / 2));
        right: 25%;
        background-image: url("svgs/link.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 20px;
        height: 20px;
    }
    &:hover {
        color: #101015;
    }
    &:hover::after {
        filter: invert(1);
    }
`;