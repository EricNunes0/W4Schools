import styled from "styled-components";

export const NavigationMenuSearchBar = styled.input`
    width: 200px;
    height: 45px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-size: 14px;
    border-radius: 25px;
    padding-left: 25px;
    padding-right: 50px;
    outline-color: transparent;
    outline-style: solid;
    outline-width: 2px;
    transition: all 0.3s ease;

    &:focus {
        outline-color: #3040a0;
    }

    &::placeholder {
        color: #aaa;
        font-style: italic;
    }

    @media screen and (max-width: 480px) {
        width: 60%;
    }
`;