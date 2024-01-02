import styled from "styled-components";

export const NavigationButton = styled.button`
    background-color: #202020;
    color: #ffffff;
    cursor: pointer;
    width: 120px;
    height: 40px;
    border: unset;
    font-size: 14px;
    padding: 0;
    padding-left: 20px;
    padding-right: 20px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
        background-color: #101010;
    }
`;