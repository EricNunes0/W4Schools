import styled from "styled-components";

const FooterHeaderLinkColor = "#ffffaa";

export const FooterHeaderLink = styled.a`
    background-image: linear-gradient(90deg, transparent 50%, ${FooterHeaderLinkColor} 51%);
    background-position: 0% 100%;
    background-size: 200% 2px;
    background-repeat: no-repeat;
    color: ${FooterHeaderLinkColor};
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
        background-position: 100% 100%;
    }
`;