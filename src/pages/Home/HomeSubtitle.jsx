import styled from "styled-components";

export const HomeSubtitle = styled.h1`
    color: ${(prop) => prop.backgroundColor};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;