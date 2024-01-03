import styled from "styled-components";

export const NavigationSearchButton = styled.button`
    position: absolute;
    right: 0px;
    background-color: transparent;
    background-image: url("svgs/search.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    width: 36px;
    height: 100%;
    font-size: 16px;
    border: unset;
    border-radius: 25px;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    
    @media screen and (max-width: 480px) {
        display: none;
    }
`;