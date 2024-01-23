import styled from "styled-components";

export const TutorialSectionsH6 = styled.h6`
    color: ${(prop) => prop.color || "#f0f0f0"}!important;
    display: block!important;
    font-size: ${(prop) => prop.fontsize || "16px"}!important;
    font-weight: 100!important;
    width: 100%!important;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: left!important;
    transition: all 0.3s ease !important;

    &[data-css="false"] {
        all: unset;
    }
`;