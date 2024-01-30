import styled from "styled-components";

export const TutorialSectionsOl = styled.ol`
    color: #f0f0f0;
    font-size: 14px;
    font-weight: 100;
    text-align: left;
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 15px;
    transition: all 0.3s ease;

    &[data-list="ol"] {
        list-style: decimal;
    }

    &[data-list="ul"] {
        list-style: disc;
    }

    & > li {
        margin: 5px 0;
    }
`;