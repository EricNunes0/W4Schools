import styled from "styled-components";

export const TutorialSectionsListParagraph = styled.p`
    color: #f0f0f0;
    font-size: 14px;
    font-weight: ${(prop) => prop.fontweight || 100};

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;