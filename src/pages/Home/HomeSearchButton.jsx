import styled from "styled-components";

export const HomeSearchButton = styled.button`
    background-color: #7080a0;
    background-image: url("svgs/search2.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40% 40%;
    width: ${(prop) => prop.width}px;
    height: ${(prop) => prop.height}px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

    @media screen and (max-width: 480px) {
        width: 80px;
    }
`;