import styled from "styled-components";

export const NavigationSearchBar = styled.input`
    position: relative;
    width: 160px;
    height: 35px;
    background-color: #fff;
    color: #202020;
    font-size: 16px;
    border: unset;
    border-radius: 25px;
    padding-left: 10px;
    padding-right: 40px;
    outline-color: transparent;
    outline-style: solid;
    outline-width: 3px;
    transition: all 0.3s;

    &:focus {
        outline-color: #1050a0;
        filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.3));
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;