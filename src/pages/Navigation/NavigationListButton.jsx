import styled from "styled-components";

export const NavigationListButton = styled.button`
    position: relative;
    width: 100px;
    height: 50px;
    background-color: transparent;
    color: #f0f0f0;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    transition: all 0.3s;

    &::before {
        content: "";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: #3040a0;
        transition: all 0.2s ease-out;
    }

    &::after {
        content: "";
        position: absolute;
        top: 30px;
        left: calc(100px / 2 - calc(20px / 2));
        display: block;
        background-color: #f0f0f0;
        clip-path: polygon(50% 70%, 12% 35%, 87% 35%);
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    &:hover::before {
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;