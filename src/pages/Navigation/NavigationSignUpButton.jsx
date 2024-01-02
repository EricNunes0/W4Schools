import styled from "styled-components";

export const NavigationSignupButton = styled.button`
    position: absolute;
    z-index: 1;
    inset: 0;
    width: 90px;
    height: 40px;
    background-color: #3040a0;
    color: #ffffff;
    border: unset;
    border-radius: 25px;
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.3s;

    &:hover {
        background-color: #203090;
    }
`;