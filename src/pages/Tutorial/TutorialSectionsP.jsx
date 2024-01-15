import styled from "styled-components";

export const TutorialSectionsP = styled.p`
    color: #f0f0f0;
    font-size: 14px;
    font-weight: 100;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 15px;
    transition: all 0.3s ease;

    &[data-bold="true"] {
        margin-top: 25px;
        font-weight: bold;
    }
`;