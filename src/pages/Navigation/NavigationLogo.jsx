import styled from "styled-components";

export const NavigationLogo = styled.a`
    background-image: url("../images/logo.png");
    background-size: 100% 100%;
    color: #ffffff;
    cursor: pointer;
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        filter: brightness(1.5);
    }
`;