import styled from "styled-components";

const FooterBottomLinkColor = "#ffffaa";

export const FooterBottomLink = styled.a`
    display: block;
    background-image: linear-gradient(90deg, transparent 50%, ${FooterBottomLinkColor} 51%);
    background-position: 0% 100%;
    background-size: 200% 2px;
    background-repeat: no-repeat;
    color: #f0f0f0;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background-position: 100% 100%; 
        color: ${FooterBottomLinkColor};
    }
`;