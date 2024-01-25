import styled from "styled-components";

export const TutorialSectionsH4 = styled.h4`
    color: ${(prop) => prop.color || "#f0f0f0"}!important;
    display: block!important;
    font-size: 20px!important;
    font-weight: ${(prop) => prop.fontweight || "100"};
    width: 100%!important;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: left!important;
    transition: all 0.3s ease !important;

    &[data-css="false"] {
        all: unset;
    }
`;