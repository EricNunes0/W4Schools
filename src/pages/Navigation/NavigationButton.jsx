import styled from "styled-components";

export const NavigationButton = styled.a`
    position: relative;
    background-color: #101015;
    color: #ffffff;
    cursor: pointer;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: unset;
    font-size: 14px;
    padding: 0;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all 0.3s ease;

    &:hover {
        background-color: #5075d0;
    }

    & > p, & > i {
        transition: all 0.3s ease;
    }
    & > i {
        opacity: 0;
        right: 5px;
        transform: translateX(-10px);
    }

    &:hover > p {
        transform: translateX(-10px);
    }
    &:hover > i {
        opacity: 1;
        transform: translateX(0px);
    }

`;