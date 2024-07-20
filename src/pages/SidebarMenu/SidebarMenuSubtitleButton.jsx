import styled from "styled-components";

export const SidebarMenuSubtitleButton = styled.button`
    position: relative;
    width: 100%;
    height: 24px;
    background-color: transparent;
    color: #d0d0d0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    padding-left: calc(40px / 2);
    text-align: left;
    text-decoration: none;
    transition: all 0.3s ease;
    white-space: nowrap;

    &::after {
        content: "";
        position: absolute;
        right: calc(20px / 2);
        width: 24px;
        height: 24px;
        background-image: url("/svgs/nav-arrow.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 60% 60%;
        opacity: 0;
        transform: translateY(-3px) rotate(90deg);
        transition: all 0.3s ease;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    &:hover::after {
        opacity: 1;
        transform: translateY(0px) rotate(90deg);
    }
    &[data-active="true"] {
        background-color: rgba(255, 255, 255, 0.2);
    }

    /* Menu aberto */
    &[data-active="true"][data-closed="true"] {
        background-color: #5075d0;
    }
    &[data-closed="false"]::after {
        opacity: 1;
        transform: translateY(0px) rotate(270deg);
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        height: 32px;
    };
`;