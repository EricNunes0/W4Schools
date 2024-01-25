import styled from "styled-components";

export const TutorialSectionsSup = styled.sup`
    color: ${(prop) => prop.color || "#f0f0f0"}!important;
    font-size: ${(prop) => prop.fontsize || "smaller"}!important;
    font-weight: ${(prop) => prop.fontweight || "100"};
    vertical-align: super;
    width: 100%!important;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: left!important;
    transition: all 0.3s ease !important;

    &[data-css="false"] {
        all: unset;
    }
`;