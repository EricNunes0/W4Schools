import styled from "styled-components";

export const TutorialSectionsSpan = styled.span`
    color: #f0f0f0;
    font-size: 14px;
    font-weight: 100;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: all 0.3s ease;

    &[data-bold="true"] {
        margin-top: 25px;
        font-weight: bold;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;