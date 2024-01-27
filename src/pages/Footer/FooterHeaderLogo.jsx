import styled from "styled-components";

export const FooterHeaderLogo = styled.a`
    width: 50px;
    height: 50px;
    background-image: url("/images/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: grayscale(1) brightness(3);
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(1.05);
    }
`;