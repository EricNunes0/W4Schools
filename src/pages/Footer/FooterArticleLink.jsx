import styled from "styled-components";

export const FooterArticleLink = styled.a`
    display: block;
    width: 100%;
    color: #ffffff;
    font-size: 12px;
    text-align: left;
    text-decoration: none;
    transition: all 0.1s ease;

    &:hover {
        color: #ffffaa;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        text-align: center;
    }
`;