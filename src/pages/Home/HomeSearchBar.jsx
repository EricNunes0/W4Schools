import styled from "styled-components";

export const HomeSearchBar = styled.input`
    width: ${(prop) => prop.width}px;
    height: ${(prop) => prop.height}px;
    font-size: 16px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding-left: 25px;
    padding-right: 25px;

    @media screen and (max-width: 480px) {
        width: 50%;
    }
`;