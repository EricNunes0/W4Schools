import styled from "styled-components";

export const NavigationThemeButton = styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    background-color: transparent;
    background-image: url("/svgs/theme.svg");
    background-position: center;
    background-size: 60% 60%;
    background-repeat: no-repeat;
    border: unset;
    border-radius: 25px;
    margin-left: 10px;
    margin-right: 10px;
    filter: invert(1);
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 480px) {
        margin-left: unset;
        margin-right: unset;
    }
`;