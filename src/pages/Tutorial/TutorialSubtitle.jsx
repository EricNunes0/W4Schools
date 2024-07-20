import styled from "styled-components";

export const TutorialSubtitle = styled.h2`
    color: #f0f0f0;
    font-size: 24px;
    font-weight: 100;
    margin-bottom: 15px;
    text-align: left;
    transition: all 0.3s ease;

    @media screen and (max-width: 480px) {
        & {
            font-size: 16px;
        }
    }
`;