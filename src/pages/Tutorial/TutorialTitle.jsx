import styled from "styled-components";

export const TutorialTitle = styled.h1`
    color: #f0f0f0;
    font-size: 40px;
    font-weight: 100;
    text-align: left;
    transition: all 0.3s ease;

    @media screen and (max-width: 480px) {
        & {
            font-size: 24px;
        }
    }
`;