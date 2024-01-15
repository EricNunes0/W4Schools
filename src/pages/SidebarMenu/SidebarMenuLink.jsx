import styled from "styled-components";

export const SidebarMenuLink = styled.a`
    position: relative;
    width: 100%;
    height: 24px;
    color: #d0d0d0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    padding-left: 40px;
    text-align: left;
    text-decoration: none;
    transition: all 0.3s ease;
    white-space: nowrap;

    &::after {
        content: "";
        position: absolute;
        right: 20px;
        width: 24px;
        height: 24px;
        background-image: url("../svgs/nav-arrow.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 60% 60%;
        opacity: 0;
        transform: translateX(-5px);
        transition: all 0.3s ease;
    }

    &:hover {
        background-color: #5075d0;
    }
    &:hover::after {
        opacity: 1;
        transform: translateX(0px);
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
        height: 32px;
    };
`;